const router = require('express').Router()
const {AddEntry, GetData} = require('./Controllers/index.controller.js')
router.post('/add', AddEntry )
router.get('/get', GetData )

module.exports = router;