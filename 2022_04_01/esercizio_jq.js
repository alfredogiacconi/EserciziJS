$("h1, p").css("text-align", "center");

$(".benvenuto").css("color", "blue");

$("#desc:contains('Lorem Ipsum')")
  .css("color", "red")
  .css("width", "60%")
  .css("margin", "0 auto");

$("#bottone")
  .css("background-color", "green")
  .css("color", "white")
  .css("border", "1px solid black")
  .css("display", "block")
  .css("margin", "0 auto");

$("body").css("background-color", "lightred");

$("p.benvenuto").prepend("<span>Benvenuto! </span>");

$("p#desc").append('<span id="s1">autore: ... </span>');

$("p#desc").after('<span id="s2"> ----> </span>');

$("span#s1").css("color", "black");

$("#s2").attr("id", "nuovo-id");

$("span#nuovo-id").css("color", "green");
