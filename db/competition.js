var mongoose = require("mongoose");

var competitionSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    trim: true,
  },
  description: {
    required: true,
    type: String,
    trim: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true,
    ref: 'Users'
  },
  submission: {
    type: Number,
    default: 0,
  },
});

var Competition = mongoose.model("Competition", competitionSchema);
module.exports = Competition;
