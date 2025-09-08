import express from "express";
import { destroySession } from "#util/auth";

const router = express.Router();

/**
 * GET: 로그아웃
 */
router.get("/", async (req, res, next) => {
  destroySession(req, res, () => res.redirect("/"));
});

export default router;
