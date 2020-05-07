function slideSlider(){
    $("#slider-scroller").css({"left":"0%","transition":"all 0s linear"});
    $("#slider-scroller").css({"left": String(parseInt($("#slider-scroller").css("left")) - 500) + "px","transition":"all 5s linear"});
    setTimeout(function(){moveSliderItem()}, 2635);
  }
  
  function moveSliderItem(){
    $("#slider-scroller div").first().detach().appendTo($("#slider-scroller"));
    slideSlider();
  }
  
  slideSlider();
  window.onscroll = function() {myFunction()};

// Get the navbar
var bottom-nav = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = bottom-nav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}