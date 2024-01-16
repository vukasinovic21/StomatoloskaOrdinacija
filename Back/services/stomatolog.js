const StomatologModel = require("../models/stomatolog")
var ObjectId = require('mongoose').Types.ObjectId;

var getAll = function()
{
    return StomatologModel.find()
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