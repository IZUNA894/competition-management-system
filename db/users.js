var mongoose= require('mongoose');
var validator= require('validator');

var usersSchema  = new mongoose.Schema({
    name: {
      required:true,
      type:String,
      trim:true,
    },
  email:{
    type:String,
    required:true,
    trim:true,
    lowercase:true,
    validate(value){
      if(!validator.isEmail(value))
      throw "error:is not email";
    }
  },
  
}
);

// //a virtual field..
// // to show tasks against his user
//   userSchema.virtual("tasks",{
//     ref:'Task',
//     localField:"_id",
//     foreignField:"owner"
//   });









  var Users = mongoose.model('Users', usersSchema);
  module.exports =Users;