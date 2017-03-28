const Promise = require('bluebird');
const mongoose = require('mongoose');
const employee = require('./schema/employee')();
let model = null;
try {
    model = mongoose.model('EmployeeForecast');
} catch (e) {
    model = mongoose.model('EmployeeForecast', employee);
} finally {
    Schema.plugin(autoIncrement.plugin, {
        model: 'EmployeeForecast',
        startAt: 1,
        incrementBy: 1
    });
}
module.exports = function(data) {
    return new Promise((resolve, reject) => {
        let employee_model = new model(data);
        let promise = employee_model.save();
        promise.then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })
    });
};
