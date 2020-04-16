$(function () {
  $("#header-button").on("click", function () {
    $("#header-button").toggleClass("open");
    $("#menu").fadeToggle(200);
  });
});
