let audio_video = false;
var direction;
$(function () {
    /**
     * 滾動事件
     */

    setTimeout(function () {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: ".design-section",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".design-section .section-inner").addClass("active");
            },
        });

        ScrollTrigger.create({
            trigger: ".performance",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".performance-section .cpu").addClass("active");
                $(".performance-section .gpu").addClass("active");
            },
        });

        ScrollTrigger.create({
            trigger: ".performance-section",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".performance-section .section-inner").addClass("active");
            },
        });

        ScrollTrigger.create({
            trigger: ".display-section",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".display-section .section-inner").addClass("active");
            },
        });
        var displayPanel = gsap.utils.toArray(".display-panel");
        gsap.to(displayPanel, {
        xPercent: -100 * (displayPanel.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".panel-container",
            pin: ".panel-container",
            scrub: 1,
            // snap: 1 / (displayPanel.length - 1),
            end: () => "+=" + document.querySelector(".panel-container").offsetWidth
        }
        });

        ScrollTrigger.create({
            trigger: ".display-fullhd",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".dispaly-mp4").get(0).play();
            },
        });

        ScrollTrigger.create({
            trigger: ".cooling-section",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".cooling-section .section-inner").addClass("active");
            },
        });


        ScrollTrigger.create({
            trigger: ".video-section",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".video-section .section-inner").addClass("active");
            },
        });

        ScrollTrigger.create({
            trigger: ".keyboard-section",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".keyboard-section .section-inner").addClass("active");
            },
        });

        ScrollTrigger.create({
            trigger: ".keyboard",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".keyboard-line").addClass("active");
            },
        });

        ScrollTrigger.create({
            trigger: ".audio-section",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".audio-section .section-inner").addClass("active");
            },
        });

        ScrollTrigger.create({
            trigger: ".battery-section",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".battery-section .section-inner").addClass("active");
            },
        });

        ScrollTrigger.create({
            trigger: ".battery",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".battery").addClass("active");
            },
        });

        ScrollTrigger.create({
            trigger: ".aura-section",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".aura-section .section-inner").addClass("active");
            },
        });


        ScrollTrigger.create({
            trigger: ".keystone-section",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".keystone-section .section-inner").addClass("active");
            },
        });

        ScrollTrigger.create({
            trigger: ".keystone",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".keystone-in").addClass("active");
                setTimeout(function(){
                    $(".keystone-seq").addClass("active");
                },500);
            },
        });

        ScrollTrigger.create({
            trigger: ".connectivity-section",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".connectivity-section .section-inner").addClass("active");
            },
        });

        var conLock = true;
        ScrollTrigger.create({
            trigger: ".connectivity",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {

                $(".connectivity .light").addClass("active");
                $(".run-box .run-box-animate").addClass("active");
                if (conLock) {
                    conLock = false;
                    setTimeout(function () {
                        $(".upper-bar .bar").addClass("active");
                    $(".run-bar-inner .intel-bar .mbps font").animateNumbers(2400, true, 1000);
                    $(".run-bar-inner .ac-bar .mbps font").animateNumbers(867, true, 1000);
                    },1000)

                }
            },
        });

        ScrollTrigger.create({
            trigger: ".io-section",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".io-section .section-inner").addClass("active");
            },
        });

        ScrollTrigger.create({
            trigger: ".exclusive-section",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".exclusive-section .section-inner").addClass("active");
            },
        });

        ScrollTrigger.create({
            trigger: ".slider-section",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".slider-section .section-inner").addClass("active");
            },
        });

        ScrollTrigger.create({
            trigger: ".peripherals-section",
            start: "top 50%+=100px",
            end: "bottom 50%+=100px",
            onToggle: function () {
                $(".peripherals-section .section-inner").addClass("active");
            },
        });
    }, 2000);

    /**
     * design 切換主機顏色
     */

    $(".color-box .option-inner").click(function () {

        $(".color-box .option-inner").removeClass("active");
        $(".design-section .nb-bg").removeClass("silver");
        $(".design-section .nb-bg").removeClass("rubber");
        $(".design-section .nb-bg").removeClass("black");
        $(this).addClass("active");

        if ($(this).hasClass("black")) {
           $(".design-section .nb-bg").addClass("black");
        }
        if ($(this).hasClass("rubber")) {
            $(".design-section .nb-bg").addClass("rubber");
        }
        if ($(this).hasClass("silver")) {
            $(".design-section .nb-bg").addClass("silver");
        }
    });
    $(".audio-mp4").on('ended', function () {
        $(".audio-final").addClass("active");
        audio_video = false;
    });

    /**
     * io 切換15/17inch
     */
    $(".io-section .options .selects").click(function(){

         if ($(this).hasClass("select15")) {
            $(".io-section .options").addClass("options15");
            $(".io-section .options").removeClass("options17");

            $(".io-section .main-bg").addClass("options15");
            $(".io-section .main-bg").removeClass("options17");

            $(".port-15").addClass("active");
            $(".port-17").removeClass("active");
        }
         if ($(this).hasClass("select17")) {
            $(".io-section .options").addClass("options17");
            $(".io-section .options").removeClass("options15");

            $(".io-section .main-bg").addClass("options17");
            $(".io-section .main-bg").removeClass("options15");

            $(".port-15").removeClass("active");
            $(".port-17").addClass("active");
        }
    })

    /**
     * 商品popup 關閉按鈕
     */
    $(".popup-inner .close-btn").click(function () {
        $(".popup").removeClass("active");
        $(".popup-option").removeClass("active");
    })

    /**
     * 商品的+號點擊事件
     * 判斷開啟哪個畫面，並且將該畫面的第一個產品active
     */

    $(".look-btn").click(function () {
        $(".popup").addClass("active");
        $(".popup-product").addClass("hide");
        if ($(this).hasClass("look-bag")) {
            $(".popup-back").removeClass("hide");
            var option = $(".popup-back .popup-option");
            $(option[0]).addClass("active");
        }
        if ($(this).hasClass("look-nb")) {
            $(".popup-nb").removeClass("hide");
            var option = $(".popup-nb .popup-option");
            $(option[0]).addClass("active");
        }
        if ($(this).hasClass("look-transformer")) {
            $(".popup-transformer").removeClass("hide");
            var option = $(".popup-transformer .popup-option");
            $(option[0]).addClass("active");
        }
        if ($(this).hasClass("look-headset")) {
            $(".popup-headset").removeClass("hide");
            var option = $(".popup-headset .popup-option");
            $(option[0]).addClass("active");
        }
        if ($(this).hasClass("look-mouse")) {
            $(".popup-mouse").removeClass("hide");
            var option = $(".popup-mouse .popup-option");
            $(option[0]).addClass("active");
        }
    });

    $(".popup-slick-inner").slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
           variableWidth: true,
     });

    /**
     * 商品popup的 上一張/下一張 事件
     */
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

    /**
     * 商品輪播時候，切換下方商品圖的active
     */
    $('.popup-back .popup-slick-inner').on('afterChange', function (event, slick, direction) {
        var option = $(".popup-back .popup-option");
        $(option).removeClass("active");
        $(option[direction]).addClass("active");
    });
    
    $('.popup-nb .popup-slick-inner').on('afterChange', function (event, slick, direction) {
        var option = $(".popup-nb .popup-option");
        $(option).removeClass("active");
        $(option[direction]).addClass("active");
    });
    
    $('.popup-transformer .popup-slick-inner').on('afterChange', function (event, slick, direction) {
        var option = $(".popup-transformer .popup-option");
        $(option).removeClass("active");
        $(option[direction]).addClass("active");
    });
    
    $('.popup-headset .popup-slick-inner').on('afterChange', function (event, slick, direction) {
        var option = $(".popup-headset .popup-option");
        $(option).removeClass("active");
        $(option[direction]).addClass("active");
    });
    
    $('.popup-mouse .popup-slick-inner').on('afterChange', function (event, slick, direction) {
        var option = $(".popup-mouse .popup-option");
        $(option).removeClass("active");
        $(option[direction]).addClass("active");
    });
    /**
     *  當畫面重整時，強制回到網頁最上方
     */
    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });

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

    let qhd_float = 0;
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
    $(document).on("click", ".design-section .slick-img", function () {
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