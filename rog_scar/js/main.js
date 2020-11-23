let audio_video = false;
var direction;
$(function () {

    $(".audio-mp4").on('ended', function () {
        $(".audio-final").addClass("active");
        audio_video = false;
    });

    /**
     * @summary 當畫面重整時，強制回到網頁最上方
     */
    // $(window).on('beforeunload', function () {
    //     $(window).scrollTop(0);
    // });

    /**
     * keystone的glitch效果
     */
    $(".keystone-glitch .main-bg").mgGlitch({
        destroy: !1,
        glitch: !0,
        scale: !0,
        blend: !0,
        blendModeType: "hue",
        glitch1TimeMin: 100,
        glitch1TimeMax: 300,
        glitch2TimeMin: 200,
        glitch2TimeMax: 400
    });

    /**
     * @summary design區塊的輪播
     */
    $('.slick-inner').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 731,
            settings: {
                centerMode: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });
    /**
     * design區塊的prev, next事件
     */
    $(".slick-frame .prev-arrow").click(function () {
        $(".slick-inner").slick("slickPrev");
    });
    $(".slick-frame .next-arrow").click(function () {
        $(".slick-inner").slick("slickNext");
    });

    /**
     * nvidia的輪播
     */
    $('.nvidia-slick-content').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    /**
     * nvidia的prev, next按鈕事件
     */
    $(".nvidia-prev-arrow").click(function () {
        $(".nvidia-slick-content").slick("slickPrev");
    });
    $(".nvidia-next-arrow").click(function () {
        $(".nvidia-slick-content").slick("slickNext");
    });

    /**
     * slider的主區塊輪播
     */
    $('.slider-slick-content').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    /**
     * slider主區塊的prev, next按鈕事件
     */
    $(".slider-slick .prev-arrow").click(function () {
        $(".slider-slick-content").slick("slickPrev");
    });
    $(".slider-slick .next-arrow").click(function () {
        $(".slider-slick-content").slick("slickNext");
    });
    /**
     * 當畫面小於1280時，slider區域的選單改為可拖曳
     */
    if (window.innerWidth < 1280) {
        $(".slider-menu").slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
        });
    }

    /**
     * slider區域的選單個別click時，會將slider的輪播跳轉至選取的畫面
     */
    $(".gameFirst").click(function () {
        $(".slider-slick-content").slick("slickGoTo", 0)
    });

    $(".gameVisual1").click(function () {
        $(".slider-slick-content").slick("slickGoTo", 1)
    });

    $(".GameVisual2").click(function () {
        $(".slider-slick-content").slick("slickGoTo", 2)
    });

    $(".sonicStudio").click(function () {
        $(".slider-slick-content").slick("slickGoTo", 3)
    });

    $(".xsplit").click(function () {
        $(".slider-slick-content").slick("slickGoTo", 4)
    });

    $(".androidApp").click(function () {
        $(".slider-slick-content").slick("slickGoTo", 5)
    });

    /**
     * cooling區域的影片播放按鈕
     */
    $(".cooling-btn").click(function () {
        $(".cooling-mp4").get(0).play();
        $(this).fadeOut()
    });

    /**
     * keyboard區域的影片播放按鈕
     */
    $(".keyboard-btn").click(function () {
        $(".keyboard-mp4").get(0).play();
        $(this).fadeOut()
    });

    /**
     * 主區域的影片播放按鈕
     */
    $(".visual-btn").click(function () {
        $(".visual-mp4").get(0).play();
        $(this).fadeOut()
    });

    let performance＿float = 0;
    let qhd_float = 0;
    // let float5 = 0;
    let height = document.body.clientHeight - 200;
    var beforeScrollTop = document.body.scrollTop;
    $(window).scroll(function (e) {
        /**
         * 判斷滾動向上或向下
         */
        var afterScrollTop = $(window).scrollTop();
        var delta = beforeScrollTop - afterScrollTop;
        if (delta > 0) {
            direction = 'down';
        } else {
            direction = 'up';
        }
        beforeScrollTop = afterScrollTop;


        /**
         * 滾動到該區域時進行淡入淡出效果
         */
        if ($(window).scrollTop() > $(".design-section").offset().top - height) {
            $(".design-section .section-inner").addClass("active");
        }
        if ($(window).scrollTop() > $(".performance-section").offset().top - height) {
            $(".performance-section .section-inner").addClass("active");
        }
        if ($(window).scrollTop() > $(".display-section").offset().top - height) {
            $(".display-section .section-inner").addClass("active");
        }
        if ($(window).scrollTop() > $(".cooling-section").offset().top - height) {
            $(".cooling-section .section-inner").addClass("active");
        }
        if ($(window).scrollTop() > $(".video-section").offset().top - height) {
            $(".video-section .section-inner").addClass("active");
        }
        if ($(window).scrollTop() > $(".keyboard-section").offset().top - height) {
            $(".keyboard-section .section-inner").addClass("active");
        }
        if ($(window).scrollTop() > $(".audio-section").offset().top - height) {
            $(".audio-section .section-inner").addClass("active");
        }
        if ($(window).scrollTop() > $(".battery-section").offset().top - height) {
            $(".battery-section .section-inner").addClass("active");
        }
        if ($(window).scrollTop() > $(".aura-section").offset().top - height) {
            $(".aura-section .section-inner").addClass("active");
        }
        if ($(window).scrollTop() > $(".keystone-section").offset().top - height) {
            $(".keystone-section .section-inner").addClass("active");
        }
        if ($(window).scrollTop() > $(".connectivity-section").offset().top - height) {
            $(".connectivity-section .section-inner").addClass("active");
        }
        if ($(window).scrollTop() > $(".io-section").offset().top - height) {
            $(".io-section .section-inner").addClass("active");
        }
        if ($(window).scrollTop() > $(".exclusive-section").offset().top - height) {
            $(".exclusive-section .section-inner").addClass("active");
        }
        if ($(window).scrollTop() > $(".slider-section").offset().top - height) {
            $(".slider-section .section-inner").addClass("active");
        }
        if ($(window).scrollTop() > $(".peripherals-section").offset().top - height) {
            $(".peripherals-section .section-inner").addClass("active");
        }

        /**
         * rog-scar 滾動視差
         */
        if (window.innerWidth < 732) {
            if ($(window).scrollTop() > $(".rotate-bg").offset().top - ($(".rotate-bg").offset().top * 0.1)) {
                if (direction == "down") {
                    $(".rotate-bg").addClass("left");
                    $(".rotate-bg").removeClass("right");
                } else if (direction == "up") {
                    $(".rotate-bg").addClass("right");
                    $(".rotate-bg").removeClass("left");
                }
            }
        } else {
            if ($(window).scrollTop() > $(".rotate-bg").offset().top + ($(".rotate-bg").offset().top * 0.1)) {
                if (direction == "down") {
                    $(".rotate-bg").addClass("left");
                    $(".rotate-bg").removeClass("right");
                } else if (direction == "up") {
                    $(".rotate-bg").addClass("right");
                    $(".rotate-bg").removeClass("left");
                }
            }
        }

        /**
         * performance 滾動視差
         */
        if (window.innerWidth < 732) {
            if ($(window).scrollTop() > $(".performance-notebook").offset().top - ($(".performance-notebook").offset().top * 0.1)) {
                if (direction == "down") {
                    performance＿float -= 2.5;
                } else if (direction == "up") {
                    performance＿float += 2.5;
                }
                if (performance＿float > 30) {
                    performance＿float = 30
                }
                if (performance＿float < -30) {
                    performance＿float = -30
                }
                $(".performance-notebook").css({
                    "transform": `translateY(${performance＿float}px)`
                });

                $(".cpu").addClass("active");
                $(".gpu").addClass("active");
            } else {
                performance＿float = 0;
                $(".performance-notebook").css({
                    "transform": `translateY(${performance＿float}px)`
                });
            }
        } else {
            if ($(window).scrollTop() > $(".performance-notebook").offset().top - 200) {
                if (direction == "down") {
                    performance＿float -= 2.5;
                } else if (direction == "up") {
                    performance＿float += 2.5;
                }
                if (performance＿float > 30) {
                    performance＿float = 30
                }
                if (performance＿float < -30) {
                    performance＿float = -30
                }
                $(".performance-notebook").css({
                    "transform": `translateY(${performance＿float}px)`
                });

                $(".cpu").addClass("active");
                $(".gpu").addClass("active");
            } else {
                performance＿float = 0;
                $(".performance-notebook").css({
                    "transform": `translateY(${performance＿float}px)`
                });
            }
        }

        if ($(window).scrollTop() > $(".performance-notebook").offset().top + $(".performance-notebook").height()) {
            performance＿float = 0;
            $(".performance-notebook").css({
                "transform": `translateY(${performance＿float}px)`
            });
        }

        /**
         * fullhd 滾動視差
         */
        if (window.innerWidth < 732) {
            if ($(window).scrollTop() > $(".fullhd-notebook").offset().top - ($(".fullhd-notebook").offset().top * 0.1)) {
                $(".dispaly-mp4").get(0).play();
            }
        } else {
            if ($(window).scrollTop() > $(".fullhd-notebook").offset().top - 100) {
                $(".dispaly-mp4").get(0).play();
            }
        }


        /**
         * qhd 滾動視差
         */
        if (window.innerWidth < 732) {
            if ($(window).scrollTop() > $(".qhd-notebook").offset().top - ($(".qhd-notebook").offset().top * 0.1)) {
                if (direction == "down") {
                    qhd_float += 2.5;
                } else if (direction == "up") {
                    qhd_float -= 2.5;
                }
                if (qhd_float > 60) {
                    qhd_float = 60
                }
                if (qhd_float < -60) {
                    qhd_float = -60
                }
                $(".inner-sky img").css({
                    "left": `${qhd_float}px`,
                    "top": `${qhd_float/2}px`,
                });
            } else {
                float4 = 0;
                $(".inner-sky img").css({
                    "left": `${qhd_float}px`,
                    "top": `${qhd_float}px`,
                });
            }
        } else {
            if ($(window).scrollTop() > $(".qhd-notebook").offset().top - 300) {
                if (direction == "down") {
                    qhd_float += 2.5;
                } else if (direction == "up") {
                    qhd_float -= 2.5;
                }
                if (qhd_float > 60) {
                    qhd_float = 60
                }
                if (qhd_float < -60) {
                    qhd_float = -60
                }
                $(".inner-sky img").css({
                    "left": `${qhd_float}px`,
                    "top": `${qhd_float/2}px`,
                });
            } else {
                float4 = 0;
                $(".inner-sky img").css({
                    "left": `${qhd_float}px`,
                    "top": `${qhd_float}px`,
                });
            }
        }


        if ($(window).scrollTop() > $(".qhd-notebook").offset().top + $(".qhd-notebook").height()) {
            qhd_float = 0;
            $(".inner-sky img").css({
                "left": `${qhd_float}px`,
                "top": `${qhd_float}px`,
            });
        }
        /**
         * cooling的數字跳動
         */

        if (window.innerWidth < 732) {
            if ($(window).scrollTop() > $(".cooling-section").offset().top - ($(".cooling-section").height() * 0.1)) {
                $(".run-index font").animateNumbers(39, true, 1000);
            }
        } else {
            if ($(window).scrollTop() > $(".cooling-section").offset().top + ($(".cooling-section").height() * 0.1)) {
                $(".run-index font").animateNumbers(39, true, 1000);
            }
        }

        if (window.innerWidth < 732) {
            if ($(window).scrollTop() > $(".keyboard-section").offset().top - ($(".keyboard-section").offset().top * 0.1)) {
                if (direction == "down") {
                    $(".keyboard-line").removeClass("active");
                } else if (direction == "up") {
                    $(".keyboard-line").addClass("active");
                }
            }
        } else {
            if ($(window).scrollTop() > $(".keyboard-section").offset().top + 200) {
                if (direction == "down") {
                    $(".keyboard-line").removeClass("active");
                } else if (direction == "up") {
                    $(".keyboard-line").addClass("active");
                }
            }
        }

        /**
         * battery背景動畫
         */
        if ($(window).scrollTop() > $(".battery").offset().top) {
            $(".battery").addClass("active");
        }

        /**
         * keystone動畫
         */
        if ($(window).scrollTop() > $(".keystone-notebook").offset().top - 200) {
            $(".keystone-in").addClass("active");
        }

        /**
         * connectivity動畫
         */

        if ($(window).scrollTop() > $(".connectivity-section").offset().top + 150) {
            $(".upper-bar .bar").addClass("active");
            $(".run-bar-inner .intel-bar .mbps font").animateNumbers(2400, true, 1000);
            $(".run-bar-inner .ac-bar .mbps font").animateNumbers(867, true, 1000);
        }

        /**
         * io動畫
         */

        if ($(window).scrollTop() > $(".io-section").offset().top + 150) {
            $(".io .usb").addClass("active");
        }
    });

    /**
     * audio learn more click
     */
    $(".audio-btn .learn-btn").click(function () {
        bodyScrollHidden();
        $(".audio-black-frame").removeClass("hide");
        setTimeout(function () {
            $(".audio-mp4").get(0).play();
            audio_video = true;
            $(".black-mask").addClass("active");
            $(".audio-thumb1").addClass("active");
        }, 200);
    });

    /**
     * audio-arrow 按鈕事件
     */

    $(".audio-layers .prev-arrow").click(function () {
        var count = $(this).parents(".audio-layers").index();
        layerChagne($(".audio-layers"), count, 'next');
    });
    $(".audio-layers .next-arrow").click(function () {
        var count = $(this).parents(".audio-layers").index();
        layerChagne($(".audio-layers"), count, 'next');
    });


    /**
     * keyboard learn more click
     */
    $(".keyboard-btn .learn-btn").click(function () {
        bodyScrollHidden();
        $(".keyboard-black-frame").removeClass("hide");
        setTimeout(function () {
            $(".keyboard-thumb1").addClass("active");
        }, 200);
    });


    /**
     * keyboard-arrow 按鈕事件
     */

    $(".keyboard-layers .prev-arrow").click(function () {
        var count = $(this).parents(".keyboard-layers").index();
        layerChagne($(".keyboard-layers"), count, 'prev');
    });
    $(".keyboard-layers .next-arrow").click(function () {
        var count = $(this).parents(".keyboard-layers").index();
        layerChagne($(".keyboard-layers"), count, 'next');
    });

    /**
     * cooling learn more click
     */
    $(".cooling-learnmore .learn-btn").click(function () {
        bodyScrollHidden();
        $(".cooling-black-frame").removeClass("hide");
        setTimeout(function () {
            $(".cooling-thumb1").addClass("active");
        }, 200);
    });


    /**
     * cooling-arrow 按鈕事件
     */

    $(".cooling-layers .prev-arrow").click(function () {
        var count = $(this).parents(".cooling-layers").index();
        layerChagne($(".cooling-layers"), count, 'prev');
    });
    $(".cooling-layers .next-arrow").click(function () {
        var count = $(this).parents(".cooling-layers").index();
        layerChagne($(".cooling-layers"), count, 'next');
    });

    /**
     * performance learn more click
     */
    $(".performance-btn .learn-btn").click(function () {
        bodyScrollHidden();
        $(".performance-black-frame").removeClass("hide");
        setTimeout(function () {
            $(".performance-thumb1").addClass("active");
        }, 200);
    });

    /**
     * performance-arrow 按鈕事件
     */
    $(".performance-layers .prev-arrow").click(function () {
        var count = $(this).parents(".performance-layers").index();
        layerChagne($(".performance-layers"), count, 'prev');
    });
    $(".performance-layers .next-arrow").click(function () {
        var count = $(this).parents(".performance-layers").index();
        layerChagne($(".performance-layers"), count, 'next');
    });

    /**
     * design thumb click
     */
    $(document).on("click", ".slick-img", function () {
        bodyScrollHidden();
        $(".design-black-frame").removeClass("hide");
        if ($(this).hasClass("slick-thumb1")) {
            setTimeout(function () {
                $(".design-thumb1").addClass("active");
                $(".design-thumb1").removeClass("left-ready")
                $(".design-thumb1").removeClass("right-ready");
                $(".design-thumb7").addClass("left-ready");
                $(".design-thumb2").addClass("right-ready");
            }, 200);
        } else if ($(this).hasClass("slick-thumb2")) {
            setTimeout(function () {
                $(".design-thumb2").addClass("active");
                $(".design-thumb2").removeClass("left-ready")
                $(".design-thumb2").removeClass("right-ready");
                $(".design-thumb1").addClass("left-ready");
                $(".design-thumb3").addClass("right-ready");
            }, 200);
        } else if ($(this).hasClass("slick-thumb3")) {
            setTimeout(function () {
                $(".design-thumb3").addClass("active");
                $(".design-thumb3").removeClass("left-ready")
                $(".design-thumb3").removeClass("right-ready");
                $(".design-thumb2").addClass("left-ready");
                $(".design-thumb4").addClass("right-ready");
            }, 200);
        } else if ($(this).hasClass("slick-thumb4")) {
            setTimeout(function () {
                $(".design-thumb4").addClass("active");
                $(".design-thumb4").removeClass("left-ready")
                $(".design-thumb4").removeClass("right-ready");
                $(".design-thumb3").addClass("left-ready");
                $(".design-thumb5").addClass("right-ready");
            }, 200);
        } else if ($(this).hasClass("slick-thumb5")) {
            setTimeout(function () {
                $(".design-thumb5").addClass("active");
                $(".design-thumb5").removeClass("left-ready")
                $(".design-thumb5").removeClass("right-ready");
                $(".design-thumb4").addClass("left-ready");
                $(".design-thumb6").addClass("right-ready");
            }, 200);
        } else if ($(this).hasClass("slick-thumb6")) {
            setTimeout(function () {
                $(".design-thumb6").addClass("active");
                $(".design-thumb6").removeClass("left-ready")
                $(".design-thumb6").removeClass("right-ready");
                $(".design-thumb5").addClass("left-ready");
                $(".design-thumb7").addClass("right-ready");
            }, 200);
        } else if ($(this).hasClass("slick-thumb7")) {
            setTimeout(function () {
                $(".design-thumb7").addClass("active");
                $(".design-thumb7").removeClass("left-ready")
                $(".design-thumb7").removeClass("right-ready");
                $(".design-thumb6").addClass("left-ready");
                $(".design-thumb1").addClass("right-ready");
            }, 200);
        }
    });

    /**
     * 第二層的關閉按鈕事件
     */
    $(".layer-frame .cross-btn").click(function () {
        bodyScrollOpen();
        $(".audio-box .black-mask").removeClass("active");
        $(".audio-box .inner-video .audio-final").removeClass("active");
        $(".design-black-frame").addClass("hide");
        $(".design-layers").removeClass("active");
        $(".performance-black-frame").addClass("hide");
        $(".performance-layers").removeClass("active");
        $(".cooling-black-frame").addClass("hide");
        $(".cooling-layers").removeClass("active");
        $(".keyboard-black-frame").addClass("hide");
        $(".keyboard-layers").removeClass("active");
        $(".audio-black-frame").addClass("hide");
        $(".audio-layers").removeClass("active");
    });
    /**
     * design-thumb按鈕事件
     */
    $(".design-layers .prev-arrow").click(function () {
        var count = $(this).parents(".design-layers").index();
        layerChagne($(".design-layers"), count, 'prev');

    });
    $(".design-layers .next-arrow").click(function () {
        var count = $(this).parents(".design-layers").index();
        layerChagne($(".design-layers"), count, 'next');
    });
    $(document).bind('mousewheel', function (e) {
        var delta = e.originalEvent.wheelDelta;
        if (e.target.className.indexOf("design-layers") != -1) {
            var count = $(".design-layers").index(e.target);
            if (delta < 0) { //next
                layerChagne($(".design-layers"), count, 'next');
            } else { //prev
                layerChagne($(".design-layers"), count, 'prev');
            }
        }
        if (e.target.className.indexOf("performance-layers") != -1) {
            var count = $(".performance-layers").index(e.target);
            if (delta < 0) { //next
                layerChagne($(".performance-layers"), count, 'next');
            } else { //prev
                layerChagne($(".performance-layers"), count, 'prev');
            }
        }
        if (e.target.className.indexOf("cooling-layers") != -1) {
            var count = $(".cooling-layers").index(e.target);
            if (delta < 0) { //next
                layerChagne($(".cooling-layers"), count, 'next');
            } else { //prev
                layerChagne($(".cooling-layers"), count, 'prev');
            }
        }
        if (e.target.className.indexOf("keyboard-layers") != -1) {
            var count = $(".keyboard-layers").index(e.target);
            if (delta < 0) { //next
                layerChagne($(".keyboard-layers"), count, 'next');
            } else { //prev
                layerChagne($(".keyboard-layers"), count, 'prev');
            }
        }
        if (e.target.className.indexOf("audio-layers") != -1) {
            var count = $(".audio-layers").index(e.target);
            if (delta < 0) { //next
                layerChagne($(".audio-layers"), count, 'next');
            } else { //prev
                layerChagne($(".audio-layers"), count, 'next');
            }
        }
        if (e.target.className.indexOf("audio-nb") != -1) {
            var count = $(".audio-layers").index(0);
            if (delta < 0) { //next
                layerChagne($(".audio-layers"), count, 'next');
            } else { //prev
                layerChagne($(".audio-layers"), count, 'next');
            }
        }
    });

    //調色盤選項
    $(".static").click(function () {

    });
    $(".breathing").click(function () {

    });
    $(".strobing").click(function () {

    });
    $(".colorcycle").click(function () {

    });
    $(".rainbow").click(function () {

    });
    $(".music").click(function () {

    });
    $(".smart").click(function () {

    });
    $(".starry").click(function () {

    });
});

