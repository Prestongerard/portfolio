$(document).ready(function() {
  var isDocked = false;
  var activatedColor = "default";
  console.log(activatedColor);

//initial animations

  $(".left-nav").animate({
    left: "0px"
  },850);

//slide nav-bar off screen
$(".preston-logo").click(function(){
  if (isDocked === false){
    $(".left-nav").animate({
      opacity: .5,
      left: "-200px",
    }, 800);
    isDocked = true;
    return;
  } else {
    $(".left-nav").animate({
      opacity: 1,
      left: "0px",
    }, 800);
    isDocked = false;
    return;
  }
});

//social media links
$(".github-icon").click(function () {
       window.open(
         'https://www.github.com/prestongerard',
         '_blank'
       );
});
$(".linkedin-icon").click(function () {
          window.open(
            'https://www.linkedin.com/in/prestonambrosky',
            '_blank'
          );
});

//hide project divs on page loads
  $(".square-cyan, .square-green, .square-orange, .square-purple").hide();

  $(".about-link").click(function(){
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
    if (activatedColor === "about") {
      return;
    }

    else if (activatedColor === "green"){
      $(".square-green").fadeOut("slow");
      $(".square-about").fadeIn("slow");
      activatedColor = "default";
    }

    else if (activatedColor === "orange"){
      $(".square-orange").fadeOut("slow");
      $(".square-about").fadeIn("slow");
      activatedColor = "default";
    }
    else if (activatedColor === "cyan") {
      $(".square-cyan").fadeOut("slow");
      $(".square-about").fadeIn("slow");
      activatedColor = "default";
    }
    else if (activatedColor === "purple") {
      $(".square-purple").fadeOut("slow");
      $(".square-about").fadeIn("slow");
      activatedColor = "default";
    }
  };

  function greenClick(){
    if(activatedColor === "green") {
      return;
    }
    else if (activatedColor === "default"){
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

  };

  function orangeClick(){
    if(activatedColor === "orange") {
      return;
    }
    else if (activatedColor === "default"){
      $(".square-about").fadeOut("slow");
      $(".square-orange").fadeIn("slow");
      activatedColor = "orange";
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
  };

  function cyanClick(){
    if(activatedColor === "cyan") {
      return;
    }
    else if (activatedColor === "default"){
      $(".square-about").fadeOut("slow");
      $(".square-cyan").fadeIn("slow");
      activatedColor = "cyan";
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
  };

  function purpleClick(){
    if(activatedColor === "purple") {
      return;
    }
    else if (activatedColor ===
      "default"){
      $(".square-about").fadeOut("slow");
      $(".square-purple").fadeIn("slow");
      activatedColor = "purple";
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
  };
});
