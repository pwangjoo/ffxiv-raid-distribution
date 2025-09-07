import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import expressLayouts from "express-ejs-layouts";
import router from "./routes/index.js";

// init
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// settings
app.set("port", process.env.PORT || 8080);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routes
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);
app.use("/", router);

// start
app.listen(app.get("port"), () => {
  console.log(`Listening on http://localhost:${app.get("port")} ...`);
});
