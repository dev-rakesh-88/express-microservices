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
app.all('/:name',async (req,res)=> {
    let port = services[req.params.name].port
    let config = {
        method: req.method,
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:port'.replace('port',port),
        headers: req.headers
      };
      
      const response = await axios.request(config)
      res.send(response.data)
})
app.listen(PORT, appInit())