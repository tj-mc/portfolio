exports.handler = async function (event, context) {

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'tom_mcintosh@outlook.com',
        from: 'tom_mcintosh@outlook.com', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    sgMail
        .send(msg)
        .then(() => {

            return {
                statusCode: 200,
                body: JSON.stringify({message: "Hello World"})
            };


        }, error => {
            console.error(error);

            return {
                statusCode: 500,
                body: error.response.body
            };
        });

}
