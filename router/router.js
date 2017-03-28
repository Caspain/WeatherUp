const constants = require('../constants/constants');
module.exports = function(express) {
    const router = express.Router();
    router.route('/').get(function(req, res) {
        res.render('main')
    });

    router.route('/employee/insert').post((req, res) => {
        if (require('../body-checker/checker')(req, res, constants.util.insertEmployee)) {
            const extractor = require('../extractor/extractor')(req, res, constants.util.insertEmployee);
            const promise = require('../controller/addEmployee')(extractor.values);
            promise.then((result) => {
                res.status(200).json({
                    msg: 'success',
                    body: result
                })
            }).catch((err) => {
                res.status(406).json({
                    msg: 'failure',body: err
                });
            });
        } else {
            res.status(406).json({
                msg: 'failure',
                state: 'missing required fields*',
                body: 'provide all fields.'
            });
        }
    });

    router.route('/employee/insert').get((req, res) => {

    });

    return router;
};
