$(function() {
	DetalisPage()
	
    var pId = getParamValue("pId");

    //商品详情
    $.ajax({
        type: "get",
        url: "/Product/detail/",
        data: { id: pId },
        dataType: "json",
        success: function(resData) {
            if (resData.errorcode != "0" && resData.errorcode != "101") {
                return alert(resData.errordesc);

            } else if (resData.errorcode == "101") {
                window.location.href = "/User/getAuthUrl?type=10&url=" + window.location.href;
                return;
            }
            var data = resData.data;
            $("#headimg").Attr("src", data.headimgurl).end().next().text(data.nickname);
            $(".name").text(data.title);
            $(".present").text(data.content);
            $(".price p").text(data.price);
            $(".tree p").text("已成团" + data.now_buy_num + "次");
            $(".time span").text(data.time);
            $("#minNum").text(data.open_num);
            $("#buyNum").text(data.now_buy_num);
            $("#maxNum").text(data.total_num);
            $("#logistics").text(data.logistics == "1" ? "代收点" : "自取");
            $("#cometime").text(data.come_time);
            for (var i = 0; i < data.images.length; i++) {
                $(".Photode_img").append("<img src=" + data.images[i] + " alt='图片'>")
                $("#banner ul").append("<li ><a href='javascript:'><img src=" + data.images[i] + "></a></li>")
            }


        },
        error: function() {
            alert("服务器繁忙,请稍后再试");
        }
    });

    //邻居购买记录
    $.ajax({
        type: "get",
        url: "/Order/getNeighborList/",
        data: { pId: pId },
        dataType: "json",
        success: function(resData) {
            if (resData.errorcode != "0" && resData.errorcode != "101") {
                return alert(resData.errordesc);

            } else if (resData.errorcode == "101") {
                window.location.href = "/User/getAuthUrl?type=10&url=" + window.location.href;
                return;
            }
            data = resData.data;

            $("#youLinju span").text("（共" + data.count + "条购买记录）");
            for (var i = 0; i < data.content.length; i++) {
                $("#youLinJuInfo").append("<div class='Lis'><div class='lis_img'><img src=" + data.content[i].headimgurl + " alt=''/></div>" +
                    "<div class='lisD'><div class='mingshijian'><span>" + data.content[i].nickname + "</span><b>" + data.content[i].addtime + "</b></div>" +
                    "<div class='discuss'>购买了<font>" + data.content[i].num + "</font> 件</div></div></div>");
            }

        },
        error: function() {
            alert("服务器繁忙,请稍后再试");
        }
    });
    //评论
    $.ajax({
        type: "get",
        url: "/Comment/gList/",
        dataType: "json",
        data: { pid: pId },
        success: function(resData) {
            if (resData.errorcode != "0" && resData.errorcode != "101") {
                return alert(resData.errordesc);

            } else if (resData.errorcode == "101") {
                window.location.href = "/User/getAuthUrl?type=10&url=" + window.location.href;
                return;
            }
            data = resData.data;
            $("#pingLun span").text("（共" + data.count + "条评论）");
            for (var i = 0; i < data.content.length; i++) {
                var ext = "";
                if (data.content[i].againBuy == "1") {
                    ext="<div class='laud'><img src='images/laud.png'><span>还想要</span></div>";
                }
                $("#pingLunInfo").append(" <div class='Lis'><div class='lis_img'><img src="+data.content[i].headimgurl+" alt='' /></div><div class='lisD'>" +
                    "<div class='mingshijian'><span>" + data.content[i].nickname + "</span><b>" + data.content[i].addtime + "</b></div>" +
                    "<div class='discuss'>"+data.content[i].content+"</div>" +
                    ""+ext+"</div></div>");
            }

        },
        error: function() {
            alert("服务器繁忙,请稍后再试");
        }

    });


    //留言
    $.ajax({
        type: "post",
        url: "/Message/gList/",
        dataType: "json",
        data:{pid:pId},
        success: function(resData) {
            if (resData.errorcode != "0" && resData.errorcode != "101") {
                return alert(resData.errordesc);

            } else if (resData.errorcode == "101") {
                window.location.href = "/User/getAuthUrl?type=10&url=" + window.location.href;
                return;
            }
            data = resData.data;
            $("#liuYan span").text("（共" + data.count + "条留言）");
           
            for (var i = 0; i < data.content.length; i++) {
                var ext = ""; var extHuiFu = "";
                if (data.content[i].replyContent) {
                    ext = "<div class='huifu'><img src='images/huifu_03.png' /></div>";
                    extHuiFu = " <div class='lisD lisD_R'><div class='mingshijian'><span>" + data.content[i].nickname + "</span><b>" + data.content[i].replyAddtime + "</b></div>" +
                        "<div class='discuss'>" + data.content[i].replyContent + "</div></div>";
                }
               
                
                $("#liuYanInfo").append("<div class='Lis'><div class='lis_img'><img src=" + data.content[i].headimgurl + " alt='' /></div><div class='lisD'>" +
                    "<div class='mingshijian'><span>" + data.content[i].nickname + "</span><b>" + data.content[i].addtime + "</b></div>" +
                    "<div class='discuss'>" + data.content[i].content + "</div>" + ext + "</div>" + extHuiFu + "</div>");
            }
        },
        error: function() {
            alert("服务器繁忙,请稍后再试");
        }
    })



    
})


