// Function for the contact submit button
const nodemailer = require('nodemailer');
function gather__info () {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    document.querySelector('.extra__info').innerHTML = "Submitted! We will get back to you shortly!";
    document.querySelector('.extra__info').style.color = 'green';
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
    async function sendEmail() {
        try {
          const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: 'messagepnl@gmail.com',
              pass: 'BaSkEtBaLl22@@'
            }
          });
      
          const mailOptions = {
            from: 'messagepnl@gmail.com',
            to: 'patrickjodonnell@comcast.net',
            subject: 'Hello',
            text: 'This is the body of the email.'
          };
      
          const info = await transporter.sendMail(mailOptions);
          console.log('Email sent:', info.messageId);
        } catch (error) {
          console.error('Error occurred:', error);
        }
    }
    sendEmail();
};

function reset__info() {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
};