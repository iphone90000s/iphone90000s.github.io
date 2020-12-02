var battery_lock = true;
$(function () {
    var beforeScrollTop = document.body.scrollTop;
    /**
     * design 三色選擇按鈕
     */
    $(".choose-bar .gray").click(function () {
        $(".choose-bar .choose").removeClass("active");
        $(this).addClass("active");
        $(".design-section .main-bg").addClass("gray");
        $(".design-section .main-bg").removeClass("black");
        $(".design-section .main-bg").removeClass("pink");
    });
    $(".choose-bar .black").click(function () {
        $(".choose-bar .choose").removeClass("active");
        $(this).addClass("active");
        $(".design-section .main-bg").addClass("black");
        $(".design-section .main-bg").removeClass("gray");
        $(".design-section .main-bg").removeClass("pink");
    });
    $(".choose-bar .pink").click(function () {
        $(".choose-bar .choose").removeClass("active");
        $(this).addClass("active");
        $(".design-section .main-bg").addClass("pink");
        $(".design-section .main-bg").removeClass("black");
        $(".design-section .main-bg").removeClass("gray");
    });
    /**
     * 影片播放按鈕
     */

    $(".product-section .play-btn").click(function () {
        $(".product-section .video-box .video-bg").css("z-index", "-1");
        $(".product-mp4").get(0).play();
        $(this).addClass("hide");
    });


    /**
     * display 切換按鈕
     */

    $(".fhd-content").click(function () {
        $(".fhd-name").addClass("active");
        $(".fhd-content").addClass("active");
        $(".fhd-txt").addClass("active");
        $(".display-bg").addClass("fhd");
        $(".display-bg").removeClass("qhd")
        $(".qhd-name").removeClass("active");
        $(".qhd-content").removeClass("active");
        $(".qhd-txt").removeClass("active");
    });

    $(".qhd-content").click(function () {
        $(".fhd-name").removeClass("active");
        $(".fhd-content").removeClass("active");
        $(".fhd-txt").removeClass("active");
        $(".display-bg").removeClass("fhd");
        $(".display-bg").addClass("qhd")
        $(".qhd-name").addClass("active");
        $(".qhd-content").addClass("active");
        $(".qhd-txt").addClass("active");
    });
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

    let battery_bg = 100;
    /**
     * 滾動事件
     */
    $(window).scroll(function () {

        if ($(window).scrollTop() > $(".performance-section").offset().top + ($(".performance-section").height() * 0.1)) {
            $(".performance-section .circle-box .circle").addClass("active");
        }

        if ($(window).scrollTop() > $(".display-section").offset().top + ($(".display-section").height() * 0.1)) {
            $(".display-section .main-bg.hz").addClass("active");
        }

        if ($(window).scrollTop() > $(".cool-section").offset().top + ($(".cool-section").height() * 0.1)) {
            $(".cool-section .circle-box .circle").addClass("active");
        }
        if ($(window).scrollTop() > $(".audio-section").offset().top + ($(".audio-section").height() * 0.1)) {
            $(".audio-section .circle-box .circle").addClass("active");
        }

        if ($(window).scrollTop() > $(".battery-section").offset().top + ($(".battery-section").height() * 0.1)) {
            if (battery_lock) {
                battery_lock = false;
                $(".battery-mp4").get(0).play();
            }
        }
        if ($(window).scrollTop() > $(".battery-nb").offset().top) {
            if (direction == 'up') {
                battery_bg -= 10
                if (battery_bg < -50) {
                    battery_bg = -50
                }
            }

            if (direction == 'down') {
                battery_bg += 10
                if (battery_bg > 100) {
                    battery_bg = 100
                }
            }
            $(".battery-nb .circle-frame").css({
                "transform": `translateY(${battery_bg}%)`
            })
        }

        if ($(window).scrollTop() > $(".connectivity-section").offset().top + ($(".connectivity-section").height() * 0.1)) {
            $(".connectivity-section .bar-box .bar").addClass("active");
            $(".wifi-bar-box .mbps font").animateNumbers(2400, true, 1000);
            $(".ac-bar-box .mbps font").animateNumbers(867, true, 1000);
        }
    });
});


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