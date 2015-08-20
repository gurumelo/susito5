var fs = require('fs');
var express = require('express');
var app = express();

// Templates/vistas ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Servir directorio public
app.use(express.static('public'));

// array de archivos
var archivos = fs.readdirSync('public/archivos');

// Lanzamos index y le pasamos el array de archivos
app.get('/', function (req, res) {
	res.render('index', { archivos: archivos});
});

// A funcionar
app.listen(3000);

