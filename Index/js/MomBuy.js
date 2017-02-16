function hengshuping(){
	  if(window.orientation==180||window.orientation==0){
	  		   onloadCss();  
	   }
	if(window.orientation==90||window.orientation==-90){
		 onloadCss()

	    }
	 }
$(function(){
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, true);
	onloadCss()

	//banner图轮播
	new Swipe(document.getElementById('banner'), {
		speed:500,
		auto:3000,
		callback: function(){
			var lis = $(this.element).next("ol").children();
			lis.removeClass("on").eq(this.index).addClass("on");
		}
	});
	
	$(".Zambia").each(function(index, element) {
        $( this ).click(function(){
			if($(this).hasClass("light")){
				$( this ).removeClass("light")	
			}else{
				$( this ).addClass("light")		
			}
		})
    });

    $(".goGroup").each(function(index, element) {
        $( this ).click(function(){
			if($(this).hasClass("light")){
				$( this ).removeClass("light")	
			}else{
				$( this ).addClass("light")		
			}
		})
    });
	
//	 $("footer a").each(function(index, element) {
//      $( this).click(function(){
//				$( this ).find("span").addClass("light").parent().siblings().find("span").removeClass("light");
//				$( this ).find("b").addClass("light").parent().siblings().find("b").removeClass("light");
//			})
//  });
    

  
	
})


function onloadCss(){






    var width = $(window).width()
    if(width>720){
    	width=720;
    }
    //alert(width)
    $(".pics>ol>li").css({"width":width*0.019+"px","margin-right":width*0.0138+"px","margin-left":width*0.0138+"px","height":width*0.019+"px","border-radius":width*0.019+"px"})
    $(".pics>ol").css({"bottom":width*0.016+"px"})
    
    $(".Title").css({"height":width*0.1+"px","line-height":width*0.1+"px"})
    $(".Lis_w .List .List_tit").css({"height":width*0.102777+"px"})
    $(".Lis_w .List .List_tit h3").css({"top":width*0.03072+"px","font-size":width*0.03888+"px"})
    
    $(".Title i").css({"width":width*0.0180+"px","height":width*0.025+"px","top":width*0.0367+"px","margin-left":width*0.020+"px"})
    
    $(".Lis_w .List .List_tit img").css({"width":width*0.11111+"px","height":width*0.11111+"px","top":width*0.02916+"px","margin-right":width*0.0277777+"px","margin-left":width*0.0277777+"px",})
    
    
    $(".Img").css({"height":width*0.63888+"px","width":width*0.9444+"px"})
    $(".Img img").css({"height":width*0.63888+"px","width":width*0.9444+"px"})
	var Imgw=$(".Img").width();
	var ImgH=$(".Img").height();
	$(".Lis_w .Img").css({"top":-width*0.01+"px"})
	$(".InGroup").css({"width":Imgw*0.41+"px","height":ImgH*0.11+"px","bottom":"4%","left":"3%"})
	$(".Title h3").css({"font-size":width*0.05444+"px"});
	$(".Title a").css({"font-size":width*0.03+"px",});
	$(".name").css({"font-size":width*0.04344+"px","line-height":width*0.0625+"px","padding-left":width*0.0277777+"px","padding-right":width*0.0277777+"px","padding-top":width*0.014+"px"})
	$(".group").css({"height":width*0.08434+"px","line-height":width*0.08434+"px","font-size":width*0.04+"px","padding-left":width*0.0277777+"px"});
	$(".timer").css({"height":width*0.08+"px","line-height":width*0.08+"px","font-size":width*0.04+"px","padding-left":width*0.0277777+"px"});
	$(".HaveGroup").css({"width":Imgw*0.37+"px","height":ImgH*0.17+"px","line-height":ImgH*0.145+"px","top":"2%","right":"1.5%","font-size":width*0.0388+"px"})
	$(".HaveGroup font").css({"font-size":width*0.05+"px"})
	
	$(".Lis_w .timer img").css({"height":width*0.047+"px","height":width*0.047+"px","margin-right":width*0.02+"px"})
	
	$(".Lis_w .WithGroup").css({"margin-top":width*0.015+"px","height":width*0.111+"px"})
	
	$(".Lis_w .Price").css({"font-size":width*0.07+"px","padding-left":width*0.04+"px","height":width*0.111+"px","line-height":width*0.11568+"px","width":width*0.5000+"px"})
	$(".Lis_w .Price font").css({"font-size":width*0.04+"px"})
	
	
	
	$(".Lis_w .WithGroup a").css({"font-size":width*0.04+"px","width":width*0.31+"px","height":width*0.111+"px","line-height":width*0.115+"px","padding-left":width*0.069+"px"})
	
	$(".WithGroup .Zambia").css({"width":width*0.072+"px","height":width*0.065+"px","margin-right":width*0.031+"px","margin-left":width*0.03888+"px","margin-top":width*0.024+"px"})
	
	
	$(".Lis_w .List").css({"margin-bottom":width*0.028+"px"})
	
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
