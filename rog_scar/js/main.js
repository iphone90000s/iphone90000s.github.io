$(function () {

    $(".upper-bar .bar").addClass("active");
    /**
     * @summary 當畫面重整時，強制回到網頁最上方
     */
    // $(window).on('beforeunload', function () {
    //     $(window).scrollTop(0);
    // });

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
        //   responsive: [
        //     {
        //       breakpoint: 1024,
        //       settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         infinite: true,
        //         dots: true
        //       }
        //     },
        //     {
        //       breakpoint: 600,
        //       settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //       }
        //     },
        //     {
        //       breakpoint: 480,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //       }
        //     }
        //   ]
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

    // $(".intel-bar .bar").animate({
    //     width: ["100%",'easeOutBounce']
    // }, 2500);

    // $(".ac-bar .bar").animate({
    //     width: ["100%",'easeOutBounce']
    // }, 2500);

    $(".run-bar-inner .intel-bar .mbps font").animateNumbers(2400, true, 1000);
    $(".run-bar-inner .ac-bar .mbps font").animateNumbers(867, true, 1000);

    $(".competition-btn").click(function () {
        $(".competition-mp4").get(0).play();
        $(this).fadeOut()
    });

    $(".competition-mp4").on('ended', function () {
        $(".competition-btn").fadeIn()
    });

    $(".cooling-btn").click(function () {
        $(".cooling-mp4").get(0).play();
        $(this).fadeOut()
    });

    $(".cooling-mp4").on('ended', function () {
        $(".cooling-btn").fadeIn()
    });

    $(".keyboard-btn").click(function () {
        $(".keyboard-mp4").get(0).play();
        $(this).fadeOut()
    });


    $(".keyboard-mp4").on('ended', function () {
        $(".keyboard-btn").fadeIn()
    });

    // $(".rog-scar").paroller({
    //     factor: 0.1,
    //     factorXs: 0.2,
    //     type: 'foreground',
    //     direction: 'vertical'
    // });
    // let float = 0;
    // let float2 = 0;
    // let float3 = 0;
    // let float4 = 0;
    // let float5 = 0;
    // $(window).scroll(function (e) {
    //     var _container = $(".scar-container");
    //     if ($(window).scrollTop() > $(".rog-scar").offset().top) {
    //         if (direction == "down") {
    //             float += 5;
    //         } else if (direction == "up") {
    //             float -= 5;
    //         }
    //         $(".rog-scar").css({
    //             "transform": `translateY(${float}px)`
    //         });
    //     }

    //     if ($(window).scrollTop() > $(".performance-notebook img").offset().top) {
    //         if (direction == "down") {
    //             float2 += 5;
    //         } else if (direction == "up") {
    //             float2 -= 5;
    //         }
    //         $(".performance-cpu img").css({
    //             "transform": `translateY(${float2}px)`
    //         });
    //     }

    //     if ($(window).scrollTop() > $(".display-fullhd img").offset().top) {
    //         if (direction == "down") {
    //             float3 -= 5;
    //         } else if (direction == "up") {
    //             float3 += 5;
    //         }
    //         $(".display-fullhd img").css({
    //             "transform": `translateY(${float3}px)`
    //         });
    //     }

    //     if ($(window).scrollTop() > $(".display-qhd img").offset().top) {
    //         if (direction == "down") {
    //             float4 -= 5;
    //         } else if (direction == "up") {
    //             float4 += 5;
    //         }
    //         $(".display-qhd img").css({
    //             "transform": `translateY(${float4}px)`
    //         });
    //     }

    //     if ($(window).scrollTop() > $(".cooling-cpu img").offset().top) {
    //         if (direction == "down") {
    //             float5 -= 5;
    //         } else if (direction == "up") {
    //             float5 += 5;
    //         }
    //         $(".cooling-cpu img").css({
    //             "transform": `translateY(${float5}px)`
    //         });
    //     }
    // });
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