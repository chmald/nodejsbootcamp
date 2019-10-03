const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Express API')
})

app.get('/api/mydata', (req, res) => {
    res.json(['Sunday', 'Monday', 'Friday', 'Food', 'Dessert'])
})

app.listen(port, () => {
    console.log(`Express API listening on port ${port}!`)
})