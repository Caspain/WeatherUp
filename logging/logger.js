
const winston = require('winston');
const moment = require('moment');
module.exports = function() {
    return new(winston.Logger)({
        transports: [
            new(winston.transports.Console)(),
            new(winston.transports.File)({
                filename: 'system.log',
                colorize: true,
                timestamp: () => {
                    return moment().format('MMMM Do YYYY, h:mm:ss a');
                },
                showLevel: true,
                json: true,
                prettyPrint: true,
                showLevel: true
            })
        ]
    });
};
