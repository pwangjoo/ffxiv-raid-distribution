import express from "express";
import { middleware } from "#util/auth";

import main from "./main/index.js";
import { login, logout } from "./auth/index.js";
import sheet from "./sheet/index.js";

const router = express.Router();

router.use(middleware);

// routes
router.use("/", main);
router.use("/login", login);
router.use("/logout", logout);
router.use("/v1", sheet);

// 404 NOT FOUND
router.use((req, res, next) => {
  res.redirect("/");
});

export default router;
