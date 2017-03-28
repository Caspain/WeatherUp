const Promise = require('bluebird');
const moment = require('moment');

module.exports = function(data) {
    return new Promise((resolve, reject) => {
      let time = null;
      let data = null;
      let identifier = null;
      let time = moment().format("h:mm:ss a");
      let date = moment().format("dddd, MMMM Do YYYY");

      data.time_created = time;
      data.date_created = date;
        const promise = require('../database/addEmployee')(data);
        promise.then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        })
    });
};
