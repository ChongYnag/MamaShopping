$(function(){	
	Sitecss()
})

function Sitecss(){
	$("body").css({"padding-bottom":Q(46)})
	$(".site .div").css({"padding-left":Q(20),"padding-top":Q(38),"padding-right":Q(20)})
	$(".site .div .name h3").css({"font-size":Q(36),"line-height":Q(40),"height":Q(40),})
	$(".site .div .name span").css({"margin-left":Q(22),"font-size":Q(32),"margin-top":Q(3.8)})
	$(".site .div .address").css({"padding-top":Q(2.5),"line-height":Q(40),"font-size":Q(28),"padding-bottom":Q(34),"width":Q(602)})	
	$(".site .div i").css({"height":Q(33),"width":Q(18),"right":Q(20),"top":Q(90)})
	$(".site .weixdz").css({"height":Q(121),"padding-left":Q(20),"padding-top":Q(0),"padding-right":Q(0)})
	$(".site .weixdz a").css({"line-height":Q(121),"font-size":Q(32)})
	$(".site .weixdz i").css({"top":Q(44)})
	$(".NewAdd").css({"height":Q(92),"line-height":Q(92),"font-size":Q(36)})
	$(".Addsite a").css({"height":Q(92),"line-height":Q(92),"font-size":Q(36)})
	$(".Addsite div").css({"padding-left":Q(20),"height":Q(110),"padding-right":Q(20)})
	$(".Addsite div span").css({"font-size":Q(32),"width":Q(170),"line-height":Q(110)})
	$(".Addsite div i").css({"height":Q(33),"width":Q(18),"right":Q(20),"margin-top":Q(40)})
	$(".Addsite div input").css({"height":Q(108),"font-size":Q(32)})
//	$(".selAdd").css({"height":Q(100)})
	$(".selAdd .Tit").css({"height":Q(100),"width":Q(720),"padding-left":Q(36),"padding-right":Q(7)})
	$(".selAdd .Tit img").css({"height":Q(46),"width":Q(46),"margin-top":Q(27)})
	$(".selAdd .Tit h3").css({"font-size":Q(36),"height":Q(100),"line-height":Q(100)})
	$(".Adname").css({"height":$(window).height(),"padding-bottom":Q(100)})
	$(".Adname p").css({"padding-left":Q(20),"padding-top":Q(100),"height":Q(112),"line-height":Q(112),"font-size":Q(32)})
	$("footer a").eq("3").find("span").addClass("light")
	$("footer a").eq("3").find("b").addClass("light")
	
	$(".NewAdd").click(function(){
		$(".site").hide("1500",function(){
			$(".Addsite").show("1500");
		})
		document.getElementById("titleID").innerHTML="添加地址";
		
	})
	
	
}

//选择省，市 ，区，
function SelAdd(){
	$(".Addsite").hide("1500",function(){
			$(".selAdd").show("1500");
	});
	document.getElementById("titleID").innerHTML="添加地址";
}
//关闭选择省，市 ，区，，市 ，区，
function CloseselAdd(){
	$(".selAdd").hide("1500",function(){
		$(".Addsite").show("1500");
	});
}

//保存地址
function baocunAdd(){
	$(".Addsite").hide("1500",function(){
		$(".site").show("1500");
	});
	document.getElementById("titleID").innerHTML="妈妈团—我的收货地址";
}


function Q(obj){
	var width = $(window).width()
    if(width>720){
    	width=720;
    }
	var num=(parseFloat(obj)/720).toFixed(20) * width;
	return num+"px";
}