const mongoose = require("mongoose")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")
const config = require("../config/config")
const passport = require("passport")

var StomatologSchema = mongoose.Schema({
    email: {
        type: String,
        required: false,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: false
    },
    datumZaposlenja: { type: Date },
    imageUrl: { type: String },
    admin: { type: Boolean },
    hash: { type: String },
    salt: { type: String }
})

StomatologSchema.methods.savePassword = function(password)
{
    this.salt = crypto.randomBytes(16).toString("hex")
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000,64, "sha512").toString("hex")
}

StomatologSchema.methods.validatePassword = function(password)
{
    hash = crypto.pbkdf2Sync(password, this.salt, 1000,64, "sha512").toString("hex")
    return hash === this.hash
}

StomatologSchema.methods.generateJwt = function()
{
    var expire = new Date()
    expire.setDate(expire.getDate()+7)

    return jwt.sign({
        _id:this._id,
        _expire: parseInt(expire.getTime()/1000)
    }, config.secret)
}

StomatologSchema.methods.getRole = function()
{
    if (this.admin)
    {
        return "ADMIN";
    }
    else
    {
        return "Stomatolog"
    }
}


var StomatologModel = mongoose.model("Stomatolog", StomatologSchema)

StomatologModel.register = async function(email, username, name, lastname, password, imageUrl)
{
    var Stomatolog = new StomatologModel({
        email:email,
        username:username,
        name:name,
        lastname:lastname,
        datumZaposlenja:Date(),
        imageUrl: "D:/Vezba/4.godina/Web2/StomatoloskaOrdinacija/Back/images/"+imageUrl,
        admin: false
    })

    Stomatolog.savePassword(password)
    var result = await Stomatolog.save()
    if (result)
        return Stomatolog
    else
        return undefined

}

StomatologModel.updatePassword = async function(body)
{
    
    salt2:String;
    hash2:String;

    this.salt2 = crypto.randomBytes(16).toString("hex");
    this.hash2 = crypto.pbkdf2Sync(body.password, this.salt2, 1000,64, "sha512").toString("hex");

    var userOld = await StomatologModel.findOneAndUpdate({username: body.username, email:body.email}, {
        $set: {salt: this.salt2, hash: this.hash2}
    })

    //user.save();
    //user.findOneAndUpdate({username: body.username, email: body.email}, {$set: {salt: this.salt2, hash: this.hash2}});
    return await StomatologModel.find().where({username: body.username, email: body.email});
}

module.exports = StomatologModel