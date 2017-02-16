$(function(){	
	$("body").css({"padding-bottom":Q(140)})
	$(".Records").css({"padding-left":Q(20),"padding-top":Q(40),"padding-bottom":Q(30),"padding-right":Q(20)});
	$(".pic img").css({"height":Q(90),"width":Q(90),"margin-right":Q(22)})
	$(".pic p").css({"font-size":Q(32),"line-height":Q(48)})
	
	$(".order p").css({"height":Q(82),"line-height":Q(85),"font-size":Q(32),})
	$(".order b").css({"height":Q(79),"line-height":Q(82),"font-size":Q(32),})
	
	$(".date").css({"margin-top":Q(-7)})
	$(".date p").css({"font-size":Q(28),})
	$(".date a").css({"font-size":Q(31),})
//	$(".walletRecords p").css({"line-height":Q(58),"font-size":Q(32),"text-indent":Q(32)})
//	$(".walletRecords h3").css({"font-size":Q(36),"padding-bottom":Q(16),"padding-top":Q(12)})
	$("footer a").eq("3").find("span").addClass("light")
	$("footer a").eq("3").find("b").addClass("light")
})	

function Q(obj){
	var width = $(window).width()
    if(width>720){
    	width=720;
    }
	var num=(parseInt(obj)/720).toFixed(20) * width;
	return num+"px";
}