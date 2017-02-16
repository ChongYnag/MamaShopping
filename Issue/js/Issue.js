var timestamp;
var appId;
var noneceStr;
var signature;
function getWXInfo() {
    $.ajax({
        type: "get",
        url: "/WxApi/getSignPackage/",
        dataType: "json",
        async: false,
        success: function (resData) {
            if (resData.errorcode != "0" && resData.errorcode != "101") {
                return alert(resData.errordesc);

            } else if (resData.errorcode == "101") {
                window.location.href = "/User/getAuthUrl?type=10&url=" + window.location.href;
                return;
            }
            var data = resData.data;
            timestamp = data.timestamp;
            noneceStr = data.nonceStr;
            appId = data.appId;
            signature = data.signature;
        },
        error: function () {

            alert("服务器繁忙,请稍后再试");
        }
    })
}


var tuangou = {
    isopen: 0,
    type: 1,
    iogisticstype: 2
}

$(function () {
    cssDy()
   


    $(".title").css({ "height": Q(110), "width": Q(720) });
    $(".title input").css({ "padding-left": Q(20), "padding-right": Q(20), "font-size": Q(32) })
    $(".Fresh").css({ "height": Q(266) })
    $(".Fresh textarea").css({ "height": Q(266), "line-height": Q(48), "padding-top": Q(25.8), "padding-left": Q(20), "padding-right": Q(20), "font-size": Q(32) })
    $(".Picture").css({ "padding-left": Q(20), "padding-right": Q(20), "padding-top": Q(8), "margin-bottom": Q(20) })
    $(".Picture .tit").css({ "height": Q(92), "line-height": Q(92) })
    $(".Picture h3").css({ "font-size": Q(32) })
    $(".Picture p").css({ "font-size": Q(24), "padding-left": Q(11) })
    $(".Pudiv").css({ "padding-left": Q(20), "padding-right": Q(20), "height": Q(110) })

    $(".Pudiv s").css({ "height": Q(33), "width": Q(18), "top": Q(38), "right": Q(20) })

    $(".Pudiv input").css({ "height": Q(108), "font-size": Q(32), "width": Q(400) })
    $(".Pudiv span").css({ "height": Q(110), "line-height": Q(110), "font-size": Q(32) })
    $(".Mtop").css({ "margin-top": Q(20) })
    $(".Freq").css({ "height": "auto", "padding-bottom": Q(43) })
    $(".Pudiv p").css({ "height": Q(110), "margin-left": Q(51) })
    $(".Pudiv p b").css({ "height": Q(110), "line-height": Q(110), "font-size": Q(32) })
    $(".Pudiv p i").css({ "height": Q(36), "width": Q(36), "margin-right": Q(12), "margin-top": Q(37) })
    $(".Freq input").css({ "height": Q(86), "width": Q(676), "padding-left": Q(29) })
    $(".OtherCell p").css({ "margin-left": Q(59) });
    $(".Protocol").css({ "height": Q(111), "padding-left": Q(247) })
    $(".Protocol span").css({ "height": Q(111), "line-height": Q(111), "font-size": Q(32) })
    $(".Protocol i").css({ "height": Q(30), "width": Q(30), "margin-right": Q(15), "margin-top": Q(42) })
    $("body").css({ "padding-bottom": Q(112) })
    $("footer").css({ "height": Q(92), "width": Q(720) })
    $("footer a").css({ "line-height": Q(92), "font-size": Q(35) })
    /*$(".Picture .PicList").css({"padding-left":Q(33),"padding-top":Q(10)})
    $(".Picture .PicList div").css({"height":Q(170),"width":Q(170),"margin-right":Q(52),"margin-bottom":Q(40)})
    $(".Picture .PicList div img").css({"height":Q(170),"width":Q(170)})
    $(".Picture .PicList div span").css({"height":Q(40),"line-height":Q(40),"font-size":Q(28)})
    $(".Picture .PicList div b").css({"height":Q(46),"width":Q(46),"top":Q(-10),"left":Q(-10)})*/
    DIvS($(".PicList div"), "3")


    //选择照片PoModule

    $(".PoModule").css({ "width": Q(720), "height": $(window).height() })
    $(".PoModule .Affirm").css({ "height": Q(100) })
    $(".PoModule .Affirm p").css({ "line-height": Q(100), "margin-right": Q(41), "margin-left": Q(14), "font-size": Q(36) })
    $(".PoModule .Affirm a").css({ "line-height": Q(100), "font-size": Q(36) })
    $(".PoModule .albumTit").css({ "height": Q(96), "line-height": Q(96), "font-size": Q(48) })
    $(".PoModule .albumTit img").css({ "height": Q(33), "width": Q(18), "font-size": Q(48), "left": Q(40), "top": Q(32) })
    $(".PoModule .albumTit a").css({ "font-size": Q(32), "right": Q(40) })

    //	$(".PoModule .Photolist").css({"padding-top":Q(8)})
    $(".PoModule .Photolist div").css({ "width": Q(170), "height": Q(170), "margin-left": Q(8), "margin-top": Q(8) })
    $(".PoModule .Photolist div b").css({ "width": Q(36), "height": Q(36), "right": Q(10), "top": Q(10) })
    $(".PoModule .albumTit img").on("click", function () {
        $(".PoModule").css({ "display": "none" })
        $('html,body').removeClass('ovfHiden');
    })

    ////协议模块PoModule
    $(".UdpModule").css({ "width": Q(720), "height": $(window).height() })
    $(".UdpModule .AuditProtocol").css({ "width": Q(720) })
    $(".UdpModule .AuditProtocol h3").css({ "padding-top": Q(51), "padding-bottom": Q(29), "font-size": Q(36) })
    $(".UdpModule .Project").css({ "padding-left": Q(20), "padding-right": Q(20), "font-size": Q(32), "line-height": Q(58), "text-indent": Q(45) })
    $(".UdpModule .handle").css({ "padding-left": Q(20), "padding-top": Q(42), "padding-bottom": Q(60) })

    $(".UdpModule .handle a").css({ "width": Q(316), "height": Q(86), "line-height": Q(86), "font-size": Q(32) })
    $(".UdpModule .handle a.agree").css({ "margin-left": Q(40) })


    $(".Protocol span").on("click", function () {
        $(".UdpModule").css({ "display": "block" })
        $('html,body').addClass('ovfHiden');
    })
    $(".handle a").on("click", function () {
        $(".UdpModule").css({ "display": "none" })
        $('html,body').removeClass('ovfHiden');
    })
    cssDy();


    //日期模块
    $(".DateModule").css({ "width": Q(720), "height": $(window).height() })
    $(".DateModule img").css({ "width": Q(640), "height": Q(737), "margin-left": Q(40), "margin-right": Q(40), })

    $(".Mtop p").on("click", function () {
        $(this).find("i").addClass("light").parent().siblings().find("i").removeClass("light");
        if ($("#disposable").attr("class") == "light") { tuangou.type = 1; } else { tuangou.type = 2; }
    })

    $(".Freq p").on("click", function () {
        $(this).find("i").addClass("light").parent().siblings().find("i").removeClass("light");
        if ($("#ziqu").attr("class") == "light") {
            $("#address").show();
            tuangou.iogisticstype = 2;
        } else { $("#address").hide(); tuangou.iogisticstype = 1; }

    })

    $(".OtherCell p").on("click", function () {
        $(this).find("i").addClass("light").parent().siblings().find("i").removeClass("light");
        if ($("#open").attr("class") == "light") { tuangou.isopen = 0; } else { tuangou.isopen = 1; }
    })


    $(".Protocol i").on("click", function () {
        $(this).toggleClass("light");
    })


    getWXInfo();

    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: appId, // 必填，公众号的唯一标识
        timestamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: noneceStr, // 必填，生成签名的随机串
        signature: signature,// 必填，签名，见附录1
        jsApiList: [
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage'
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });



})



