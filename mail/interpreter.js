module.exports = function (info) {
	//takes mail params and send to mailer
	//first spilt user email on @ to extract specific email portion
	const mail_type = info.mail.split("@");
	switch (mail_type[1]) {
	case 'gmail.com':
		{
			info.mail = 'gmail';
			break;
		}
	case 'yahoo.com':
		{
			info.mail = 'yahoo';
			break;
		}
	};
	require('./mailer')(info); // send email
};
