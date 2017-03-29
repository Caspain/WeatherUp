const Promise = require('bluebird');
const request = require('request');
const config = require('../configuration/config');
const XmlReader = require('xml-reader');
const reader = XmlReader.create({
    stream: true
});
module.exports = function(data) {
    return new Promise((resolve, reject) => {

        request(config.forecast_kingston_api, function(error, response, body) {
            if (error) {
                reject(error);
            } else {

                //reader.on('tag:clouds', (data) => console.log(data.attributes));
                reader.on('tag:time', (data) => console.log(data.children));
                reader.on('done', data => {
                    resolve('finished parsing.')
                });
                reader.parse(body);


            }
        });

    });
};
