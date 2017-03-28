const Promise = require('bluebird');
module.exports = function(data) {
    return new Promise((resolve, reject) => {
        const promise = require('../database/addEmployee')(data);
        promise.then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        })
    });
};
