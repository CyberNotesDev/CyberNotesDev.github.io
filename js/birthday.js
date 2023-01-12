var currentDate = new Date();
var birthday = new Date("09/23/2004");

// Gets difference of time and is in milliseconds
var timeDifference = currentDate - birthday;
// Convert milliseconds to years and rounds down
var age = Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 365);

document.getElementById("age").innerText = age;