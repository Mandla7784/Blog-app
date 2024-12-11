const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (request, response) => {
  response.send("Hello from sever");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
