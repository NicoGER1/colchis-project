const message =
  "Thank you for submitting your message the Kingdom will come back to you as soon as possible.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
