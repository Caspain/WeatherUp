const constants = require('../constants/constants');
module.exports = function(req,res,type){
let data = {};
switch (type) {
  case constants.util.insertEmployee:{
    data['values'] = {
      'name':req.body.name,
      'email':req.body.email,
      'location':req.body.location,
      'forecast':req.body.forecast,
      'work_hours':req.body.hours
    };

  break;
  }


  default:break;

}

return data;
};
