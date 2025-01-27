// var email_module = require("nodemailer")
var email_module = require("nodemailer");
require("dotenv").config()
var Email_info = email_module.createTransport({
    service:"gmail",
    auth: {
        user:process.env.USER_EMAIL,
        pass:process.env.USER_PASS,
    }
})

var email_structre= {
    to: "samreenrafiq@aptechnorth.edu.pk",
    from: process.env.USER_EMAIL,
    subject: "Email Check",
    html: "<h4>Hello Teacher</h4><p>How are you. Hope you're doing well</p>"
};

Email_info.sendMail(email_structre,function(error){
    if (error) {
        console.log(`Something went wrong ${error.message}`)
    } else {
        console.log(`Email has been sent to  ${email_structre.to}`)
    }
})