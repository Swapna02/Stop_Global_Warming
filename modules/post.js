const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pms',{useNewUrlParser : true,useCreateIndex :true,});
var conn=mongoose.Collection;
var userModule = require('../modules/user');
var scheme=new mongoose.Schema({
  post : String,
  email:String
});
var userPost=mongoose.model('post',scheme);
module.exports=userPost;