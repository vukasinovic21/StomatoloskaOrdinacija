var router = require("express").Router()
const passport = require("./config/config")
var multer = require('multer')
var authService = require("../services/auth")
var Stomatolog = require('../models/stomatolog')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../Front/src/assets/img');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

const upload = multer({storage: storage})

router.post('/register', upload.single('file'), async (req, res) => {
    var user = await authService.register(req.body.email, req.body.username, req.body.name, req.body.lastname, req.body.password, req.file.filename)
    if (user)
    {
      res.send({token:user.generateJwt()})
    }   
    else
        res.status(501).send()
  });

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


module.exports = router