const kue = require('kue');
var config = require('../configuration/config');
let obj = {};
const queue = kue.createQueue({
    prefix: 'q',
    redis: {
        port: config.connection.redis.port,
        host: config.connection.redis.host,
        auth: config.connection.redis.auth,
        db: config.connection.redis.db,
    }
});
obj.queue = queue;
kue.app.set('title', 'WeatherUp');
obj.kue = kue;
module.exports = obj;
