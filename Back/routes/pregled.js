const express = require("express")
const PregledService = require("../services/pregled")

const passport = require("./config/config")

const router = express.Router()

router.get('/', async (req,res)=>{
    if (req.query.id)
    {
        var pregled = await PregledService.findById(req.query.id)
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
    passport.authenticate('jwt', {session: false}),
async (req, res)=>{
    var pregledi = await PregledService.getByStomatolog(req.query.id)
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
    res.sendStatus(200)
})


router.delete("/", 
    //passport.authenticate('jwt', {session: false}),
    //passport.authorizeRoles('ADMIN'),
async (req,res)=>
{
    var success = await PregledService.deletePregled(req.body.id)
    if(success)
        res.sendStatus(200)
    else 
        res.sendStatus(404)
})

module.exports = router