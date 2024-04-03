const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // form안의 정보를 분석(parsing)해서 value를 얻기위해 적어야함

// view engine setup
// ejs(template engine)을 사용한다고 express에 설정을 해줘야함
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // ejs 파일들이 들어갈 폴더경로 설정

const port = 4000;
app.listen(port, () => {
  console.log("listening on port", port);
});

// mongodb username: ash, password: qwer1234 로 설정
mongoose
  .connect(
    `mongodb+srv://ash:qwer1234@cluster0.bil11i8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/static/", express.static(path.join(__dirname, "public")));

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});
