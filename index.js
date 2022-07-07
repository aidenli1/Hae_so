const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aiden:aiden@aiden.1l3v9.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => console.log('YEEEEEEE!!!'))
.catch(err => console.log(err + "=================="))

app.get('/', (req, res) => res.send('Hello world!'))

app.listen(port, () => console.log(`Exapmle app listening on port ${port}! `))