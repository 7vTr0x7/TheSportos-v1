import express from "express";
import {
  addContactUs,
  getBanner,
  getBlogs,
  getFeaturedPlayer,
  getLeagues,
  getMatches,
  getPlayers,
  getSponsor,
  getStandings,
  getStarPerformers,
  getTrophies,
} from "../controllers/user.js";

const router = express.Router();

router.get("/matches", getMatches);
router.get("/banner", getBanner);
router.get("/sponsor", getSponsor);
router.get("/star-performers", getStarPerformers);
router.get("/trophies", getTrophies);
router.get("/featured-player", getFeaturedPlayer);
router.get("/players", getPlayers);
router.get("/blogs", getBlogs);
router.get("/standings", getStandings);
router.get("/leagues", getLeagues);

router.post("/contact-us", addContactUs);

export default router;
