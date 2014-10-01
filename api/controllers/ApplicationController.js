/**
 * ApplicationController
 */
 
var nodemailer = require('nodemailer');

module.exports = {
    
  // GET /
  index: function(req, res) {
  	return res.view();
  },

  // POST /contact
  contact: function(req, res) {
    var transporter = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "**************@gmail.com",
            pass: "********"
        }
    });

    var mailOptions = {
      from: req.param('name'),
      to: 'Hugh Zabriskie, hzabriskie@college.harvard.edu',
      subject: req.param('subject'), // [WEBSITE] to help identify message
      text: req.param('message') + 
          "\n\n\n\n" + "---\n" +
          "Name: " + req.param('name') + "\n" +
          "Email: " + req.param('email')
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
          return res.json({
            error: error
      });
      } else{
          console.log('Message sent: ' + info.response);
          return res.redirect('/');
      }
    });
  },

  _config: {}

  
};
