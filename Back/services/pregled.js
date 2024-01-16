var PregledModel = require("../models/pregled")
var ObjectId = require('mongoose').Types.ObjectId;

var getAll = function()
{
    return PregledModel.find()
}

var getById = function(id)
{
    if (ObjectId.isValid(id))
        return PregledModel.findById(id).populate('stomatolog')
    else
        return undefined;
}

var savePregled = function(pregled)
{
    if (pregled.name && pregled.lastname && pregled.email && pregled.datum && pregled.stomatolog)
    {
        return PregledModel.savePregled({
            name: pregled.name,
            lastname: pregled.lastname,
            email: pregled.email,
            datum: pregled.datum,
            stomatolog: pregled.stomatolog
        })
    }
}

var getByStomatolog = function(id)
{
    if (ObjectId.isValid(id))
        return PregledModel.find().where({stomatolog: id})
    else
        return undefined;
}
module.exports = {
    savePregled,
    getAll,
    getById,
    getByStomatolog
}