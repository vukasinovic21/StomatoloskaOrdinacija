const StomatologModel = require("../models/stomatolog")

var register = function(email, username, name, lastname, password)
{
    return StomatologModel.register(email, username, name, lastname, password)
}

var update = async function(body)
{
    return await StomatologModel.updatePassword(body);
}

module.exports = {
    register,
    update
}