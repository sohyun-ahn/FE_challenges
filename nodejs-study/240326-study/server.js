// Server란?
// 요청에 응답해주는 것이 서버다.
// 요청을 기다리고 있다가 요청이 오면 응답을 돌려주는 것이 서버다.
// http 통신 -> 요청과 응답의 사이클

// >node --watch server
// 하면, 코드가 변할때마다 변경사항 바로 보여줌

// node가 내장하고 있는 http library 사용
// import : react, next에서 알아서 require로 바꿔줌
// require : node 환경에서 다른 라이브러리를 불러 올 때 쓰는 방법
// 1. 서버를 만든다. create
// 2. 듣는다 = 사용한다 = 기다린다 . listen
const http = require("http");

// 1. 서버를 만든다. create
const server = http.createServer((req, res) => {
  //요청이 실제로 들어왔을 때에 실행할 함수를 적음
  res.writeHead(200);
  res.write("Hello World");
  res.end();
});

// 2. 듣는다 = 사용한다 = 기다린다 . listen
server.listen(5555, () => {
  console.log("Server is running on port 5555");
});
