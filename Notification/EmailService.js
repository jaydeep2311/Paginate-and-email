const nodemailer = require("nodemailer");
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4edaed2676c726",
    pass: "2ae1fcff27463a",
  },
});

module.exports = transport;
