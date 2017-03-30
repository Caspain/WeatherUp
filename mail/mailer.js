const mailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const config = require('../configuration/config');
const templates = require('./template');
let transporter = null;
module.exports = function(info) {
    console.log(config.mail)
    console.log(info)
    // switch (info.mail) {
    //     case 'gmail':
    //         {
    //             transporter = mailer.createTransport({
    //                 service: 'Gmail',
    //                 auth: {
    //                     xoauth2: xoauth2.createXOAuth2Generator({
    //                         user: config.mail.mailUser,
    //                         clientId: config.mail.clientId,
    //                         clientSecret: config.mail.clientSecret,
    //                         accessToken: config.mail.accessToken,
    //                         refreshToken: config.mail.refreshToken,
    //
    //                     })
    //                 }
    //             });
    //             break;
    //         }
    //     case 'yahoo':
    //         {
    //             break;
    //         }
    // };
  transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'remariorich@gmail.com',
            pass: '3456gamble'
        }
    });
    const mailOptions = {
        from: info.from,
        to: info.to,
        subject: info.subject,
        generateTextFromHTML: true,
        html: templates.template
    };
    transporter.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log(JSON.parse(JSON.stringify(response)));
        }
        transporter.close();
    });
};
