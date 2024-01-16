const StomatologModel = require("../models/stomatolog")

var register = function(email, username, name, lastname, password)
{
    return StomatologModel.register(email, username, name, lastname, password)
}

module.exports = {
    register
}