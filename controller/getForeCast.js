const Promise = require('bluebird');
const request = require('request');
const config = require('../configuration/config');
module.exports = function(data) {
    return new Promise((resolve, reject) => {

      request('http://www.google.com', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
      });
        // promise.then((result) => {
        //     resolve(result);
        // }).catch((error) => {
        //     reject(error);
        // })
    });
};
