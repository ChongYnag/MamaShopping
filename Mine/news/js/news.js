$(function(){
	
	$("body").css({"padding-bottom":Q(140)})
	$(".news a").css({"height":Q(105),"padding-left":Q(20),"padding-right":Q(20)})
	$(".news a span").css({"line-height":Q(105),"font-size":Q(32),})
	$(".news a i").css({"height":Q(33),"width":Q(18),"margin-top":Q(37),})
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