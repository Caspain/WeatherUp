const Promise = require('bluebird');
const axios = require('axios');
const config = require('../configuration/config');
module.exports = function(data) {
    return new Promise((resolve, reject) => {

      axios.get('https://api.github.com/users/' + username)
        .then(function(response){
          console.log(response.data); // ex.: { user: 'Your User'}
          console.log(response.status); // ex.: 200
        }); 

        // promise.then((result) => {
        //     resolve(result);
        // }).catch((error) => {
        //     reject(error);
        // })
    });
};
