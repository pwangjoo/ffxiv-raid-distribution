import { writeCookie } from "#util/auth";
import express from "express";
// import bcrypt from "bcrypt";

const router = express.Router();

/**
 * GET: 로그인
 */
router.get("/", async (req, res, next) => {
  const { user } = req.session || {};
  if (user) {
    res.redirect("/");
  } else {
    res.render("pages/login", {
      layout: "layouts/layout",
      title: "로그인",
    });
  }
});

/**
 * POST: 로그인
 */
router.post("/", async (req, res, next) => {
  const { email, password } = req.body;
  const user = {
    id: email,
    name: "이름",
  };

  writeCookie(res, user);
  res.redirect("/");
});

export default router;
