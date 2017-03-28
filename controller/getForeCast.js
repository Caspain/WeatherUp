const Promise = require('bluebird');
const axios = require('axios');
const config = require('../configuration/config');
module.exports = function(data) {
    return new Promise((resolve, reject) => {
console.log(config.forecast_kingston_api)
      axios.get(config.forecast_kingston_api)
        .then(function (response) {
           resolve(response);
        })
        .catch(function (response) {
          reject(response);
        });

        // promise.then((result) => {
        //     resolve(result);
        // }).catch((error) => {
        //     reject(error);
        // })
    });
};
