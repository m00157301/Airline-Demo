//Init
var i = 0;
var speed = 1000; // 1 sec

/* container1 */
var stop_zone = 4
var expand_container1 = 4
var divider = "<div><div class='airline_carousel' style='background:white; height:2px'></div></div>"; 
$(".left_container .airline_carousel:eq(" + (stop_zone-1) + ")").append(divider);

$(".left_container .airline_carousel:odd").css("background-color", "#343040");
$(".left_container .airline_carousel:even").css("background-color", "#657299");
$(".left_container .airline_carousel:gt(" + stop_zone + ")").css("z-index","-1");
$(".left_container .airline_carousel").eq(stop_zone).css("background-color", "white");

$(".left_container .airline_carousel").eq(expand_container1+3).addClass("expand");
$(".left_container .airline_carousel").eq(expand_container1+4).addClass("expand");
$(".left_container .airline_carousel").eq(expand_container1+5).addClass("expand");

/* right_container */
var expend_target = 8
$(".right_container .airline_carousel:even").css("background-color", "#343040");
$(".right_container .airline_carousel:odd").css("background-color", "#657299");
$(".right_container .airline_carousel").eq(expend_target).addClass("expand")
$(".right_container .airline_carousel").eq(expend_target-1).addClass("expand")
$(".right_container .airline_carousel").eq(expend_target-2).addClass("expand")

setTimeout(function () 
{
   $(".loading").css("opacity", 0)
}, 500);

//Loop
time = setInterval(function()
{
  if(i%2 == 0) 
  { 
	  //Container1
	  var container1 = $(".left_container .airline_carousel:gt(" + stop_zone + ")");
	  container1.animate({ "top": "-=25px" }, 500, "linear" )
    container1.eq(expand_container1+1).toggleClass("expand")
    container1.eq(expand_container1-2).toggleClass("expand")

    //Container2
	  var right_container = $(".right_container .airline_carousel");
    right_container.animate({ "top": "-=25px" }, 500, "linear" )
    right_container.eq(expend_target+1).toggleClass("expand")
    right_container.eq(expend_target-2).toggleClass("expand")
  }
  else
  {
	  //Container1
	  var container1 = $(".left_container .airline_carousel:gt(" + stop_zone + ")");
    container1.animate({ "top": "+=25px" }, 0, "linear" )
    container1.each(function(index)
	  {
      if(index == 0) 
	    { 
        $(this).insertAfter(container1.last()) 
	    }
    });

    //Container2
	  var right_container = $(".right_container .airline_carousel");
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