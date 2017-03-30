let config = {
    'forecast_kingston_api': 'http://api.openweathermap.org/data/2.5/forecast?q=Kingston,jamaica&mode=xml&appid=2faa2095d8040555742be1240afd40e8',
    'forecast_mobay_api': ''
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
    'mailPass': 'sdsadsamble',
    'clientId': '696161353866-is9pifs785v2oqfgaj6rudpg87kbnifr.apps.googleusercontent.com',
    'clientSecret': 'IBISSoscDy5O076Pah07eefL',
    'refreshToken': '1/8fUn6XL4I4hNMIInBKBXK-LRs1hMWCNCSFQpuT0wnLY',
    'accessToken': 'ya29.GlseBE5kZ3razgyWG8-C_JwPfBYLcsMXWHa65ahFswChiSr_vE5ig1OEeQWL_d-oLGHh4ydGJm9pLo4x5Ix1VijdHig-RuA7Dnc6z6e-0q0l0woVmFWo5EAAPxib',
};

module.exports = config;
