function populateDivs () {
  for(var x = 0; x < 20; x++) {
    var leftPos = Math.random() * 400 + "px";
    // leftPos = Math.round(leftPos) + "px"
    var topPos = Math.random() * 400 + "px";
    // topPos = Math.round(topPos) + "px"
    var newDiv = document.createElement("div");
    $(newDiv).height(30).width(30).css({
      position: "absolute",
      left: leftPos,
      top: topPos,
      backgroundColor: "green"
    });
    $("body").append(newDiv);
  };
}

$(document).ready(populateDivs);