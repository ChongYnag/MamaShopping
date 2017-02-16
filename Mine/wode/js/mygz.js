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

function concern(pid,obj){
	$.ajax({
	  type:"post",
	  url:"/Follow/add/",
	  data:{pid:pid},
	  dataType:"json",
	  success:function(resData){
	     if(resData.errorcode!="0" && resData.errorcode!="101"){
	        return alert(resData.errordesc);
				
	     }else if(resData.errorcode == "101") {
			window.location.href = "/User/getAuthUrl?type=10&url=" + window.location.href;
			return;
         }
		 $(obj).addcaddClass("light");      
	  },
	  error:function(){ alert("服务器繁忙,请稍后再试");}
	})
}

function css(){
	$(".section").css({"margin-bottom":Q(20),"padding-left":Q(20),"padding-right":Q(20)});
    $(".main").css({"margin-bottom":Q(20)});
    $(".main>p>img").css({"width":Q(56),"height":Q(56)});
    $(".main>p").css({"margin-top":Q(15),"margin-bottom":Q(15)});
    $(".main>p>span").css({"margin-left":Q(18),"font-size":Q(28),"line-height":Q(30),"top":Q(5)});
    $(".body>img").css({"margin-right":Q(20),"width":Q(280),"height":Q(280)});
    $(".body>div").css({"width":Q(380)});
    $(".body>div>span").css({"font-size":Q(32)});
    $(".shijian>p").css({"margin-top":Q(18),"margin-bottom":Q(18)});
    $(".shijian>p>img").css({"width":Q(35),"height":Q(35)});
    $(".shijian>p>span").css({"font-size":Q(28),"line-height":Q(30),"top":Q(6),"left":Q(10)});
    $(".shijian div").css({"font-size":Q(28)});
    $(".shijian>div>span").css({"font-size":Q(30)});
    $(".foot>h1").css({"font-size":Q(40),"margin-top":Q(28),"margin-left":Q(4)});
    $(".foot>h1>span").css({"font-size":Q(32)});
    $(".foot>img").css({"margin-top":Q(35),"width":Q(54),"height":Q(45)});
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