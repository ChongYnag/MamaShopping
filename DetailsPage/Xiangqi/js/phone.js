/**
 * Created by Administrator on 2016/5/19.
 */
$(function(){
    $("#phone").css({"font-size":Q(32),"padding-top":Q(36),"padding-right":Q(20),"padding-bottom":Q(32),"padding-left":Q(20),"margin-bottom":Q(20)});
    $("#phone>b").css({"margin-right":Q(42)});
    $("#phone>input").css({"font-size":Q(32)});
    $("button").css({"margin-left":Q(20),"margin-bottom":Q(294),"width":Q(680),"height":Q(90),"font-size":Q(40)});
});
function Q(obj){
    var width = $(window).width();
    if(width>720){
        width=720;
    }
    var num=(parseInt(obj)/720).toFixed(20) * width;
    return num+"px";
}