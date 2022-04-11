'use strict'

const {db} = require('./server/db')
const app = require('./server')
const PORT = process.env.PORT || 1337; // this can be very useful if you deploy to Heroku!

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
  })
