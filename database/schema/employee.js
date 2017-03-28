module.exports = function() {
    const mongoose = require('mongoose');
    const autoIncrement = require('mongoose-auto-increment');
    const EmployeeSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        identifier: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        forecast: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        time_created: {
            type: String,
            required: true
        },
        date_created: {
            type: String,
            required: true
        },
        work_hours:{
          type:String,
          required:true
        },
        count:{
          type:Number,
          required:true
        }
    });
    //
    EmployeeSchema.index({
        name: 'text',
        identifier: 'text',
        count:'text'
    }); //add full text search index
    // EmployeeSchema.plugin(autoIncrement.plugin, {
    //     model: 'EmployeeForecast',
    //     startAt: 1,
    //     incrementBy: 1
    // });
    return EmployeeSchema;
};
