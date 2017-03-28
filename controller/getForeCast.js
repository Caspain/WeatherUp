const Promise = require('bluebird');
const request = require('request');
const config = require('../configuration/config');
const XmlReader = require('xml-reader');
const reader = XmlReader.create();
module.exports = function(data) {
    return new Promise((resolve, reject) => {

        request(config.forecast_kingston_api, function(error, response, body) {
            if (error) {
                reject(error);
            } else {


              reader.on('done', data => {console.log(data); resolve(data)});
  reader.parse(body);


            }
        });

    });
};
