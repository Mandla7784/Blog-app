const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.send("Hello from sever");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
