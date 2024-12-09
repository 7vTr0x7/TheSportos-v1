import express from "express";
import {
  addBanner,
  addBlog,
  addFeaturedPlayer,
  addLeague,
  addMatch,
  addMultipleBlogs,
  addMultipleLeagues,
  addMultipleMatches,
  addMultiplePlayers,
  addMultipleStandings,
  addMultipleStarPerformers,
  addMultipleTrophies,
  addPlayer,
  addSponsor,
  addStanding,
  addStarPerformer,
  addTrophy,
  adminLogin,
  deleteBanner,
  deleteFeaturedPlayer,
  deleteLeague,
  deleteMatch,
  deletePlayer,
  deleteSponsor,
  deleteTrophy,
  getUsers,
  registerAdmin,
  updateBanner,
  updateFeaturePlayer,
  updateLeague,
  updateMatch,
  updatePlayer,
  updateSponsor,
  updateTrophy,
} from "../controllers/admin.js";
// import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", adminLogin);

router.post("/add/match", addMatch);
router.post("/add/multiple/matches", addMultipleMatches);

router.delete("/delete/match/:id", deleteMatch);
router.put("/update/match/:id", updateMatch);

router.post("/add/star-performers", addStarPerformer);
router.post("/add/multiple/star-performers", addMultipleStarPerformers);

router.post("/add/trophy", addTrophy);
router.put("/update/trophy/:id", updateTrophy);
router.delete("/delete/trophy/:id", deleteTrophy);
router.post("/add/multiple/trophies", addMultipleTrophies);

router.post("/add/banner", addBanner);
router.put("/update/banner/:id", updateBanner);
router.delete("/delete/banner/:id", deleteBanner);

router.post("/add/sponsor", addSponsor);
router.put("/update/sponsor/:id", updateSponsor);
router.delete("/delete/sponsor/:id", deleteSponsor);

router.post("/add/featured-player", addFeaturedPlayer);
router.put("/update/featured-player/:id", updateFeaturePlayer);
router.delete("/delete/featured-player/:id", deleteFeaturedPlayer);

router.post("/add/player", addPlayer);
router.put("/update/player/:id", updatePlayer);
router.delete("/delete/player/:id", deletePlayer);
router.post("/add/multiple/players", addMultiplePlayers);

router.post("/add/blog", addBlog);
router.post("/add/multiple/blogs", addMultipleBlogs);

router.post("/add/standing", addStanding);
router.post("/add/multiple/standings", addMultipleStandings);

router.post("/add/league", addLeague);
router.put("/update/league/:id", updateLeague);
router.delete("/delete/league/:id", deleteLeague);
router.post("/add/multiple/leagues", addMultipleLeagues);

router.get("/get/all/users", getUsers);

export default router;
