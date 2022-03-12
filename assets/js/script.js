// console log to show JS connection
console.log("HELLO");

// variable list
var today = moment().format("dddd MMMM Do, YYYY");
var timeSlot = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']

var timeAsOfNow = moment().format("HH");

// setting current date 
$("#currentDay").text(today);


$(".9amBtn").on("click", function() {
  var lsText = $(".9am").val();
  localStorage.setItem("09:00", lsText);
});

$(".10amBtn").on("click", function() {
  var lsText = $(".10am").val();
  localStorage.setItem("10:00", lsText);
});

$(".11amBtn").on("click", function() {
  var lsText = $(".11am").val();
  localStorage.setItem("11:00", lsText);
});

$(".12pmBtn").on("click", function() {
  var lsText = $(".12pm").val();
  localStorage.setItem("12:00", lsText);
});

$(".1pmBtn").on("click", function() {
  var lsText = $(".1pm").val();
  localStorage.setItem("13:00", lsText);
});

$(".2pmBtn").on("click", function() {
  var lsText = $(".2pm").val();
  localStorage.setItem("14:00", lsText);
});

$(".3pmBtn").on("click", function() {
  var lsText = $(".3pm").val();
  localStorage.setItem("15:00", lsText);
});

$(".4pmBtn").on("click", function() {
  var lsText = $(".4pm").val();
  localStorage.setItem("16:00", lsText);
});

$(".5pmBtn").on("click", function() {
  var lsText = $(".5pm").val();
  localStorage.setItem("17:00", lsText);
});

$(".9am").val(localStorage.getItem("09:00"));
$(".10am").val(localStorage.getItem("10:00"));
$(".11am").val(localStorage.getItem("11:00"));
$(".12pm").val(localStorage.getItem("12:00"));
$(".1pm").val(localStorage.getItem("13:00"));
$(".2pm").val(localStorage.getItem("14:00"));
$(".3pm").val(localStorage.getItem("15:00"));
$(".4pm").val(localStorage.getItem("16:00"));
$(".5pm").val(localStorage.getItem("17:00"));