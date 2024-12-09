import bcrypt from "bcrypt";
import { Admin } from "../models/AdminModel.model.js";
import { Match } from "../models/Match.model.js";
import { sendCookies } from "../utils/features.js";
import { Banner } from "../models/Banner.model.js";
import { Sponsor } from "../models/Sponsor.model.js";
import { StarPerformers } from "../models/StarPerformers.model.js";
import { Trophies } from "../models/Trophies.model.js";
import { FeaturedPlayer } from "../models/FeaturedPlayer.model.js";
import { Player } from "../models/Player.model.js";
import { Blog } from "../models/Blogs.model.js";
import { Standings } from "../models/Standings.model.js";
import { League } from "../models/League.model.js";
import { User } from "../models/User.model.js";

export const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let admin = await Admin.findOne({ email });
    if (admin) {
      res.status(404).json({ success: false, message: "admin already exists" });
    } else {
      const hashedPass = await bcrypt.hash(password, 10);

      admin = await Admin.create({ email, password: hashedPass });
      sendCookies(admin, res, "Register Successfully");
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to register Admin",
      error: error.message,
    });
  }
};

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email }).select("+password");

    if (!admin) {
      res
        .status(404)
        .json({ success: false, message: "Invalid Email or Password" });
    } else {
      const isMatch = await bcrypt.compare(password, admin.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid Email or Password" });
      } else {
        sendCookies(admin, res, "Login Successfully");
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to login Admin",
      error: error.message,
    });
  }
};

export const addMatch = async (req, res) => {
  try {
    const match = await Match.create(req.body);
    if (match) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        match,
      });
    } else {
      res.status(404).json({
        success: true,
        message: " match not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add  match",
      error: error.message,
    });
  }
};

export const addMultipleMatches = async (req, res) => {
  try {
    const matches = await Match.insertMany(req.body);
    if (matches.length > 0) {
      req.app.get("io").emit("dataUpdated");

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
      message: "Failed to add  matches",
      error: error.message,
    });
  }
};

export const addBanner = async (req, res) => {
  try {
    const banner = await Banner.create(req.body);
    if (banner) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        banner,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "Banner match not found",
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

export const addSponsor = async (req, res) => {
  try {
    const sponsor = await Sponsor.create(req.body);
    if (sponsor) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        sponsor,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "sponsor match not found",
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

export const addStarPerformer = async (req, res) => {
  try {
    const starPerformer = await StarPerformers.create(req.body);
    if (starPerformer) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        starPerformer,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "starPerformer not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add starPerformer ",
      error: error.message,
    });
  }
};

export const addMultipleStarPerformers = async (req, res) => {
  try {
    const starPerformers = await StarPerformers.insertMany(req.body);
    if (starPerformers.length > 0) {
      req.app.get("io").emit("dataUpdated");

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

export const addTrophy = async (req, res) => {
  try {
    const trophy = await Trophies.create(req.body);
    if (trophy) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        trophy,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "trophy not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add trophy ",
      error: error.message,
    });
  }
};

export const addMultipleTrophies = async (req, res) => {
  try {
    const trophies = await Trophies.insertMany(req.body);
    if (trophies.length > 0) {
      req.app.get("io").emit("dataUpdated");

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

export const addFeaturedPlayer = async (req, res) => {
  try {
    const player = await FeaturedPlayer.create(req.body);
    if (player) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        player,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "player not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add player ",
      error: error.message,
    });
  }
};

export const addMultiplePlayers = async (req, res) => {
  try {
    const players = await Player.insertMany(req.body);
    if (players.length > 0) {
      req.app.get("io").emit("dataUpdated");

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

export const addPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body);
    if (player) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        player,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "player not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add player ",
      error: error.message,
    });
  }
};

export const addMultipleBlogs = async (req, res) => {
  try {
    const blogs = await Blog.insertMany(req.body);
    if (blogs.length > 0) {
      req.app.get("io").emit("dataUpdated");

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

export const addBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    if (blog) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        blog,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "blog not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add blog ",
      error: error.message,
    });
  }
};

export const addMultipleStandings = async (req, res) => {
  try {
    const standingsData = await Standings.insertMany(req.body);
    if (standingsData.length > 0) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        standingsData,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "StandingsData  not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add StandingsData",
      error: error.message,
    });
  }
};

