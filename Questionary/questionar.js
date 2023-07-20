require('dotenv').config()
const express = require('express')
const ENV = process.env
const PORT = ENV.PORT || 3002
const app = express()
app.get('/', (req, res)=> {
    res.send('message from questionary')
})
const appInit = () => {
    console.log('Server started at PORT'.replace('PORT', PORT))
}
app.listen(PORT, appInit())