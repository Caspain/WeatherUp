const mailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const config = require('../configuration/config');
const templates = require('./template');
let transporter = null;
module.exports = function(info){

  switch (info.mail) {
          case 'gmail':
              {
                  transporter = nodemailer.createTransport({
                      service: 'gmail',
                      auth: {
                          xoauth2: xoauth2.createXOAuth2Generator({
                              user: config.mail.gmail.mailUser,
                              clientId: config.mail.gmail.clientId,
                              clientSecret: config.mail.gmail.clientSecret,
                              refreshToken: config.mail.gmail.refreshToken,
                              accessToken: config.mail.gmail.accessToken

                          })
                      }
                  });
                  break;
              }
          case 'yahoo':
              {
                  break;
              }
      };
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
