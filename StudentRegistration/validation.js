$(function () {
  $("#fname_error_message").hide();
  $("#lname_error_message").hide();
  $("#email_error_message").hide();
  $("password_error_message").hide();
});
let error_fname = false;
let error_lname = false;
let error_email = false;

$("#fname").focusout(function () {
  check_fname();
});
$("#lname").focusout(function () {
  check_lname();
});
$("#email").focusout(function () {
  check_email();
});
$("#password").focusout(function () {
  check_password();
});

function check_fname() {
  let pattern = /^[a-zA-z]*$/;
  let fname = $("#fname").val();
  if (pattern.test(fname) && fname != "") {
    $("#fname_error_message").hide();
  } else {
    // $("#fname_error_message").html("Should contain only Characters");
    $("#fname").css("border-bottom", "2px solid #F90A0A");
    $("#fname_error_message")
      .text("Should contain only Characters")
      .show()
      .fadeOut(1000)
      .css("color", "red");
    error_fname = true;
  }
}
function check_lname() {
  let pattern = /^[a-zA-z]*$/;
  let lname = $("#lname").val();
  if (pattern.test(lname) && lname != "") {
    $("#lname_error_message").hide();
  } else {
    document.getElementsByName();
    $("#lname_error_message")
      .text("Should contain only Characters")
      .show()
      .fadeOut(1000)
      .css("color", "red");
    $("#lname").css("border-bottom", "2px solid #F90A0A");
    error_lname = true;
  }
}
function check_email() {
  let pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  let email = $("#email").val();
  if (pattern.test(email) && email != "") {
    $("#email_error_message").hide();
  } else {
    $("#email_error_message")
      .text("Invalid Email")
      .show()
      .fadeOut(1000)
      .css("color", "red");
    $("#email").css("border-bottom", "2px solid #F90A0A");
    error_email = true;
  }
}
function check_password() {
  let pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  let password = $("#password").val();
  if (pattern.test(password) && password != "") {
    $("#password_error_message").hide();
  } else {
    $("#password_error_message")
      .text("Invalid Email")
      .show()
      .fadeOut(2000)
      .css("color", "red");
    $("#email").css("border-bottom", "2px solid #F90A0A");
    error_email = true;
  }
}
