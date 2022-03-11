const moongose = require('mongoose')
const { mongod } = require('./keys')

moongose.connect(mongod.URI, {})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err))