$(function () {

    /**
     * @summary 當畫面重整時，強制回到網頁最上方
     */
    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
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
        slidesToScroll: 1
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

    $(".run-index font").animateNumbers(39, true, 1000);

    $(".prev-arrow").click(function () {
        $(".slick-inner").slick("slickPrev");
    });
    $(".next-arrow").click(function () {
        $(".slick-inner").slick("slickNext");
    });

    $(".menu-hambuger").click(function () {
        $(".menu-list").toggleClass("active")
        $(".menu-hambuger").addClass("hide")
    });

    $(".menu-list .cross-btn").click(function () {
        $(".menu-list").toggleClass("active")
        $(".menu-hambuger").removeClass("hide")
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
    let height = document.body.clientHeight;

    let visual = $(".visual-section").height();
    let design = $(".design-section").height();    
    let performance = $(".performance-section").height();    
    let display = $(".display-section").height();    
    let cooling = $(".cooling-section").height();
    let keyboard = $(".keyboard-section").height();
    let audio = $(".audio-section").height();
    let battery = $(".battery-section").height();
    let aura = $(".aura-section").height();
    let keystone = $(".keystone-section").height();
    let connectivity = $(".connectivity-section").height();
    let io = $(".io-section").height();
    let exclusive = $(".exclusive-section").height();
    let slider = $(".slider-section").height();
    let peripherals = $(".peripherals-section").height();


    $(window).scroll(function (e) {

        /**
         * rog-scar 滾動視差
         */
        if ($(window).scrollTop() > $(".rog-scar").offset().top - 200) {
            if (direction == "down") {
                float -= 3;
            } else if (direction == "up") {
                float += 3;
            }
            $(".rog-scar").css({
                "transform": `translateY(${float}px)`
            });
        } else {float = 0;
             $(".rog-scar").css({
                "transform": `translateY(${float}px)`
            });
        }
        if ($(window).scrollTop() > $(".rog-scar").offset().top + $(".rog-scar").height()) {
            float = 0;
            $(".rog-scar").css({
                "transform": `translateY(${float}px)`
            });
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
            $(".performance-notebook").css({
                "transform": `translateY(${float2}px)`
            });

            $(".cpu").css({
                "transform": `translateY(-${float2/2}px)`
            });
            $(".gpu").css({
                "transform": `translateY(-${float2/2}px)`
            });
        } else {
            float2 = 0;
            $(".performance-notebook").css({
                "transform": `translateY(${float2}px)`
            });
            $(".cpu").css({
                "transform": `translateY(${float2}px)`
            });
            $(".gpu").css({
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
            $(".fullhd-notebook").css({
                "transform": `translateY(${float3}px)`
            });
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
            });
        } else {
            float4 = 0;
            $(".inner-sky img").css({
                "left": `${float4}px`,
            });
        }
         if ($(window).scrollTop() > $(".qhd-notebook").offset().top + $(".qhd-notebook").height()) {
            float4 = 0;
            $(".inner-sky img").css({
                "left": `${float4}px`,
            });
        }
        /**
         * 
         */

        if ($(window).scrollTop() > $(".cooling-cpu").offset().top - 300) {
            if (direction == "down") {                
                $(".cooling-winds").removeClass("active");
            } else if (direction == "up") {                
                $(".cooling-winds").addClass("active");
            }
            
        }


        if ($(window).scrollTop() > $(".keyboard-section").offset().top + 200) {
            if (direction == "down") {
                $(".keyboard-line").removeClass("active");
            } else if (direction == "up") {
                $(".keyboard-line").addClass("active");
            }
        }

         $(".audio-mp4").on('ended', function () {
            $(".audio-final").addClass("active")
        });

        if ($(window).scrollTop() > $(".audio-section").offset().top) {
            if (!audio_video) {
                $(".audio-mp4").get(0).play();
                audio_video = true;
            }                 
        }

        if ($(window).scrollTop() > $(".audio-section").offset().top) { 
            if (direction == "down") {
                float5 -= 7.5;
            } else if (direction == "up") {
                float5 += 7.5;
            }
            console.log(float5)
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