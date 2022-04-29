$("#toggle-button").click(function () {
  $("nav ul").toggle("slow");
});

function sendEmail() {
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "username",
        Password : "password",
        To : 'imran.syed.h3@gmail.com',
        From : $('#email').val,
        Subject : "New Contact from Portfolio",
        Body : "Name: " + $('#name').val
                + "<br> Email: " + $('#email').val
                + "<br> Message: " + $('#message').val
    }).then(
      message => alert("Message Sent! Will reach back to you shortly!") 
    );
}