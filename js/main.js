const introHome = document.querySelector("#intro-navbar");
introHome.style.backgroundColor = "rgb(138, 7, 225)";
const introBtn = document.querySelector("#intro-btn");
introBtn.addEventListener("click", function (e) {
  window.setTimeout(function () {
    location.href = "https://www.w3schools.com/jquery/jquery_selectors.asp";
  }, 500);
});
