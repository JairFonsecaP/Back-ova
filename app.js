const express = require("express");
const app = express();
const router = require("./routes/index");
const path = require("path");
const port = 3030;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", router);
app.get("/", (req, res) => {
  req.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.set("port", process.env.PORT || port);

if (process.env.NODE_ENV !== "test") {
  app.listen(app.get("port"), () => {
    console.log("Server on port " + app.get("port"));
  });
}

module.exports = app;
