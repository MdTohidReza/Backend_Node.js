import express from "express";
import { addSale, getLeaderboard } from "../controllers/salesController.js";

const router = express.Router();

// POST /api/sales -> Add a new sale
router.post("/sales", addSale);

// GET /api/leaderboard -> Get leaderboard
router.get("/leaderboard", getLeaderboard);

export default router;
