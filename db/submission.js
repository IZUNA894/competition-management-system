/* eslint-disable */

var mongoose = require("mongoose");
var Users = require("./users");
var Competition = require("./competition");
submissionSchema = new mongoose.Schema({
  image: {
    required: true,
    type: String,
    trim: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true,
    ref: "Users",
  },
  competition: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true,
  },
  likes: {
    type: Number,
    default: 0
  }
});

submissionSchema.statics.calcSubm = async function (compId) {
  const stats = await this.aggregate([
    {
      $match: { competition: compId }
    },
    {
      $group: {
        _id: "$competition",
        submission: { $sum: 1 },
      },
    },
  ]);

  const x = await Competition.findByIdAndUpdate(compId, { submission: stats[0].submission }, { new: true })

};

submissionSchema.post("save", function () {
  this.constructor.calcSubm(this.competition);
});

var Submission = mongoose.model("Submission", submissionSchema);
module.exports = Submission;
