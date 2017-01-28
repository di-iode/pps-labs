const express = require('express')
const router = express.Router()
const pkg = require('../package.json')

/* GET home page. */
router.get('/', function (req, res) {
  res.render('site', {version: pkg.version})
})

module.exports = router
