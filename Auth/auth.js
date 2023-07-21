require('dotenv').config()
const express = require('express')
const router = require('./route')
const ENV = process.env
const PORT = ENV.PORT || 3001
const auth = express()
auth.use('/', router)
const appInit = () => {
    console.log('Server started at PORT'.replace('PORT', PORT))
}
auth.listen(PORT, appInit())