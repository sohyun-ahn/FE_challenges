const express = require("express"); // middleware로 이루어져있음
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const port = 4000;
const secretText = "superSecret";
const refreshSecretText = "superSuperSecret";

const posts = [
  {
    username: "ash",
    title: "Post 1",
  },
  {
    username: "ahn",
    title: "Post 2",
  },
];

const refreshTokens = []; // 주로 DB에 저장됨

function authMiddleware(req, res, next) {
  // middleware를 만들어서 어떠한 route가 왔을때에도 사용할 수 있게 함

  // token을 request headers에서 가져오기
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }
  const token = authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401); // client error 보내기

  // token이 유효한지 확인
  jwt.verify(token, secretText, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" }); // client 잘못이기에

    req.user = user;
    next(); // 다음 middleware로 넘어가기 위해
  });
}

// 1. express.json()(json 미들웨어는 req.body로 들어오는 것 분석 가능)이라는 미들웨어 등록
app.use(express.json());

app.use(cookieParser());

// express app 실행시키기
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// 2. login api 생성,
// client가 post로 정보를 보내오면, userInfo를 포함하는 token 생성
app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  // accessToken resource에 접근하기 위해 사용되는 토큰
  // refreshToken 기존에 갖고 있던 accessToken이 만료되었을때 accessToken을 다시 발급받기 위해 사용, 주로 DB에 넣어둠
  // 유효기간 추가 {expiresIn: time..}

  const accessToken = jwt.sign(user, secretText, { expiresIn: "30s" }); // sign에 payload + secretText를 적어줌
  const refreshToken = jwt.sign(user, refreshSecretText, { expiresIn: "1d" });

  refreshTokens.push(refreshToken);
  // refreshToken을 Cookie에 넣어주기
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  }); // key: 'jwt', val, httpOnly: 해킹어렵게 하는 조건
  res.json({ accessToken: accessToken }); // response에 보내주기
});

app.get("/posts", authMiddleware, (req, res) => {
  // authMiddleware를 통과해야지만 실행
  res.json(posts); // client에 response로 posts보냄
});

app.get("/refresh", (req, res) => {
  // cookie는 따로 요청하지 않아도 쿠키내용들이 같이 전달됨.

  // req.body 받으려면 => express.json 미들웨어 이용해서 => body => parsing 처리 후 => req.body 받기
  // cookies => parsing => req.cookie 가능
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);

  const refreshToken = cookies.jwt; // cookie-parser 덕에 가져올 수 있음
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403); // refreshToken이 데이터베이스에 있는 토큰인지 확인

  // token이 유효한 토큰인지 확인
  jwt.verify(refreshToken, refreshSecretText, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    // 새로운 access token 생성
    const accessToken = jwt.sign({ name: user.name }, secretText, {
      expiresIn: "30s",
    });
    res.json({ accessToken: accessToken });
  });
});
