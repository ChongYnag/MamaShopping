$(function(){

        $.ajax({
           type:"get",
	       url:"/Area/getList/",
		   dataType:"json",
	       success:function(resData){
              if(resData.errorcode!="0" && resData.errorcode!="101"){
	              return alert("服务器繁忙,操作失败。请稍后再试");
				
	           }else if(resData.errorcode == 101) {
		          return window.location.href = "/User/getAuthUrl?type=10&url=" + window.location.href;
               }
			   var list = resData.data;
			   for(var i=0;i<list.length;i++){
				  $(".List").append("<p onclick='areaSelected(this)'><span arId="+list[i].id+" class=''>"+list[i].name+"</span><b class=''></b></p>")   
			   }
			   resloadCss();
               
           },
           error:function(){

			  alert("服务器繁忙,操作失败。请稍后再试");}
        })

})

function resloadCss(){

//	$(".title").css({"height":Q(110),"width":Q(720)});
//	$(".title input").css({"padding-left":Q(20),"padding-right":Q(20),"font-size":Q(32)})
	$("body").css({"width":Q(720),"height":$(window).height(),"padding-top":Q(81)})
	$(".Loginimg").css({"width":Q(583),"height":Q(663)})
	$(".getInto").css({"padding-top":Q(45),"padding-left":Q(20),"padding-right":Q(20)})
	$(".getInto a").css({"width":Q(680),"height":Q(101),"line-height":Q(101),"font-size":Q(36),"margin-bottom":Q(50)})
	$(".CellList").css({"width":Q(720),"height":$(window).height()})
	$(".CellList .banner img").css("height",Q(334))
	
	$(".CellList .tit").css({"padding-top":Q(27),"padding-right":Q(21),"padding-left":Q(20),"padding-bottom":Q(32)})
	$(".CellList .tit h3").css({"font-size":Q(35),"padding-top":Q(0)})
	$(".CellList .tit img").css({"width":Q(46),"height":Q(46)})
	
	$(".CellList .List").css({"height":Q(654)})
	
	$(".CellList .List p").css({"height":Q(112),"padding-right":Q(21),"padding-left":Q(20),})
	
	$(".CellList .List p span").css({"height":Q(112),"line-height":Q(112),"font-size":Q(32)})
	$(".CellList .List p b").css({"width":Q(36),"height":Q(36),"margin-top":Q(40)})
	$(".openSelect").on("click",function(){
		$(".CellList").css({"display":"block"});
	})
	$(".CellList .tit img").on("click",function(){
		$(".CellList").css({"display":"none"})
//		$('html,body').addClass('ovfHiden');
	})
}

function areaSelected(obj){
   $(obj).siblings().find("span").removeClass("light");
   $(obj).siblings().find("b").removeClass("light");
   $(obj).find("span").addClass("light");
   $(obj).find("b").addClass("light");
}



function Q(obj){
	var width = $(window).width()
    if(width>720){
    	width=720;
    }
	var num=(parseInt(obj)/720).toFixed(20) * width;
	return num+"px";
}


function setArea(){
	var span= $(".List span[class=light]");
	if(span.length==0){
		return $(".CellList").css({"display":"block"});
	}
	var arId=$(span).attr("arId");	
	setAreaAjax(arId);
}

function setAreaAjax(arId){
	$.ajax({
		type:"POST",
		url:"/Area/setArea/",
		data:{areaId :arId}	,
		dataType:"json",
		success: function(resData){
			data =resData.data;
			if(data.message!="设置成功"){
				alert("服务器繁忙,请稍后再试");
		    }else{
				window.location.href="/MomBuy/Index/index.html";
			}
		},
		error:function(){
			alert("服务器繁忙,请稍后再试");
		}
	})
}

