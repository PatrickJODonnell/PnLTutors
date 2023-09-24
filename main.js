// Function for the contact submit button
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

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "messagepnl@gmail.com",
        Password : "DA724F805BD6CE752D72DD643188FBA84926",
        To : 'laurencoop27@gmail.com',
        From : "messagepnl@gmail.com",
        Subject : "Someone wants our services!",
        Body : fname + " " + lname + " with an email of " + email + " has said this: " + message 
    })
};

function reset__info() {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
};