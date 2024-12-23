const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("blogs");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
