//导航栏的动画
$(document).ready(function () {
    $(".nav .blob_li").hover(function () {
        $(".nav .border").fadeIn()
    },function () {
        $(".nav .border").delay(100).slideUp()
    })
    $(".nav .blob_li").hover(function () {
        $(".nav .down").fadeIn()
    },function () {
        $(".nav .down").delay(100).slideUp()
    })
})


//轮播图效果
$(document).ready(function () {
    $(".slideshow .num li").click(function () {
        var index=$(this).index();
        $(".slideshow .img").stop().animate({left:-750*index},500);
        $(this).addClass("on").siblings().removeClass("on");
    })
})

//轮播图文字效果
$(document).ready(function () {
    $(".slideshow .img .img-text1").fadeIn(2000)
})
$(document).ready(function () {
    $(".slideshow .num li.btn1").click(function () {
        $(".slideshow .img .img-text1").delay(500).fadeIn(1000)
        $(".slideshow .img .img-text2").fadeOut()
        $(".slideshow .img .img-text3").fadeOut()
    })
})

$(document).ready(function () {
    $(".slideshow .num li.btn2").click(function () {
        $(".slideshow .img .img-text2").delay(500).fadeIn(1000)
        $(".slideshow .img .img-text1").fadeOut()
        $(".slideshow .img .img-text3").fadeOut()

    })
})

$(document).ready(function () {
    $(".slideshow .num li.btn3").click(function () {
        $(".slideshow .img .img-text3").delay(500).fadeIn(1000)
        $(".slideshow .img .img-text1").fadeOut()
        $(".slideshow .img .img-text2").fadeOut()

    })
})

//轮播图右边渐出效果
$(document).ready(function () {
    $(".content-2-right .right-top").hover(function () {
        $(".right-top .right-top-bg").fadeToggle()
    })
    $(".content-2-right .right-bottom").hover(function () {
        $(".right-bottom .right-bottom-bg").fadeToggle()
    })
})