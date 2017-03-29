const Promise = require('bluebird');
module.exports = function(data){
  return new Promise((resolve,reject)=>{
        let promise = require('../database/getEmployees')(data);
        promise.then((result)=>{
          resolve(result);
        }).catch((err)=>{
          reject(err);
        })
  });
};
