const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    title : String,
    content:String
  },{versionKey:false});
  const User = mongoose.model('User', userSchema);

  module.exports = User;