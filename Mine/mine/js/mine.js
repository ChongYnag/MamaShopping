function hengshuping(){
	if(window.orientation==90||window.orientation==-90){
		alert("为了更好的体验，请使用竖屏浏览")		
	 }
}
$(function(){
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, true);
//样式引用
MineCss()
})	

function MineCss(){
	$("footer a").eq("3").find("span").addClass("light")
	$("footer a").eq("3").find("b").addClass("light")
	$(".My").css({"width":Q(720),"height":$(window).height()})
	$(".My_Div").css({"width":Q(200),"height":Q(200),"margin-left":Q(-100),"margin-top":Q(364),})
	$(".Address").css({"bottom":Q(294),"left":Q(49),"width":Q(111),"height":Q(156)});
	$(".Showman").css({"bottom":Q(179),"left":Q(263),"width":Q(126),"height":Q(168)});
	$(".wallet").css({"bottom":Q(-58),"left":Q(294),"width":Q(112),"height":Q(162)});
	$(".changjianwenti").css({"bottom":Q(-241),"left":Q(233),"width":Q(111),"height":Q(138)});
	$(".news").css({"bottom":Q(-319),"left":Q(51),"width":Q(112),"height":Q(144)});
	$(".essential").css({"bottom":Q(-256),"left":Q(-143),"width":Q(117),"height":Q(166)});
	$(".wodegentuan").css({"bottom":Q(-39),"left":Q(-217),"width":Q(134),"height":Q(183)});
	$(".jibenxinxi").css({"bottom":Q(216),"left":Q(-170),"width":Q(112),"height":Q(145)});
	$(".My .My_Div span").css({"padding-top":Q(17),"font-size":Q(40)})	
}
function Q(obj){
	var width = $(window).width()
    if(width>720){
    	width=720;
    }
	var num=(parseInt(obj)/720).toFixed(20) * width;
	return num+"px";
}