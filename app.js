const express = require("express");
var mongoose = require("mongoose");
require("./db/mongodb.js");
var Users = require("./db/users");
var Competition = require("./db/competition");
var Submission = require("./db/submission");
var Submission_like = require("./db/submission_like");
var app = express();

app.use(express.json());

app.get("/hello", function (req, res) {
  res.end("hello from express sever req processing");
});

app.get("/competitions", async function (req, res) {
  var competitionObj = await Competition.find();
  const data = await Competition.find().populate('author')
  res.status(200).json({
    status: "success",
    data
  })
  res.status(200).json({
    status: "success",
    data
  });
});

app.get("/competition/:id/submissions", async function (req, res) {
  const data = await Submission.find({ competition: req.params.id }).populate('author')

  res.status(200).json({
    status: "success",
    data
  })
});

app.post("/competitions", async function (req, res) {
  const comp = await Competition.create(req.body);

  res.status(200).json({
    status: "success",
    data: comp,
  });
});

app.post("/submissionsLike", async function (req, res) {
  const comp = await Submission_like.create(req.body);

  res.status(200).json({
    status: "success",
    data: comp,
  });
});

app.post("/submissions", async function (req, res) {
  const submission = await Submission.create(req.body);

  res.status(200).json({
    status: "success",
    data: submission,
  });
});

var port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("listening on port ", port);
});

//  var obj = new Submission_like({author:'5e9341d32bdb81173c8d9dfd',submission:''})
//  obj.save();
//  var obj = new Submission_like({author:'5e93422d2bdb81173c8d9dfe',submission:''})
//  obj.save();
//  var obj = new Submission_like({author:'5e9342692bdb81173c8d9e00',submission:''})
//  obj.save();
//  var obj = new Submission_like({author:'5e9342502bdb81173c8d9dff',submission:''})
//  obj.save();
//  var obj = new Submission_like({author:'5e93422d2bdb81173c8d9dfe',submission:''})
//  obj.save();

// var obj2 = new Submission({image:'http://www.sljfls.com',author:'5e93422d2bdb81173c8d9dfe',competition:'5e9348c937818e3a707d38f3'})
// obj2.save();
// var obj2 = new Submission({image:'http://www.sljfls.com',author:'5e93422d2bdb81173c8d9dfe',competition:'5e93496bbf4efb3ac8fa97bd'})
// obj2.save();
// var obj2 = new Submission({image:'http://www.sljfls.com',author:'5e9342502bdb81173c8d9dff',competition:'5e9349b25eea752840ebf7bf'})
// obj2.save();
// var obj2 = new Submission({image:'http://www.sljfls.com',author:'5e9342692bdb81173c8d9e00',competition:'5e9349bbb30ea41f7870fe46'})
// obj2.save();
// var obj2 = new Submission({image:'http://www.sljfls.com',author:'5e9341d32bdb81173c8d9dfd',competition:'5e9349d59acd6433987129c8'})
// obj2.save();
// const ObjectId = mongoose.Types.ObjectId;

// var number = Submission.
//               aggregate([{ $match: { competition:ObjectId('5e9348c937818e3a707d38f3') }},
//                           { $count: "submission"}
//                         ] ,
//                           function(err,obj){
//                             console.log('agg',obj,err)
//                           }
//                         )
// .exec((err,x)=>
//   console.log(err,x))
// console.log('numb' ,number);