export const addStanding = async (req, res) => {
  try {
    const Standing = await Standings.create(req.body);
    if (Standing) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        Standing,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "Standing not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add Standing ",
      error: error.message,
    });
  }
};

export const addMultipleLeagues = async (req, res) => {
  try {
    const leagues = await League.insertMany(req.body);
    if (leagues.length > 0) {
      req.app.get("io").emit("dataUpdated");

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

export const addLeague = async (req, res) => {
  try {
    const league = await League.create(req.body);
    if (league) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        league,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "league not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add league ",
      error: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length > 0) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        users,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "users not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add users ",
      error: error.message,
    });
  }
};

export const deleteMatch = async (req, res) => {
  try {
    const match = await Match.findByIdAndDelete(req.params.id);
    if (match) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        match,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "match not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete match ",
      error: error.message,
    });
  }
};
export const deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);
    if (player) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        player,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "player not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete player ",
      error: error.message,
    });
  }
};
export const deleteBanner = async (req, res) => {
  try {
    const banner = await Banner.findByIdAndDelete(req.params.id);
    if (banner) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        banner,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "banner not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete banner ",
      error: error.message,
    });
  }
};
export const deleteSponsor = async (req, res) => {
  try {
    const sponsor = await Sponsor.findByIdAndDelete(req.params.id);
    if (sponsor) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        sponsor,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "sponsor not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete sponsor ",
      error: error.message,
    });
  }
};
export const deleteTrophy = async (req, res) => {
  try {
    const trophy = await Trophies.findByIdAndDelete(req.params.id);
    if (trophy) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        trophy,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "trophy not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete trophy ",
      error: error.message,
    });
  }
};

export const deleteFeaturedPlayer = async (req, res) => {
  try {
    const featuredPlayer = await FeaturedPlayer.findByIdAndDelete(
      req.params.id
    );
    if (featuredPlayer) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        featuredPlayer,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "featuredPlayer not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete featuredPlayer ",
      error: error.message,
    });
  }
};
export const deleteLeague = async (req, res) => {
  try {
    const league = await League.findByIdAndDelete(req.params.id);
    if (league) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        league,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "league not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete league ",
      error: error.message,
    });
  }
};

export const updateMatch = async (req, res) => {
  try {
    const match = await Match.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (match) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        match,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "match not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update match ",
      error: error.message,
    });
  }
};

export const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (player) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        player,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "player not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update player ",
      error: error.message,
    });
  }
};

export const updateBanner = async (req, res) => {
  try {
    const banner = await Banner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (banner) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        banner,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "banner not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update banner ",
      error: error.message,
    });
  }
};
export const updateSponsor = async (req, res) => {
  try {
    const sponsor = await Sponsor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (sponsor) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        sponsor,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "sponsor not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update sponsor ",
      error: error.message,
    });
  }
};

export const updateTrophy = async (req, res) => {
  try {
    const trophy = await Trophies.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (trophy) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        trophy,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "trophy not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update trophy ",
      error: error.message,
    });
  }
};

export const updateFeaturePlayer = async (req, res) => {
  try {
    const featuredPlayer = await FeaturedPlayer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (featuredPlayer) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        featuredPlayer,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "featuredPlayer not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update featuredPlayer ",
      error: error.message,
    });
  }
};

export const updateLeague = async (req, res) => {
  try {
    const league = await League.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (league) {
      req.app.get("io").emit("dataUpdated");

      res.json({
        success: true,
        league,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "league not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update league ",
      error: error.message,
    });
  }
};
