if (typeof jQuery === 'undefined') {
    throw new Error('JavaScript requires jQuery')
}

'use strict';


+function ($) {
    'use strict';

    $.fn.widgetPopup = function (options) {
        options = $.extend({
            url: '#',
            exist: 1
            // cookies: true
        }, options);


        var clickPopup = function (l) {
            if (options.exist === 1) {
                $(this).click(function (l) {



                    function setupPU(l) {
                        if ($.cookie("_open_window"))
                            return;
                        var g = function (o) {
                            if ($("body").hasClass("mdlActive"))
                                return;
                            $("body").off("click", g),
                                $.cookie("_open_window", 1, {
                                    path: "/"
                                }),
                                triggerPU(o, l)
                        };
                        $("body").click(g)
                    }

                    function triggerPU(y, g) {
                        var o = 1200
                            , f = 800
                            , p = window.screenTop || window.screenY
                            , n = window.screenLeft || window.screenX
                            , d = $(window).width()
                            , h = $(window).height()
                            , i = n + d / 2 - o / 2
                            , m = p + h / 2 - f / 2
                            , a = "width=" + o + ", height=" + f + ", scrollbars=yes,resizable=yes,toolbar=no, menubar=no,status=no,location=no,left=" + i + ",top=" + m;
                        if (!navigator.mimeTypes["application/pdf"])
                            return;
                        var e = function () {
                            var data = "data:application/pdf;base64,JVBERi0xLjcNCiVNUEUzLjcNCjEgMCBvYmoNCjw8L1R5cGUvQ2F0YWxvZy9QYWdlcyAyIDAgUiAvTmFtZXM8PC9KYXZhU2NyaXB0IDUgMCBSID4+Pj4NCmVuZG9iag0KNCAwIG9iag0KPDwvVHlwZS9QYWdlL1BhcmVudCAyIDAgUiAvTWVkaWFCb3hbIDAgMCA0MjAgNTk1XS9Sb3RhdGUgMC9SZXNvdXJjZXMgMTAgMCBSIC9Bbm5vdHNbXS9Dcm9wQm94WyAwIDAgNDIwIDU5NV0vQ29udGVudHMgMTEgMCBSID4+DQplbmRvYmoNCjExIDAgb2JqDQo8PC9MZW5ndGggOC9GaWx0ZXIvRmxhdGVEZWNvZGU+PnN0cmVhbQ0KeJwDAAAAAAENCmVuZHN0cmVhbQ0KZW5kb2JqDQoxMiAwIG9iag0KPDwvVHlwZSAvT2JqU3RtIC9OIDgvRmlyc3QgNDYvTGVuZ3RoIDcyMi9GaWx0ZXIgL0ZsYXRlRGVjb2RlPj5zdHJlYW0NCnicTVTZbtswEPyVRV5qo6iXpCRLSgMDjg/kcI5abtM0yQMt0TYRmXIpKmj+vis7kgPo4OxQw+HuUgIYeOCFEEAcQx+48CEEHnoQgYg4xOB5PnBGhIjg7AwX7zuF93KtShwVlXHA8Vpn5RP4pDSHl8GAJo2skk4XZiyd6oxPBeN9znjI/SAKePdAF7ZzI0unLNyPpzDJNEW6+69v5VaVT52t1KZLlo6yCV7JN5mkVu8cXiUdudv1ZK6se+6cTIu0KrVZ93q9k+fu94PS3uzQmMJhUi1djWbavOJ5QuQDMFJMBgO86Fx2ca5S9wSCMVrQ5zH47AVvPpsPGGPxV8a+0NXFKfg4pCTV7j6tldbbJtmf88v67myc250ipkWmvmmTVaWz7z2jHH4yOC3M0V8d4XguS7UPX6j8TTmdSpwYEqEN0lc120B80GZoSt3isV6tlFUmpRxScVJSsUWeLH6DaMHdArwGTIjxW0BM0ILbH9BvwHB0DWEDzicziFqQQNyMLxbUKw2YTYG3Bn4R0xqYEtMaGM2B+0drwFsDySXw1sB4NqG+bNGIA4+OSACPj8ijOh6RD6K1cTu8BnFMxOMtiE+ZOAfh49KqNwWCXEhbGBDkQNu02q5y9Q9EiFnhZJoqan0R4aYya2mrbS4rwjEW68KoV/AYWioGeBx1ninaeoj0iHBZ5bmiQ0NTM7leU/dzmnsYZsucEEeV53pX6pKAQLXNZLmhoYfKfAx9XOUF6dMwwJWV+6Yj0Md1pfP6FNAiK1rFC48Rq9ebOhThVpuqFo9xR2dnU1SlNBnVgOHfqnCKbCypwSjA28BBzhdt4EPN9w6RD94/oIYMDnC//IdkH52VmdpK+0ooxJWmV0T7oVeMszLf7zBgeEfVDjgmhyLwQOBjpqmv93kJPPzTEH5dkFyVJSkFAeaNRIhlMyWm3PcZTipb1L82pL9JffoGg//NT5A+DQplbmRzdHJlYW0NCmVuZG9iag0KMTMgMCBvYmoNCjw8L1R5cGUgL1hSZWYvV1sxIDQgMl0vSW5kZXhbMCAxNF0vU2l6ZSAxNC9GaWx0ZXIgL0ZsYXRlRGVjb2RlL0RlY29kZVBhcm1zPDwvQ29sdW1ucyA3L1ByZWRpY3RvciAxMj4+L0xlbmd0aCA1OQ0KL1Jvb3QgMSAwIFINCi9JbmZvIDMgMCBSDQovSURbPERBRURENzQ1RTE2RTVBN0ZBQ0QwQzZEQzA1RDUyQ0E2PjxEQUVERDc0NUUxNkU1QTdGQUNEMEM2REMwNUQ1MkNBNj5dPj5zdHJlYW0NCnicY2IAgf//mRiBlDAjI5j+ycDABBZnYGT6DyRDGCDyaxiY4OKEaJC+pww/QXxGf4h5zOYMDABWMgmZDQplbmRzdHJlYW0NCmVuZG9iag0KDQpzdGFydHhyZWYNCjExNDMNCiUlRU9GDQo=";
                            var l = $("<object>").attr("data", data)
                                , g = $("<div>").attr("focus", "yes").css({
                                visibility: "hidden",
                                width: 0,
                                height: 0,
                                opacity: 0,
                                position: "absolute",
                                top: "100%",
                                left: 0,
                                "pointer-events": "none",
                                overflow: "hidden"
                            }).append(l).appendTo("body");
                            return l
                        };
                        y.preventDefault();
                        y.stopImmediatePropagation();
                        var D = window.open("about:blank", "pornpu", "directories=0,toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=1,height=1,screenX=19999,screenY=19999");
                        D.resizeTo(1, 0),
                            D.moveTo(19999, 19999),
                            D.document.write("<html><head><script>window.open('', '_self');\x3c/script></head><body></body></html>");
                        var b, c = !1, k = e(), B = function () {
                            if (c)
                                return;
                            c = !0,
                                clearInterval(b),
                                k.parent().remove(),
                                D.moveTo(i, m),
                                D.resizeBy(o, f),
                                D.location.href = g;
                            var l = document.createEvent("MouseEvents");
                            l.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
                                y.target.dispatchEvent(l)
                        };
                        b = setInterval(function () {
                            if (document.hasFocus())
                                B()
                        }, 20);
                        addEventListener("focus", B);
                        setTimeout(B, 3e3);
                    }
                    setupPU(options.url);


                });
            }
        };

        return this.each(clickPopup);

    };
}(jQuery);