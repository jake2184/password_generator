const express = require('express')
const cors = require('cors')
const passwords = require('./password_generation')

const app = express()

app.use(cors())

app.get('/api/passwords', (req, res) => res.send(passwords.generate_passwords()))

app.listen(3000, () => console.log(`Listening..`))
