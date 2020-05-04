//Init
var i = 0;
var speed = 1000; // 1 sec

/* container1 */
var stop_zone = 4
var expand_container1 = 4
var divider = "<div><div class='carousell' style='background:white; height:2px'></div></div>"; 
$(".container .carousell:eq(" + (stop_zone-1) + ")").append(divider);

$(".container .carousell:odd").css("background-color", "#343040");
$(".container .carousell:even").css("background-color", "#657299");
$(".container .carousell:gt(" + stop_zone + ")").css("z-index","-1");
$(".container .carousell").eq(stop_zone).css("background-color", "white");

$(".container .carousell").eq(expand_container1+3).addClass("expand");
$(".container .carousell").eq(expand_container1+4).addClass("expand");
$(".container .carousell").eq(expand_container1+5).addClass("expand");

/* container2 */
var expend_target = 8
$(".container2 .carousell:even").css("background-color", "#343040");
$(".container2 .carousell:odd").css("background-color", "#657299");
$(".container2 .carousell").eq(expend_target).addClass("expand")
$(".container2 .carousell").eq(expend_target-1).addClass("expand")
$(".container2 .carousell").eq(expend_target-2).addClass("expand")

setTimeout(function () {
   $(".loading").css("opacity", 0)
}, 500);

//Loop
time = setInterval(function(){
  if(i%2 == 0) 
  { 
	//Container1
	var container1 = $(".container .carousell:gt(" + stop_zone + ")");
	container1.animate({ "top": "-=25px" }, 500, "linear" )
    container1.eq(expand_container1+1).toggleClass("expand")
    container1.eq(expand_container1-2).toggleClass("expand")

    //Container2
	var container2 = $(".container2 .carousell");
    container2.animate({ "top": "-=25px" }, 500, "linear" )
    container2.eq(expend_target+1).toggleClass("expand")
    container2.eq(expend_target-2).toggleClass("expand")
  }
  else
  {
	//Container1
	var container1 = $(".container .carousell:gt(" + stop_zone + ")");
    container1.animate({ "top": "+=25px" }, 0, "linear" )
    container1.each(function(index)
	{
      if(index == 0) 
	  { 
        $(this).insertAfter(container1.last()) 
	  }
    });

    //Container2
	var container2 = $(".container2 .carousell");
    container2.animate({ "top": "+=25px" }, 0, "linear" )
    container2.each(function(index)
	{
      if(index == 0)
	  { 
        $(this).insertAfter(container2.last())
	  }
    });

  }
  
  i=++i%2;
},speed);