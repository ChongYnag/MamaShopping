$(function(){	
	$("body").css({"padding-bottom":Q(140)})
	$("footer a").eq("3").find("span").addClass("light")
	$("footer a").eq("3").find("b").addClass("light")
	
	$(".cash div").css({"padding-left":Q(20),"padding-right":Q(20),"height":Q(120)});
	$(".cash div span").css({"width":Q(234),"line-height":Q(120),"font-size":Q(32)})
	$(".cash div input").css({"height":Q(120),"width":Q(446),"font-size":Q(32)})
	$(".cash div").eq(0).css({"padding-left":Q(20),"padding-right":Q(20),"height":Q(128)});
	$(".cash div").eq(1).css({"padding-left":Q(20),"padding-right":Q(20),"height":Q(121)});
	
	$(".cash div").eq(1).find("span").css({"width":Q(234),"line-height":Q(121),"font-size":Q(32)})
	$(".cash div").eq(2).find("span").css({"line-height":Q(120)})
	$(".cash div").eq(2).find("input").css({"height":Q(120)})
	
	$(".cash div").eq(3).css({"height":Q(118)})
	$(".cash div").eq(3).find("span").css({"line-height":Q(118)})
	$(".cash div").eq(3).find("input").css({"height":Q(118)})
//	$(".cash div").css({"padding-left":Q(20),"padding-right":Q(20),"height":Q(120)});
//	$(".cash div").css({"padding-left":Q(20),"padding-right":Q(20),"height":Q(120)});
//	$(".cash div").css({"padding-left":Q(20),"padding-right":Q(20),"height":Q(120)});
//	$(".cash div").css({"padding-left":Q(20),"padding-right":Q(20),"height":Q(120)});
//	$(".cash div span").css({"width":Q(234),"line-height":Q(128),"font-size":Q(32)})
//	$(".cash div input").css({"height":Q(128),"width":Q(446),"font-size":Q(32)})
	
	$(".cash div b").css({"font-size":Q(32),"line-height":Q(120)})
	
	$(".cash div p").css({"margin-right":Q(50)})
	$(".cash div p i").css({"width":Q(36),"height":Q(36),"margin-top":Q(40),"margin-right":Q(12)})
	
	$(".cash a").css({"height":Q(90),"margin-top":Q(20),"font-size":Q(36),"line-height":Q(90),"margin-left":Q(20),"margin-right":Q(20),})
	
	
	$(".fail").css({"height":Q(50),"width":Q(316),"margin-top":Q(-25),"margin-left":Q(-158)})
	
})	

function Q(obj){
	var width = $(window).width()
    if(width>720){
    	width=720;
    }
	var num=(parseInt(obj)/720).toFixed(20) * width;
	return num+"px";
}