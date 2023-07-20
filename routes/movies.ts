import Router from "express";
const router = Router();
const db = require("../database/models");

router.get("/", async (req, res) => {
  let movie = await db.Movies.findAll();
  res.json({ ...movie });
});

export default router;
