const express = require("express"); // common js 방식
const bodyParser = require("body-parser"); // req.body 받기 위해
const bcrypt = require("bcrypt"); // bcrypt : 단방향 암호화 해줌(복호화 불가능함!)
const jwt = require("jsonwebtoken"); // jsonwebtoken 은 위조가 불가능한 토큰, 암호화가 아님(중요한 걸 넣으면 안됨), 내용을 모두가 까볼 수 있음, (전부를 암호화해주진 않고)

const app = express(); // server !
const port = 5555;
const jsonParser = bodyParser.json();
const jwtSecretKey = "EbaV1lrVssxUEsE5RrYlgzKaXJ-CVal0Nhig47ME"; // npx nanoid 로 만든 키,  SecretKey (jwt.sign할 때 필요)

const users = [];

app.use(jsonParser);

// http 통신에서 사용하는 메서드들 // (req, res) 요청이 오면 응답을 보내준다.
// app.get("/", (req, res) => {
//   res.send("/, GET");
// });

// 유저를 생성할떄 주로 쓰는 endpoint : /users/signup
app.post("/users/sign-up", (req, res) => {
  const { email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, 12);
  const user = { email, encryptedPassword };

  // 회원가입
  users.push(user);

  // 토큰 발행
  const accessToken = jwt.sign({ email }, jwtSecretKey, { expiresIn: "5m" }); // secretKey를 넣어줘야함, expireIn: 만료시간
  res.json({ accessToken });

  //   users.push(req.body); // npm install body-parser 해야 req.body 받을 수 있음
  //   res.send("회원가입 성공"); // send는 text만 보낼 수 있음

  console.log(users);
});

app.post("/users/log-in", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);

  if (!user) return res.send("해당 이메일로 가입한 회원이 없습니다.");

  if (!bcrypt.compareSync(password, user.encryptedPassword))
    //bcrypt로 암호화된 비번
    return res.send("비밀번호가 일치하지 않습니다.");

  //   if (user.password !== password)
  //     return res.send("비밀번호가 일치하지 않습니다.");

  //   res.send("로그인이 완료되었습니다.");

  // 토큰 발행
  const accessToken = jwt.sign({ email }, jwtSecretKey, { expiresIn: "5m" }); // secretKey를 넣어줘야함, expireIn: 만료시간
  res.json({ accessToken });
});

app.get("/my-profile", (req, res) => {
  const accessToken = req.headers.authorization.split("Bearer ")[1];

  try {
    const { email } = jwt.verify(accessToken, jwtSecretKey);
    const user = users.find((user) => user.email === email);
    res.json(user);
  } catch {
    res.send("accessToken을 잘못 가져오셨어요");
  }
});

// app.put()
// app.delete()
// app.patch()
// app.options()
// app.head()
// 하나의 url에 대해서 여러가지 방식으로 요청을 보낼 수 없다면,
// url 하나당 하나의 요청만 처리할 수 있을 것.
// http통신을 이용하면 url 하나당 위의 다양한 메서드들로 구분해서 요청받기 가능

app.listen(port, () => {
  console.log(`서버가 ${port}포트에서 듣고 있습니다...`);
});