function cssDy() {
    $(".Picture .PicList").css({ "padding-left": Q(33), "padding-top": Q(10) })
    $(".Picture .PicList div").css({ "height": Q(170), "width": Q(170), "margin-right": Q(52), "margin-bottom": Q(40) })
    $(".Picture .PicList div img").css({ "height": Q(170), "width": Q(170) })
    $(".Picture .PicList div span").css({ "height": Q(40), "line-height": Q(40), "font-size": Q(28) })
    $(".Picture .PicList div b").css({ "height": Q(46), "width": Q(46), "top": Q(-10), "left": Q(-10) })
}



function Q(obj) {
    var width = $(window).width()
    if (width > 720) {
        width = 720;
    }
    var num = (parseInt(obj) / 720).toFixed(20) * width;
    return num + "px";
}
function DIvS(obj, num) {
    $(obj).each(function (index, element) {
        if (((index + 1) % num) == 0) {
            $(this).css("margin-right", "0");
        }
    });
}


function publish(status) {


    if ($("#isok").attr("class") != 'light') { return alert("请同意协议"); }
    var title = $("#title").val();
    if (!title || title.trim(title) == '') {
        return alert("请输入标题");
    }
    var content = $("#content").val();
    if (!content || content.trim(content) == '') {
        return alert("请输入内容");
    }
    var money = $("#money").val();
    if (!money || money.trim(money) == '') {
        return alert("请输入单价");
    }
    var minNum = $("#minNum").val();
    if (!minNum || minNum.trim(minNum) == '') {
        return alert("请输入起团数");
    }
    var maxNum = $("#maxNum").val();
    if (!maxNum || maxNum.trim(maxNum) == '') {
        return alert("请输入团购上限");
    }
    if (Number(minNum) >= Number(maxNum)) {
        return alert("团购上限必须大于起团数");
    }
    var startDate = $("#startDate").val();
    if (!startDate || startDate.trim(startDate) == '') {
        return alert("请输入开团时间");
    }
    var endDate = $("#endDate").val();
    if (!endDate || endDate.trim(endDate) == '') {
        return alert("请输入截团时间");
    }
    if (startDate >= endDate) {
        return alert("截团时间必须大于开团时间");
    }
    var deliverytime = $("#Deliverytime").val();
    if (!deliverytime || deliverytime.trim(deliverytime) == '') {
        return alert("请输入预计送达时间");
    }
    var address =""
        
    if (tuangou.iogisticstype == 2) {
     address= $("#address").val();
     if (!address || address.trim(address) == '') {
         return alert("请输入自取地址");
     }
    
    }
    
    upLoadImg();
    var closethis = setInterval(function () {
        if (uploadEnd == true) {


            var imageIds="";
            images.serverId.map(function (index, value) {
                imageIds += index + ",";
            });
            imageIds = imageIds.substr(0, imageIds.length - 1);
            $.ajax({
                type: "post",
                url: "/Product/add/",
                data: {
                    title: title,
                    content: content,
                    images: imageIds,
                    price: money,
                    open_num: minNum,
                    total_num: maxNum,
                    open_time: startDate,
                    end_time: endDate,
                    come_time: deliverytime,
                    logistics_type: tuangou.iogisticstype,
                    address: address,
                    is_open: tuangou.isopen,
                    type: tuangou.type,
                    status: status
                },
                dataType: "json",
                success: function (resData) {
                    if (resData.errorcode != "0" && resData.errorcode != "101") {
                        return alert(resData.errordesc);

                    } else if (resData.errorcode == "101") {
                        window.location.href = "/User/getAuthUrl?type=10&url=" + window.location.href;
                        return;
                    }
                    alert("成功" + resData.errorcode);


                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                    alert("服务器繁忙,请稍后再试...............")

                }
            });
            uploadEnd = false;
            clearInterval(closethis);

        };
    }, 500)


}
var images = {
    localId: [],
    serverId: []
};

