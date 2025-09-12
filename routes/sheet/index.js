import express from "express";

const router = express.Router();

/**
 * GET: 프로젝트 시트 (임시)
 */
router.get("/", async (req, res, next) => {
  const { user } = req.session || {};
  res.render("pages/sheet", {
    layout: "layouts/layout",
    title: "신규",
  });
});

/**
 * GET: 저장된 프로젝트 시트
 */
router.get("/:id", async (req, res, next) => {
  const { user } = req.session || {};
  const { id } = req.params || {};

  if (id == "1234") {
    res.render("pages/404", {
      layout: "layouts/error",
    });
  } else {
    res.render("pages/sheet", {
      layout: "layouts/layout",
      title: id,
    });
  }
});

export default router;
