// npm --save-dev nodemon => Para uqe se reinicie el servidor cada vez que se hacen cambios en el JS
// npm i hbs => Para poder utilizar hbs con las views, partials, etc
// npm i dotenv => Para poder usar variables de entorno
// git push -u branchGitHub branchGitRemote para actualizar cambios

require('dotenv').config()
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT; // Al utilizar el puerto en una variable de entorno, al momento de subirlo a heroku o similar, se utilizará el puerto que nos de heroku

// Ruta para definir el uso de los archivos que usaré a modo de plantillas
hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')

// Código para servir contenido estático (html, css, js, etc)
app.use( express.static('public') );

app.get('/', (req, res) => {
    // res.sendFile(`${__dirname}/public/index.html`);
    
    // res.render => Luego de haber instalado hbs ya puedo renderizar las vistas de la carpeta views
    // El primer parametro del render es el nombre del archivo, el segundo son las opciones, son los parametros que puedo enviarle a la página
    res.render('home', {
        nombre: 'Kendal',
        titulo: 'Curso NodeJS'
    });
})

app.get('/generic', (req, res) => {
    // res.sendFile(`${__dirname}/public/generic.html`);

    res.render('generic', {
        nombre: 'Kendal',
        titulo: 'Generic'
    })
})

app.get('/elements', (req, res) => {
    // res.sendFile(`${__dirname}/public/elements.html`);

    res.render('elements', {
        nombre: 'Kendal',
        titulo: 'Elements'
    })
})

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`)
});