function layerChagne(layers, count, txt) {
    $(layers[count]).removeClass("active");
    $(layers).removeClass("left-ready");
    $(layers).removeClass("right-ready");
    if (txt == 'next') {
        if (count == layers.length - 1) {
            $(layers[0]).addClass("active");
            $(layers[count]).addClass("left-ready");
            $(layers[1]).addClass("right-ready");
        } else {
            $(layers[count + 1]).addClass("active");
            $(layers[count]).addClass("left-ready");
            $(layers[count + 2]).addClass("right-ready");
        }
    } else {
        if (count == 0) {
            $(layers[layers.length - 1]).addClass("active");
            $(layers[layers.length - 2]).addClass("left-ready");
            $(layers[count]).addClass("right-ready");
        } else {
            $(layers[count - 1]).addClass("active");
            $(layers[count - 2]).addClass("left-ready");
            $(layers[count]).addClass("right-ready");
        }
    }
}

function bodyScrollHidden() {
    $("body").addClass("active");
    $("body").removeClass("scroll");
}

function bodyScrollOpen() {
    $("body").removeClass("active");
    $("body").addClass("scroll");
}

function isMobile() {
    var ua = navigator.userAgent;
    return /(iPad|iPhone|Android|Mobile)/i.test(ua) || false;
}
/**
 * 數字跳動插件
 */
(function ($) {
    $.fn.animateNumbers = function (stop, commas, duration, ease) {
        return this.each(function () {
            var $this = $(this);
            var start = parseInt($this.text().replace(/,/g, ""));
            commas = (commas === undefined) ? true : commas;
            $({
                value: start
            }).animate({
                value: stop
            }, {
                duration: duration == undefined ? 1000 : duration,
                easing: ease == undefined ? "swing" : ease,
                step: function () {
                    $this.text(Math.floor(this.value));
                },
                complete: function () {
                    if (parseInt($this.text()) !== stop) {
                        $this.text(stop);
                    }
                }
            });
        });
    };
})(jQuery);