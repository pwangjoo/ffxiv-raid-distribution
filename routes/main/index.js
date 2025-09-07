import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("pages/main", {
    layout: "layouts/layout",
  });
});

export default router;
