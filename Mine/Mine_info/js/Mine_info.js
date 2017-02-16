$(function(){
	$("footer a").eq("3").find("span").addClass("light")
	$("footer a").eq("3").find("b").addClass("light")
	$("body").css({"padding-bottom":Q(140)})
	$(".Mine_info div").css({"height":Q(111),"padding-left":Q(20),"padding-right":Q(20)})
	$(".Mine_info div span").css({"line-height":Q(111),"font-size":Q(32),})
	$(".Mine_info div a").css({"line-height":Q(111),"font-size":Q(32),})
	$(".Mine_info div i").css({"height":Q(33),"width":Q(18),"margin-top":Q(41),})
	
	$(".Mine_info div.headimg").css({"height":Q(130)})
	$(".Mine_info div.headimg span").css({"line-height":Q(130)})
	$(".Mine_info div img").css({"height":Q(80),"width":Q(80),"margin-top":Q(25),})
	
	$(".CellList").css({"width":Q(720),"height":$(window).height()})
	$(".CellList_warp").css({"width":Q(720),"height":Q(779)})	
	$(".CellList .tit").css({"padding-top":Q(27),"padding-right":Q(21),"padding-left":Q(20),"padding-bottom":Q(32)})

	$(".CellList .tit h3").css({"font-size":Q(35),"padding-top":Q(0)})
	$(".CellList .tit img").css({"width":Q(46),"height":Q(46)})
	
	$(".CellList .List").css({"height":Q(654)})
	
	$(".CellList .List p").css({"height":Q(112),"padding-right":Q(21),"padding-left":Q(20),})
	
	$(".CellList .List p span").css({"height":Q(112),"line-height":Q(112),"font-size":Q(32)})
	$(".CellList .List p b").css({"width":Q(36),"height":Q(36),"margin-top":Q(40)})
	
	$(".getInto").on("click",function(){
		$(".CellList").css({"display":"block"})
//		$('html,body').addClass('ovfHiden');
	})
	$(".CellList .tit img").on("click",function(){
		$(".CellList").css({"display":"none"})
//		$('html,body').addClass('ovfHiden');
	})
})	

function Q(obj){
	var width = $(window).width()
    if(width>720){
    	width=720;
    }
	var num=(parseInt(obj)/720).toFixed(20) * width;
	return num+"px";
}