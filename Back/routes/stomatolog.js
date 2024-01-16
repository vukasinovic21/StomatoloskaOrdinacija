const express = require("express")
const stomatologService = require("../services/stomatolog")

const passport = require("./config/config")

const router = express.Router()

router.get('/', async (req,res)=>{
    if (req.query.id)
    {
        var stomatolog = await stomatologService.getById(req.query.id)
        if (stomatolog)
        {
            res.send(stomatolog)
        }
        else
        {
            res.status(404)
            res.send()
        }
    }
    else
    {
        var stomatolog = await stomatologService.getAll()
        res.send(stomatolog)
    }
})


module.exports = router