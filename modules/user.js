const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pms',{useNewUrlParser : true,useCreateIndex :true,});
var conn=mongoose.Collection;
var userSchema=new mongoose.Schema({
    username:String,
       
    mobile:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        index:{
            unique:true,
        },},
    tipe:{
        type:String,
        required:true,
    },
    pass:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});
var userModel =mongoose.model('users',userSchema);
module.exports=userModel;