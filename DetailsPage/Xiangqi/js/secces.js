/**
 * Created by Administrator on 2016/5/19.
 */
$(function(){
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
	 $("#top").css({"height":Q(176)});
    $("#top>img").css({"margin-top":Q(70),"width":Q(355),"height":Q(52)});
    $("#main").css({"margin-bottom":Q(20)});
    $("#main>.banner").css({"padding-top":Q(39),"padding-bottom":Q(39),"padding-left":Q(20),"padding-right":Q(20)});
    $("#main>.banner>img").css({"width":Q(90),"height":Q(90)});
    $("#main>.banner>h1").css({"width":Q(548),"font-size":Q(32),"margin-left":Q(20),"line-height":Q(46)});
    $("#main>ul").css({"padding-left":Q(20),"padding-right":Q(20)});
    $("#main>ul>li").css({"font-size":Q(32),"height":Q(71)});
    $("#add").css({"padding-top":Q(30),"padding-bottom":Q(30),"padding-left":Q(20),"padding-right":Q(20)});
    $("#add>h1").css({"font-size":Q(32),"margin-bottom":Q(14)});
    $("#add span,#add b").css({"font-size":Q(34),"line-height":Q(44)});
    $("#add>div>b").css({"margin-right":Q(20),"font-size":Q(32)});
    $("#kankan").css({"font-size":Q(32),"padding-top":Q(19),"padding-bottom":Q(19),"padding-left":Q(20),"padding-right":Q(20)});
    $("#kankan>span").css({"margin-left":Q(15),"font-size":Q(28)});
    $("#list").css({"margin-bottom":Q(30)});
    $("#list>ul>li").css({"padding-top":Q(30),"padding-bottom":Q(24),"padding-left":Q(20),"padding-right":Q(20)});
    $("#list>ul>li>div>img").css({"width":Q(80),"height":Q(80),"margin-right":Q(20)});
    $("#list>ul>li>div>p").css({"margin":Q(0)});
    $("#list>ul>li>div>p>span").css({"font-size":Q(28)});
    $("#list>ul>li>div>p>b").css({"font-size":Q(32),"margin-top":Q(6)});
    $("#list>ul>li>div>span").css({"font-size":Q(24)});
	var width = $(window).width()
    if(width>720){
    	width=720;
    }
    //$("body").css({"padding-top":Q(86)})
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