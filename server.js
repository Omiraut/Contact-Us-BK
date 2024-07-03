//npx sequelize-cli model:generate --name
// User --attributes firstName:string,lastName:string,email:string
const express = require("express");
const app = express();
const db = require("./models");
port = 3002;
const router = require("./routes/router");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("OK");
});
app.use("/", router);

db.sequelize.sync().then((req) => {
  app.listen(port, () => {
    console.log("app is running on Port NO :-", port);
  });
});
