let flag = 0;
var credentials = new Map([["hello", "123"]]);
// ---------------------------------------------------------------------------------
$("#c").click(function(){
    if($(".login").css("display")=="block"){
        $(".login").css("display","none");
        $(".signup").css("display","block");
    }
})

// -------------------------------login------------------------------------
let privledge = false;
$("#log").click(function () {
  $(".alert").text(" ");
  $(".disclaimer").text("Please fill details correctly");
  $(".alert1").css("animation", "none");

  if (credentials.has($("#username").val())) {
    if (credentials.get($("username").val())==$("username").val()) {
      $(".alert1").css("border-right", "solid 9px green");
      $(".disclaimer").text("Login Successful");
      privledge = true;
      setTimeout(function () {
          window.location.replace("game.html");
      }, 2000);
    } else {
      $(".alert").text("Password Incorrect");
    }
  } else {
    $(".alert").text("Email Id Incorrect");
  }
  setTimeout(function () {
    $(".alert1").css("animation", "appear 5s");
  }, 200);
});


// --------------------------------signup-------------------------------------------
$(".submitbtn").click(function () {
  $(".alert").text(" ");
  $(".alert1").css("animation", "none");

  var fn = [$("#fn").val(), $("#ln").val(), $("#mn").val(), $("#pass").val()];
  var isValid = true;
  $(".form-field").each(function () {
    if ($(this).val() === "") {
      isValid = false;
    }
  });

  if (isValid == false) {
    $(".alert").append("<br> Details are incomplete");
    flag = 1;
  }
  if (numck(fn[0]) || numck(fn[1])) {
    console.log("check1");
    $(".alert").append("<br> No number in Name");
    flag = 1;
  }
  if (SpecialChar(fn[0]) || SpecialChar(fn[1])) {
    $(".alert").append("<br>No special character in Name");
    flag = 1;
  }
  if (lcharchk(fn[2]) || ucharchk(fn[2]) || SpecialChar(fn[2])) {
    $(".alert").append("<br>Please enter digit in mobile no.");
    flag = 1;
  }
  if (!lcharchk(fn[3])) {
    $(".alert").append("<br>Please enter lowercase letters in password");
    flag = 1;
  }
  if (!ucharchk(fn[3])) {
    $(".alert").append("<br>Please enter uppercase letters in password");
    flag = 1;
  }
  if (!SpecialChar(fn[3])) {
    $(".alert").append(
      "<br>The password should contain atleast one special character"
    );
    flag = 1;
  }
  if (!numck(fn[3])) {
    $(".alert").append("<br>Number is missing password");
    flag = 1;
  }

  if (flag == 0) {
    $(".alert1").css("border-right", "solid 9px green");
    $(".disclaimer").text("Account Created");
    credentials.set($("#ei").val(), $("#pass").val());
    setTimeout(function () {
        $(".login").css("display","block");
        $(".signup").css("display","none");
    }, 2000);
  }
  setTimeout(function () {
    $(".alert1").css("animation", "appear 5s");
  }, 200);

  flag = 0;
});
function lcharchk(str) {
  return /[a-z]/.test(str);
}
function ucharchk(str) {
  return /[A-Z]/.test(str);
}
function numck(str) {
  return /[0-9]/.test(str);
}
function SpecialChar(str) {
  return /[!@#$%^&*()_+\-= \[\]{};':"\\|,.<>\/?]+/.test(str);
}


