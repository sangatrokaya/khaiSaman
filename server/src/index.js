const express = require('express')
const app = express()
const connection = require('./db/connection')
const cors = require('cors')
app.use(cors())
app.use(express.json())
require('dotenv').config()
const userRoute = require('./routes/user')
app.use(userRoute)
const port = process.env.PORT
const User = require('./models/user')

connection()

app.get('/', (req, res) => {
    // User.create(req.body)
    res.send({ msg: "user registered successfully" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

