const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");

const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("./utils"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./utils"),
};

module.exports = async (email, subject, name, url, format) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: Number(process.env.EMAIL_PORT),
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    });

    transporter.use("compile", hbs(handlebarOptions));

    var mailOptions = {
      from: process.env.USER,
      to: email,
      subject: subject,
      template: format,
      context: {
        name: name,
        company: "PeerPrep",
        url: url,
      },
    };

    await transporter.sendMail(mailOptions);
    console.log("email sent successfully");
  } catch (error) {
    console.log("email not sent!");
    console.log(error);
    return error;
  }
};
