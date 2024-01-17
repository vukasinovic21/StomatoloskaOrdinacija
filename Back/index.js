const express = require("express")
const config = require("./config/config")
const app = express()
const cors = require('cors') //morace da se napravi zbog angulara

const mongoose = require("mongoose")
mongoose.connect(config.dbConnection)

const authRoutes = require("./routes/auth")
const stomRoutes = require("./routes/stomatolog")
const pregledRoutes = require("./routes/pregled")

app.use(express.json())
app.use(cors())
app.use("/auth", authRoutes)
app.use("/stom", stomRoutes)
app.use("/pregled", pregledRoutes)


app.get("/", (req, res)=>{
    res.send("Hello World!")
})

app.listen(config.port, () =>
{
    console.log(`Running on port:${config.port}`)
})