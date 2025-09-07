import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("pages/bis", {
    layout: "layouts/layout",
    title: "BIS",
  });
});

export default router;
