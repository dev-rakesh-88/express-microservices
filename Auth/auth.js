require('dotenv').config()
const express = require('express')
const ENV = process.env
const PORT = ENV.PORT || 3001
const auth = express()
auth.get('/', (req, res)=> {
    res.send('message from auth')
})
const appInit = () => {
    console.log('Server started at PORT'.replace('PORT', PORT))
}
auth.listen(PORT, appInit())