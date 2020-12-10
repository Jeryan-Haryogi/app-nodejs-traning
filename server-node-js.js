const express = require('express');
const app = express();
const routing = require('./routes/index')
const data = require('./data/data.json');
var hbs  = require('express-handlebars');
console.log(data);
app.engine('hbs', hbs({extname:'hbs',defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }));
app.set('views', './views');
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.get('/', routing);
app.get('/Features',  routing);
app.get('/data-api', routing);
app.get('/data', routing);
app.post('/data/hapus/:id', routing);
app.post('/data/tambah', routing);
 console.log('server is running http://127.0.0.1:8080/');
 app.listen(8080);