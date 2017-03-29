const Promise = require('bluebird');
const mongoose = require('mongoose');
const employee_schema = require('./schema/employee')();
let model = null;
try {
    model = mongoose.model('EmployeeForecast');
} catch (e) {
    model = mongoose.model('EmployeeForecast', employee_schema);
}
module.exports = function(data) {
    return new Promise((resolve, reject) => {
        let promise = model.find({
            $text: {
                $search: data
            }
        }).exec();
        promise.then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    });
};
