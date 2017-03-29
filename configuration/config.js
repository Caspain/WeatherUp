let config = {
  'forecast_kingston_api':'http://api.openweathermap.org/data/2.5/forecast?q=Kingston,jamaica&mode=xml&appid=2faa2095d8040555742be1240afd40e8',
  'forecast_mobay_api':''
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
  config.mail = {
    'mailUser': 'remariorich@gmail.com',
           'mailPass': '3456gamble', //change later
           'clientId': '696161353866-shaekdnh39j2hcdpab29m3pgqpsl9b2f.apps.googleusercontent.com',
           'clientSecret': '6tWMtGoKd7Sc_oXUgCcTSShl',
           'refreshToken': '1/JRs2ljSt5ZJIyFgfdOINEOIj56pY65J2yjUB3pPHRTQ',
           'accessToken': 'ya29.GlsdBCLGuHZBt7fmrNcYVe6aqE8UQjI5jeqbfcGojWULtDXm4wyYc5udJS-vO7fgnFg2wUi5nPWdpKkBdAWp01U69P8JgAny4jBWI1g7TDXEsvPKmkpTvENTkg_O'
  };

module.exports = config;
