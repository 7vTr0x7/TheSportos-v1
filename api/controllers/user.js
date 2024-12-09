import { Banner } from "../models/Banner.model.js";
import { Blog } from "../models/Blogs.model.js";
import { FeaturedPlayer } from "../models/FeaturedPlayer.model.js";
import { League } from "../models/League.model.js";
import { Player } from "../models/Player.model.js";
import { Sponsor } from "../models/Sponsor.model.js";
import { Standings } from "../models/Standings.model.js";
import { StarPerformers } from "../models/StarPerformers.model.js";
import { Trophies } from "../models/Trophies.model.js";
import { User } from "../models/User.model.js";
import { Match } from "./../models/Match.model.js";

export const getMatches = async (req, res) => {
  try {
    const matches = await Match.find();
    if (matches.length > 0) {
      res.json({
        success: true,
        matches,
      });
    } else {
      res.status(404).json({
        success: true,
        message: " matches not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get  matches",
      error: error.message,
    });
  }
};

export const getBanner = async (req, res) => {
  try {
    const banner = await Banner.find();
    if (banner.length > 0) {
      res.json({
        success: true,
        banner,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "Banner not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add Banner",
      error: error.message,
    });
  }
};

export const getSponsor = async (req, res) => {
  try {
    const sponsor = await Sponsor.find();
    if (sponsor.length > 0) {
      res.json({
        success: true,
        sponsor,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "sponsor  not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add sponsor",
      error: error.message,
    });
  }
};

export const getStarPerformers = async (req, res) => {
  try {
    const starPerformers = await StarPerformers.find();
    if (starPerformers.length > 0) {
      res.json({
        success: true,
        starPerformers,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "starPerformers  not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add starPerformers",
      error: error.message,
    });
  }
};

export const getTrophies = async (req, res) => {
  try {
    const trophies = await Trophies.find();
    if (trophies.length > 0) {
      res.json({
        success: true,
        trophies,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "trophies  not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add trophies",
      error: error.message,
    });
  }
};

export const getFeaturedPlayer = async (req, res) => {
  try {
    const players = await FeaturedPlayer.find();
    if (players.length > 0) {
      res.json({
        success: true,
        players,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "players  not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add players",
      error: error.message,
    });
  }
};

export const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    if (players.length > 0) {
      res.json({
        success: true,
        players,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "players  not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add players",
      error: error.message,
    });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs.length > 0) {
      res.json({
        success: true,
        blogs,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "blogs  not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add blogs",
      error: error.message,
    });
  }
};

export const getStandings = async (req, res) => {
  try {
    const standingsData = await Standings.find();
    if (standingsData.length > 0) {
      res.json({
        success: true,
        standingsData,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "standingsData  not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add standingsData",
      error: error.message,
    });
  }
};

export const getLeagues = async (req, res) => {
  try {
    const leagues = await League.find();
    if (leagues.length > 0) {
      res.json({
        success: true,
        leagues,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "leagues  not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add leagues",
      error: error.message,
    });
  }
};

export const addContactUs = async (req, res) => {
  try {
    const user = await User.create(req.body);
    if (user) {
      res.json({
        success: true,
        user,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "user  not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add user",
      error: error.message,
    });
  }
};
