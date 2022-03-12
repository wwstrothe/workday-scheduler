// console log to show JS connection
console.log("HELLO");

// variable list
var today = moment().format("LLLL");
var timeSlot = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']

// setting current date 
$("#currentDay").text(today);

var now = new Date().getHours();

function colorCode() {
  if (now > 9) {
    $("#9am").addClass("past");
  } else if (now >= 9 && now < 10) {
    $("#9am").addClass("present");
  } else if (now < 9) {
    $("#9am").addClass("future");
  }

  if (now > 10) {
    $("#10am").addClass("past");
  } else if (now >= 10 && now < 11) {
    $("#10am").addClass("present");
  } else if (now < 10) {
    $("#10am").addClass("future");
  }

  if (now > 11) {
    $("#11am").addClass("past");
  } else if (now >= 11 && now < 12) {
    $("#11am").addClass("present");
  } else if (now < 11) {
    $("#11am").addClass("future");
  }

  if (now > 12) {
    $("#12pm").addClass("past");
  } else if (now >= 12 && now < 13) {
    $("#12pm").addClass("present");
  } else if (now < 12) {
    $("#12pm").addClass("future");
  }

  if (now > 13) {
    $("#1pm").addClass("past");
  } else if (now >= 13 && now < 14) {
    $("#1pm").addClass("present");
  } else if (now < 13) {
    $("#1pm").addClass("future");
  }

  if (now > 14) {
    $("#2pm").addClass("past");
  } else if (now >= 14 && now < 15) {
    $("#2pm").addClass("present");
  } else if (now < 14) {
    $("#2pm").addClass("future");
  }

  if (now > 15) {
    $("#3pm").addClass("past");
  } else if (now >= 15 && now < 16) {
    $("#3pm").addClass("present");
  } else if (now < 15) {
    $("#3pm").addClass("future");
  }

  if (now > 16) {
    $("#4pm").addClass("past");
  } else if (now >= 16 && now < 17) {
    $("#4pm").addClass("present");
  } else if (now < 16) {
    $("#4pm").addClass("future");
  }

  if (now > 17) {
    $("#5pm").addClass("past");
  } else if (now >= 17 && now < 18) {
    $("#5pm").addClass("present");
  } else if (now < 17) {
    $("#5pm").addClass("future");
  }
}

colorCode();

// Save list to local storage on click
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

// Get List from local Storage
$(".9am").val(localStorage.getItem("09:00"));
$(".10am").val(localStorage.getItem("10:00"));
$(".11am").val(localStorage.getItem("11:00"));
$(".12pm").val(localStorage.getItem("12:00"));
$(".1pm").val(localStorage.getItem("13:00"));
$(".2pm").val(localStorage.getItem("14:00"));
$(".3pm").val(localStorage.getItem("15:00"));
$(".4pm").val(localStorage.getItem("16:00"));
$(".5pm").val(localStorage.getItem("17:00"));

// Delete item from row and local storage
$("#9amBtnDel").on("click", function(){
  var lsText = $(this).siblings(".9am").val("");
  localStorage.removeItem("09:00", lsText)
});