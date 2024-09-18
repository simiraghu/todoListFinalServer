const express = require('express')
const app = express()
const router = require('./router/index')
const cors = require('cors')

require('dotenv').config()
require('./db/db')

app.use(express.json())
app.use(cors())
app.use(router)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`)
})