require('dotenv').config()
const express = require('express')
const ENV = process.env
const PORT = ENV.PORT
const app = express()
app.get('/', (req, res)=> {
    res.send('message from auth')
})
const appInit = () => {
    console.log('Server started at PORT'.replace('PORT', PORT))
}
app.listen(PORT, appInit())