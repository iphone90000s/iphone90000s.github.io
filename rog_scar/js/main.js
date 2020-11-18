$(function () {

    /**
     * @summary 當畫面重整時，強制回到網頁最上方
     */
    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });

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


    $('.nvidia-slick-content').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $(".nvidia-prev-arrow").click(function () {
        $(".nvidia-slick-content").slick("slickPrev");
    });
    $(".nvidia-next-arrow").click(function () {
        $(".nvidia-slick-content").slick("slickNext");
    });


    $('.slider-slick-content').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $(".slider-slick .prev-arrow").click(function () {
        $(".slider-slick-content").slick("slickPrev");
    });
    $(".slider-slick .next-arrow").click(function () {
        $(".slider-slick-content").slick("slickNext");
    });


    $(".slick-frame .prev-arrow").click(function () {
        $(".slick-inner").slick("slickPrev");
    });
    $(".slick-frame .next-arrow").click(function () {
        $(".slick-inner").slick("slickNext");
    });

    $(".competition-btn").click(function () {
        $(".competition-mp4").get(0).play();
        $(this).fadeOut()
    });

    $(".cooling-btn").click(function () {
        $(".cooling-mp4").get(0).play();
        $(this).fadeOut()
    });

    $(".keyboard-btn").click(function () {
        $(".keyboard-mp4").get(0).play();
        $(this).fadeOut()
    });
    $(".visual-btn").click(function () {
        $(".visual-mp4").get(0).play();
        $(this).fadeOut()
    });

    let float = 0;
    let float2 = 0;
    let float3 = 0;
    let float4 = 0;
    let float5 = 0;
    let audio_video = false;
    let height = document.body.clientHeight - 200;
    $(window).scroll(function (e) {

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
        /////////
        /**
         * rog-scar 滾動視差
         */
        if ($(window).scrollTop() > $(".rotate-bg").offset().top + ($(".rotate-bg").offset().top * 0.1)) {
            if (direction == "down") {
                $(".rotate-bg").addClass("left");
                $(".rotate-bg").removeClass("right");
            } else if (direction == "up") {
                $(".rotate-bg").addClass("right");
                $(".rotate-bg").removeClass("left");
            }
        }
        /**
         * performance 滾動視差
         */
        if ($(window).scrollTop() > $(".performance-notebook").offset().top - 200) {
            if (direction == "down") {
                float2 -= 2.5;
            } else if (direction == "up") {
                float2 += 2.5;
            }
            if (float2 > 30) {
                float2 = 30
            }
            if (float2 < -30) {
                float2 = -30
            }
            $(".performance-notebook").css({
                "transform": `translateY(${float2}px)`
            });

            $(".cpu").addClass("active");
            $(".gpu").addClass("active");
        } else {
            float2 = 0;
            $(".performance-notebook").css({
                "transform": `translateY(${float2}px)`
            });
        }

        if ($(window).scrollTop() > $(".performance-notebook").offset().top + $(".performance-notebook").height()) {
            float2 = 0;
            $(".performance-notebook").css({
                "transform": `translateY(${float2}px)`
            });
        }
        /**
         * fullhd 滾動視差
         */

        if ($(window).scrollTop() > $(".fullhd-notebook").offset().top - 100) {

            $(".dispaly-mp4").get(0).play();
            if (direction == "down") {
                float3 += 2.5;
            } else if (direction == "up") {
                float3 -= 2.5;
            }
            // $(".fullhd-notebook").css({
            //     "transform": `translateY(${float3}px)`
            // });
        }

        /**
         * qhd 滾動視差
         */
        if ($(window).scrollTop() > $(".qhd-notebook").offset().top - 300) {
            if (direction == "down") {
                float4 += 2.5;
            } else if (direction == "up") {
                float4 -= 2.5;
            }
            $(".inner-sky img").css({
                "left": `${float4}px`,
                "top": `${float4/2}px`,
            });
        } else {
            float4 = 0;
            $(".inner-sky img").css({
                "left": `${float4}px`,
                "top": `${float4}px`,
            });
        }
        if ($(window).scrollTop() > $(".qhd-notebook").offset().top + $(".qhd-notebook").height()) {
            float4 = 0;
            $(".inner-sky img").css({
                "left": `${float4}px`,
                "top": `${float4}px`,
            });
        }
        /**
         * 
         */

        if ($(window).scrollTop() > $(".cooling-section").offset().top + ($(".cooling-section").height() * 0.1)) {
            $(".run-index font").animateNumbers(39, true, 1000);
        }



        if ($(window).scrollTop() > $(".keyboard-section").offset().top + 200) {
            if (direction == "down") {
                $(".keyboard-line").removeClass("active");
            } else if (direction == "up") {
                $(".keyboard-line").addClass("active");
            }
        }

        $(".audio-mp4").on('ended', function () {
            $(".audio-final").addClass("active");
            audio_video = false;
        });

        if ($(window).scrollTop() > $(".audio-section").offset().top) {
            if (!audio_video) {
                $(".audio-final").removeClass("active");
                $(".audio-mp4").get(0).play();
                audio_video = true;
            }
        }

        if ($(window).scrollTop() > $(".audio-section").offset().top + ($(".audio-section").height() * 0.1)) {
            if (direction == "down") {
                float5 -= 7.5;
            } else if (direction == "up") {
                float5 += 7.5;
            }
            if (float5 >= 100) {
                float5 = 100
            }
            if (float5 <= 0) {
                float5 = 0;
            }
            $(".audio .black-frame").css({
                "transform": `translateX(-${float5}%)`
            });
        } else {
            $(".audio .black-frame").css({

                "transform": `translateX(0%)`
            });
        }

        if ($(window).scrollTop() > $(".battery").offset().top) {
            $(".battery").addClass("active");
        }

        if ($(window).scrollTop() > $(".keystone-notebook").offset().top - 200) {
            $(".keystone-in").addClass("active");
        }


        if ($(window).scrollTop() > $(".connectivity-section").offset().top + 150) {

            $(".upper-bar .bar").addClass("active");
            $(".run-bar-inner .intel-bar .mbps font").animateNumbers(2400, true, 1000);
            $(".run-bar-inner .ac-bar .mbps font").animateNumbers(867, true, 1000);
        }

        if ($(window).scrollTop() > $(".io-section").offset().top + 150) {
            $(".io .usb").addClass("active");
        }
    });
});

var direction;
var scrollFunction = function (e) {
    e = e || window.event;
    if (e.wheelDelta) {
        if (e.wheelDelta > 0) {
            direction = 'down';
        }
        if (e.wheelDelta < 0) {
            direction = 'up';
        }
    } else if (e.detail) {
        if (e.detail > 0) {
            direction = 'down';
        }
        if (e.detail < 0) {
            direction = 'up';
        }
    }
};
document.addEventListener("DOMMouseScroll", scrollFunction, false);
window.onmousewheel = document.onmousewheel = scrollFunction;

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
                    // if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
                },
                complete: function () {
                    if (parseInt($this.text()) !== stop) {
                        $this.text(stop);
                        //    if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
                    }
                }
            });
        });
    };
})(jQuery);