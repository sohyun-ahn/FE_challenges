// FRONTEND SERVER
const http = require("http");

// 1. 서버를 만든다. create
const server = http.createServer((req, res) => {
  //요청이 실제로 들어왔을 때에 실행할 함수를 적음
  // html 문서 보여줌
  res.write(`
  <html>
  <head>
  <meta charset="utf-8" >
  <title>Node를 이용해 서버 만들기</title>
  </head>
  <body>
  <h1 style='color: "red"'>내가 만든 프론트엔드 서버!</h1>
  </body>`);
  res.end();
});

// 2. 듣는다 = 사용한다 = 기다린다 . listen
server.listen(5555, () => {
  console.log("Server is running on port 5555");
});
