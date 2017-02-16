/**
 * Created by Administrator on 2016/5/19.
 */
$(function(){
   css();
  	 $("footer a").eq("3").find("span").addClass("light")
	$("footer a").eq("3").find("b").addClass("light")
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
	 $("#main>.banner").css({"margin-bottom":Q(38),"padding-top":Q(30),"padding-bottom":Q(30),"padding-left":Q(20),"padding-right":Q(20)});
    $("#main>.banner>img").css({"width":Q(90),"height":Q(90)});
    $("#main>.banner>h1").css({"width":Q(548),"font-size":Q(32),"margin-left":Q(20),"line-height":Q(46)});
    $("#main>ul").css({"padding-left":Q(20),"padding-right":Q(20)});
    $("#main>ul>li").css({"font-size":Q(32),"height":Q(71)});
    $(".biaoti").css({"padding-left":Q(20),"font-size":Q(32),"line-height":Q(80)});
    $(".add").css({"padding-top":Q(28),"padding-bottom":Q(28),"padding-left":Q(20),"padding-right":Q(20)});
    $(".add>h1").css({"font-size":Q(28),"margin-bottom":Q(14)});
    $(".add span,#add b").css({"font-size":Q(34),"line-height":Q(48)});
    $(".add>div>b").css({"margin-right":Q(20),"font-size":Q(32)});
    $(".list").css({"padding-left":Q(20),"padding-right":Q(20)});
    $(".list>ul>li>.user").css({"margin-top":Q(20),"margin-bottom":Q(15),"line-height":Q(56)});
    $(".list>ul>li>.user>img").css({"width":Q(55),"height":Q(56),"margin-right":Q(22)});
    $(".list>ul>li>.user>h3").css({"font-size":Q(32)});
    $(".list>ul>li>.user>h4").css({"font-size":Q(30)});
    $(".list>ul>li>.count").css({"font-size":Q(28),"margin-bottom":Q(35)});
	$(".list>ul>li>.count>img").css({"width":Q(151),"height":Q(58),"margin-top":Q(-15)});
    $(".list>.all>div").css({"font-size":Q(32),"margin-top":Q(26),"margin-bottom":Q(36)});
    $(".list>.all>img").css({"width":Q(160),"height":Q(68),"margin-bottom":Q(36)});
	$(".finoal").css({"margin-bottom":Q(30)});
	//�ײ�
	 var width = $(window).width()
    if(width>720){
    	width=720;
    }
    //$("body").css({"padding-top":Q(106)})
    $("body").css({"padding-bottom":width*0.1409+"px"})
//"padding-bottom":width*0+"px"
	$("footer").css({"padding-top":width*0.024+"px"});
	$("footer a").css({"height":width*0.105+"px"})
	$("footer a b").css({"font-size":width*0.026+"px"})
	$("footer a.home").css({"padding-left":width*0.0625+"px","padding-right":width*0.0625+"px"})
	$("footer a.home span").css({"width":width*0.072+"px","height":width*0.053+"px","top":width*0.0069444+"px"})

	
	
	$("footer a.Ingroup").css({"padding-left":width*0.083+"px","padding-right":width*0.073+"px"})
	$("footer a.Ingroup span").css({"width":width*0.081+"px","height":width*0.061+"px"})
	
	$("footer a.mine").css({"padding-left":width*0.07+"px","padding-right":width*0.07+"px"})
	$("footer a.mine span").css({"width":width*0.058+"px","height":width*0.058+"px"})
	
	$("footer a.Withgroup").css({"padding-left":width*0.07+"px","padding-right":width*0.081+"px"})
	$("footer a.Withgroup span").css({"width":width*0.08+"px","height":width*0.052+"px","top":width*0.00416666+"px"})
	
	$("footer a.publish").css({"padding-left":width*0.049+"px","padding-right":width*0.049+"px","margin-left":-width*0.11+"px"})
	
	$("footer a.publish span").css({"width":width*0.125+"px","height":width*0.125+"px","top":-width*0.06+"px"})
	$("footer a.publish b").css({"width":width*0.125+"px"})
	$("footer a b").css({"margin-top":width*0.0655+"px"})
}