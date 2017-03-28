module.exports = function(){
  const mongoose = require('mongoose');
  const Promise = require('bluebird');
  mongoose.Promise = Promise; // switch to blude bird promise
  const url = 'mongodb://weather-up:weather@ds133158.mlab.com:33158/weather-up';
  const autoIncrement = require('mongoose-auto-increment');
  const options = {
    server: {
        socketOptions: {
            keepAlive: 1,
            connectTimeoutMS: 30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 1,
            connectTimeoutMS: 30000
        }
    }
};
mongoose.connect(url, options);
const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error'));
conn.once('open', function() {
    console.log('database connection  established\n');
});
};
