/**
 * Created by Administrator on 2016/5/18.
 */
$(function(){
    //Ò³ÃæÑùÊ½
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
	$("div").css({"padding-left":Q(20),"padding-right":Q(20)});
    $("#text").css({"height":Q(248),"padding-top":Q(32)});
    $("#text>textarea").css({"font-size":Q(32),"width":Q(680),"height":Q(214)});
    $("#zan").css({"padding-top":Q(40),"padding-bottom":Q(40),"margin-bottom":Q(25)});
    $("#zan a img").css({"width":Q(140),"height":Q(40)});
    $("button").css({"width":Q(680),"font-size":Q(36),"height":Q(90)});
}