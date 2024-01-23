var router = require("express").Router()
const passport = require("./config/config")
var multer = require('multer')
var authService = require("../services/auth")
var Stomatolog = require('../models/stomatolog')

router.post("/register",  async (req,res)=>{
    var user = await authService.register(req.body.email, req.body.username, req.body.name, req.body.lastname, req.body.password, req.body.imageUrl)//req.file?
    
    if (user)
    {
        console.log(user);
        res.send({token:user.generateJwt()})
    }
        
    else
        res.status(501).send()
})

router.post("/login", 
    passport.authenticate('local', {session:false}),
    //passport.log(),
(req, res)=>{
    res.send({token:req.user.generateJwt()})
})

router.put("/forgotPassword", 
    //passport.authenticate('local', {session:false}),
    //passport.log(),
async (req, res)=>{
    var user = await authService.update(req.body);
    if(user)
        res.status(200).send()//res.send({token:user.generateJwt()})
    else
        res.status(501).send()
})

router.get("/validate-jwt",
    passport.authenticate('jwt', {session: false}),
(req, res)=> {
    res.send({ isValid: true});
}
)

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../images');
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});

var upload = multer({storage: storage});


module.exports = router