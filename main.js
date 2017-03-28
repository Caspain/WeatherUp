
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const parser = require('body-parser');
//set up default port
app.set('port', 1337);

//set up body parser
app.use(parser.urlencoded({
    extended: true,
    limit: '1mb'
}));
app.use(parser.json());
//use cors
var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

//enable database connection
require('./database/init')();

//set up view engine and static file linking
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

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
app.use('/', router);

//set up server
const server = app.listen(process.env.PORT || app.get('port'), serverFunction);

function serverFunction(err) {
    if (err) {
        console.error(err);
        return
    };
  //  var mailer = require('./mail/mailer')({})
    console.info('Server activated on port: ' + server.address().port);
    console.log('heroku hosted.');
}


module.exports = app;

const pm2 = require('pm2');


let instances = -1; // Set by Heroku or -1 to scale to max cpu core -1
let maxMemory = process.env.WEB_MEMORY || 512;    // " " "
pm2.connect(function() {
  pm2.start({
    script    : 'app.js',
    name      : 'production-app',     // ----> THESE ATTRIBUTES ARE OPTIONAL:
    exec_mode : 'cluster',            // ----> https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md#schema
    instances : instances,
    max_memory_restart : maxMemory + 'M',   // Auto-restart if process takes more than XXmo
    env: {                            // If needed declare some environment variables
      "NODE_ENV": "production"

    },
  }, function(err) {
    if (err) return console.error('Error while launching applications', err.stack || err);
    console.log('PM2 and application has been succesfully started');

    // Display logs in standard output
    pm2.launchBus(function(err, bus) {
      console.log('[PM2] Log streaming started');

      bus.on('log:out', function(packet) {
       console.log('[App:%s] %s', packet.process.name, packet.data);
      });

      bus.on('log:err', function(packet) {
        console.error('[App:%s][Err] %s', packet.process.name, packet.data);
      });
    });

  });
});
