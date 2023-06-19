let currentDate = new Date();
let birthday = new Date("09/23/2004");

// Gets difference of time and is in milliseconds
let timeDifference = currentDate - birthday;
// Convert milliseconds to years and rounds down
let age = Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 365);

let allAgeSpans = document.querySelectorAll(".age");

allAgeSpans.forEach(element => {
    element.innerHTML = age;
});