module.exports = function() {
    const mongoose = require('mongoose');
    const autoIncrement = require('mongoose-auto-increment');
    const EmployeeSchema = new mongoose.Schema({
        user: {
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
        }
    });

    EmployeeSchema.index({
        user: 'text',
        identifier: 'text'
    }); //add full text search index
    return EmployeeSchema;
};
