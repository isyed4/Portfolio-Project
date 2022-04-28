// toggle button for hamburger
$("#toggle-button").click(function () {
  $("nav ul").toggle("slow");
});

// $('.projects .project-items .project1 a img').hover(function(){
//     $( this ).fadeOut( 100 );
//     $( this ).fadeIn(100);
// })


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