var router = require("express").Router()
const passport = require("./config/config")
var authService = require("../services/auth")

router.post("/register",  async (req,res)=>{
    var user = await authService.register(req.body.email, req.body.username, req.body.name, req.body.lastname, req.body.password)
    
    if (user)
        res.send({token:user.generateJwt()})
    else
        res.status(501).send()
})

router.post("/login", 
    passport.authenticate('local', {session:false}),
    //passport.log(),
(req, res)=>{
    res.send({token:req.user.generateJwt()})
})

router.get("/validate-jwt",
    passport.authenticate('jwt', {session: false}),
(req, res)=> {
    res.send({ isValid: true});
}
)

module.exports = router