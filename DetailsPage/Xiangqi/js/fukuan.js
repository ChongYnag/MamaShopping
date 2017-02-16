/**
 * Created by Administrator on 2016/5/20.
 */
$(function() {
   css();
});
function Q(obj){
    var width = $(window).width();
    if(width>720){
        width=720;
    }
    var num=(parseInt(obj)/720).toFixed(20) * width;
    return num+"px";
}
function css(){
	 $("#add").css({
        "padding-top": Q(28), "padding-bottom": Q(28),
        "padding-left": Q(20), "padding-right": Q(20)
    });
    $("#add>h1").css({"font-size": Q(32), "margin-bottom": Q(14)});
    $("#add span,#add b").css({"font-size": Q(34), "line-height": Q(44)});
    $("#add>div>b").css({"margin-right": Q(20),"font-size":Q(32)});
    $("#main").css({
        "margin-top": Q(20), "padding-top": Q(40), "padding-left": Q(20), "padding-bottom": Q(40)
        , "padding-right": Q(20)
    });
    $("#main>img").css({"width": Q(169), "height": Q(170), "margin-right": Q(20)});
    $("#main>div>h1").css({"font-size": Q(32), "margin-top": Q(-5)});
    $("#main>div>div").css({"margin-top": Q(40)});
    $("#main>div>div>span").css({"font-size": Q(32),"margin-left":Q(10)});
    $("#main>div>div>div").css({"font-size": Q(28)});
    $("#main>div>div>div>a").css({
        "padding-top": Q(4),
        "padding-bottom": Q(4),
        "padding-left": Q(15),
        "padding-right": Q(15),
        "width": Q(50),
        "line-height": Q(44)
    })
    $("#main>div>div>div>b").css({"height": Q(44), "padding-left": Q(28), "padding-right": Q(28)});
    $("#list>ul>li").css({"padding-left": Q(20), "padding-right": Q(20), "font-size": Q(32), "line-height": Q(110)});
    $("#list>ul>li>b>img").css({"width": Q(26), "height": Q(33), "margin-top": Q(40), "margin-left": Q(20)});
    $("#zhifu").css({
        "margin-top": Q(20),
        "margin-bottom": Q(32),
        "padding-right": Q(20),
        "padding-left": Q(20),
        "padding-bottom": Q(32)
    });
    $("#zhifu>h2").css({"line-height": Q(100), "font-size": Q(32), "margin-bottom": Q(5)});
    $("#zhifu>div>div>img").css({"width": Q(36), "height": Q(41)});
    $("#zhifu>div>div>p>img").css({"width": Q(190), "height": Q(42)});
    $("#zhifu>div>div>p").css({
        "margin-right": Q(90),
        "margin-left": Q(22),
        "margin-top": Q(0),
        "margin-bottom": Q(0)
    });
    $("#heji").css({"line-height": Q(92), "font-size": Q(30)});
    $("#heji>div").css({"width": Q(245), "margin-left": Q(220)});
    $("#heji>div>span").css({"font-size": Q(38)});
    $("#heji>img").css({"width":Q(224),"height":Q(92)});
}