const http = require("http");
const PORT = 4000;
const targetObject = {
  a: "a",
  b: "b",
};

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/home") {
    req.on("data", (data) => {
      console.log("data", data);
      const stringfiedData = data.toString();
      console.log("stringfiedData", stringfiedData);
      Object.assign(targetObject, JSON.parse(stringfiedData));
    });
  } else {
    if (req.url === "/home") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      // ===
      // res.writeHead(200, {
      //     'Content-Type': 'application/json'
      // })
      res.end(JSON.stringify(targetObject));
    } else if (req.url === "/about") {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<body>");
      res.write("<h1>About Page</h1>");
      res.write("</body>");
      res.write("</html>");
      res.end();
    } else {
      res.statusCode = 404;
      res.end();
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
