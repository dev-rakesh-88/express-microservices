require('dotenv').config()
const express = require('express')
const router = require('./route')
const ENV = process.env
const PORT = ENV.PORT || 3002
const app = express()
app.use('/', router)
const appInit = () => {
    console.log('Server started at PORT'.replace('PORT', PORT))
}
app.listen(PORT, appInit())