const express = require("express")
const PregledService = require("../services/pregled")

const passport = require("./config/config")

const router = express.Router()

router.get('/', async (req,res)=>{
    if (req.query.id)
    {
        var pregled = await PregledService.getById(req.query.id)
        console.log(pregled)
        if (pregled)
        {
            res.send(pregled)
        }
        else
        {
            res.status(404)
            res.send()
        }
    }
    else
    {
        var pregledi = await PregledService.getAll()
        res.send(pregledi)
    }
})

router.get("/stom/",
    //passport.authenticate('jwt', {session: false}),
async (req, res)=>{
    var pregledi = await PregledService.getByStomatolog(req.body.id)
    if (pregledi)
        res.send(pregledi)
    else
    {
        res.status(404)
        res.send()
    }
})

router.post('', (req,res)=>{
    var pregled = PregledService.savePregled(req.body)
    res.send({success:pregled})
})

module.exports = router