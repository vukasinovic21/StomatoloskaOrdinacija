const StomatologModel = require("../models/stomatolog")

var register = function(email, username, name, lastname, password, imageUrl)
{
    return StomatologModel.register(email, username, name, lastname, password, imageUrl)
}

var update = async function(body)
{
    return await StomatologModel.updatePassword(body);
}

module.exports = {
    register,
    update
}