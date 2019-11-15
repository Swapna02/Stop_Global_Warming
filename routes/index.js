var express = require('express');
var router = express.Router();
var userModule = require('../modules/user');
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:true});
//var bcrypt=require('bcrypt');

/* GET home page. */
function ckeckEmail(req,res,next){
    var email=req.body.uemail;
    var checkexitemail= userModule.findOne({email:email})
    checkexitemail.exec((err,data)=>{
        if(err) throw err;
        if(data)
            return res.render('register',{title: 'register',msg:'Email alreay present'});
        next();
    });
}/*
function ckeckname(req,res,next){
  var uname=req.body.uname;
  var checkexitname= userModule.findOne({username: uname})
  checkexitname.exec((err,data)=>{
      if(err) throw err;
      if(data)
          return res.render('register',{title: 'register',msg:'Username alreay present'});
      next();
  });
}*/
router.get('/', function(req, res, next) {
    res.render('homepage', { title: 'Homepage' });
  });
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' ,msg:''});
});
router.post('/login',urlencodedParser, function(req, res, next) {
  var email=req.body.uemail;
  var password=req.body.upass;
  var checkEmail= userModule.findOne({email:email});
  if(checkEmail==null)
  res.render('login', { title: 'Login',msg:"Invalid Username and Password " });
  checkEmail.exec((err,data)=>{
    if(err)throw err;

    var getPass=data.pass;
    console.log(data.pass+" "+password);
    if(password==getPass){ 
      console.log("success");
      res.render('homepage', { title: 'Login',msg:"Username Loggedin Successfully " });
    }else{
      res.render('login', { title: 'Login',msg:"Invalid Username and Password " });
    }
  }) ;
 
});
router.get('/register', function(req, res, next) {
  console.log("hejkjhvjh");
  res.render('register', { title: 'Register',msg:''});
});
router.post('/register',ckeckEmail,function(req, res, next) {
  console.log("hejkjhvjh");
    var uname=req.body.uname;
    console.log(uname);
    var unum=req.body.unum;
    console.log(unum);
    var uemail=req.body.uemail;
    console.log(uemail);
    var upass=req.body.upass;
    var utype=req.body.utype;
    var ucpass=req.body.ucpass;

    if(upass!=ucpass)
    {
      res.render('register', { title: 'register', msg:'Password not matched' });
    }
    else{
    //password=bcrypt.hashSync(req.body.password,10);
    var userDetails = new userModule({
        username:uname,
        mobile:unum,
        email:uemail,
        pass:upass,
        tipe:utype
    });
    console.log(userDetails);
    userDetails.save((err,doc)=>{
        if(err) throw err;
        res.render('register', { title: 'register', msg:'User register Successfully' });
    })
  }
});

router.get('/airpollution', function(req, res, next) {
    res.render('airpollution', { title: 'airpollution' });
  });
  
router.get('/forget', function(req, res, next) {
    res.render('forget', { title: 'forget' });
  });
  
router.get('/info', function(req, res, next) {
    res.render('info', { title: 'info' });
  });
  
router.get('/heading', function(req, res, next) {
    res.render('heading', { title: 'heading' });
  });
  
  
router.get('/landpollution', function(req, res, next) {
    res.render('landpollution', { title: 'landpollution' });
  });
  
router.get('/news', function(req, res, next) {
    res.render('news', { title: 'news' });
  });
  
router.get('/nextnews', function(req, res, next) {
    res.render('nextnews', { title: 'nextnews' });
  });
  
router.get('/pollution', function(req, res, next) {
    res.render('pollution', { title: 'pollution' });
  });
  router.get('/stories', function(req, res, next) {
      res.render('stories', { title: 'stories' });
    });
  router.get('/stats', function(req, res, next) {
    res.render('stats', { title: 'stats' });
  });
    router.get('/types', function(req, res, next) {
        res.render('types', { title: 'types' });
      });
router.get('/waterpollution', function(req, res, next) {
    res.render('waterpollution', { title: 'waterpollution' });
  });

module.exports = router;

