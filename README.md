## Project Title
This project consists of my Software Developer portfolio. It contains information about me and links to my projects, GitHub, LinkedIn. 

## Motivation
The motivation of this project was to create my software developer portfolio so people are able to see my work and get my information. 

## Tech/framework used
This web page was created with HTML, CSS, and JavaScript. The JavaCcript library, jQuery, was used for this project. The contact form also sends the user input to my personal google-sheet backend. This was possible through the sheetdb free api. 

## Screenschots
<img width="1440" alt="port 1" src="https://user-images.githubusercontent.com/101440413/172091283-7a38e434-2e37-4dda-9ca8-f86bc4f1496d.png">
<img width="1440" alt="port 2" src="https://user-images.githubusercontent.com/101440413/172091294-7accdfcb-c92d-4fff-b8dc-7db676c8f511.png">
<img width="1440" alt="port 3" src="https://user-images.githubusercontent.com/101440413/172091298-779964c7-171d-4afd-8e45-85395c6c697f.png">
<img width="1440" alt="port 4" src="https://user-images.githubusercontent.com/101440413/172091301-df17a46a-fc92-4a47-aa0f-f400aa12eaa3.png">

## API Reference
var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then(alert("Info Sent! Will reply shortly"));
});

