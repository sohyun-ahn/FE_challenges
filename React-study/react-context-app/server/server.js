const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(express.json());

const port = 4000;
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// use middleware to serve static images
app.use(express.static("public"));

// read data from file
const travelDataRaw = fs.readFileSync("./travel.json", "utf-8");
const travelData = JSON.parse(travelDataRaw);

app.get("/products", (req, res) => {
  res.json(travelData.countries);
});

app.get("/options", (req, res) => {
  res.json(travelData.options);
});

let orderHistory = [];
//post로 요청이 왔을때, [orderDatas, totalPrices] 저장하기
app.post("/order", (req, res) => {
  const orderNumber = Math.floor(Math.random() * 1000000);
  let order = { price: req.body[1].all, orderNumber };
  orderHistory.push(order);
  res.status(201).json(orderHistory);
});

if (require.main === module) {
  app.listen(port, () => console.log(`listening on port ${port}`));
}

module.exports = app;
