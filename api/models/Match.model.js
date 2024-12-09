import mongoose from "mongoose";

const GoalsSchema = new mongoose.Schema({
  player: {
    type: String,
  },
  assist: {
    type: String,
  },
});

const FeaturedPlayerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  club: {
    type: String,
  },
  stats: {
    goals: {
      type: String,
    },
    assists: {
      type: String,
    },
    rank: {
      type: String,
    },
  },
  position: {
    type: String,
  },
});

const playerSchema = new mongoose.Schema({
  number: {
    type: Number,
  },
  name: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  position: {
    type: String,
  },
});

const MatchSchema = new mongoose.Schema({
  competition: { type: String, required: true },
  league_logo_url: { type: String },
  date: { type: Date, required: true },
  stadium: { type: String, required: true },
  team1: {
    name: { type: String, required: true },
    logo_url: { type: String },
  },
  team2: {
    name: { type: String, required: true },
    logo_url: { type: String },
  },
  status: { type: String, required: true },
  time: { type: String },
  FT: { type: Boolean, default: true },
  score: {
    team1: { type: Number, default: 0 },
    team2: { type: Number, default: 0 },
  },
  penalties: {
    type: Boolean,
    default: false,
  },
  pens: {
    team1: { type: Number, default: 0 },
    team2: { type: Number, default: 0 },
  },
  timeLeft: {
    daysLeft: { type: Number },
    hoursLeft: { type: Number },
  },
  matchType: { type: String, required: true },
  headToHead: {
    played: { type: Number, required: true },
    wins: {
      team1: { type: Number, required: true },
      team2: { type: Number, required: true },
    },
    homeWins: {
      team1: { type: Number, required: true },
      team2: { type: Number, required: true },
    },
    awayWins: {
      team1: { type: Number, required: true },
      team2: { type: Number, required: true },
    },
  },
  previousResult: {
    team1: {
      score: { type: Number, required: true },
    },
    team2: {
      score: { type: Number, required: true },
    },
  },
  goals: {
    team1: {
      type: [GoalsSchema],
    },
    team2: {
      type: [GoalsSchema],
    },
  },
  bestDefender: {
    type: String,
  },
  bestMidfielder: {
    type: String,
  },
  featuredPlayer: {
    type: FeaturedPlayerSchema,
  },
  teamLineup: {
    team1: {
      lineup: [playerSchema],
    },
    team2: {
      lineup: [playerSchema],
    },
  },
});

export const Match = mongoose.model("Match", MatchSchema);
