const  cron = require('node-cron');
const logger = require('../logging/logger')();
module.exports = function() {
    /*
      this function runs periodically pulling weather forecast for each city.
    */
    // fires at 10:30 pm every day


    cron.schedule('30 22 * * *', function(){
    logger.info('attempting to forecast weather.')
  });
};
