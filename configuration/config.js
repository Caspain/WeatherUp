let config = {
  'forecast_kingston_api':'http://api.openweathermap.org/data/2.5/forecast?q=Kingston,jamaica&mode=xml&appid=2faa2095d8040555742be1240afd40e8'
};
config.connection = {
      /* account with redis labs */
      redis: {
          port: 13406,
          host: 'redis-13406.c10.us-east-1-3.ec2.cloud.redislabs.com',
          auth: 'THEDREAM123',
          db: 'kernis-monitor', // if provided select a non-default redis db
      }
  };

module.exports = config;
