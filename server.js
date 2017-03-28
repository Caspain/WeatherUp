const express = require('express');
const app = express();
const cors = require('cors');

//set up default port
app.set('port',1337);

//use cors
var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

//enable database connection
require('./database/init')();

// development error handler
app.use(function(req, res, next) {
    let error = new Error('Page not found');
    error.status = 404;
    next(error);
}); //catch errors
app.use(function(error, req, res, next) {
    let err = error.status || 500;
    //render error in ejs file
    next();
}); //catch errors

//enable all routers
const router = require('./router/router')(express);
app.use('/',router);

//set up server
const server = app.listen(process.env.PORT || app.get('port'), serverFunction);

function serverFunction(err) {
    if (err) console.error(err) return;
    console.info('Server activated on port: ' + server.address().port);
    console.log('heroku hosted.');
}
