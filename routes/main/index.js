import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("pages/main", {
    layout: "layouts/layout",
    title: "홈페이지",
  });
});

export default router;
