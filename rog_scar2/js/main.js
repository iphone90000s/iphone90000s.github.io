var battery_lock = true;
$(function () {
    var beforeScrollTop = document.body.scrollTop;

    $(".overviewContent .container .cover-section .text.bigger").mouseover(function () {
        $(".main-bg.main-bg6").addClass("active");
    })

    $(".overviewContent .container .cover-section .text.bigger").mouseleave(function () {
        $(".main-bg.main-bg6").removeClass("active");
    })
    
    $(".left-hidden").mouseover(function () {
        $(".slick-in").addClass("left");
        $(".slick-in").removeClass("right");
    });
    $(".right-hidden").mouseover(function () {
        $(".slick-in").removeClass("left");
        $(".slick-in").addClass("right");
    });

    

    /**
     * design learn more click
     */
    $(".cover-section .learn-more").click(function () {
        bodyScrollHidden();
        $(".design-black-frame").removeClass("hide");
        setTimeout(function () {
            $(".design-thumb1").addClass("active");
        }, 200);
    });

    /**
     * design-arrow 按鈕事件
     */

    $(".design-layers .prev-arrow").click(function () {
        var count = $(this).parents(".design-layers").index();
        layerChagne($(".design-layers"), count, 'next');
    });
    $(".design-layers .next-arrow").click(function () {
        var count = $(this).parents(".design-layers").index();
        layerChagne($(".design-layers"), count, 'next');
    });

     /**
     * audio learn more click
     */
    $(".audio-section .learn-more").click(function () {
        bodyScrollHidden();
        $(".audio-black-frame").removeClass("hide");
        setTimeout(function () {
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
    $(".keyboard-section .learn-more").click(function () {
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
    $(".cool-section .learn-more").click(function () {
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
    $(".performance-run-section .learn-more").click(function () {
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
     * 第二層的關閉按鈕事件
     */
    $(".layer-frame .cross-btn").click(function () {
        bodyScrollOpen();
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

    $(".keyboard-switch .switch-content").click(function () {
        $(".keyboard-switch .switch-content").removeClass("active");
        $(this).addClass("active");
        if ($(this).hasClass("options15")) {
            $(".kayboard-nb").removeClass("options17");
            $(".kayboard-nb").addClass("options15");
        }
        if ($(this).hasClass("options17")) {
            $(".kayboard-nb").addClass("options17");
            $(".kayboard-nb").removeClass("options15");
        }
    });

    $(".popup-inner .close-btn").click(function () {        
        $(".popup").removeClass("active");
    })
    $(".look-btn").click(function () {
        $(".popup").addClass("active");
        $(".popup-product").addClass("hide");
        if ($(this).hasClass("look-bag")) {
            $(".popup-back").removeClass("hide");
        }
        if ($(this).hasClass("look-nb")) {
            $(".popup-nb").removeClass("hide");
        }
        if ($(this).hasClass("look-transformer")) {
            $(".popup-transformer").removeClass("hide");
        }
        if ($(this).hasClass("look-headset")) {
            $(".popup-headset").removeClass("hide");
        }
        if ($(this).hasClass("look-mouse")) {
            $(".popup-mouse").removeClass("hide");
        }
    });

    $(".slick-section .slick-box").slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
     $(".popup-back .popup-slick-inner").slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
     });
    
    $(".popup-nb .popup-slick-inner").slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    $(".popup-transformer .popup-slick-inner").slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    $(".popup-headset .popup-slick-inner").slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    $(".popup-mouse .popup-slick-inner").slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
     });
    
        $(".popup-back .prev-arrow").click(function () {
            $(".popup-back .popup-slick-inner").slick("slickPrev");
        });
        $(".popup-back .next-arrow").click(function () {
            $(".popup-back .popup-slick-inner").slick("slickNext");
        });

        $(".popup-nb .prev-arrow").click(function () {
            $(".popup-nb .popup-slick-inner").slick("slickPrev");
        });
        $(".popup-nb .next-arrow").click(function () {
            $(".popup-nb .popup-slick-inner").slick("slickNext");
        });

        $(".popup-transformer .prev-arrow").click(function () {
            $(".popup-transformer .popup-slick-inner").slick("slickPrev");
        });
        $(".popup-transformer .next-arrow").click(function () {
            $(".popup-transformer .popup-slick-inner").slick("slickNext");
        });

        $(".popup-headset .prev-arrow").click(function () {
            $(".popup-headset .popup-slick-inner").slick("slickPrev");
        });
        $(".popup-headset .next-arrow").click(function () {
            $(".popup-headset .popup-slick-inner").slick("slickNext");
        });
        $(".popup-mouse .prev-arrow").click(function () {
            $(".popup-mouse .popup-slick-inner").slick("slickPrev");
        });
        $(".popup-mouse .next-arrow").click(function () {
            $(".popup-mouse .popup-slick-inner").slick("slickNext");
        });

    $(".bundle-switch .switch-content").click(function () {
        $(".bundle-switch .switch-content").removeClass("active");
        $(this).addClass("active");
        if ($(this).hasClass("gray")) {
            $(".bundle-bg").removeClass("punk");
            $(".bundle-bg").addClass("gray");

            $(".gray-look").removeClass("hide");
            $(".punk-look").addClass("hide");
        }
        if ($(this).hasClass("punk")) {

            $(".bundle-bg").removeClass("gray");
            $(".bundle-bg").addClass("punk");


            $(".punk-look").removeClass("hide");
            $(".gray-look").addClass("hide");
        }
    });
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
    
    
    let cover_move1 = 0;
    let cover_move2 = 0;
    let cover_move3 = 0;
    let audio_move = 0;
    let battery_bg = 100;
    /**
     * 滾動事件
     */
    $(window).scroll(function () {
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

        if ($(window).scrollTop() > $(".audio-nb").offset().top + ($(".audio-nb").height() * 0.1)) { 
            if (direction == 'up') {
                 audio_move += 5;
            } else {
                 audio_move -= 5;
            }
            if (audio_move > 30) {
               audio_move = 30
            }
            if (audio_move < -30) [
                audio_move = -30
            ]

             $(".audio-nb").css({
                "background-position": `calc(50%) calc(50% + ${audio_move}px)` 
            }); 
        }
        
        if ($(window).scrollTop() > $(".cover-section").offset().top + ($(".cover-section").height() * 0.1)) {
            if (direction == 'up') {
                 cover_move1 += 5;
            } else {
                 cover_move1 -= 5;
            }
            if (cover_move1 > 30) {
               cover_move1 = 30
            }
            if (cover_move1 < -30) [
                cover_move1 = -30
            ]
            $(".cover-section .main-bg.main-bg3").css({
                "background-position": `calc(50%) calc(50% + ${cover_move1}px)` 
            }); 
        }

        if ($(window).scrollTop() > $(".cover-section").offset().top + ($(".cover-section").height() * 0.2)) {
             if (direction == 'up') {
                 cover_move2 += 5;
            } else {
                 cover_move2 -= 5;
            }
            if (cover_move2 > 30) {
               cover_move2 = 30
            }
            if (cover_move2 < -30) [
                cover_move2 = -30
            ]
            $(".cover-section .main-bg.main-bg2").css({
                "background-position": `calc(50%) calc(50% + ${cover_move2}px)` 
            }); 
        }

        if ($(window).scrollTop() > $(".cover-section").offset().top + ($(".cover-section").height() * 0.3)) {
             if (direction == 'up') {
                 cover_move3 += 5;
            } else {
                 cover_move3 -= 5;
            }
            if (cover_move3 > 30) {
               cover_move3 = 30
            }
            if (cover_move3 < -30) [
                cover_move3 = -30
            ]
            $(".cover-section .main-bg.main-bg7").css({
                "background-position": `calc(50%) calc(50% + ${cover_move3}px)` 
            }); 
        }

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

     //調色盤選項
    $(".static").click(function () {
        $(".status").removeClass("active");
        $(".static").addClass("active");
        $(".palette").removeClass("active");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").removeClass("hide");
        $(".mouse-block, .headset-left-svg, .headset-right-svg, .color-block").removeClass("animate-starry");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-breathing");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-colorcycle");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-strobing");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-smart");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-music");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-colorcycleSvg");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").removeClass("animate-rainbow");
        $(".headset-left-svg, .headset-right-svg").removeClass("animate-smartSvg");
        $(".color-rainbow").removeClass("animate-rainbow");
        $(".color-rainbow, .color-rainbow2, .color-rainbow3, .mask-left, .mask-right").removeClass("animate-rainbow");
    });
    $(".breathing").click(function () {
        $(".status").removeClass("active");
        $(".breathing").addClass("active");
        $(".palette").removeClass("active");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").removeClass("hide");
        $(".mouse-block, .headset-left-svg, .headset-right-svg, .color-block").removeClass("animate-starry");
        $(".setcolor,.headset-left-svg, .headset-right-svg").addClass("animate-breathing");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-colorcycle");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-strobing");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-smart");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-music");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-colorcycleSvg");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").removeClass("animate-rainbow");
        $(".headset-left-svg, .headset-right-svg").removeClass("animate-smartSvg");
        $(".color-rainbow").removeClass("animate-rainbow");
        $(".color-rainbow, .color-rainbow2, .color-rainbow3, .mask-left, .mask-right").removeClass("animate-rainbow");
    });
    $(".strobing").click(function () {
        $(".status").removeClass("active");
        $(".strobing").addClass("active");
        $(".palette").removeClass("active");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").removeClass("hide");
        $(".mouse-block, .headset-left-svg, .headset-right-svg, .color-block").removeClass("animate-starry");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-colorcycle");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-breathing");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-colorcycleSvg");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-music");
        $(".setcolor,.headset-left-svg, .headset-right-svg").addClass("animate-strobing");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").removeClass("animate-rainbow");
        $(".headset-left-svg, .headset-right-svg").removeClass("animate-smartSvg");
        $(".color-rainbow").removeClass("animate-rainbow");
        $(".color-rainbow, .color-rainbow2, .color-rainbow3, .mask-left, .mask-right").removeClass("animate-rainbow");
    });
    $(".colorcycle").click(function () {
        $(".status").removeClass("active");
        $(".colorcycle").addClass("active");
        $(".palette").addClass("active");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").removeClass("hide");
        $(".mouse-block, .headset-left-svg, .headset-right-svg, .color-block").removeClass("animate-starry");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-strobing");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-breathing");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-music");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-smart");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").removeClass("animate-rainbow");
        $(".setcolor,.headset-left-svg, .headset-right-svg").addClass("animate-colorcycle");
        $(".headset-left-svg, .headset-right-svg").addClass("animate-colorcycleSvg");
        $(".headset-left-svg, .headset-right-svg").removeClass("animate-smartSvg");
        $(".color-rainbow").removeClass("animate-rainbow");        
        $(".color-rainbow, .color-rainbow2, .color-rainbow3, .mask-left, .mask-right").removeClass("animate-rainbow");
    });
    $(".rainbow").click(function () {
        $(".status").removeClass("active");
        $(".rainbow").addClass("active");
        $(".palette").addClass("active");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").removeClass("hide");
        $(".mouse-block, .headset-left-svg, .headset-right-svg, .color-block").removeClass("animate-starry");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-strobing");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-colorcycle");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-breathing");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-colorcycleSvg");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-music");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-smart");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").addClass("animate-rainbow");
        $(".headset-left-svg, .headset-right-svg").removeClass("animate-smartSvg");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").addClass("hide");
        $(".color-rainbow, .color-rainbow2, .color-rainbow3, .mask-left.rainbow, .mask-right.rainbow").addClass("animate-rainbow");
    });
    $(".music").click(function () {
        $(".status").removeClass("active");
        $(".music").addClass("active");
        $(".palette").addClass("active");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").removeClass("hide");
        $(".mouse-block, .headset-left-svg, .headset-right-svg, .color-block").removeClass("animate-starry");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-strobing");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-colorcycle");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-breathing");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-colorcycleSvg");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").removeClass("animate-rainbow");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-smart");
        $(".setcolor,.headset-left-svg, .headset-right-svg").addClass("animate-music");
        $(".headset-left-svg, .headset-right-svg").removeClass("animate-smartSvg");
        $(".color-rainbow").removeClass("animate-rainbow");
        $(".color-rainbow, .color-rainbow2, .color-rainbow3, .mask-left, .mask-right").removeClass("animate-rainbow");
        
    });
    $(".smart").click(function () {
        $(".status").removeClass("active");
        $(".smart").addClass("active");
        $(".palette").addClass("active");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").removeClass("hide");
        $(".mouse-block, .headset-left-svg, .headset-right-svg, .color-block").removeClass("animate-starry");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-strobing");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-colorcycle");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-breathing");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-colorcycleSvg");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").removeClass("animate-rainbow");
        $(".setcolor,.headset-left-svg, .headset-right-svg").addClass("animate-smart");
        $(".headset-left-svg, .headset-right-svg").addClass("animate-smartSvg");
        $(".color-rainbow").removeClass("animate-rainbow");
        $(".color-rainbow, .color-rainbow2, .color-rainbow3, .mask-left, .mask-right").removeClass("animate-rainbow");
    });
    $(".starry").click(function () {
        $(".status").removeClass("active");
        $(".starry").addClass("active");
        $(".palette").addClass("active");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-strobing");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-colorcycle");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-breathing");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-colorcycleSvg");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").removeClass("animate-rainbow");
        $(".setcolor,.headset-left-svg, .headset-right-svg").removeClass("animate-smart");
        $(".headset-left-svg, .headset-right-svg").removeClass("animate-smartSvg");
        $(".nb-block-shadow, .nb-block-top, .nb-block-bottom").addClass("hide");
        $(".color-rainbow").removeClass("animate-rainbow");
        $(".color-rainbow, .color-rainbow2, .color-rainbow3, .mask-left, .mask-right").removeClass("animate-rainbow");
        $(".mouse-block, .headset-left-svg, .headset-right-svg, .color-block").addClass("animate-starry");
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
    
    
    $('.slick-box').on('beforeChange', function (event, slick, direction) {
        var count = direction + 1
        $(".slick-section .bar-in").css({
            "width": `${count * 20}%`
        })
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