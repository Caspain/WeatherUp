const mailer = require('nodemailer');
module.exports = function(obj){

  // create reusable transporter object using the default SMTP transport
  let transporter = mailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'remariorich@gmail.com',
          pass: '3456gamble'
      }
  });
  // setup email data with unicode symbols
let mailOptions = {
    from: 'remariorich@gmail.com', // sender address
    to: 'giomarioj@gmail.com', // list of receivers
    subject: 'Hello ', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};
// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
};
