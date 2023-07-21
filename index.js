require('dotenv').config()
const express = require('express')
const axios = require('axios')
const services = require('./services.json')
const ENV = process.env
const PORT = ENV.PORT || 3000
const app = express()
const appInit = () => {
    console.log('Server started at PORT'.replace('PORT', PORT))
}
app.all('/:service/:path', async (req, res) => {
    try {
        let port = services[req.params.service].port
        let config = {
            method: req.method,
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:port/path'.replace('port', port).replace('path', req.params.path),
            headers: req.headers
        };
        console.log(config)
        const response = await axios.request(config)
        res.send(response.data)
    } catch (error) {
        console.log(error.message)
    }
})
app.listen(PORT, appInit())