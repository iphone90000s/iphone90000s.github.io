"use strict";
! function (t, e, i, s) {
    function n(e, i) {
        this.element = e, this.settings = t.extend({}, r, i), this._defaults = r, this._name = a, this.init()
    }
    var a = "mgGlitch",
        r = {
            destroy: !1,
            glitch: !0,
            scale: !0,
            blend: !0,
            blendModeType: "hue",
            glitch1TimeMin: 600,
            glitch1TimeMax: 900,
            glitch2TimeMin: 10,
            glitch2TimeMax: 115,
            zIndexStart: 5
        };
    t.extend(n.prototype, {
        init: function () {
            this.glitch()
        },
        glitch: function () {
            function e(t, e) {
                return Math.floor(Math.random() * (e - t + 1)) + t
            }

            function i() {
                var s = e(10, 1900),
                    n = e(10, 1300),
                    r = e(0, 16),
                    o = e(0, 16),
                    h = e(c, l);
                t(a).css({
                    clip: "rect(" + s + "px, 9999px, " + n + "px,0px)",
                    right: o,
                    left: r
                }), setTimeout(i, h)
            }

            function s() {
                var i = e(10, 1900),
                    n = e(10, 1300),
                    c = e(0, 40),
                    l = e(0, 40),
                    f = e(o, h);
                if (!0 === r) var d = (Math.random() * (1.1 - .9) + .9).toFixed(2);
                else if (!1 === r) var d = 1;
                t(a).next().css({
                    clip: "rect(" + i + "px, 9999px, " + n + "px,0px)",
                    left: c,
                    right: l,
                    "-webkit-transform": "scale(" + d + ")",
                    "-ms-transform": "scale(" + d + ")",
                    transform: "scale(" + d + ")"
                }), setTimeout(s, f)
            }

            function n() {
                var i = e(10, 1900),
                    s = e(10, 1300),
                    c = e(0, 40),
                    l = e(0, 40),
                    f = e(o, h);
                if (!0 === r) var d = (Math.random() * (1.1 - .9) + .9).toFixed(2);
                else if (!1 === r) var d = 1;
                t(a).next().next().css({
                    clip: "rect(" + i + "px, 9999px, " + s + "px,0px)",
                    left: c,
                    right: l,
                    "-webkit-transform": "scale(" + d + ")",
                    "-ms-transform": "scale(" + d + ")",
                    transform: "scale(" + d + ")"
                }), setTimeout(n, f)
            }
            var a = this.element,
                r = this.settings.scale,
                c = this.settings.glitch1TimeMin,
                l = this.settings.glitch1TimeMax,
                o = this.settings.glitch2TimeMin,
                h = this.settings.glitch2TimeMax,
                f = this.settings.zIndexStart;
            if (!0 === this.settings.destroy)(t(a).hasClass("el-front-1") || t(a).hasClass("front-3") || t(a).hasClass("front-2")) && t(".front-1, .front-2, .front-3").remove(), t(".back").removeClass("back");
            else if (!1 === this.settings.destroy) {
                var d = t(a).clone();
                if (d.insertBefore(a).addClass("back").css({
                        "z-index": f
                    }), !0 === this.settings.blend) {
                    var d = t(a).clone();
                    d.insertAfter(a).addClass("front-3").css({
                        "z-index": f + 3,
                        "mix-blend-mode": this.settings.blendModeType
                    }), n()
                }
                if (!0 === this.settings.glitch) {
                    var d = t(a).clone();
                    d.insertAfter(a).addClass("front-2").css({
                        "z-index": f + 2
                    }), t(".back").next().addClass("front-1").css({
                        "z-index": f + 1
                    }), i(), s()
                }
            }
        }
    }), t.fn[a] = function (t) {
        return this.each(function () {
            new n(this, t)
        })
    }
}(jQuery, window, document), $(function () {
    $(".glitch-img").mgGlitch({
        destroy: !1,
        glitch: !0,
        scale: !0,
        blend: !0,
        blendModeType: "hue",
        glitch1TimeMin: 200,
        glitch1TimeMax: 400,
        glitch2TimeMin: 10,
        glitch2TimeMax: 100
    })
});