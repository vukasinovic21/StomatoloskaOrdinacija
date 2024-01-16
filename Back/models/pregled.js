const mongoose =  require("mongoose")
const StomatologModel = require("./stomatolog")

var PregledSchema = mongoose.Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    datum: {type:Date, required: true},
    stomatolog:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "stomatolog",
                required: true
               }
})

var PregledModel = mongoose.model('pregled', PregledSchema)

PregledModel.savePregled = async function(pregled)
{
    var newPregled = new PregledModel(pregled)
    var result = await newPregled.save()

    if (result)
        return true;
    else
        return false;
}

module.exports = PregledModel