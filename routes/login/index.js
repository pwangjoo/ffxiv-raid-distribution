import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("pages/login", {
    layout: "layouts/layout",
  });
});

export default router;
