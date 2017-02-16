$(function(){
	$("body").css({"padding-bottom":Q(140)})
	$(".Mine_Faq").css({"padding-left":Q(20),"padding-top":Q(20),"padding-right":Q(20)});
	$(".Mine_Faq p").css({"line-height":Q(58),"font-size":Q(32),"text-indent":Q(32)})
	$(".Mine_Faq h3").css({"font-size":Q(36),"padding-bottom":Q(20),"padding-top":Q(20)})
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