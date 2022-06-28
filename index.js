const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let dbTransformer = {
    transformers: [
        {
            id: 01,
            name: 'Optimus Prime',
            faction: ' Autobots',
            status: 'Alive',
            description: `Optimus Prime é o principal protagonista da série de filmes Transformers e o líder dos Autobots , o último Prime ,
             e o irmão do líder Decepticon Megatron . Ele também é conhecido como "Orion Pax"`
        },
        {
            id: 02,
            name: 'Megatron',
            faction: 'Decepticons',
            status: 'Alive',
            description: `Megatron (também conhecido como Galvatron ) é o líder dos Decepticons 
            e o principal antagonista de Transformers `
        }
    ]
}

app.get('/transformers', (req, res) => {
    res.json(dbTransformer.transformers)
   console.log('Autobots vs Decepticons \u{1F916}')
})

app.get('/transformers/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
        console.log(`Id Invalida`)
    } else {
        let id = parseInt(req.params.id)
        let transf = dbTransformer.transformers.find(t => t.id == id)
        if (transf != undefined) {
            res.status = 200
            res.json(transf)
        } else {
            res.sendStatus(404)
        }
    }
})

app.listen


app.listen(8000, () => {
    console.log('Aplicação funcionando com sucesso \u{1F916}')
})
