const Promise = require('bluebird');
const moment = require('moment');
const randomstring = require("randomstring");
module.exports = function(data) {
    return new Promise((resolve, reject) => {

        data.time_created = moment().format("h:mm a");
        data.date_created = moment().format("dddd, MMMM Do YYYY");
        data.identifier = randomstring.generate({
            length: 5,
            charset: 'alphanumeric'
        })  + moment();

  
        const promise = require('../database/addEmployee')(data);
        promise.then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        })
    });
};