function DetalisPage(){
	//成团11次
    $("#tree>img").css({ "width": Q(253), "height": Q(80), "top": Q(80), "right": Q(10), "z-index": Q(10) });
    $("#tree>b").css({ "font-size": Q(30), "top": Q(93), "right": Q(75), "z-index": Q(50) });
    $("body").css({ "padding-bottom": Q(112) })
    $(".Tit").css({ "padding-left": Q(120), "height": Q(71) })
    $(".Tit>img").css({ "width": Q(80), "height": Q(80), "left": Q(20), "top": Q(20) })
    $(".Tit h3").css({ "padding-left": Q(0), "padding-top": Q(25), "font-size": Q(28) })
    $(".pics>ol>li").css({ "width": Q(14), "height": Q(14), "border-radius": Q(14), "margin-right": Q(10), "margin-left": Q(10) })
    $(".pics>ol").css({ "bottom": Q(10) })


    $(".name").css({ "padding-left": Q(36), "padding-right": Q(36), "padding-top": Q(18), "padding-bottom": Q(18), "line-height": Q(50), "font-size": Q(36) })

    $(".present").css({ "padding-left": Q(20), "padding-right": Q(20), "padding-top": Q(3), "line-height": Q(40), "font-size": Q(28) })

    $(".price").css({ "line-height": Q(68), "font-size": Q(52), "padding-top": Q(18) })
    $(".price font").css({ "line-height": Q(68), "font-size": Q(32) })

    $(".time").css({ "padding-top": Q(14), "height": Q(34), "line-height": Q(34) })
    $(".time img").css({ "height": Q(34), "width": Q(34), "margin-right": Q(14) })
    $(".time span").css({ "font-size": Q(28), "line-height": Q(34) })


    $(".price").css({ "line-height": Q(68), "font-size": Q(52) })
    $(".price font").css({ "line-height": Q(68), "font-size": Q(32) })

    $(".Quantity").css({ "font-size": Q(28), "padding-top": Q(18), "padding-bottom": Q(29) })
    $(".Quantity font").css({ "line-height": Q(68), "font-size": Q(32) })

    $(".Pickup").css({ "padding-top": Q(7), "padding-bottom": Q(28), "padding-left": Q(20) })
    $(".Pickup p").css({ "height": Q(50), "padding-top": Q(22), "font-size": Q(28) })

    $(".Photode").css({ "height": Q(83), "line-height": Q(83), "font-size": Q(32), "padding-left": Q(20) })

    $(".yourNeir").css({ "height": Q(89), "padding-right": Q(20), "padding-left": Q(20) })

    $(".yourNeir p").css({ "height": Q(89), "line-height": Q(89), "font-size": Q(32) })
    $(".yourNeir p span").css({ "font-size": Q(28), "margin-left": Q(22) })

    $(".yourNeir b").css({ "height": Q(89), "line-height": Q(89), "font-size": Q(28), "padding-right": Q(32) })
    $(".yourNeir b i").css({ "height": Q(12), "width": Q(18), "right": Q(0), "top": Q(36) })

    $(".Lis").css({ "padding-top": Q(20), "padding-bottom": Q(26), "padding-left": Q(20), "padding-right": Q(20) })
    $(".Lis .lis_img").css({ "width": Q(80), "height": Q(80), "margin-right": Q(20) })

    $(".Lis .lisD").css({ "width": Q(580) })

    $(".mingshijian span").css({ "font-size": Q(28) })
    $(".mingshijian b").css({ "font-size": Q(24) })


    $(".discuss").css({ "font-size": Q(32), "line-height": Q(50) })
    $(".laud").css({ "padding-top": Q(9) })
    $(".laud img").css({ "width": Q(33), "height": Q(32), "margin-right": Q(7), "margin-top": Q(8) })
    $(".laud span").css({ "font-size": Q(28), "margin-top": Q(12) })


    $(".lisD_R").css({ "padding-top": Q(25), "padding-left": Q(22), "padding-bottom": Q(26), "padding-right": Q(23), "margin-top": Q(20) })


    $(".footR").css({ "height": Q(92) })

    $(".footR a").css({ "height": Q(92), "width": Q(120) })
    $(".footR a img").eq(0).css({ "margin-left": Q(45) })
    $(".footR a img").eq(1).css({ "margin-left": Q(38) })
    $(".footR a img").eq(2).css({ "margin-left": Q(25) })
    $(".footR a").eq(3).css({ "width": Q(360), "line-height": Q(92), "font-size": Q(36) })
    //回复按钮
    $(".Megelist .Lis .huifu").css({ "margin-top": Q(25) });
    $(".Megelist .Lis .huifu img").css({ "width": Q(161), "height": Q(68) });
}

function Q(obj) {
    var width = $(window).width()
    if (width > 720) {
        width = 720;
    }
    var num = (parseFloat(obj) / 720).toFixed(20) * width;
    return num + "px";
}