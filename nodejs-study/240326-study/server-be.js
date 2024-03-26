// node --watch server-be.js
const http = require("http");
const posts = require("./posts.json");
const users = require("./users.json"); // json placeholder site에서 가져옴

// 중요한 것은 db에 저장하고
// 빠르게 필요한 것은 redis에도 저장하는 시스템을 요즘 많이 씀
// Redis : 메모리에 저장 (그렇기때문에 프로세서가 죽으면 사라짐)

console.log(posts);
console.log(typeof posts); // object

// 1. 서버를 만든다. create
const server = http.createServer((req, res) => {
  // 요청이 실제로 들어왔을 때에 실행할 함수를 적음

  // 요청 = req 요청에 대한 다양한 정보를 갖고 있는 객체
  // 응답 = res 우리가 응답을 보낼 건데, 거기에 필요한 다양한 메소드들이 들어있음

  // 요청이 들어올 때, 경로에 대해서 다른 결 보여주려면,
  // 우리는 조건문 으로 할 것임

  // unique 한 값을 빼오는 것 => restful api

  res.writeHead(200, { "Content-Type": "application/json" });

  if (req.url === "/") {
    // Health-CHECK  서버가 살아있는지 확인하기
    res.write("OK");
  } else if (req.url === "/posts") {
    res.write(JSON.stringify(posts)); // object 이기에 string으로 변환해줘야함
  } else if (req.url === "/users") {
    res.write(JSON.stringify(users)); // object 이기에 string으로 변환해줘야함
  } else if (/\/users\/\d+/.test(req.url)) {
    // chat GPT를 이용하여 regex 정규식 코드 짜기
    const userId = Number(req.url.split("/users/")[1]); // userId만 뽑기
    const user = users.find((user) => user.id === userId); //
    console.log(userId);
    console.log(user);
    res.write("GOOD");
    res.write(JSON.stringify(users));
  } else {
    res.write('{"name": "mangom", "age": "20"}');
  }

  res.end();
});

// 2. 듣는다 = 사용한다 = 기다린다 . listen
server.listen(5555, () => {
  console.log("Server is running on port 5555");
});
