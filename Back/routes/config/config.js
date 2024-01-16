var passport = require("passport")
var LocalStrategy = require("passport-local").Strategy
var passportJwt = require("passport-jwt")
var StomatologModel = require("../../models/stomatolog")
const config = require("../../config/config")

var localOptions ={
    usernameField: "username"
}

passport.use(new LocalStrategy(localOptions, async function(username, password, done){

    var user = await StomatologModel.findOne({username:username})

    if (!user)
    {
        done(null, null, {
            message: "Credentials not valid"
        })
    }
    else
    {
        var validacija = user.validatePassword(password)

        if (validacija)
        {
            done(null, user)
        }
        else
        {
            done(null, null, {
                message: "Credentials not valid"
            })
        }
    }
}))


var jwtOptions = {
    secretOrKey: config.secret,
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken()
}


passport.use(new passportJwt.Strategy(jwtOptions, async function(jwt_payload,done){
    var user = await StomatologModel.findById(jwt_payload._id)
    console.log(jwt_payload)
    if (!user)
    {
        done(null, null, {
            message: "Credentials not valid!"
        })
    }
    else
    {
        done(null, user)
    }

}))

passport.authorizeRoles = (...roles) => (req,res,next) => {
    
    var validno = roles.find(role=> role === req.user.getRole())

    if (validno)
    {
        req.role = req.user.getRole()
        next()
    }
    else{
        res.status(403)
        res.send("Not Authorized")
    }

}

passport.log = () => (req,res,next) =>{
    req.logovano = true
    console.log("Ulogovan korisnik: "+req.user.username)
    if(req.user.getRole() == "ADMIN")
        console.log("Admin")
    next()
}

module.exports = passport