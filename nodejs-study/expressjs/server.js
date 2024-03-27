const express = require("express");

const PORT = 4000;

const users = [
  {
    id: 0,
    name: "Jack",
  },
  {
    id: 1,
    name: "Jill",
  },
];

const app = express();

app.use((req, res, next) => {
  const start = Data.now();
  console.log(`start: ${req.method} ${req.url}`);
  next(); // 이걸 해줘야 다음 middleware로 넘어감
  const diffTime = Date.now() - start;
  console.log(`end: ${req.method} ${req.url} ${diffTime}ms`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users[userId];

  if (user) {
    res.status(200).json(user);
  } else {
    res.sendStatus(404).json({ error: "User not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
