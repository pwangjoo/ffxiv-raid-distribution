import express from "express";

const router = express.Router();

/**
 * GET: BIS
 */
router.get("/", async (req, res, next) => {
  const { user } = req.session || {};
  res.render("pages/bis", {
    layout: "layouts/layout",
    title: "BIS",
  });
});

export default router;
