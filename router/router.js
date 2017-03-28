module.exports = function(express) {
    const router = express.Router();
    router.route('/').get(function(req, res) {
        res.render('main')
    });

    router.route('/employee/insert').post((req, res) => {

    });

    router.route('/employee/insert').get((req, res) => {

    });

    return router;
};
