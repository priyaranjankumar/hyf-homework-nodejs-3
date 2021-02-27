const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/users', (req, res) => {
    res.json([])
})
app.listen(3000, () => {
    console.log('server running');
})