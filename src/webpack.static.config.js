var make = require('./webpack/make')
module.exports = [ make('static'), make('vendor') ]