$(function() {
	mylaunch()
	$(".Nav a").click(function() {
		$(this).addClass("light").siblings().removeClass("light");
		var id = $(this).attr("data");
		 $(id).siblings().css("display","none")
			 $(id).css("display","block")
	})
})

function mylaunch() {
	$("footer a").eq("3").find("span").addClass("light")
	$("footer a").eq("3").find("b").addClass("light")
	$("body").css({
		"padding-top": Q(86)
	})
	$("body").css({
		"padding-bottom": Q(140)
	})
	$(".Nav").css({
		"height": Q(86),
		"padding-left": Q(70)
	})
	$(".Nav a").css({
		"height": Q(86),
		"line-height": Q(86),
		"font-size": Q(36),
		"border-bottom-width": Q(4),
		"width": Q(147)
	})
	$(".Nav a").eq("1").css({
		"margin-left": Q(89)
	})
	$(".Nav a").eq("2").css({
		"margin-left": Q(68)
	})
	$(".lis").css({
		"padding-left": Q(20),
		"margin-top": Q(20),
		"padding-right": Q(20)
	})
	$(".lis .To").css({
		"padding-top": Q(30),
		"padding-bottom": Q(30)
	})
	$(".lis .To img").css({
		"width": Q(150),
		"height": Q(150)
	})

	$(".lis .To div").css({
		"padding-left": Q(20),
		"width":Q(510)
	})

	$(".lis .To div h3").css({
		"font-size": Q(31)
	})
	$(".lis .To div h4").css({
		"font-size": Q(28)
	})
	$(".lis .To div p").css({
		"padding-top": Q(17),
		"padding-bottom": Q(16)

	})
	$(".lis .To div p span").css({
		"font-size": Q(36)
	})
	$(".lis .To div p b").css({
		"font-size": Q(28),
		"margin-left": Q(26),
		"margin-top": Q(0)
	})
	$(".lis .To div p b font").css({
		"font-size": Q(32),
	})

	$("#GroupOrder .To div").css({
		"width": Q(410)
	})
	$("#GroupOrder .lis i").css({
		"width": Q(72),
		"height": Q(70),
		"right": Q(20)
	})

	$(".operate").css({
		"width": Q(680)
	})
	$(".operate a").css({
		"width": Q(170),
		"height": Q(165)
	})

	$(".operate2 a").css({
		"margin-left": Q(85),
		"margin-right": Q(85)
	})
	$(".operate3 a").css({
		"margin-left": Q(28),
		"margin-right": Q(28)
	})
//	$(".operate3").css({
//		"padding-left": Q(60)
//	})
}


function Q(obj) {
	var width = $(window).width()
	if (width > 720) {
		width = 720;
	}
	var num = (parseFloat(obj) / 720).toFixed(20) * width;
	return num + "px";
}