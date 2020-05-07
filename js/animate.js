//Init
var i = 0;
var speed = 1000; // 1 sec

/* left_container */
var expand_left_container = 8

$(".left_container .airline_carousel:even").css("background-color", "#343040");
$(".left_container .airline_carousel:odd").css("background-color", "#657299");

$(".left_container .airline_carousel").eq(expand_left_container+1).addClass("expand");
$(".left_container .airline_carousel").eq(expand_left_container).addClass("expand");
$(".left_container .airline_carousel").eq(expand_left_container-1).addClass("expand");
$(".left_container .airline_carousel").eq(expand_left_container-2).addClass("expand");
$(".left_container .airline_carousel").eq(expand_left_container-3).addClass("expand");

/* right_container */
var expand_right_container = 8
$(".right_container .airline_carousel:even").css("background-color", "#343040");
$(".right_container .airline_carousel:odd").css("background-color", "#657299");
$(".right_container .airline_carousel").eq(expand_right_container+1).addClass("expand")
$(".right_container .airline_carousel").eq(expand_right_container).addClass("expand")
$(".right_container .airline_carousel").eq(expand_right_container-1).addClass("expand")
$(".right_container .airline_carousel").eq(expand_right_container-2).addClass("expand")
$(".right_container .airline_carousel").eq(expand_right_container-3).addClass("expand")

setTimeout(function () 
{
   $(".loading").css("opacity", 0)
}, 500);

//Loop
time = setInterval(function()
{
  var left_container = $(".left_container .airline_carousel");
  var right_container = $(".right_container .airline_carousel");

  if(i%2 == 0) 
  { 
	  //left_container
	  left_container.animate({ "top": "-=25px" }, 500, "linear" )
    left_container.eq(expand_left_container+2).toggleClass("expand")
    left_container.eq(expand_left_container-3).toggleClass("expand")

    //right_container
    right_container.animate({ "top": "-=25px" }, 500, "linear" )
    right_container.eq(expand_right_container+2).toggleClass("expand")
    right_container.eq(expand_right_container-3).toggleClass("expand")
  }
  else
  {
	  //left_container
    left_container.animate({ "top": "+=25px" }, 0, "linear" )
    left_container.each(function(index)
	  {
      if(index == 0) 
	    { 
        $(this).insertAfter(left_container.last()) 
	    }
    });

    //right_container
    right_container.animate({ "top": "+=25px" }, 0, "linear" )
    right_container.each(function(index)
	  {
      if(index == 0)
	    { 
        $(this).insertAfter(right_container.last())
	    }
    });
  }
  
  i=++i%2;
},speed);