function getProduct() {
    wx.chooseImage({
        success: function (res) {
            var temp = res.localIds;
            for (var i = 0; i < temp.length; i++) {
                var items = temp[i];
                //判断元素是否存在于new_arr中，如果不存在则插入到new_arr的最后
                if ($.inArray(items, images.localId) == -1) {
                    images.localId.push(items);
                }
            }

            if (images.localId.length > 9) {
                alert("图片最多可选九张");
                images.localId.splice(9, images.localId.length - 9);
            }
            alert('已选择 ' + res.localIds.length + ' 张图片');

            if (images.localId.length > 0) {
                $(".PicList").empty();
                for (var i = 0; i < images.localId.length; i++) {
                    if (i <= 2) {
                        $(".PicList").append("<div><img src=" + images.localId[i] + " alt='图片'><span>主图</span><b onclick='closeImg(" + i + ",this)'></b></div>");
                    } else {
                        $(".PicList").append("<div><img src=" + images.localId[i] + " alt='图片'><b onclick='closeImg(" + i + ",this)'></b></div>");
                    }
                }
                $(".PicList").append("<div onClick='getProduct()' class='Add'></div>");
                cssDy()
            }

        }
    });
}

var uploadEnd = false;

function upLoadImg() {
    if (images.localId.length == 0) {
        alert('请先选择图片');
        return;
    }

    var i = 0, length = images.localId.length;
    images.serverId = [];
    function upload() {
        wx.uploadImage({
            localId: images.localId[i],
            success: function (res) {
                i++;
                //alert('已上传：' + i + '/' + length);
                images.serverId.push(res.serverId);
                if (i < length) {
                    upload();
                } else {
                    uploadEnd = true;
                }
            },
            fail: function (res) {
                alert(JSON.stringify(res));
                return;
            }
        });
    }
    upload();

}

function closeImg(i, obj) {
    images.localId.splice(i, 1);
    $(obj).parent().remove();
}

