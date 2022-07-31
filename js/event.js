const eventsHome = document.querySelector("#event-navbar");
eventsHome.style.backgroundColor = "rgb(121, 252, 208)";
CodeMirror.fromTextArea(document.getElementById("editor"), {
  lineNumbers: true,
  tabSize: 2,
  mode: "javascript",
  theme: "night",
  autoCloseBrackets: true,
});
$(document).ready(function () {
  $(window).resize(function () {
    var wresult = "Width = " + $(window).width();
    var hresult = "Height = " + $(window).height();
    $("#width").html(wresult);
    $("#height").html(hresult);
  });
});
