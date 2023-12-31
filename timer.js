var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
var popupCount = 1;

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "2024";

    // Display all New Year wishes popups after countdown reaches zero
    showNewYearWishes(1); // Start from the first popup
  }
}, 1000);

function showNewYearWishes(count) {
  var message = "";

  // Define messages for each popup
  switch (count) {
    case 1:
      message = "HAPPY NEW YEAR Fiii !!!";
      break;
    case 2:
      message =
        "'Time flies so fast'-kata fiona, YUPPP It's already the new year! yayyy ";
      break;
    case 3:
      message =
        "Firstly, Thank you for every beautiful moment we shared last year.";
      break;
    case 4:
      message =
        "Every moment with you is precious. May we continue our journey together in the new year.";
      break;
    case 5:
      message =
        "May in this new year, we be blessed with good health, peace of mind, and abundant happiness.";
      break;
    case 6:
      message =
        "In this new year, let's look forward with a new spirit, strong determination, and the belief that we can achieve all that we dream of.";
      break;
    default:
      // Display default message
      message = "All the best to you, be happy always, take care, bye!";
      break;
  }

  // Display popup with the given message
  alert(message);

  // Increment the popup counter
  count++;

  // Continue displaying popups until we reach the default message
  if (count <= 7) {
    showNewYearWishes(count);
  }
}
