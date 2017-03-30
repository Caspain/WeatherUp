const cron = require('node-cron');
const logger = require('../logging/logger')();
module.exports = function() {
    /*
      this function runs periodically pulling weather forecast for each city.
    */
    // cron.schedule('*/1 * * * *', function() {
    //
    //     let p = require('../database/getEmployees')('kingston');
    //     p.then((res) => {
    //       let ans = JSON.parse(JSON.stringify(res));
    //       console.log(ans[0].email)
    //         let promise = require('../controller/getForeCast')('montego bay');
    //         promise.then((result) => {
    //             console.log('percent: ' + result)
    //           require('../mail/mailer')({to:ans[0].email,subject:'weather forecast',from:'remariorich@gmail.com',mail:'gmail',data:result})
    //
    //         }).catch((err) => {
    //
    //         })
    //    });
    //     //pull down users for this city
    //
    //
    //
    // });
    cron.schedule('*/1 * * * *', function() {

        let p = require('../database/getEmployees')('mobay');
        p.then((res) => {
          let ans = JSON.parse(JSON.stringify(res));
          console.log(ans[0].email)
            let promise = require('../controller/getForeCast')('montego bay');
            promise.then((result) => {
                console.log('percent: ' + result)
              require('../mail/mailer')({to:ans[0].email,subject:'weather forecast',from:'remariorich@gmail.com',mail:'gmail',data:result})

            }).catch((err) => {

            })
       });
        //pull down users for this city



    });
};
