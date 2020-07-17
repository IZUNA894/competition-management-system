var mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://localhost:27017/ylab?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("succesfulluy connected to mongodb");
  })
  .catch((error) => {
    console.log("error in connnecting to mongo server", error);
  });
