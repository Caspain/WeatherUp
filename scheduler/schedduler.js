const constants = require('../constants/constants');
const milliseconds = require('time-funcs/milliseconds');
const server = require('./server')();
module.exports = function(type, data) {
    let time = milliseconds({
        minutes: 5,
        seconds: 59
    }); //get time
    let job = null;
    switch (type) {
        case constants.util.Email:
            {
                job = server.queue.create(constants.util.Email, {
                    title: 'Email Queue For Weather Forecast',
                    data: data.info
                }).delay(time).removeOnComplete(false).priority('high').save();
                break;
            }

        default:
            break;

    }
    if (job != null) {
        job.on('complete', function(result) {
            console.log('job completed. ');
        }).on('failed attempt', function(errorMessage, doneAttempts) {
            console.log('Job failed -> attempts: ' + doneAttempts);
        }).on('failed', function(errorMessage) {
            console.log('Job failed->' + errorMessage);
        }).on('enqueue', function(job, id) {
            console.log('job queued ');
        }).on('start', function(job, id) {
            // console.log('job started: ' + id);
        });
    }
    server.queue.watchStuckJobs();

    //process jobs
    switch (type) {
        case constants.util.Email:
            server.queue.process(constants.util.Email, 1, (job, done) => {
                const data = job.data;
                done();

                //send email here
            });
            break;
        default:

    }
};
