// =========================
// SCRIPT.JS
// =========================

// COUNTDOWN TIMER

const weddingDate = new Date(
    "October 29, 2026 10:00:00"
).getTime();

const timer = setInterval(function(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
    );

    const seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){

    clearInterval(timer);

    document.querySelector(".countdown").innerHTML =
    "<h2>The Wedding Day Is Here ❤️</h2>";

    }

},1000);

// =========================
// RSVP TO GOOGLE SHEETS
// =========================

const scriptURL =
"https://script.google.com/macros/s/AKfycbzeQuNyrdMKt9srZKzynTDFqmFuOYpicXx6CJaV-adrMS5sHtrAv0fcuJX7JgK94hNR/exec";

const form =
document.getElementById("rsvp-form");

const message =
document.getElementById("form-message");

form.addEventListener("submit", e => {

    e.preventDefault();

    const formData = {

    name:
    document.getElementById("name").value,

    email:
    document.getElementById("email").value,

    attendance:
    document.getElementById("attendance").value,

    guests:
    document.getElementById("guests").value,

    songs:
    document.getElementById("songs").value,

    message:
    document.getElementById("message").value

    };

    fetch(scriptURL, {

    method: "POST",

    body: JSON.stringify(formData)

    })

    .then(response => {

    message.innerHTML =
    "RSVP submitted successfully ❤️";

    form.reset();

    })

    .catch(error => {

    message.innerHTML =
    "Something went wrong.";

    });

});