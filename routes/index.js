import express from "express";
import main from "./main/index.js";
import login from "./login/index.js";
import bis from "./bis/index.js";

const router = express.Router();

// routes
router.use("/", main);
router.use("/login", login);
router.use("/bis", bis);

// error
router.use((req, res, next) => {
  res.redirect("/");
});

export default router;
