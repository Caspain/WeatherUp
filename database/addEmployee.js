const Promise = require('bluebird');
const mongoose = require('mongoose');
const employee = require('./schema/employee')();
const autoIncrement = require('mongoose-auto-increment');
mongoose.Promise = Promise; // switch to blude bird promise
let model = null;
try {

    model = mongoose.model('EmployeeForecast');

} catch (e) {
    model = mongoose.model('EmployeeForecast', employee);
} finally {

}

module.exports = function(data) {
    console.log(data)
    return new Promise((resolve, reject) => {
        model.count().then((count) => {
            data.count = count == 0 ? 1 : count + 1;
            let employee_model = new model(data);
            let promise = employee_model.save();
            promise.then((res) => {
                resolve('success: employee stored.');
            }).catch((err) => {
                console.log(err)
                reject(err);
            })
        }).catch((e) => {
            reject(e);
        })

    });
};
