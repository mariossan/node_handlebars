const express   = require('express')
const app       = express()
const hbs       = require('hbs')

app.use( express.static( __dirname + '/public') )
//express HBS
hbs.registerPartials( __dirname + '/views/partials')


app.set('view engine', 'hbs');
// helpers
require('./hbs/helpers')

const port = process.env.PORT || 3000




app.get('/', (req, res) => {
    res.render('index', {
        nombre: 'Mario guadalupe sanchez siLva',
        anio: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Mariossan about'
    })
})


app.listen(port, () => {
    console.log(`Escuchando por el puerto ${ port }`);
})