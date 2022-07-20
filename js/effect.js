const effectsHome = document.querySelector("#effects-navbar");
effectsHome.style.backgroundColor = "rgb(39, 162, 223)";
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
});
