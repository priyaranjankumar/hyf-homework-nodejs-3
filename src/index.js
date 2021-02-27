const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const usrarr = [];
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/users', (req, res) => {
    res.json(usrarr)
})

app.post('/user', (req, res) => {
    usrarr.push({ id: 0 })
    res.status(200)
    res.json(usrarr)
})
app.get('/user/:id', (req, res) => {


    res.json(usrarr[req.params.id])

})

app.delete('/user/:id', (req, res) => {
    if (usrarr[req.params.id] !== undefined) {
        res.status(202)
        res.json(usrarr[req.params.id])
        usrarr.splice(0, 1)
    }
    else {
        res.status(204)
        res.json(usrarr)

    }
})
app.listen(3000, () => {
    console.log('server running');
})