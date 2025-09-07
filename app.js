import express from "express";

// init
const app = express();

// port
const PORT = process.env.PORT || 8080;
app.set("port", PORT);

// route
app.get("/", (req, res) => {
  res.send("Hello, Express");
});

// start
app.listen(app.get("port"), () => {
  console.log("Listening on PORT " + app.get("port") + " ...");
});
