$("#toggle-button").click(function () {
  $("nav ul").toggle("slow");
});

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
