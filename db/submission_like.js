var mongoose = require('mongoose');
const Submission = require('./submission')

submissionLikeSchema = new mongoose.Schema({

  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true
  },
  submission: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true
  }

});



submissionLikeSchema.statics.calcSubm = async function (submissionId) {
  const stats = await this.aggregate([
    {
      $match: { submission: submissionId }
    },
    {
      $group: {
        _id: "$submission",
        likes: { $sum: 1 },
      },
    },
  ]);

  const x = await Submission.findByIdAndUpdate(submissionId, { likes: stats[0].likes }, { new: true })

};

submissionLikeSchema.post("save", function () {
  this.constructor.calcSubm(this.submission);
});

var SubmissionLike = mongoose.model('Submission_like', submissionLikeSchema);
module.exports = SubmissionLike;