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

module.exports = async (email, subject, name, url) => {
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
      from: email, // sender address
      to: email, // list of receivers
      subject: subject,
      template: "email", // the name of the template file i.e email.handlebars
      context: {
        name: name, // replace {{name}} with Adebola
        company: "PeerPrep", // replace {{company}} with My Company
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
