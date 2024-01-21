const StomatologModel = require("../models/stomatolog")
var ObjectId = require('mongoose').Types.ObjectId;

var getAll = function()
{
    return StomatologModel.find().where({admin: false})//admin = false
}


var getById = function(id)
{
    if (ObjectId.isValid(id))
        return StomatologModel.findById(id)
    else
        return undefined;
}

module.exports = {
    getAll,
    getById
}