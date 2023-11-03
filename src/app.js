const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

// importing routes
const agendamentosRouters = require('./routes/routers');

// settings
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(
  myConnection(
    mysql,
    {
      host: "127.0.0.1",
      user: "root",
      password: "root",
      port: 3306,
      database: "comercio_automoveis",
    },
    "single"
  )
);
app.use(express.urlencoded({extended: false}));

// routes
app.use("/", agendamentosRouters);

// static files
app.use(express.static(path.join(__dirname, 'assets')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`rodando em http://localhost:${app.get('port')}`);
});
