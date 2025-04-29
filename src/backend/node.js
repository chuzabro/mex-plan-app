const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/language", (req, res) => {
  const { language } = req.body;
  console.log(`Language received: ${language}`);
  res.status(200).send({ message: "Language received successfully!" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});