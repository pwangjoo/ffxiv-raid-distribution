import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/index", {
    name: "Noru",
    title: "홈페이지",
    description: "메인 페이지",
    layout: "layouts/layout",
  });
});

export default router;
