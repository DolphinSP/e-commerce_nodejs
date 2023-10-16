const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { engine } = require('express-handlebars');
const { checkApiKey } = require('./middlewares/auth.handler');

const { logErrors, errorHandler, boomErrorHandler, handleSQLError } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;


app.set('views', __dirname + '/views')
app.engine('.hbs',engine({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');


app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

require('./utils/auth');

app.listen(port, () => {
  console.log('Mi port' +  port);
});

app.get('/', (req, res) =>{
  res.render('home');
})

app.get('/nueva-ruta', checkApiKey, (req, res) =>{
  res.send('Hola soy una nueva ruta')
});
routerApi(app);

app.use(logErrors);
app.use(handleSQLError);
app.use(boomErrorHandler);
app.use(errorHandler);


