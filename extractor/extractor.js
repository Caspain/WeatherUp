const constants = require('../constants/constants');
module.exports = function(req,res,type){
let data = {};
switch (type) {
  case constant.util.insertEmployee:{
    data['values'] = {
      'name':req.body.name,
      'email':req.body.email,
      'location':req.body.email,
      'forecast':req.body.forecast
    };

  break;
  }


  default:break;

}

return data;
};
