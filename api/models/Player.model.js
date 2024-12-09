import mongoose from "mongoose";

const TeamStatsSchema = new mongoose.Schema({
  teamName: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  imageUrl: {
    type: String,
  },
  stats: {
    played: {
      type: Number,
    },
    won: {
      type: Number,
    },
    drawn: {
      type: Number,
    },
    lost: {
      type: Number,
    },
  },
});

const PlayerProfileSchema = new mongoose.Schema({
  dateOfBirth: {
    type: Date,
    required: true,
  },

  preferredFoot: {
    type: String,
    enum: ["Left", "Right", "Both"],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  preferredPosition: {
    type: String,
    required: true,
  },
});

const recentFixtures = new mongoose.Schema({
  competition: {
    type: String,
  },
  league_logo_url: {
    type: String,
  },
  date: {
    type: String,
  },
  stadium: {
    type: String,
  },
  team1: {
    name: {
      type: String,
    },
    logo_url: {
      type: String,
    },
  },
  team2: {
    name: {
      type: String,
    },
    logo_url: {
      type: String,
    },
  },

  score: {
    team1: {
      type: Number,
    },
    team2: {
      type: Number,
    },
  },
});

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  flagImageUrl: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  position: {
    type: String,
    required: true,
  },
  playerProfile: {
    type: PlayerProfileSchema,
    required: true,
  },
  teamsPlayedFor: {
    type: [TeamStatsSchema],
    required: true,
  },
  recentFixtures: {
    type: [recentFixtures],
  },
});

export const Player = mongoose.model("Player", PlayerSchema);
