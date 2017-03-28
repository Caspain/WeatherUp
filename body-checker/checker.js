const constants = require('../constants/constants');
module.exports = function(req, res, type) {

    switch (type) {
        case constants.util.insertEmployee:
            {
              return (req.body.name!=null && req.body.email!=null && req.body.location!=null && req.body.forecast!=null);
                break;
            }

            break;
        default:
            break;

    }
};
