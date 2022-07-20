const effectsHome = document.querySelector("#effects-navbar");
effectsHome.style.backgroundColor = "rgb(39, 162, 223)";
const showBox = document.querySelector("#show-box");
showBox.style.display = "none";
const fadeInBox = document.querySelector("#fadeIn-box");
fadeInBox.style.display = "none";
const slideDownBox = document.querySelector("#slideDown-box");
slideDownBox.style.display = "none";

$(document).ready(function () {
  $("#anm-btn").click(function () {
    $("#animate-box").animate(
      {
        left: "50px",
        height: "toggle",
      },
      1000,
      function () {
        // Animation complete.
      }
    );
  });

  $("#hide-btn").click(function () {
    $("#hide-box").hide();
  });

  $("#show-btn").click(function () {
    $("#show-box").show();
  });

  $("#toggle-btn").click(function () {
    $("#toggle-box").toggle(1000);
  });

  $("#fadeIn-btn").click(function () {
    $("#fadeIn-box").fadeIn(3000);
  });
  $("#fadeOut-btn").click(function () {
    $("#fadeOut-box").fadeOut(5000);
  });
  $("#fadeToggle-btn").click(function () {
    $("#fadeToggle-box").fadeToggle(1000);
  });
  $("#fadeTo-btn").click(function () {
    $("#fadeTo-box").fadeTo(1000, 0.2);
    $("#fadeTo-box").fadeTo(1000, 0.9);
  });
  $("#slideDown-btn").click(function () {
    $("#slideDown-box").slideDown(1000);
  });
  $("#slideUp-btn").click(function () {
    $("#slideUp-box").slideUp(1000);
  });
  $("#slideToggle-btn").click(function () {
    $("#slideToggle-box").slideToggle(1000);
  });
  $("#delay-btn").click(function () {
    $("#delay-box").delay(1000).fadeToggle(2000);
  });
});
