const express = require('express')
const app = express()
const bodyparser = require('body-parser') 

app.use(bodyparser.urlencoded( { extended: true } ))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    // usando GET => console.log(req.query) - aparece na url
    res.send('<h1>Parabens! Usuário Incluído</h1>')
})

app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabens! Usuário Alterado</h1>')
})
app.listen(3003)