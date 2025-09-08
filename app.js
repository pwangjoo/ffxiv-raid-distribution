import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import router from "#routes/index";

// init
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const env = process.env.NODE_ENV || "local";
dotenv.config({ path: `.env.${env}` });
const app = express();

// settings
app.set("port", process.env.PORT);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 },
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);

// router
app.use("/", router);

// start
app.listen(app.get("port"), () => {
  console.log(`Listening on http://localhost:${app.get("port")} ...`);
});
