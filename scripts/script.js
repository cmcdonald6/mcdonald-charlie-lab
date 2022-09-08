$(document).ready(function () {
$("#outputDiv").hide();
  $("#dogeOne").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked doge 1");
    $("#topText").text("That is simply not correct.");
    $("#outputDiv").toggle();
  });

  $("#dogeTwo").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked doge 2");
    $("#topText").text("you know the correct option, sir");
    $("#outputDiv").toggle();
  });
  $("#dogeThree").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked doge 3");
    $("#topText").text("wow! much muscle, very swolge");
    $("#outputDiv").toggle();
  });
});
