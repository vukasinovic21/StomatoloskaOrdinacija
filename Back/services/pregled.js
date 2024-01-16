var PregledModel = require("../models/pregled")
var ObjectId = require('mongoose').Types.ObjectId;

var getAll = function()
{
    return PregledModel.find()
}

var findById = function(id)
{
    if (ObjectId.isValid(id))
        return PregledModel.findById(id)
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

var deletePregled = async function(id)
{
    var pregled = await findById(id)
    if(pregled)
        return PregledModel.deletePregled(id)
}

module.exports = {
    savePregled,
    getAll,
    findById,
    getByStomatolog,
    deletePregled
}