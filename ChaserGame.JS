onEvent("imgHatKid", "mouseover", function(){
setPosition("imgHatKid", randomNumber(0, 340), randomNumber(120, 230));
});
onEvent("startScreen", "click", function() {
  console.log("startScreen clicked!");
});
onEvent("btnStart", "click", function(){
setScreen("screen1");
});
onEvent("image1", "click", function(event) {
  console.log("background clicked!");
});
onEvent("btnStartOver", "click", function(event) {
  setScreen("startScreen");
});
onEvent("image1", "click", function(){
setScreen("screenGameOver");
});
onEvent("screen1", "click", function() {
  setScreen("screenGameOver");
});
