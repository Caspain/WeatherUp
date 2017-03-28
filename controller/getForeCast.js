const Promise = require('bluebird');
const request = require('request');
const config = require('../configuration/config');
const xml = require('xml2js').parseString;
module.exports = function(data) {
    return new Promise((resolve, reject) => {

        request(config.forecast_kingston_api, function(error, response, body) {
            if (error) {
                reject(error);
            } else {
                xml(body, function(err, result) {
                    resolve(result);
                });

            }
        });

    });
};
