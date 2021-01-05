exports.handler = async function (event) {

    const data = JSON.parse(event.body)

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_KEY);

    const toAddress = 'tjmc.dev.website@gmail.com'

    const emailBody = `
<html>
    <strong>Email:</strong> ${data.email}
    <strong>Enquiry:</strong>
    <p>${data.enquiry}</p>
</html>
    `

    const msg = {
        to: toAddress,
        from: 'contact@tjmc.dev', // Use the email address or domain you verified above
        subject: 'New Contact form submission',
        html: emailBody,
    };

    return sgMail
        .send(msg)
        .then(() => {

            return {
                statusCode: 200,
                body: `Sent to ${toAddress}`
            };

        }, error => {
            if (error.response) {
                return {
                    statusCode: 500,
                    body: JSON.stringify(error.response.body)
                };
            }
        });
}
