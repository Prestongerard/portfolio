$(document).ready(function() {
  var activatedColor = "default";
  console.log(activatedColor);

//initial animations

  $(".left-nav").animate({
    left: "0px"
  },1000);

//hide projects divs on page loads

  $(".square-cyan, .square-green, .square-orange, .square-purple").hide();

  $(".square-about").click(function(){
    console.log(activatedColor);
    aboutClick();
  });

  $(".green-link").click(function(){
    console.log(activatedColor);
    greenClick();
  });

  $(".orange-link").click(function(){
    console.log(activatedColor);
    orangeClick();
  });

  $(".cyan-link").click(function(){
    console.log(activatedColor);
    cyanClick();
  });

  $(".purple-link").click(function(){
    console.log(activatedColor);
    purpleClick();
  });


  function aboutClick(){
    if (activatedColor === "default" || "about") {
      return;
    }
    else if (activatedColor === "orange"){
      $(".square-orange").fadeOut("slow");
      $(".square-about").fadeIn("slow");
      activatedColor = "about";
    }
    else if (activatedColor === "cyan") {
      $(".square-cyan").fadeOut("slow");
      $(".square-about").fadeIn("slow");
      activatedColor = "about";
    }
    else if (activatedColor === "purple") {
      $(".square-purple").fadeOut("slow");
      $(".square-about").fadeIn("slow");
      activatedColor = "about";
    }
    else if (activatedColor === "default") {
      $(".square-about").fadeIn("slow");
      activatedColor = "default";
    }
  };

  function greenClick(){
    if(activatedColor === "green") {
      return;
    }
    else if (activatedColor === "about"){
      $(".square-about").fadeOut("slow");
      $(".square-green").fadeIn("slow");
      activatedColor = "green";
    }
    else if (activatedColor === "orange"){
      $(".square-orange").fadeOut("slow");
      $(".square-green").fadeIn("slow");
      activatedColor = "green";
    }
    else if (activatedColor === "cyan") {
      $(".square-cyan").fadeOut("slow");
      $(".square-green").fadeIn("slow");
      activatedColor = "green";
    }
    else if (activatedColor === "purple") {
      $(".square-purple").fadeOut("slow");
      $(".square-green").fadeIn("slow");
      activatedColor = "green";
    }
    else if (activatedColor === "default") {
      $(".square-green").fadeIn("slow");
      activatedColor = "green";
    }
  };

  function orangeClick(){
    if(activatedColor === "orange") {
      return;
    }
    else if (activatedColor === "green"){
        $(".square-green").fadeOut("slow");
        $(".square-orange").fadeIn("slow");
        activatedColor = "orange";
    }
    else if (activatedColor === "cyan") {
        $(".square-cyan").fadeOut("slow");
        $(".square-orange").fadeIn("slow");
        activatedColor = "orange";
    }
    else if (activatedColor === "purple") {
      $(".square-purple").fadeOut("slow");
      $(".square-orange").fadeIn("slow");
      activatedColor = "orange";
    }
    else if (activatedColor === "default") {
      $(".square-orange").fadeIn("slow");
      activatedColor = "orange";
    }
  };

  function cyanClick(){
    if(activatedColor === "cyan") {
      return;
    }
    else if (activatedColor === "orange"){
      $(".square-orange").fadeOut("slow");
      $(".square-cyan").fadeIn("slow");
      activatedColor = "cyan";
    }
    else if (activatedColor === "green") {
      $(".square-green").fadeOut("slow");
      $(".square-cyan").fadeIn("slow");
      activatedColor = "cyan";
    }
    else if (activatedColor === "purple") {
      $(".square-purple").fadeOut("slow");
      $(".square-cyan").fadeIn("slow");
      activatedColor = "cyan";
    }
    else if (activatedColor === "default") {
      $(".square-cyan").fadeIn("slow");
      activatedColor = "cyan";
    }
  };

  function purpleClick(){
    if(activatedColor === "purple") {
      return;
    }
    else if (activatedColor === "orange"){
      $(".square-orange").fadeOut("slow");
      $(".square-purple").fadeIn("slow");
      activatedColor = "purple";
    }
    else if (activatedColor === "green") {
      $(".square-green").fadeOut("slow");
      $(".square-purple").fadeIn("slow");
      activatedColor = "purple";
    }
    else if (activatedColor === "cyan") {
      $(".square-cyan").fadeOut("slow");
      $(".square-purple").fadeIn("slow");
      activatedColor = "purple";
    }
    else if (activatedColor === "default") {
      $(".square-purple").fadeIn("slow");
      activatedColor = "purple";
    }
  };
});
