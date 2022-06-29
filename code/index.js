(() => {
  var n = {
      253: (e) => {
        "use strict";
        e.exports =
          '<template id="transover-popup-template">\n  <style>\n    .pos_translation {\n      padding-bottom: 3px;\n    }\n\n    strong {\n      font-weight: bold;\n    }\n\n    .rtl {\n      direction: rtl;\n    }\n\n    main {\n      color: #333;\n      font-family: Arial, sans-serif;\n      font-size: 14px;\n      font-weight: 300;\n      letter-spacing: initial;\n\n      background: #fcf7d9;\n      text-align: left;\n      border-style: solid;\n      border-width: 1px;\n      border-color: #ccc;\n      box-shadow: rgba(0,0,0,0.2) 0px 2px 5px;\n      border-radius: 5px;\n      padding: 6px 8px 3px 8px;\n      position: fixed;\n      z-index: 2147483647;\n      top: -1500px;\n      left: 0;\n      box-sizing: content-box;\n      -webkit-font-smoothing: antialiased;\n      font-smoothing: antialiased;\n      text-rendering: optimizeLegibility;\n\n      /* To fix the following issue:\n      1. Have translate on hover enabled (opposed to translate on click).\n      2. Wisit a website that has a dropdown menu that opens on hover.\n      3. Open the menu.\n      4. Hover over a word within that menu.\n      5. Incidentally move the cursor over the TransOver popup.\n      The hover menu gets closed.\n      */\n      pointer-events: none;\n    }\n\n    .pos_translation {\n      font-size: 1em;\n      line-height: 1.2em;\n    }\n\n    .red {\n      color: red;\n    }\n\n    .from_lang {\n      color: grey;\n      font-size: 0.8em;\n      line-height: 1.2em;\n      margin-top: 2px;\n      margin-bottom: 3px;\n    }\n  </style>\n\n  <main></main>\n</template>\n';
      },
      348: (e) => {
        "use strict";
        e.exports =
          '<template id="transover-tat-popup-template">\n  <style>\n    #tat_input_container {\n      display: flex;\n      margin-bottom: 10px;\n    }\n\n    #tat_input_container label {\n      line-height: 26px;\n    }\n\n    #tat_input {\n      margin-left: 5px;\n      flex-grow: 2;\n      font-size: 14px;\n      line-height: 20px;\n      border-radius: 2px;\n      border: 1px #ccc solid;\n      padding-left: 5px;\n    }\n\n    #tat_submit_container {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n\n    #tat_submit_container select {\n      margin-left: 5px;\n    }\n\n    #tat_submit {\n      width: 45px;\n      margin-left: 5px;\n    }\n\n    #tat_to_lang {\n      width: 150px;\n    }\n\n    #swap_languages {\n      margin-left: 5px;\n      margin-right: 5px;\n      width: 24px;\n      height: 24px;\n      background-repeat: no-repeat;\n      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEKElEQVR4nL1Vb0xbVRQ/97Xre23pn9FSNmBQGEqGMJQPIyU6MkMczf6gbAyNk5lo9gkTdTPGLPswzRITjcYPftREiYQ/g5EVZZEwNt3ELBmiI/wLqB1rFdaWDaSjfe+e44cHpUAL0URPcnPuu/e887vn3PM7F+A/Fs1mBi+fbNBXPHNgv6ShCa/X+48BhI02T7522lbmrrtsTct8RRCETQ+TSLTJNhreOuvcXXG4y2C1F874vL25BcWP5hWWKgQEAABKNBJZmAvNzIaCi1d6vqVkfliixdfPnH+8eO9BzxaDKQuRgCMRR2KcYhoQgaKRh/PBO+O90yM/fhTy/faD51InrvW1LuzT5z6sLKo4/LVGZ3AoSMARQEEChYgpSKAgMa5qQKaRREvaLmteST0jlHIc5usjw8M8KUBN3Yu2soP1fYLOkLrkDJadxb5pWQMgESASIDHBsC3vSR4Ja3fYUq6OjY1SQoBUq3kxHPT/lJpdUAVaMYUjMQWJKbR8clA1qWniBAyJGKpgTHLklC3cHb469POANyHA1NQUDN66+atNxCuWjJ2VgmhUI+EICkfkiKQOIiRgSKDexxIAAtMQoikjRbg4Pj6OAEmq6KsvPhuok6P7H3n6+ZaUdGep/5fv+vyDfe8AQCy/Wslo3+567n3Rnl1CKgAhEOgceeU6UbQCQCApAABAS1PjZC2XD2S7qr9EpPCD+7MDPT09SrzNcYNFdpQfuUgEAhIBEQAJGpEBmDcFAABoa2mePopYK5pt+2RZXleCi0HftTueTx4jIi1jasUTESHiH8s2MR68cea9Ap1kLCHVCJAAwnOh6ZnfR79vb29f5fzZupcMzpLyd32D1862tTY/3OiQsQiMVvuhQlfVB5xWiPUgOO0LTE3sAQD/qr+4rE0v2vsm0xmdxwTh1dbmpvubAoT+nLotq45haZBoScsorjrRkbn7qTZgQjSWZ0JJQYKtO5+oYaIx7ZigeaG1qdGfCCCWopqjtcZ99W+P64yWDI5EnFTGokou4kgMCUite4L4eTjgG/Jfv1Db3Pj56FqAGA9Ghofl/DynvDV7l3ulJQAotBRRHKEwvvaJQCOZ0vQZ+dW5Nn3/0OCtuwkBAAC228yDW/TGfL0ts4gvMZivtIV49sJaMNLqTJGQb36bReqdnJxM3CrGRkd5ulFzWYkuSnr7jlICjSbOGSzPOREgrKwpclS+13/h47Bv7LzH41lVVQnbtdvt1phT7SXWnKLjkj1rj6DTpxKBQKS+BgRMEB25+UjElMW/Fu7daD0XCfk/7ejoCCe95ETicrmYyWQSRVHUQdzrJ6WYTVmHTnmj88HZwI2WU5G5QFNnZ2c0kY8NAZKJu/qI2Vl54nawv60hPDf7TVdXF09m+6/eWafTyWlm4tLcbOBmd3f3uhbyv8rfG8mfJ968lFgAAAAASUVORK5CYII=);\n      cursor: pointer;\n    }\n\n    #swap_languages.disabled {\n      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEIklEQVR4nL1VX0hbVxj/7k0w6TS3QVck+qC2/tfhiMyRUR8GlU4XNzJYsFBUluXBh/Uho0PBPWww6TbEpzGz+pKBC2OS2tkHRbQd3ZiIdkoVghptdO2MRmP+3Xtzb+759nBNFl0S8WH7weF+nO+7v985h/P7DsB/DMVZBTab7YLJZLouCMKG1+s9twCdLdnf31/Q09MzWVZWZqFp+szFpIMyU2JgYKC0s7Pzga6oqHZ9fX2msbGx0mAwxBN5juNi+/v7e36/n5+cnMRzqQ4NDb3q9/t3JEnCuCRhPB4noiiiIIgkJggYi8WQ53lycHgYnJmddfX29l41mUxZTyMJu91+LRKJBCSZGEVRREEUiSATE57nkeM4ZFmWRKNRjEQieHQUFO+OjAyYzWbVab4T59rd3V1gs9ke5ubm5iMAACJgckBKfHIAIF1TW3s1HAopc3JyHrndbkwrkJeXx29sbPyh1+vfuqBW5yEChYDUMVHql0LyT0wQAZFQlZVVry8sLDxaXFzwphXY3t6Gubm5zXA4PFtXV3eNYZh8RASJEJDiEiESQXlIeCxMISIQJICIFEVRCkmSNKIo3FtbWyMAGW6R3W5/wvP89Y9u3fqxprpG/2Bi4qHL5eoDAClRwzDMyxaL5U55RWUDIgEkiAQRqqqr31CpVFoA8GcUAABwOBweQRDetlgs30uEsIFA4Mn09HQ8tSY/v0C0Wq33CCItHx8BhUKhAgDmTAEAAKfT6ZMk6X2dTvemKIrkdP7Zs61f+vp66xBRSVEUAAAgIhJC/krUUIlgcHCwimGYBvlWyNjb2/MtLS09HhsbO0H+gcXyUktLy+c/37//qdPp5LItMrkDnU7X3tHR8fWxACIitbOz83xlZaUJAF6k/hTjeeU77e02RqMppWn6w9HR0aMzBTwez1OUAQmN4uLiotu3P3EZjcafaJoWjueBEKImBKG5ufk9jUZzSalU3nA4HC8yiQAAgNlszt3d3X0utwSByO0ghhzHI8txJMqyGIlESTgcwVAojMFgiBwdBfEwEMCFxcWnVqu1Oh1v0gerq6tiSUmJqG9sbEXZtgljATltNJKcpxAJXGQuXqqvf+VdmqZ/n5+f/zOtAACAWq1eYhim/HJZWT1mEiAJc8nuRSLHOSqVZmtrM6xUKmc8Hk/6VuF2uyVBECZZllWXV1ToFbRCkeJUOBZIkCdjnuPEkbvfDS0vL38xMTFx4lZRkAatra2KwsLChteamm5euXylSW5+CTMhUEDRVdVV5YQgFQoGo8P24c+2vd5vXC4Xe5orrUACBoOB0mg0KpVKlQMpr59Wq9Xc+fIrr8/nC9iHv/3Y5/P9MD4+LmTjOhfMZjPz+NffvF1dXe1GozHrU5p1B5nQ1tam1Gq1pQcHB5tTU1P/aiH/K/4G7RvFhRjTPe0AAAAASUVORK5CYII=);\n      cursor: auto;\n    }\n\n    main {\n      color: #333;\n      font-family: Arial, sans-serif;\n      font-size: 14px;\n      font-weight: 300;\n      line-height: 19px;\n      letter-spacing: initial;\n\n      background: #fcf7d9;\n      text-align: left;\n      border-style: solid;\n      border-width: 1px;\n      border-color: #ccc;\n      box-shadow: rgba(0,0,0,0.2) 0px 2px 5px;\n      border-radius: 5px;\n      padding: 10px 12px 12px 12px;\n      position: fixed;\n      z-index: 2147483647;\n      top: 15px;\n      right: 15px;\n      -webkit-font-smoothing: antialiased;\n      font-smoothing: antialiased;\n      text-rendering: optimizeLegibility;\n    }\n\n    #disable_on_this_page_container {\n      margin-bottom: 8px;\n      color: blue;\n    }\n\n    #disable_on_this_page {\n      position: relative;\n      vertical-align: middle;\n      bottom: 1px;\n      margin-right: 5px;\n    }\n\n    #top_row_container {\n      display: flex;\n      justify-content: space-between;\n    }\n\n    #tat_close{\n      width: 12px;\n      height: 12px;\n      background: -webkit-linear-gradient(-45deg, transparent 0%, transparent 46%, darkgrey 46%, darkgrey 56%,transparent 56%, transparent 100%), -webkit-linear-gradient(45deg, transparent 0%, transparent 46%, darkgrey 46%,  darkgrey 56%,transparent 56%, transparent 100%);\n    }\n  </style>\n\n  <main>\n    <div id="top_row_container">\n      <div id="disable_on_this_page_container">\n        <label><input id="disable_on_this_page" type="checkbox"/>Disable on this site</label>\n      </div>\n      <a href="#" id="tat_close"></a>\n    </div>\n    <div id="tat_input_container">\n      <label for="tat_from_lang">Translate</label>\n      <input id="tat_input" type="text">\n    </div>\n    <div id="tat_submit_container">\n      <label for="tat_from_lang">from</label>\n      <select id="tat_from_lang"></select>\n\n      <div id="swap_languages"></div>\n\n      <label for="tat_to_lang">into</label>\n      <select id="tat_to_lang"></select>\n\n      <input type="submit" id="tat_submit" value="go">\n    </div>\n  </main>\n</template>\n';
      },
      227: (t, n, e) => {
        (n.formatArgs = function (e) {
          if (
            ((e[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              e[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              t.exports.humanize(this.diff)),
            this.useColors)
          ) {
            var r = "color: " + this.color;
            e.splice(1, 0, r, "color: inherit");
            let t = 0,
              n = 0;
            e[0].replace(/%[a-zA-Z%]/g, (e) => {
              "%%" !== e && (t++, "%c" === e && (n = t));
            }),
              e.splice(n, 0, r);
          }
        }),
          (n.save = function (e) {
            try {
              e ? n.storage.setItem("debug", e) : n.storage.removeItem("debug");
            } catch (e) {}
          }),
          (n.load = function () {
            let e;
            try {
              e = n.storage.getItem("debug");
            } catch (e) {}
            !e &&
              "undefined" != typeof process &&
              "env" in process &&
              (e = process.env.DEBUG);
            return e;
          }),
          (n.useColors = function () {
            if (
              "undefined" != typeof window &&
              window.process &&
              ("renderer" === window.process.type || window.process.__nwjs)
            )
              return !0;
            if (
              "undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
            )
              return !1;
            return (
              ("undefined" != typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
              ("undefined" != typeof window &&
                window.console &&
                (window.console.firebug ||
                  (window.console.exception && window.console.table))) ||
              ("undefined" != typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                31 <= parseInt(RegExp.$1, 10)) ||
              ("undefined" != typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            );
          }),
          (n.storage = (function () {
            try {
              return localStorage;
            } catch (e) {}
          })()),
          (n.destroy = (() => {
            let e = !1;
            return () => {
              e ||
                ((e = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                ));
            };
          })()),
          (n.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (n.log = console.debug || console.log || (() => {})),
          (t.exports = e(447)(n));
        const { formatters: r } = t.exports;
        r.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        };
      },
      447: (e, t, i) => {
        e.exports = function (t) {
          function l(e) {
            let a,
              t = null;
            function s(...i) {
              if (s.enabled) {
                const o = s;
                var e = Number(new Date()),
                  t = e - (a || e);
                (o.diff = t),
                  (o.prev = a),
                  (o.curr = e),
                  (a = e),
                  (i[0] = l.coerce(i[0])),
                  "string" != typeof i[0] && i.unshift("%O");
                let r = 0;
                (i[0] = i[0].replace(/%([a-zA-Z%])/g, (e, t) => {
                  if ("%%" === e) return "%";
                  r++;
                  const n = l.formatters[t];
                  return (
                    "function" == typeof n &&
                      ((t = i[r]), (e = n.call(o, t)), i.splice(r, 1), r--),
                    e
                  );
                })),
                  l.formatArgs.call(o, i);
                const n = o.log || l.log;
                n.apply(o, i);
              }
            }
            return (
              (s.namespace = e),
              (s.useColors = l.useColors()),
              (s.color = l.selectColor(e)),
              (s.extend = n),
              (s.destroy = l.destroy),
              Object.defineProperty(s, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => (null === t ? l.enabled(e) : t),
                set: (e) => {
                  t = e;
                },
              }),
              "function" == typeof l.init && l.init(s),
              s
            );
          }
          function n(e, t) {
            const n = l(this.namespace + (void 0 === t ? ":" : t) + e);
            return (n.log = this.log), n;
          }
          function r(e) {
            return e
              .toString()
              .substring(2, e.toString().length - 2)
              .replace(/\.\*\?$/, "*");
          }
          return (
            (((l.debug = l).default = l).coerce = function (e) {
              if (e instanceof Error) return e.stack || e.message;
              return e;
            }),
            (l.disable = function () {
              var e = [
                ...l.names.map(r),
                ...l.skips.map(r).map((e) => "-" + e),
              ].join(",");
              return l.enable(""), e;
            }),
            (l.enable = function (e) {
              l.save(e), (l.names = []), (l.skips = []);
              let t;
              const n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                r = n.length;
              for (t = 0; t < r; t++)
                n[t] &&
                  ("-" === (e = n[t].replace(/\*/g, ".*?"))[0]
                    ? l.skips.push(new RegExp("^" + e.substr(1) + "$"))
                    : l.names.push(new RegExp("^" + e + "$")));
            }),
            (l.enabled = function (e) {
              if ("*" === e[e.length - 1]) return !0;
              let t, n;
              for (t = 0, n = l.skips.length; t < n; t++)
                if (l.skips[t].test(e)) return !1;
              for (t = 0, n = l.names.length; t < n; t++)
                if (l.names[t].test(e)) return !0;
              return !1;
            }),
            (l.humanize = i(824)),
            (l.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              );
            }),
            Object.keys(t).forEach((e) => {
              l[e] = t[e];
            }),
            (l.names = []),
            (l.skips = []),
            (l.formatters = {}),
            (l.selectColor = function (t) {
              let n = 0;
              for (let e = 0; e < t.length; e++)
                (n = (n << 5) - n + t.charCodeAt(e)), (n |= 0);
              return l.colors[Math.abs(n) % l.colors.length];
            }),
            l.enable(l.load()),
            l
          );
        };
      },
      755: function (Zt, en) {
        var tn;
        /*!
         * jQuery JavaScript Library v3.6.0
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2021-03-02T17:08Z
         */
        !(function (e, t) {
          "use strict";
          "object" == typeof Zt.exports
            ? (Zt.exports = e.document
                ? t(e, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return t(e);
                  })
            : t(e);
        })("undefined" != typeof window ? window : this, function (C, e) {
          "use strict";
          function g(e) {
            return null != e && e === e.window;
          }
          var t = [],
            n = Object.getPrototypeOf,
            s = t.slice,
            m = t.flat
              ? function (e) {
                  return t.flat.call(e);
                }
              : function (e) {
                  return t.concat.apply([], e);
                },
            l = t.push,
            i = t.indexOf,
            r = {},
            o = r.toString,
            y = r.hasOwnProperty,
            a = y.toString,
            u = a.call(Object),
            v = {},
            b = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            T = C.document,
            c = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, n) {
            var r,
              i,
              o = (n = n || T).createElement("script");
            if (((o.text = e), t))
              for (r in c)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function h(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? r[o.call(e)] || "object"
              : typeof e;
          }
          var A = function (e, t) {
            return new A.fn.init(e, t);
          };
          function d(e) {
            var t = !!e && "length" in e && e.length,
              n = h(e);
            return (
              !b(e) &&
              !g(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && 0 < t && t - 1 in e))
            );
          }
          (A.fn = A.prototype =
            {
              jquery: "3.6.0",
              constructor: A,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                e = A.merge(this.constructor(), e);
                return (e.prevObject = this), e;
              },
              each: function (e) {
                return A.each(this, e);
              },
              map: function (n) {
                return this.pushStack(
                  A.map(this, function (e, t) {
                    return n.call(e, t, e);
                  })
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  A.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  A.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  e = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= e && e < t ? [this[e]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: l,
              sort: t.sort,
              splice: t.splice,
            }),
            (A.extend = A.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  o = arguments[0] || {},
                  a = 1,
                  s = arguments.length,
                  l = !1;
                for (
                  "boolean" == typeof o &&
                    ((l = o), (o = arguments[a] || {}), a++),
                    "object" == typeof o || b(o) || (o = {}),
                    a === s && ((o = this), a--);
                  a < s;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (n = e[t]),
                        "__proto__" !== t &&
                          o !== n &&
                          (l &&
                          n &&
                          (A.isPlainObject(n) || (r = Array.isArray(n)))
                            ? ((i = o[t]),
                              (i =
                                r && !Array.isArray(i)
                                  ? []
                                  : r || A.isPlainObject(i)
                                  ? i
                                  : {}),
                              (r = !1),
                              (o[t] = A.extend(l, i, n)))
                            : void 0 !== n && (o[t] = n));
                return o;
              }),
            A.extend({
              expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                return (
                  !(!e || "[object Object]" !== o.call(e)) &&
                  (!(e = n(e)) ||
                    ("function" ==
                      typeof (e = y.call(e, "constructor") && e.constructor) &&
                      a.call(e) === u))
                );
              },
              isEmptyObject: function (e) {
                for (var t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                x(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (d(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                t = t || [];
                return (
                  null != e &&
                    (d(Object(e))
                      ? A.merge(t, "string" == typeof e ? [e] : e)
                      : l.call(t, e)),
                  t
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : i.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                  e[i++] = t[r];
                return (e.length = i), e;
              },
              grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                  !t(e[i], i) != a && r.push(e[i]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  i,
                  o = 0,
                  a = [];
                if (d(e))
                  for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return m(a);
              },
              guid: 1,
              support: v,
            }),
            "function" == typeof Symbol &&
              (A.fn[Symbol.iterator] = t[Symbol.iterator]),
            A.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                r["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var p =
            /*!
             * Sizzle CSS Selector Engine v2.3.6
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2021-02-16
             */
            (function (n) {
              function d(e, t) {
                return (
                  (e = "0x" + e.slice(1) - 65536),
                  t ||
                    (e < 0
                      ? String.fromCharCode(65536 + e)
                      : String.fromCharCode(
                          (e >> 10) | 55296,
                          (1023 & e) | 56320
                        ))
                );
              }
              function r() {
                C();
              }
              var e,
                p,
                x,
                o,
                i,
                f,
                h,
                g,
                w,
                l,
                u,
                C,
                T,
                a,
                A,
                m,
                s,
                c,
                y,
                E = "sizzle" + +new Date(),
                v = n.document,
                k = 0,
                b = 0,
                S = le(),
                N = le(),
                j = le(),
                D = le(),
                L = function (e, t) {
                  return e === t && (u = !0), 0;
                },
                _ = {}.hasOwnProperty,
                t = [],
                F = t.pop,
                q = t.push,
                R = t.push,
                H = t.slice,
                M = function (e, t) {
                  for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                  return -1;
                },
                O =
                  "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                I = "[\\x20\\t\\r\\n\\f]",
                P =
                  "(?:\\\\[\\da-fA-F]{1,6}" +
                  I +
                  "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                B =
                  "\\[" +
                  I +
                  "*(" +
                  P +
                  ")(?:" +
                  I +
                  "*([*^$|!~]?=)" +
                  I +
                  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                  P +
                  "))|)" +
                  I +
                  "*\\]",
                W =
                  ":(" +
                  P +
                  ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                  B +
                  ")*)|.*)\\)|)",
                U = new RegExp(I + "+", "g"),
                z = new RegExp(
                  "^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$",
                  "g"
                ),
                X = new RegExp("^" + I + "*," + I + "*"),
                V = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
                Q = new RegExp(I + "|>"),
                Y = new RegExp(W),
                J = new RegExp("^" + P + "$"),
                G = {
                  ID: new RegExp("^#(" + P + ")"),
                  CLASS: new RegExp("^\\.(" + P + ")"),
                  TAG: new RegExp("^(" + P + "|[*])"),
                  ATTR: new RegExp("^" + B),
                  PSEUDO: new RegExp("^" + W),
                  CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                      I +
                      "*(even|odd|(([+-]|)(\\d*)n|)" +
                      I +
                      "*(?:([+-]|)" +
                      I +
                      "*(\\d+)|))" +
                      I +
                      "*\\)|)",
                    "i"
                  ),
                  bool: new RegExp("^(?:" + O + ")$", "i"),
                  needsContext: new RegExp(
                    "^" +
                      I +
                      "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                      I +
                      "*((?:-\\d)?\\d*)" +
                      I +
                      "*\\)|)(?=[^-]|$)",
                    "i"
                  ),
                },
                $ = /HTML$/i,
                K = /^(?:input|select|textarea|button)$/i,
                Z = /^h\d$/i,
                ee = /^[^{]+\{\s*\[native \w/,
                te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ne = /[+~]/,
                re = new RegExp(
                  "\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])",
                  "g"
                ),
                ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                oe = function (e, t) {
                  return t
                    ? "\0" === e
                      ? "�"
                      : e.slice(0, -1) +
                        "\\" +
                        e.charCodeAt(e.length - 1).toString(16) +
                        " "
                    : "\\" + e;
                },
                ae = ve(
                  function (e) {
                    return (
                      !0 === e.disabled &&
                      "fieldset" === e.nodeName.toLowerCase()
                    );
                  },
                  { dir: "parentNode", next: "legend" }
                );
              try {
                R.apply((t = H.call(v.childNodes)), v.childNodes),
                  t[v.childNodes.length].nodeType;
              } catch (e) {
                R = {
                  apply: t.length
                    ? function (e, t) {
                        q.apply(e, H.call(t));
                      }
                    : function (e, t) {
                        for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                        e.length = n - 1;
                      },
                };
              }
              function se(t, e, n, r) {
                var i,
                  o,
                  a,
                  s,
                  l,
                  u,
                  c = e && e.ownerDocument,
                  d = e ? e.nodeType : 9;
                if (
                  ((n = n || []),
                  "string" != typeof t ||
                    !t ||
                    (1 !== d && 9 !== d && 11 !== d))
                )
                  return n;
                if (!r && (C(e), (e = e || T), A)) {
                  if (11 !== d && (s = te.exec(t)))
                    if ((u = s[1])) {
                      if (9 === d) {
                        if (!(o = e.getElementById(u))) return n;
                        if (o.id === u) return n.push(o), n;
                      } else if (
                        c &&
                        (o = c.getElementById(u)) &&
                        y(e, o) &&
                        o.id === u
                      )
                        return n.push(o), n;
                    } else {
                      if (s[2]) return R.apply(n, e.getElementsByTagName(t)), n;
                      if (
                        (u = s[3]) &&
                        p.getElementsByClassName &&
                        e.getElementsByClassName
                      )
                        return R.apply(n, e.getElementsByClassName(u)), n;
                    }
                  if (
                    p.qsa &&
                    !D[t + " "] &&
                    (!m || !m.test(t)) &&
                    (1 !== d || "object" !== e.nodeName.toLowerCase())
                  ) {
                    if (
                      ((u = t), (c = e), 1 === d && (Q.test(t) || V.test(t)))
                    ) {
                      for (
                        ((c = (ne.test(t) && ge(e.parentNode)) || e) === e &&
                          p.scope) ||
                          ((a = e.getAttribute("id"))
                            ? (a = a.replace(ie, oe))
                            : e.setAttribute("id", (a = E))),
                          i = (l = f(t)).length;
                        i--;

                      )
                        l[i] = (a ? "#" + a : ":scope") + " " + ye(l[i]);
                      u = l.join(",");
                    }
                    try {
                      return R.apply(n, c.querySelectorAll(u)), n;
                    } catch (e) {
                      D(t, !0);
                    } finally {
                      a === E && e.removeAttribute("id");
                    }
                  }
                }
                return g(t.replace(z, "$1"), e, n, r);
              }
              function le() {
                var n = [];
                function r(e, t) {
                  return (
                    n.push(e + " ") > x.cacheLength && delete r[n.shift()],
                    (r[e + " "] = t)
                  );
                }
                return r;
              }
              function ue(e) {
                return (e[E] = !0), e;
              }
              function ce(e) {
                var t = T.createElement("fieldset");
                try {
                  return !!e(t);
                } catch (e) {
                  return !1;
                } finally {
                  t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
              }
              function de(e, t) {
                for (var n = e.split("|"), r = n.length; r--; )
                  x.attrHandle[n[r]] = t;
              }
              function pe(e, t) {
                var n = t && e,
                  r =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                return e ? 1 : -1;
              }
              function fe(t) {
                return function (e) {
                  return "form" in e
                    ? e.parentNode && !1 === e.disabled
                      ? "label" in e
                        ? "label" in e.parentNode
                          ? e.parentNode.disabled === t
                          : e.disabled === t
                        : e.isDisabled === t ||
                          (e.isDisabled !== !t && ae(e) === t)
                      : e.disabled === t
                    : "label" in e && e.disabled === t;
                };
              }
              function he(a) {
                return ue(function (o) {
                  return (
                    (o = +o),
                    ue(function (e, t) {
                      for (var n, r = a([], e.length, o), i = r.length; i--; )
                        e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                    })
                  );
                });
              }
              function ge(e) {
                return e && void 0 !== e.getElementsByTagName && e;
              }
              for (e in ((p = se.support = {}),
              (i = se.isXML =
                function (e) {
                  var t = e && e.namespaceURI,
                    e = e && (e.ownerDocument || e).documentElement;
                  return !$.test(t || (e && e.nodeName) || "HTML");
                }),
              (C = se.setDocument =
                function (e) {
                  var t,
                    e = e ? e.ownerDocument || e : v;
                  return (
                    e != T &&
                      9 === e.nodeType &&
                      e.documentElement &&
                      ((a = (T = e).documentElement),
                      (A = !i(T)),
                      v != T &&
                        (t = T.defaultView) &&
                        t.top !== t &&
                        (t.addEventListener
                          ? t.addEventListener("unload", r, !1)
                          : t.attachEvent && t.attachEvent("onunload", r)),
                      (p.scope = ce(function (e) {
                        return (
                          a.appendChild(e).appendChild(T.createElement("div")),
                          void 0 !== e.querySelectorAll &&
                            !e.querySelectorAll(":scope fieldset div").length
                        );
                      })),
                      (p.attributes = ce(function (e) {
                        return (
                          (e.className = "i"), !e.getAttribute("className")
                        );
                      })),
                      (p.getElementsByTagName = ce(function (e) {
                        return (
                          e.appendChild(T.createComment("")),
                          !e.getElementsByTagName("*").length
                        );
                      })),
                      (p.getElementsByClassName = ee.test(
                        T.getElementsByClassName
                      )),
                      (p.getById = ce(function (e) {
                        return (
                          (a.appendChild(e).id = E),
                          !T.getElementsByName || !T.getElementsByName(E).length
                        );
                      })),
                      p.getById
                        ? ((x.filter.ID = function (e) {
                            var t = e.replace(re, d);
                            return function (e) {
                              return e.getAttribute("id") === t;
                            };
                          }),
                          (x.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && A) {
                              e = t.getElementById(e);
                              return e ? [e] : [];
                            }
                          }))
                        : ((x.filter.ID = function (e) {
                            var t = e.replace(re, d);
                            return function (e) {
                              e =
                                void 0 !== e.getAttributeNode &&
                                e.getAttributeNode("id");
                              return e && e.value === t;
                            };
                          }),
                          (x.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && A) {
                              var n,
                                r,
                                i,
                                o = t.getElementById(e);
                              if (o) {
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [o];
                                for (
                                  i = t.getElementsByName(e), r = 0;
                                  (o = i[r++]);

                                )
                                  if (
                                    (n = o.getAttributeNode("id")) &&
                                    n.value === e
                                  )
                                    return [o];
                              }
                              return [];
                            }
                          })),
                      (x.find.TAG = p.getElementsByTagName
                        ? function (e, t) {
                            return void 0 !== t.getElementsByTagName
                              ? t.getElementsByTagName(e)
                              : p.qsa
                              ? t.querySelectorAll(e)
                              : void 0;
                          }
                        : function (e, t) {
                            var n,
                              r = [],
                              i = 0,
                              o = t.getElementsByTagName(e);
                            if ("*" !== e) return o;
                            for (; (n = o[i++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }),
                      (x.find.CLASS =
                        p.getElementsByClassName &&
                        function (e, t) {
                          if (void 0 !== t.getElementsByClassName && A)
                            return t.getElementsByClassName(e);
                        }),
                      (s = []),
                      (m = []),
                      (p.qsa = ee.test(T.querySelectorAll)) &&
                        (ce(function (e) {
                          var t;
                          (a.appendChild(e).innerHTML =
                            "<a id='" +
                            E +
                            "'></a><select id='" +
                            E +
                            "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                            e.querySelectorAll("[msallowcapture^='']").length &&
                              m.push("[*^$]=" + I + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length ||
                              m.push("\\[" + I + "*(?:value|" + O + ")"),
                            e.querySelectorAll("[id~=" + E + "-]").length ||
                              m.push("~="),
                            (t = T.createElement("input")).setAttribute(
                              "name",
                              ""
                            ),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length ||
                              m.push(
                                "\\[" +
                                  I +
                                  "*name" +
                                  I +
                                  "*=" +
                                  I +
                                  "*(?:''|\"\")"
                              ),
                            e.querySelectorAll(":checked").length ||
                              m.push(":checked"),
                            e.querySelectorAll("a#" + E + "+*").length ||
                              m.push(".#.+[+~]"),
                            e.querySelectorAll("\\\f"),
                            m.push("[\\r\\n\\f]");
                        }),
                        ce(function (e) {
                          e.innerHTML =
                            "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                          var t = T.createElement("input");
                          t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length &&
                              m.push("name" + I + "*[*^$|!~]?="),
                            2 !== e.querySelectorAll(":enabled").length &&
                              m.push(":enabled", ":disabled"),
                            (a.appendChild(e).disabled = !0),
                            2 !== e.querySelectorAll(":disabled").length &&
                              m.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            m.push(",.*:");
                        })),
                      (p.matchesSelector = ee.test(
                        (c =
                          a.matches ||
                          a.webkitMatchesSelector ||
                          a.mozMatchesSelector ||
                          a.oMatchesSelector ||
                          a.msMatchesSelector)
                      )) &&
                        ce(function (e) {
                          (p.disconnectedMatch = c.call(e, "*")),
                            c.call(e, "[s!='']:x"),
                            s.push("!=", W);
                        }),
                      (m = m.length && new RegExp(m.join("|"))),
                      (s = s.length && new RegExp(s.join("|"))),
                      (t = ee.test(a.compareDocumentPosition)),
                      (y =
                        t || ee.test(a.contains)
                          ? function (e, t) {
                              var n = 9 === e.nodeType ? e.documentElement : e,
                                t = t && t.parentNode;
                              return (
                                e === t ||
                                !(
                                  !t ||
                                  1 !== t.nodeType ||
                                  !(n.contains
                                    ? n.contains(t)
                                    : e.compareDocumentPosition &&
                                      16 & e.compareDocumentPosition(t))
                                )
                              );
                            }
                          : function (e, t) {
                              if (t)
                                for (; (t = t.parentNode); )
                                  if (t === e) return !0;
                              return !1;
                            }),
                      (L = t
                        ? function (e, t) {
                            if (e === t) return (u = !0), 0;
                            var n =
                              !e.compareDocumentPosition -
                              !t.compareDocumentPosition;
                            return (
                              n ||
                              (1 &
                                (n =
                                  (e.ownerDocument || e) ==
                                  (t.ownerDocument || t)
                                    ? e.compareDocumentPosition(t)
                                    : 1) ||
                              (!p.sortDetached &&
                                t.compareDocumentPosition(e) === n)
                                ? e == T || (e.ownerDocument == v && y(v, e))
                                  ? -1
                                  : t == T || (t.ownerDocument == v && y(v, t))
                                  ? 1
                                  : l
                                  ? M(l, e) - M(l, t)
                                  : 0
                                : 4 & n
                                ? -1
                                : 1)
                            );
                          }
                        : function (e, t) {
                            if (e === t) return (u = !0), 0;
                            var n,
                              r = 0,
                              i = e.parentNode,
                              o = t.parentNode,
                              a = [e],
                              s = [t];
                            if (!i || !o)
                              return e == T
                                ? -1
                                : t == T
                                ? 1
                                : i
                                ? -1
                                : o
                                ? 1
                                : l
                                ? M(l, e) - M(l, t)
                                : 0;
                            if (i === o) return pe(e, t);
                            for (n = e; (n = n.parentNode); ) a.unshift(n);
                            for (n = t; (n = n.parentNode); ) s.unshift(n);
                            for (; a[r] === s[r]; ) r++;
                            return r
                              ? pe(a[r], s[r])
                              : a[r] == v
                              ? -1
                              : s[r] == v
                              ? 1
                              : 0;
                          })),
                    T
                  );
                }),
              (se.matches = function (e, t) {
                return se(e, null, null, t);
              }),
              (se.matchesSelector = function (e, t) {
                if (
                  (C(e),
                  p.matchesSelector &&
                    A &&
                    !D[t + " "] &&
                    (!s || !s.test(t)) &&
                    (!m || !m.test(t)))
                )
                  try {
                    var n = c.call(e, t);
                    if (
                      n ||
                      p.disconnectedMatch ||
                      (e.document && 11 !== e.document.nodeType)
                    )
                      return n;
                  } catch (e) {
                    D(t, !0);
                  }
                return 0 < se(t, T, null, [e]).length;
              }),
              (se.contains = function (e, t) {
                return (e.ownerDocument || e) != T && C(e), y(e, t);
              }),
              (se.attr = function (e, t) {
                (e.ownerDocument || e) != T && C(e);
                var n = x.attrHandle[t.toLowerCase()],
                  n =
                    n && _.call(x.attrHandle, t.toLowerCase())
                      ? n(e, t, !A)
                      : void 0;
                return void 0 !== n
                  ? n
                  : p.attributes || !A
                  ? e.getAttribute(t)
                  : (n = e.getAttributeNode(t)) && n.specified
                  ? n.value
                  : null;
              }),
              (se.escape = function (e) {
                return (e + "").replace(ie, oe);
              }),
              (se.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
              }),
              (se.uniqueSort = function (e) {
                var t,
                  n = [],
                  r = 0,
                  i = 0;
                if (
                  ((u = !p.detectDuplicates),
                  (l = !p.sortStable && e.slice(0)),
                  e.sort(L),
                  u)
                ) {
                  for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
                  for (; r--; ) e.splice(n[r], 1);
                }
                return (l = null), e;
              }),
              (o = se.getText =
                function (e) {
                  var t,
                    n = "",
                    r = 0,
                    i = e.nodeType;
                  if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                      if ("string" == typeof e.textContent)
                        return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                    } else if (3 === i || 4 === i) return e.nodeValue;
                  } else for (; (t = e[r++]); ) n += o(t);
                  return n;
                }),
              ((x = se.selectors =
                {
                  cacheLength: 50,
                  createPseudo: ue,
                  match: G,
                  attrHandle: {},
                  find: {},
                  relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                  },
                  preFilter: {
                    ATTR: function (e) {
                      return (
                        (e[1] = e[1].replace(re, d)),
                        (e[3] = (e[3] || e[4] || e[5] || "").replace(re, d)),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                      );
                    },
                    CHILD: function (e) {
                      return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3)
                          ? (e[3] || se.error(e[0]),
                            (e[4] = +(e[4]
                              ? e[5] + (e[6] || 1)
                              : 2 * ("even" === e[3] || "odd" === e[3]))),
                            (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                          : e[3] && se.error(e[0]),
                        e
                      );
                    },
                    PSEUDO: function (e) {
                      var t,
                        n = !e[6] && e[2];
                      return G.CHILD.test(e[0])
                        ? null
                        : (e[3]
                            ? (e[2] = e[4] || e[5] || "")
                            : n &&
                              Y.test(n) &&
                              (t = f(n, !0)) &&
                              (t = n.indexOf(")", n.length - t) - n.length) &&
                              ((e[0] = e[0].slice(0, t)),
                              (e[2] = n.slice(0, t))),
                          e.slice(0, 3));
                    },
                  },
                  filter: {
                    TAG: function (e) {
                      var t = e.replace(re, d).toLowerCase();
                      return "*" === e
                        ? function () {
                            return !0;
                          }
                        : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                    },
                    CLASS: function (e) {
                      var t = S[e + " "];
                      return (
                        t ||
                        ((t = new RegExp(
                          "(^|" + I + ")" + e + "(" + I + "|$)"
                        )) &&
                          S(e, function (e) {
                            return t.test(
                              ("string" == typeof e.className && e.className) ||
                                (void 0 !== e.getAttribute &&
                                  e.getAttribute("class")) ||
                                ""
                            );
                          }))
                      );
                    },
                    ATTR: function (t, n, r) {
                      return function (e) {
                        e = se.attr(e, t);
                        return null == e
                          ? "!=" === n
                          : !n ||
                              ((e += ""),
                              "=" === n
                                ? e === r
                                : "!=" === n
                                ? e !== r
                                : "^=" === n
                                ? r && 0 === e.indexOf(r)
                                : "*=" === n
                                ? r && -1 < e.indexOf(r)
                                : "$=" === n
                                ? r && e.slice(-r.length) === r
                                : "~=" === n
                                ? -1 <
                                  (" " + e.replace(U, " ") + " ").indexOf(r)
                                : "|=" === n &&
                                  (e === r ||
                                    e.slice(0, r.length + 1) === r + "-"));
                      };
                    },
                    CHILD: function (h, e, t, g, m) {
                      var y = "nth" !== h.slice(0, 3),
                        v = "last" !== h.slice(-4),
                        b = "of-type" === e;
                      return 1 === g && 0 === m
                        ? function (e) {
                            return !!e.parentNode;
                          }
                        : function (e, t, n) {
                            var r,
                              i,
                              o,
                              a,
                              s,
                              l,
                              u = y != v ? "nextSibling" : "previousSibling",
                              c = e.parentNode,
                              d = b && e.nodeName.toLowerCase(),
                              p = !n && !b,
                              f = !1;
                            if (c) {
                              if (y) {
                                for (; u; ) {
                                  for (a = e; (a = a[u]); )
                                    if (
                                      b
                                        ? a.nodeName.toLowerCase() === d
                                        : 1 === a.nodeType
                                    )
                                      return !1;
                                  l = u = "only" === h && !l && "nextSibling";
                                }
                                return !0;
                              }
                              if (
                                ((l = [v ? c.firstChild : c.lastChild]), v && p)
                              ) {
                                for (
                                  f =
                                    (s =
                                      (r =
                                        (i =
                                          (o = (a = c)[E] || (a[E] = {}))[
                                            a.uniqueID
                                          ] || (o[a.uniqueID] = {}))[h] ||
                                        [])[0] === k && r[1]) && r[2],
                                    a = s && c.childNodes[s];
                                  (a =
                                    (++s && a && a[u]) ||
                                    (f = s = 0) ||
                                    l.pop());

                                )
                                  if (1 === a.nodeType && ++f && a === e) {
                                    i[h] = [k, s, f];
                                    break;
                                  }
                              } else if (
                                !1 ===
                                (f = p
                                  ? (s =
                                      (r =
                                        (i =
                                          (o = (a = e)[E] || (a[E] = {}))[
                                            a.uniqueID
                                          ] || (o[a.uniqueID] = {}))[h] ||
                                        [])[0] === k && r[1])
                                  : f)
                              )
                                for (
                                  ;
                                  (a =
                                    (++s && a && a[u]) ||
                                    (f = s = 0) ||
                                    l.pop()) &&
                                  ((b
                                    ? a.nodeName.toLowerCase() !== d
                                    : 1 !== a.nodeType) ||
                                    !++f ||
                                    (p &&
                                      ((i =
                                        (o = a[E] || (a[E] = {}))[a.uniqueID] ||
                                        (o[a.uniqueID] = {}))[h] = [k, f]),
                                    a !== e));

                                );
                              return (
                                (f -= m) === g || (f % g == 0 && 0 <= f / g)
                              );
                            }
                          };
                    },
                    PSEUDO: function (e, o) {
                      var t,
                        a =
                          x.pseudos[e] ||
                          x.setFilters[e.toLowerCase()] ||
                          se.error("unsupported pseudo: " + e);
                      return a[E]
                        ? a(o)
                        : 1 < a.length
                        ? ((t = [e, e, "", o]),
                          x.setFilters.hasOwnProperty(e.toLowerCase())
                            ? ue(function (e, t) {
                                for (var n, r = a(e, o), i = r.length; i--; )
                                  e[(n = M(e, r[i]))] = !(t[n] = r[i]);
                              })
                            : function (e) {
                                return a(e, 0, t);
                              })
                        : a;
                    },
                  },
                  pseudos: {
                    not: ue(function (e) {
                      var r = [],
                        i = [],
                        s = h(e.replace(z, "$1"));
                      return s[E]
                        ? ue(function (e, t, n, r) {
                            for (
                              var i, o = s(e, null, r, []), a = e.length;
                              a--;

                            )
                              (i = o[a]) && (e[a] = !(t[a] = i));
                          })
                        : function (e, t, n) {
                            return (
                              (r[0] = e),
                              s(r, null, n, i),
                              (r[0] = null),
                              !i.pop()
                            );
                          };
                    }),
                    has: ue(function (t) {
                      return function (e) {
                        return 0 < se(t, e).length;
                      };
                    }),
                    contains: ue(function (t) {
                      return (
                        (t = t.replace(re, d)),
                        function (e) {
                          return -1 < (e.textContent || o(e)).indexOf(t);
                        }
                      );
                    }),
                    lang: ue(function (n) {
                      return (
                        J.test(n || "") || se.error("unsupported lang: " + n),
                        (n = n.replace(re, d).toLowerCase()),
                        function (e) {
                          var t;
                          do {
                            if (
                              (t = A
                                ? e.lang
                                : e.getAttribute("xml:lang") ||
                                  e.getAttribute("lang"))
                            )
                              return (
                                (t = t.toLowerCase()) === n ||
                                0 === t.indexOf(n + "-")
                              );
                          } while ((e = e.parentNode) && 1 === e.nodeType);
                          return !1;
                        }
                      );
                    }),
                    target: function (e) {
                      var t = n.location && n.location.hash;
                      return t && t.slice(1) === e.id;
                    },
                    root: function (e) {
                      return e === a;
                    },
                    focus: function (e) {
                      return (
                        e === T.activeElement &&
                        (!T.hasFocus || T.hasFocus()) &&
                        !!(e.type || e.href || ~e.tabIndex)
                      );
                    },
                    enabled: fe(!1),
                    disabled: fe(!0),
                    checked: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return (
                        ("input" === t && !!e.checked) ||
                        ("option" === t && !!e.selected)
                      );
                    },
                    selected: function (e) {
                      return (
                        e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                      );
                    },
                    empty: function (e) {
                      for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (e) {
                      return !x.pseudos.empty(e);
                    },
                    header: function (e) {
                      return Z.test(e.nodeName);
                    },
                    input: function (e) {
                      return K.test(e.nodeName);
                    },
                    button: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return (
                        ("input" === t && "button" === e.type) || "button" === t
                      );
                    },
                    text: function (e) {
                      return (
                        "input" === e.nodeName.toLowerCase() &&
                        "text" === e.type &&
                        (null == (e = e.getAttribute("type")) ||
                          "text" === e.toLowerCase())
                      );
                    },
                    first: he(function () {
                      return [0];
                    }),
                    last: he(function (e, t) {
                      return [t - 1];
                    }),
                    eq: he(function (e, t, n) {
                      return [n < 0 ? n + t : n];
                    }),
                    even: he(function (e, t) {
                      for (var n = 0; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    odd: he(function (e, t) {
                      for (var n = 1; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    lt: he(function (e, t, n) {
                      for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                      return e;
                    }),
                    gt: he(function (e, t, n) {
                      for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                      return e;
                    }),
                  },
                }).pseudos.nth = x.pseudos.eq),
              { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                x.pseudos[e] = (function (t) {
                  return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t;
                  };
                })(e);
              for (e in { submit: !0, reset: !0 })
                x.pseudos[e] = (function (n) {
                  return function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n;
                  };
                })(e);
              function me() {}
              function ye(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++)
                  r += e[t].value;
                return r;
              }
              function ve(a, e, t) {
                var s = e.dir,
                  l = e.next,
                  u = l || s,
                  c = t && "parentNode" === u,
                  d = b++;
                return e.first
                  ? function (e, t, n) {
                      for (; (e = e[s]); )
                        if (1 === e.nodeType || c) return a(e, t, n);
                      return !1;
                    }
                  : function (e, t, n) {
                      var r,
                        i,
                        o = [k, d];
                      if (n) {
                        for (; (e = e[s]); )
                          if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
                      } else
                        for (; (e = e[s]); )
                          if (1 === e.nodeType || c)
                            if (
                              ((r =
                                (i = e[E] || (e[E] = {}))[e.uniqueID] ||
                                (i[e.uniqueID] = {})),
                              l && l === e.nodeName.toLowerCase())
                            )
                              e = e[s] || e;
                            else {
                              if ((i = r[u]) && i[0] === k && i[1] === d)
                                return (o[2] = i[2]);
                              if (((r[u] = o)[2] = a(e, t, n))) return !0;
                            }
                      return !1;
                    };
              }
              function be(i) {
                return 1 < i.length
                  ? function (e, t, n) {
                      for (var r = i.length; r--; )
                        if (!i[r](e, t, n)) return !1;
                      return !0;
                    }
                  : i[0];
              }
              function xe(e, t, n, r, i) {
                for (
                  var o, a = [], s = 0, l = e.length, u = null != t;
                  s < l;
                  s++
                )
                  (o = e[s]) &&
                    ((n && !n(o, r, i)) || (a.push(o), u && t.push(s)));
                return a;
              }
              function we(f, h, g, m, y, e) {
                return (
                  m && !m[E] && (m = we(m)),
                  y && !y[E] && (y = we(y, e)),
                  ue(function (e, t, n, r) {
                    var i,
                      o,
                      a,
                      s = [],
                      l = [],
                      u = t.length,
                      c =
                        e ||
                        (function (e, t, n) {
                          for (var r = 0, i = t.length; r < i; r++)
                            se(e, t[r], n);
                          return n;
                        })(h || "*", n.nodeType ? [n] : n, []),
                      d = !f || (!e && h) ? c : xe(c, s, f, n, r),
                      p = g ? (y || (e ? f : u || m) ? [] : t) : d;
                    if ((g && g(d, p, n, r), m))
                      for (i = xe(p, l), m(i, [], n, r), o = i.length; o--; )
                        (a = i[o]) && (p[l[o]] = !(d[l[o]] = a));
                    if (e) {
                      if (y || f) {
                        if (y) {
                          for (i = [], o = p.length; o--; )
                            (a = p[o]) && i.push((d[o] = a));
                          y(null, (p = []), i, r);
                        }
                        for (o = p.length; o--; )
                          (a = p[o]) &&
                            -1 < (i = y ? M(e, a) : s[o]) &&
                            (e[i] = !(t[i] = a));
                      }
                    } else (p = xe(p === t ? p.splice(u, p.length) : p)), y ? y(null, t, p, r) : R.apply(t, p);
                  })
                );
              }
              function Ce(m, y) {
                function e(e, t, n, r, i) {
                  var o,
                    a,
                    s,
                    l = 0,
                    u = "0",
                    c = e && [],
                    d = [],
                    p = w,
                    f = e || (b && x.find.TAG("*", i)),
                    h = (k += null == p ? 1 : Math.random() || 0.1),
                    g = f.length;
                  for (
                    i && (w = t == T || t || i);
                    u !== g && null != (o = f[u]);
                    u++
                  ) {
                    if (b && o) {
                      for (
                        a = 0, t || o.ownerDocument == T || (C(o), (n = !A));
                        (s = m[a++]);

                      )
                        if (s(o, t || T, n)) {
                          r.push(o);
                          break;
                        }
                      i && (k = h);
                    }
                    v && ((o = !s && o) && l--, e && c.push(o));
                  }
                  if (((l += u), v && u !== l)) {
                    for (a = 0; (s = y[a++]); ) s(c, d, t, n);
                    if (e) {
                      if (0 < l)
                        for (; u--; ) c[u] || d[u] || (d[u] = F.call(r));
                      d = xe(d);
                    }
                    R.apply(r, d),
                      i &&
                        !e &&
                        0 < d.length &&
                        1 < l + y.length &&
                        se.uniqueSort(r);
                  }
                  return i && ((k = h), (w = p)), c;
                }
                var v = 0 < y.length,
                  b = 0 < m.length;
                return v ? ue(e) : e;
              }
              return (
                (me.prototype = x.filters = x.pseudos),
                (x.setFilters = new me()),
                (f = se.tokenize =
                  function (e, t) {
                    var n,
                      r,
                      i,
                      o,
                      a,
                      s,
                      l,
                      u = N[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (a = e, s = [], l = x.preFilter; a; ) {
                      for (o in ((n && !(r = X.exec(a))) ||
                        (r && (a = a.slice(r[0].length) || a),
                        s.push((i = []))),
                      (n = !1),
                      (r = V.exec(a)) &&
                        ((n = r.shift()),
                        i.push({ value: n, type: r[0].replace(z, " ") }),
                        (a = a.slice(n.length))),
                      x.filter))
                        !(r = G[o].exec(a)) ||
                          (l[o] && !(r = l[o](r))) ||
                          ((n = r.shift()),
                          i.push({ value: n, type: o, matches: r }),
                          (a = a.slice(n.length)));
                      if (!n) break;
                    }
                    return t ? a.length : a ? se.error(e) : N(e, s).slice(0);
                  }),
                (h = se.compile =
                  function (e, t) {
                    var n,
                      r = [],
                      i = [],
                      o = j[e + " "];
                    if (!o) {
                      for (n = (t = t || f(e)).length; n--; )
                        ((o = (function e(t) {
                          for (
                            var r,
                              n,
                              i,
                              o = t.length,
                              a = x.relative[t[0].type],
                              s = a || x.relative[" "],
                              l = a ? 1 : 0,
                              u = ve(
                                function (e) {
                                  return e === r;
                                },
                                s,
                                !0
                              ),
                              c = ve(
                                function (e) {
                                  return -1 < M(r, e);
                                },
                                s,
                                !0
                              ),
                              d = [
                                function (e, t, n) {
                                  return (
                                    (n =
                                      (!a && (n || t !== w)) ||
                                      ((r = t).nodeType ? u : c)(e, t, n)),
                                    (r = null),
                                    n
                                  );
                                },
                              ];
                            l < o;
                            l++
                          )
                            if ((n = x.relative[t[l].type])) d = [ve(be(d), n)];
                            else {
                              if (
                                (n = x.filter[t[l].type].apply(
                                  null,
                                  t[l].matches
                                ))[E]
                              ) {
                                for (
                                  i = ++l;
                                  i < o && !x.relative[t[i].type];
                                  i++
                                );
                                return we(
                                  1 < l && be(d),
                                  1 < l &&
                                    ye(
                                      t
                                        .slice(0, l - 1)
                                        .concat({
                                          value:
                                            " " === t[l - 2].type ? "*" : "",
                                        })
                                    ).replace(z, "$1"),
                                  n,
                                  l < i && e(t.slice(l, i)),
                                  i < o && e((t = t.slice(i))),
                                  i < o && ye(t)
                                );
                              }
                              d.push(n);
                            }
                          return be(d);
                        })(t[n]))[E]
                          ? r
                          : i
                        ).push(o);
                      (o = j(e, Ce(i, r))).selector = e;
                    }
                    return o;
                  }),
                (g = se.select =
                  function (e, t, n, r) {
                    var i,
                      o,
                      a,
                      s,
                      l,
                      u = "function" == typeof e && e,
                      c = !r && f((e = u.selector || e));
                    if (((n = n || []), 1 === c.length)) {
                      if (
                        2 < (o = c[0] = c[0].slice(0)).length &&
                        "ID" === (a = o[0]).type &&
                        9 === t.nodeType &&
                        A &&
                        x.relative[o[1].type]
                      ) {
                        if (
                          !(t = (x.find.ID(a.matches[0].replace(re, d), t) ||
                            [])[0])
                        )
                          return n;
                        u && (t = t.parentNode),
                          (e = e.slice(o.shift().value.length));
                      }
                      for (
                        i = G.needsContext.test(e) ? 0 : o.length;
                        i-- && ((a = o[i]), !x.relative[(s = a.type)]);

                      )
                        if (
                          (l = x.find[s]) &&
                          (r = l(
                            a.matches[0].replace(re, d),
                            (ne.test(o[0].type) && ge(t.parentNode)) || t
                          ))
                        ) {
                          if ((o.splice(i, 1), !(e = r.length && ye(o))))
                            return R.apply(n, r), n;
                          break;
                        }
                    }
                    return (
                      (u || h(e, c))(
                        r,
                        t,
                        !A,
                        n,
                        !t || (ne.test(e) && ge(t.parentNode)) || t
                      ),
                      n
                    );
                  }),
                (p.sortStable = E.split("").sort(L).join("") === E),
                (p.detectDuplicates = !!u),
                C(),
                (p.sortDetached = ce(function (e) {
                  return (
                    1 & e.compareDocumentPosition(T.createElement("fieldset"))
                  );
                })),
                ce(function (e) {
                  return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                  );
                }) ||
                  de("type|href|height|width", function (e, t, n) {
                    if (!n)
                      return e.getAttribute(
                        t,
                        "type" === t.toLowerCase() ? 1 : 2
                      );
                  }),
                (p.attributes &&
                  ce(function (e) {
                    return (
                      (e.innerHTML = "<input/>"),
                      e.firstChild.setAttribute("value", ""),
                      "" === e.firstChild.getAttribute("value")
                    );
                  })) ||
                  de("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                      return e.defaultValue;
                  }),
                ce(function (e) {
                  return null == e.getAttribute("disabled");
                }) ||
                  de(O, function (e, t, n) {
                    if (!n)
                      return !0 === e[t]
                        ? t.toLowerCase()
                        : (t = e.getAttributeNode(t)) && t.specified
                        ? t.value
                        : null;
                  }),
                se
              );
            })(C);
          (A.find = p),
            (A.expr = p.selectors),
            (A.expr[":"] = A.expr.pseudos),
            (A.uniqueSort = A.unique = p.uniqueSort),
            (A.text = p.getText),
            (A.isXMLDoc = p.isXML),
            (A.contains = p.contains),
            (A.escapeSelector = p.escape);
          function f(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (i && A(e).is(n)) break;
                r.push(e);
              }
            return r;
          }
          function w(e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          }
          var E = A.expr.match.needsContext;
          function k(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var S =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function N(e, n, r) {
            return b(n)
              ? A.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== r;
                })
              : n.nodeType
              ? A.grep(e, function (e) {
                  return (e === n) !== r;
                })
              : "string" != typeof n
              ? A.grep(e, function (e) {
                  return -1 < i.call(n, e) !== r;
                })
              : A.filter(n, e, r);
          }
          (A.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? A.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : A.find.matches(
                    e,
                    A.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            A.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  i = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    A(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (A.contains(i[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  A.find(e, i[t], n);
                return 1 < r ? A.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(N(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(N(this, e || [], !0));
              },
              is: function (e) {
                return !!N(
                  this,
                  "string" == typeof e && E.test(e) ? A(e) : e || [],
                  !1
                ).length;
              },
            });
          var j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          (A.fn.init = function (e, t, n) {
            if (!e) return this;
            if (((n = n || D), "string" != typeof e))
              return e.nodeType
                ? ((this[0] = e), (this.length = 1), this)
                : b(e)
                ? void 0 !== n.ready
                  ? n.ready(e)
                  : e(A)
                : A.makeArray(e, this);
            if (
              !(r =
                "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                  ? [null, e, null]
                  : j.exec(e)) ||
              (!r[1] && t)
            )
              return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
            if (r[1]) {
              if (
                ((t = t instanceof A ? t[0] : t),
                A.merge(
                  this,
                  A.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : T,
                    !0
                  )
                ),
                S.test(r[1]) && A.isPlainObject(t))
              )
                for (var r in t)
                  b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return (
              (e = T.getElementById(r[2])) &&
                ((this[0] = e), (this.length = 1)),
              this
            );
          }).prototype = A.fn;
          var D = A(T),
            L = /^(?:parents|prev(?:Until|All))/,
            _ = { children: !0, contents: !0, next: !0, prev: !0 };
          function F(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          A.fn.extend({
            has: function (e) {
              var t = A(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (A.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && A(e);
              if (!E.test(e))
                for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? -1 < a.index(n)
                        : 1 === n.nodeType && A.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(1 < o.length ? A.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? i.call(A(e), this[0])
                  : i.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(A.uniqueSort(A.merge(this.get(), A(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            A.each(
              {
                parent: function (e) {
                  e = e.parentNode;
                  return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (e) {
                  return f(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return f(e, "parentNode", n);
                },
                next: function (e) {
                  return F(e, "nextSibling");
                },
                prev: function (e) {
                  return F(e, "previousSibling");
                },
                nextAll: function (e) {
                  return f(e, "nextSibling");
                },
                prevAll: function (e) {
                  return f(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return f(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return f(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return w((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return w(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && n(e.contentDocument)
                    ? e.contentDocument
                    : (k(e, "template") && (e = e.content || e),
                      A.merge([], e.childNodes));
                },
              },
              function (r, i) {
                A.fn[r] = function (e, t) {
                  var n = A.map(this, i, e);
                  return (
                    (t = "Until" !== r.slice(-5) ? e : t) &&
                      "string" == typeof t &&
                      (n = A.filter(t, n)),
                    1 < this.length &&
                      (_[r] || A.uniqueSort(n), L.test(r) && n.reverse()),
                    this.pushStack(n)
                  );
                };
              }
            );
          var q = /[^\x20\t\r\n\f]+/g;
          function R(e) {
            return e;
          }
          function H(e) {
            throw e;
          }
          function M(e, t, n, r) {
            var i;
            try {
              e && b((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && b((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (A.Callbacks = function (r) {
            var e, n;
            r =
              "string" == typeof r
                ? ((e = r),
                  (n = {}),
                  A.each(e.match(q) || [], function (e, t) {
                    n[t] = !0;
                  }),
                  n)
                : A.extend({}, r);
            function i() {
              for (s = s || r.once, a = o = !0; u.length; c = -1)
                for (t = u.shift(); ++c < l.length; )
                  !1 === l[c].apply(t[0], t[1]) &&
                    r.stopOnFalse &&
                    ((c = l.length), (t = !1));
              r.memory || (t = !1), (o = !1), s && (l = t ? [] : "");
            }
            var o,
              t,
              a,
              s,
              l = [],
              u = [],
              c = -1,
              d = {
                add: function () {
                  return (
                    l &&
                      (t && !o && ((c = l.length - 1), u.push(t)),
                      (function n(e) {
                        A.each(e, function (e, t) {
                          b(t)
                            ? (r.unique && d.has(t)) || l.push(t)
                            : t && t.length && "string" !== h(t) && n(t);
                        });
                      })(arguments),
                      t && !o && i()),
                    this
                  );
                },
                remove: function () {
                  return (
                    A.each(arguments, function (e, t) {
                      for (var n; -1 < (n = A.inArray(t, l, n)); )
                        l.splice(n, 1), n <= c && c--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? -1 < A.inArray(e, l) : 0 < l.length;
                },
                empty: function () {
                  return (l = l && []), this;
                },
                disable: function () {
                  return (s = u = []), (l = t = ""), this;
                },
                disabled: function () {
                  return !l;
                },
                lock: function () {
                  return (s = u = []), t || o || (l = t = ""), this;
                },
                locked: function () {
                  return !!s;
                },
                fireWith: function (e, t) {
                  return (
                    s ||
                      ((t = [e, (t = t || []).slice ? t.slice() : t]),
                      u.push(t),
                      o || i()),
                    this
                  );
                },
                fire: function () {
                  return d.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!a;
                },
              };
            return d;
          }),
            A.extend({
              Deferred: function (e) {
                var o = [
                    [
                      "notify",
                      "progress",
                      A.Callbacks("memory"),
                      A.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      A.Callbacks("once memory"),
                      A.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      A.Callbacks("once memory"),
                      A.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  i = "pending",
                  a = {
                    state: function () {
                      return i;
                    },
                    always: function () {
                      return s.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return a.then(null, e);
                    },
                    pipe: function () {
                      var i = arguments;
                      return A.Deferred(function (r) {
                        A.each(o, function (e, t) {
                          var n = b(i[t[4]]) && i[t[4]];
                          s[t[1]](function () {
                            var e = n && n.apply(this, arguments);
                            e && b(e.promise)
                              ? e
                                  .promise()
                                  .progress(r.notify)
                                  .done(r.resolve)
                                  .fail(r.reject)
                              : r[t[0] + "With"](this, n ? [e] : arguments);
                          });
                        }),
                          (i = null);
                      }).promise();
                    },
                    then: function (t, n, r) {
                      var l = 0;
                      function u(i, o, a, s) {
                        return function () {
                          function e() {
                            var e, t;
                            if (!(i < l)) {
                              if ((e = a.apply(n, r)) === o.promise())
                                throw new TypeError("Thenable self-resolution");
                              (t =
                                e &&
                                ("object" == typeof e ||
                                  "function" == typeof e) &&
                                e.then),
                                b(t)
                                  ? s
                                    ? t.call(e, u(l, o, R, s), u(l, o, H, s))
                                    : (l++,
                                      t.call(
                                        e,
                                        u(l, o, R, s),
                                        u(l, o, H, s),
                                        u(l, o, R, o.notifyWith)
                                      ))
                                  : (a !== R && ((n = void 0), (r = [e])),
                                    (s || o.resolveWith)(n, r));
                            }
                          }
                          var n = this,
                            r = arguments,
                            t = s
                              ? e
                              : function () {
                                  try {
                                    e();
                                  } catch (e) {
                                    A.Deferred.exceptionHook &&
                                      A.Deferred.exceptionHook(e, t.stackTrace),
                                      l <= i + 1 &&
                                        (a !== H && ((n = void 0), (r = [e])),
                                        o.rejectWith(n, r));
                                  }
                                };
                          i
                            ? t()
                            : (A.Deferred.getStackHook &&
                                (t.stackTrace = A.Deferred.getStackHook()),
                              C.setTimeout(t));
                        };
                      }
                      return A.Deferred(function (e) {
                        o[0][3].add(u(0, e, b(r) ? r : R, e.notifyWith)),
                          o[1][3].add(u(0, e, b(t) ? t : R)),
                          o[2][3].add(u(0, e, b(n) ? n : H));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? A.extend(e, a) : a;
                    },
                  },
                  s = {};
                return (
                  A.each(o, function (e, t) {
                    var n = t[2],
                      r = t[5];
                    (a[t[1]] = n.add),
                      r &&
                        n.add(
                          function () {
                            i = r;
                          },
                          o[3 - e][2].disable,
                          o[3 - e][3].disable,
                          o[0][2].lock,
                          o[0][3].lock
                        ),
                      n.add(t[3].fire),
                      (s[t[0]] = function () {
                        return (
                          s[t[0] + "With"](
                            this === s ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (s[t[0] + "With"] = n.fireWith);
                  }),
                  a.promise(s),
                  e && e.call(s, s),
                  s
                );
              },
              when: function (e) {
                function t(t) {
                  return function (e) {
                    (i[t] = this),
                      (o[t] = 1 < arguments.length ? s.call(arguments) : e),
                      --n || a.resolveWith(i, o);
                  };
                }
                var n = arguments.length,
                  r = n,
                  i = Array(r),
                  o = s.call(arguments),
                  a = A.Deferred();
                if (
                  n <= 1 &&
                  (M(e, a.done(t(r)).resolve, a.reject, !n),
                  "pending" === a.state() || b(o[r] && o[r].then))
                )
                  return a.then();
                for (; r--; ) M(o[r], t(r), a.reject);
                return a.promise();
              },
            });
          var O = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (A.Deferred.exceptionHook = function (e, t) {
            C.console &&
              C.console.warn &&
              e &&
              O.test(e.name) &&
              C.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (A.readyException = function (e) {
              C.setTimeout(function () {
                throw e;
              });
            });
          var I = A.Deferred();
          function P() {
            T.removeEventListener("DOMContentLoaded", P),
              C.removeEventListener("load", P),
              A.ready();
          }
          (A.fn.ready = function (e) {
            return (
              I.then(e).catch(function (e) {
                A.readyException(e);
              }),
              this
            );
          }),
            A.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --A.readyWait : A.isReady) ||
                  ((A.isReady = !0) !== e && 0 < --A.readyWait) ||
                  I.resolveWith(T, [A]);
              },
            }),
            (A.ready.then = I.then),
            "complete" === T.readyState ||
            ("loading" !== T.readyState && !T.documentElement.doScroll)
              ? C.setTimeout(A.ready)
              : (T.addEventListener("DOMContentLoaded", P),
                C.addEventListener("load", P));
          var B = function (e, t, n, r, i, o, a) {
              var s = 0,
                l = e.length,
                u = null == n;
              if ("object" === h(n))
                for (s in ((i = !0), n)) B(e, t, s, n[s], !0, o, a);
              else if (
                void 0 !== r &&
                ((i = !0),
                b(r) || (a = !0),
                (t = u
                  ? a
                    ? (t.call(e, r), null)
                    : ((u = t),
                      function (e, t, n) {
                        return u.call(A(e), n);
                      })
                  : t))
              )
                for (; s < l; s++)
                  t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
            },
            W = /^-ms-/,
            U = /-([a-z])/g;
          function z(e, t) {
            return t.toUpperCase();
          }
          function X(e) {
            return e.replace(W, "ms-").replace(U, z);
          }
          function V(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          }
          function Q() {
            this.expando = A.expando + Q.uid++;
          }
          (Q.uid = 1),
            (Q.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    V(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  i = this.cache(e);
                if ("string" == typeof t) i[X(t)] = n;
                else for (r in t) i[X(r)] = t[r];
                return i;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][X(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(X)
                      : (t = X(t)) in r
                      ? [t]
                      : t.match(q) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 !== t && !A.isEmptyObject(r)) ||
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                e = e[this.expando];
                return void 0 !== e && !A.isEmptyObject(e);
              },
            });
          var Y = new Q(),
            J = new Q(),
            G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            $ = /[A-Z]/g;
          function K(e, t, n) {
            var r, i;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace($, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n =
                    "true" === (i = n) ||
                    ("false" !== i &&
                      ("null" === i
                        ? null
                        : i === +i + ""
                        ? +i
                        : G.test(i)
                        ? JSON.parse(i)
                        : i));
                } catch (e) {}
                J.set(e, t, n);
              } else n = void 0;
            return n;
          }
          A.extend({
            hasData: function (e) {
              return J.hasData(e) || Y.hasData(e);
            },
            data: function (e, t, n) {
              return J.access(e, t, n);
            },
            removeData: function (e, t) {
              J.remove(e, t);
            },
            _data: function (e, t, n) {
              return Y.access(e, t, n);
            },
            _removeData: function (e, t) {
              Y.remove(e, t);
            },
          }),
            A.fn.extend({
              data: function (n, e) {
                var t,
                  r,
                  i,
                  o = this[0],
                  a = o && o.attributes;
                if (void 0 !== n)
                  return "object" == typeof n
                    ? this.each(function () {
                        J.set(this, n);
                      })
                    : B(
                        this,
                        function (e) {
                          var t;
                          return o && void 0 === e
                            ? void 0 !== (t = J.get(o, n)) ||
                              void 0 !== (t = K(o, n))
                              ? t
                              : void 0
                            : void this.each(function () {
                                J.set(this, n, e);
                              });
                        },
                        null,
                        e,
                        1 < arguments.length,
                        null,
                        !0
                      );
                if (
                  this.length &&
                  ((i = J.get(o)),
                  1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
                ) {
                  for (t = a.length; t--; )
                    a[t] &&
                      0 === (r = a[t].name).indexOf("data-") &&
                      ((r = X(r.slice(5))), K(o, r, i[r]));
                  Y.set(o, "hasDataAttrs", !0);
                }
                return i;
              },
              removeData: function (e) {
                return this.each(function () {
                  J.remove(this, e);
                });
              },
            }),
            A.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (r = Y.get(e, (t = (t || "fx") + "queue"))),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = Y.access(e, t, A.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                var n = A.queue(e, (t = t || "fx")),
                  r = n.length,
                  i = n.shift(),
                  o = A._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                  i &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(
                      e,
                      function () {
                        A.dequeue(e, t);
                      },
                      o
                    )),
                  !r && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  Y.get(e, n) ||
                  Y.access(e, n, {
                    empty: A.Callbacks("once memory").add(function () {
                      Y.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            A.fn.extend({
              queue: function (t, n) {
                var e = 2;
                return (
                  "string" != typeof t && ((n = t), (t = "fx"), e--),
                  arguments.length < e
                    ? A.queue(this[0], t)
                    : void 0 === n
                    ? this
                    : this.each(function () {
                        var e = A.queue(this, t, n);
                        A._queueHooks(this, t),
                          "fx" === t &&
                            "inprogress" !== e[0] &&
                            A.dequeue(this, t);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  A.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                function n() {
                  --i || o.resolveWith(a, [a]);
                }
                var r,
                  i = 1,
                  o = A.Deferred(),
                  a = this,
                  s = this.length;
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  s--;

                )
                  (r = Y.get(a[s], e + "queueHooks")) &&
                    r.empty &&
                    (i++, r.empty.add(n));
                return n(), o.promise(t);
              },
            });
          var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
            te = ["Top", "Right", "Bottom", "Left"],
            ne = T.documentElement,
            re = function (e) {
              return A.contains(e.ownerDocument, e);
            },
            ie = { composed: !0 };
          ne.getRootNode &&
            (re = function (e) {
              return (
                A.contains(e.ownerDocument, e) ||
                e.getRootNode(ie) === e.ownerDocument
              );
            });
          var oe = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                re(e) &&
                "none" === A.css(e, "display"))
            );
          };
          function ae(e, t, n, r) {
            var i,
              o,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return A.css(e, t, "");
                  },
              l = s(),
              u = (n && n[3]) || (A.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (A.cssNumber[t] || ("px" !== u && +l)) &&
                ee.exec(A.css(e, t));
            if (c && c[3] !== u) {
              for (u = u || c[3], c = +(l /= 2) || 1; a--; )
                A.style(e, t, c + u),
                  (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0),
                  (c /= o);
              A.style(e, t, (c *= 2) + u), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +l || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = u), (r.start = c), (r.end = i))),
              i
            );
          }
          var se = {};
          function le(e, t) {
            for (var n, r, i, o, a, s = [], l = 0, u = e.length; l < u; l++)
              (r = e[l]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((s[l] = Y.get(r, "display") || null),
                      s[l] || (r.style.display = "")),
                    "" === r.style.display &&
                      oe(r) &&
                      (s[l] =
                        ((a = o = void 0),
                        (o = (i = r).ownerDocument),
                        (a = i.nodeName),
                        (i = se[a]) ||
                          ((o = o.body.appendChild(o.createElement(a))),
                          (i = A.css(o, "display")),
                          o.parentNode.removeChild(o),
                          (se[a] = i = "none" === i ? "block" : i)))))
                  : "none" !== n && ((s[l] = "none"), Y.set(r, "display", n)));
            for (l = 0; l < u; l++) null != s[l] && (e[l].style.display = s[l]);
            return e;
          }
          A.fn.extend({
            show: function () {
              return le(this, !0);
            },
            hide: function () {
              return le(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    oe(this) ? A(this).show() : A(this).hide();
                  });
            },
          });
          var ue = /^(?:checkbox|radio)$/i,
            ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            de = /^$|^module$|\/(?:java|ecma)script/i;
          (Qt = T.createDocumentFragment().appendChild(T.createElement("div"))),
            (p = T.createElement("input")).setAttribute("type", "radio"),
            p.setAttribute("checked", "checked"),
            p.setAttribute("name", "t"),
            Qt.appendChild(p),
            (v.checkClone = Qt.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (Qt.innerHTML = "<textarea>x</textarea>"),
            (v.noCloneChecked = !!Qt.cloneNode(!0).lastChild.defaultValue),
            (Qt.innerHTML = "<option></option>"),
            (v.option = !!Qt.lastChild);
          var pe = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function fe(e, t) {
            var n =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : [];
            return void 0 === t || (t && k(e, t)) ? A.merge([e], n) : n;
          }
          function he(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
          }
          (pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead),
            (pe.th = pe.td),
            v.option ||
              (pe.optgroup = pe.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var ge = /<|&#?\w+;/;
          function me(e, t, n, r, i) {
            for (
              var o,
                a,
                s,
                l,
                u,
                c = t.createDocumentFragment(),
                d = [],
                p = 0,
                f = e.length;
              p < f;
              p++
            )
              if ((o = e[p]) || 0 === o)
                if ("object" === h(o)) A.merge(d, o.nodeType ? [o] : o);
                else if (ge.test(o)) {
                  for (
                    a = a || c.appendChild(t.createElement("div")),
                      s = (ce.exec(o) || ["", ""])[1].toLowerCase(),
                      s = pe[s] || pe._default,
                      a.innerHTML = s[1] + A.htmlPrefilter(o) + s[2],
                      u = s[0];
                    u--;

                  )
                    a = a.lastChild;
                  A.merge(d, a.childNodes),
                    ((a = c.firstChild).textContent = "");
                } else d.push(t.createTextNode(o));
            for (c.textContent = "", p = 0; (o = d[p++]); )
              if (r && -1 < A.inArray(o, r)) i && i.push(o);
              else if (
                ((l = re(o)),
                (a = fe(c.appendChild(o), "script")),
                l && he(a),
                n)
              )
                for (u = 0; (o = a[u++]); ) de.test(o.type || "") && n.push(o);
            return c;
          }
          var ye = /^([^.]*)(?:\.(.+)|)/;
          function ve() {
            return !0;
          }
          function be() {
            return !1;
          }
          function xe(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return T.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function we(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                we(e, s, n, r, t[s], o);
              return e;
            }
            if (
              (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ("string" == typeof n
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = n), (n = void 0))),
              !1 === i)
            )
              i = be;
            else if (!i) return e;
            return (
              1 === o &&
                ((a = i),
                ((i = function (e) {
                  return A().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = A.guid++))),
              e.each(function () {
                A.event.add(this, t, i, r, n);
              })
            );
          }
          function Ce(e, i, o) {
            o
              ? (Y.set(e, i, !1),
                A.event.add(e, i, {
                  namespace: !1,
                  handler: function (e) {
                    var t,
                      n,
                      r = Y.get(this, i);
                    if (1 & e.isTrigger && this[i]) {
                      if (r.length)
                        (A.event.special[i] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((r = s.call(arguments)),
                        Y.set(this, i, r),
                        (t = o(this, i)),
                        this[i](),
                        r !== (n = Y.get(this, i)) || t
                          ? Y.set(this, i, !1)
                          : (n = {}),
                        r !== n)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          n && n.value
                        );
                    } else
                      r.length &&
                        (Y.set(this, i, {
                          value: A.event.trigger(
                            A.extend(r[0], A.Event.prototype),
                            r.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === Y.get(e, i) && A.event.add(e, i, ve);
          }
          (A.event = {
            global: {},
            add: function (t, e, n, r, i) {
              var o,
                a,
                s,
                l,
                u,
                c,
                d,
                p,
                f,
                h = Y.get(t);
              if (V(t))
                for (
                  n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && A.find.matchesSelector(ne, i),
                    n.guid || (n.guid = A.guid++),
                    (s = h.events) || (s = h.events = Object.create(null)),
                    (a = h.handle) ||
                      (a = h.handle =
                        function (e) {
                          return void 0 !== A && A.event.triggered !== e.type
                            ? A.event.dispatch.apply(t, arguments)
                            : void 0;
                        }),
                    l = (e = (e || "").match(q) || [""]).length;
                  l--;

                )
                  (d = f = (u = ye.exec(e[l]) || [])[1]),
                    (p = (u[2] || "").split(".").sort()),
                    d &&
                      ((c = A.event.special[d] || {}),
                      (d = (i ? c.delegateType : c.bindType) || d),
                      (c = A.event.special[d] || {}),
                      (u = A.extend(
                        {
                          type: d,
                          origType: f,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && A.expr.match.needsContext.test(i),
                          namespace: p.join("."),
                        },
                        o
                      )),
                      (f = s[d]) ||
                        (((f = s[d] = []).delegateCount = 0),
                        (c.setup && !1 !== c.setup.call(t, r, p, a)) ||
                          (t.addEventListener && t.addEventListener(d, a))),
                      c.add &&
                        (c.add.call(t, u),
                        u.handler.guid || (u.handler.guid = n.guid)),
                      i ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                      (A.event.global[d] = !0));
            },
            remove: function (e, t, n, r, i) {
              var o,
                a,
                s,
                l,
                u,
                c,
                d,
                p,
                f,
                h,
                g,
                m = Y.hasData(e) && Y.get(e);
              if (m && (l = m.events)) {
                for (u = (t = (t || "").match(q) || [""]).length; u--; )
                  if (
                    ((f = g = (s = ye.exec(t[u]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    f)
                  ) {
                    for (
                      d = A.event.special[f] || {},
                        p =
                          l[(f = (r ? d.delegateType : d.bindType) || f)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = o = p.length;
                      o--;

                    )
                      (c = p[o]),
                        (!i && g !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (s && !s.test(c.namespace)) ||
                          (r &&
                            r !== c.selector &&
                            ("**" !== r || !c.selector)) ||
                          (p.splice(o, 1),
                          c.selector && p.delegateCount--,
                          d.remove && d.remove.call(e, c));
                    a &&
                      !p.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) ||
                        A.removeEvent(e, f, m.handle),
                      delete l[f]);
                  } else for (f in l) A.event.remove(e, f + t[u], n, r, !0);
                A.isEmptyObject(l) && Y.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a = new Array(arguments.length),
                s = A.event.fix(e),
                l =
                  (Y.get(this, "events") || Object.create(null))[s.type] || [],
                e = A.event.special[s.type] || {};
              for (a[0] = s, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((s.delegateTarget = this),
                !e.preDispatch || !1 !== e.preDispatch.call(this, s))
              ) {
                for (
                  o = A.event.handlers.call(this, s, l), t = 0;
                  (r = o[t++]) && !s.isPropagationStopped();

                )
                  for (
                    s.currentTarget = r.elem, n = 0;
                    (i = r.handlers[n++]) && !s.isImmediatePropagationStopped();

                  )
                    (s.rnamespace &&
                      !1 !== i.namespace &&
                      !s.rnamespace.test(i.namespace)) ||
                      ((s.handleObj = i),
                      (s.data = i.data),
                      void 0 !==
                        (i = (
                          (A.event.special[i.origType] || {}).handle ||
                          i.handler
                        ).apply(r.elem, a)) &&
                        !1 === (s.result = i) &&
                        (s.preventDefault(), s.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, s), s.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                i,
                o,
                a,
                s = [],
                l = t.delegateCount,
                u = e.target;
              if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                  if (
                    1 === u.nodeType &&
                    ("click" !== e.type || !0 !== u.disabled)
                  ) {
                    for (o = [], a = {}, n = 0; n < l; n++)
                      void 0 === a[(i = (r = t[n]).selector + " ")] &&
                        (a[i] = r.needsContext
                          ? -1 < A(i, this).index(u)
                          : A.find(i, this, null, [u]).length),
                        a[i] && o.push(r);
                    o.length && s.push({ elem: u, handlers: o });
                  }
              return (
                (u = this),
                l < t.length && s.push({ elem: u, handlers: t.slice(l) }),
                s
              );
            },
            addProp: function (t, e) {
              Object.defineProperty(A.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e)
                  ? function () {
                      if (this.originalEvent) return e(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[t];
                    },
                set: function (e) {
                  Object.defineProperty(this, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: e,
                  });
                },
              });
            },
            fix: function (e) {
              return e[A.expando] ? e : new A.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  e = this || e;
                  return (
                    ue.test(e.type) &&
                      e.click &&
                      k(e, "input") &&
                      Ce(e, "click", ve),
                    !1
                  );
                },
                trigger: function (e) {
                  e = this || e;
                  return (
                    ue.test(e.type) &&
                      e.click &&
                      k(e, "input") &&
                      Ce(e, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  e = e.target;
                  return (
                    (ue.test(e.type) &&
                      e.click &&
                      k(e, "input") &&
                      Y.get(e, "click")) ||
                    k(e, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (A.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (A.Event = function (e, t) {
              if (!(this instanceof A.Event)) return new A.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? ve
                      : be),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && A.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[A.expando] = !0);
            }),
            (A.Event.prototype = {
              constructor: A.Event,
              isDefaultPrevented: be,
              isPropagationStopped: be,
              isImmediatePropagationStopped: be,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = ve),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = ve),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = ve),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            A.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              A.event.addProp
            ),
            A.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              A.event.special[e] = {
                setup: function () {
                  return Ce(this, e, xe), !1;
                },
                trigger: function () {
                  return Ce(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            A.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, i) {
                A.event.special[e] = {
                  delegateType: i,
                  bindType: i,
                  handle: function (e) {
                    var t,
                      n = e.relatedTarget,
                      r = e.handleObj;
                    return (
                      (n && (n === this || A.contains(this, n))) ||
                        ((e.type = r.origType),
                        (t = r.handler.apply(this, arguments)),
                        (e.type = i)),
                      t
                    );
                  },
                };
              }
            ),
            A.fn.extend({
              on: function (e, t, n, r) {
                return we(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return we(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    A(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" != typeof e)
                  return (
                    (!1 !== t && "function" != typeof t) ||
                      ((n = t), (t = void 0)),
                    !1 === n && (n = be),
                    this.each(function () {
                      A.event.remove(this, e, n, t);
                    })
                  );
                for (i in e) this.off(i, t, e[i]);
                return this;
              },
            });
          var Te = /<script|<style|<link/i,
            Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function ke(e, t) {
            return (
              (k(e, "table") &&
                k(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                A(e).children("tbody")[0]) ||
              e
            );
          }
          function Se(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Ne(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function je(e, t) {
            var n, r, i, o;
            if (1 === t.nodeType) {
              if (Y.hasData(e) && (o = Y.get(e).events))
                for (i in (Y.remove(t, "handle events"), o))
                  for (n = 0, r = o[i].length; n < r; n++)
                    A.event.add(t, i, o[i][n]);
              J.hasData(e) &&
                ((e = J.access(e)), (e = A.extend({}, e)), J.set(t, e));
            }
          }
          function De(n, r, i, o) {
            r = m(r);
            var e,
              t,
              a,
              s,
              l,
              u,
              c = 0,
              d = n.length,
              p = d - 1,
              f = r[0],
              h = b(f);
            if (
              h ||
              (1 < d && "string" == typeof f && !v.checkClone && Ae.test(f))
            )
              return n.each(function (e) {
                var t = n.eq(e);
                h && (r[0] = f.call(this, e, t.html())), De(t, r, i, o);
              });
            if (
              d &&
              ((t = (e = me(r, n[0].ownerDocument, !1, n, o)).firstChild),
              1 === e.childNodes.length && (e = t),
              t || o)
            ) {
              for (s = (a = A.map(fe(e, "script"), Se)).length; c < d; c++)
                (l = e),
                  c !== p &&
                    ((l = A.clone(l, !0, !0)),
                    s && A.merge(a, fe(l, "script"))),
                  i.call(n[c], l, c);
              if (s)
                for (
                  u = a[a.length - 1].ownerDocument, A.map(a, Ne), c = 0;
                  c < s;
                  c++
                )
                  (l = a[c]),
                    de.test(l.type || "") &&
                      !Y.access(l, "globalEval") &&
                      A.contains(u, l) &&
                      (l.src && "module" !== (l.type || "").toLowerCase()
                        ? A._evalUrl &&
                          !l.noModule &&
                          A._evalUrl(
                            l.src,
                            { nonce: l.nonce || l.getAttribute("nonce") },
                            u
                          )
                        : x(l.textContent.replace(Ee, ""), l, u));
            }
            return n;
          }
          function Le(e, t, n) {
            for (
              var r, i = t ? A.filter(t, e) : e, o = 0;
              null != (r = i[o]);
              o++
            )
              n || 1 !== r.nodeType || A.cleanData(fe(r)),
                r.parentNode &&
                  (n && re(r) && he(fe(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          A.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                i,
                o,
                a,
                s,
                l,
                u,
                c = e.cloneNode(!0),
                d = re(e);
              if (
                !(
                  v.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  A.isXMLDoc(e)
                )
              )
                for (a = fe(c), r = 0, i = (o = fe(e)).length; r < i; r++)
                  (s = o[r]),
                    (l = a[r]),
                    (u = void 0),
                    "input" === (u = l.nodeName.toLowerCase()) &&
                    ue.test(s.type)
                      ? (l.checked = s.checked)
                      : ("input" !== u && "textarea" !== u) ||
                        (l.defaultValue = s.defaultValue);
              if (t)
                if (n)
                  for (
                    o = o || fe(e), a = a || fe(c), r = 0, i = o.length;
                    r < i;
                    r++
                  )
                    je(o[r], a[r]);
                else je(e, c);
              return (
                0 < (a = fe(c, "script")).length &&
                  he(a, !d && fe(e, "script")),
                c
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, i = A.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (V(n)) {
                  if ((t = n[Y.expando])) {
                    if (t.events)
                      for (r in t.events)
                        i[r]
                          ? A.event.remove(n, r)
                          : A.removeEvent(n, r, t.handle);
                    n[Y.expando] = void 0;
                  }
                  n[J.expando] && (n[J.expando] = void 0);
                }
            },
          }),
            A.fn.extend({
              detach: function (e) {
                return Le(this, e, !0);
              },
              remove: function (e) {
                return Le(this, e);
              },
              text: function (e) {
                return B(
                  this,
                  function (e) {
                    return void 0 === e
                      ? A.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return De(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    ke(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return De(this, arguments, function (e) {
                  var t;
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (t = ke(this, e)).insertBefore(e, t.firstChild);
                });
              },
              before: function () {
                return De(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return De(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (A.cleanData(fe(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return A.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return B(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Te.test(e) &&
                      !pe[(ce.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = A.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (A.cleanData(fe(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var n = [];
                return De(
                  this,
                  arguments,
                  function (e) {
                    var t = this.parentNode;
                    A.inArray(this, n) < 0 &&
                      (A.cleanData(fe(this)), t && t.replaceChild(e, this));
                  },
                  n
                );
              },
            }),
            A.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, a) {
                A.fn[e] = function (e) {
                  for (
                    var t, n = [], r = A(e), i = r.length - 1, o = 0;
                    o <= i;
                    o++
                  )
                    (t = o === i ? this : this.clone(!0)),
                      A(r[o])[a](t),
                      l.apply(n, t.get());
                  return this.pushStack(n);
                };
              }
            );
          function _e(e, t, n) {
            var r,
              i = {};
            for (r in t) (i[r] = e.style[r]), (e.style[r] = t[r]);
            for (r in ((n = n.call(e)), t)) e.style[r] = i[r];
            return n;
          }
          var Fe,
            qe,
            Re,
            He,
            Me,
            Oe,
            Ie,
            Pe,
            Be = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
            We = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t = !t || !t.opener ? C : t).getComputedStyle(e);
            },
            Ue = new RegExp(te.join("|"), "i");
          function ze() {
            var e;
            Pe &&
              ((Ie.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (Pe.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              ne.appendChild(Ie).appendChild(Pe),
              (e = C.getComputedStyle(Pe)),
              (Fe = "1%" !== e.top),
              (Oe = 12 === Xe(e.marginLeft)),
              (Pe.style.right = "60%"),
              (He = 36 === Xe(e.right)),
              (qe = 36 === Xe(e.width)),
              (Pe.style.position = "absolute"),
              (Re = 12 === Xe(Pe.offsetWidth / 3)),
              ne.removeChild(Ie),
              (Pe = null));
          }
          function Xe(e) {
            return Math.round(parseFloat(e));
          }
          function Ve(e, t, n) {
            var r,
              i,
              o = e.style;
            return (
              (n = n || We(e)) &&
                ("" !== (i = n.getPropertyValue(t) || n[t]) ||
                  re(e) ||
                  (i = A.style(e, t)),
                !v.pixelBoxStyles() &&
                  Be.test(i) &&
                  Ue.test(t) &&
                  ((r = o.width),
                  (e = o.minWidth),
                  (t = o.maxWidth),
                  (o.minWidth = o.maxWidth = o.width = i),
                  (i = n.width),
                  (o.width = r),
                  (o.minWidth = e),
                  (o.maxWidth = t))),
              void 0 !== i ? i + "" : i
            );
          }
          function Qe(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          (Ie = T.createElement("div")),
            (Pe = T.createElement("div")).style &&
              ((Pe.style.backgroundClip = "content-box"),
              (Pe.cloneNode(!0).style.backgroundClip = ""),
              (v.clearCloneStyle = "content-box" === Pe.style.backgroundClip),
              A.extend(v, {
                boxSizingReliable: function () {
                  return ze(), qe;
                },
                pixelBoxStyles: function () {
                  return ze(), He;
                },
                pixelPosition: function () {
                  return ze(), Fe;
                },
                reliableMarginLeft: function () {
                  return ze(), Oe;
                },
                scrollboxSize: function () {
                  return ze(), Re;
                },
                reliableTrDimensions: function () {
                  var e, t, n;
                  return (
                    null == Me &&
                      ((e = T.createElement("table")),
                      (t = T.createElement("tr")),
                      (n = T.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      ne.appendChild(e).appendChild(t).appendChild(n),
                      (n = C.getComputedStyle(t)),
                      (Me =
                        parseInt(n.height, 10) +
                          parseInt(n.borderTopWidth, 10) +
                          parseInt(n.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      ne.removeChild(e)),
                    Me
                  );
                },
              }));
          var Ye = ["Webkit", "Moz", "ms"],
            Je = T.createElement("div").style,
            Ge = {};
          function $e(e) {
            var t = A.cssProps[e] || Ge[e];
            return (
              t ||
              (e in Je
                ? e
                : (Ge[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ye.length;
                        n--;

                      )
                        if ((e = Ye[n] + t) in Je) return e;
                    })(e) || e))
            );
          }
          var Ke = /^(none|table(?!-c[ea]).+)/,
            Ze = /^--/,
            et = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            tt = { letterSpacing: "0", fontWeight: "400" };
          function nt(e, t, n) {
            var r = ee.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function rt(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              l = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (l += A.css(e, n + te[a], !0, i)),
                r
                  ? ("content" === n &&
                      (l -= A.css(e, "padding" + te[a], !0, i)),
                    "margin" !== n &&
                      (l -= A.css(e, "border" + te[a] + "Width", !0, i)))
                  : ((l += A.css(e, "padding" + te[a], !0, i)),
                    "padding" !== n
                      ? (l += A.css(e, "border" + te[a] + "Width", !0, i))
                      : (s += A.css(e, "border" + te[a] + "Width", !0, i)));
            return (
              !r &&
                0 <= o &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        l -
                        s -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function it(e, t, n) {
            var r = We(e),
              i =
                (!v.boxSizingReliable() || n) &&
                "border-box" === A.css(e, "boxSizing", !1, r),
              o = i,
              a = Ve(e, t, r),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Be.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!v.boxSizingReliable() && i) ||
                (!v.reliableTrDimensions() && k(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === A.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === A.css(e, "boxSizing", !1, r)),
                (o = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                rt(e, t, n || (i ? "border" : "content"), o, r, a) +
                "px"
            );
          }
          function ot(e, t, n, r, i) {
            return new ot.prototype.init(e, t, n, r, i);
          }
          A.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    e = Ve(e, "opacity");
                    return "" === e ? "1" : e;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                  o,
                  a,
                  s = X(t),
                  l = Ze.test(t),
                  u = e.style;
                if (
                  (l || (t = $e(s)),
                  (a = A.cssHooks[t] || A.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                    ? i
                    : u[t];
                "string" === (o = typeof n) &&
                  (i = ee.exec(n)) &&
                  i[1] &&
                  ((n = ae(e, t, i)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      l ||
                      (n += (i && i[3]) || (A.cssNumber[s] ? "" : "px")),
                    v.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (u[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (l ? u.setProperty(t, n) : (u[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var i,
                o = X(t);
              return (
                Ze.test(t) || (t = $e(o)),
                "normal" ===
                  (i =
                    void 0 ===
                    (i =
                      (o = A.cssHooks[t] || A.cssHooks[o]) && "get" in o
                        ? o.get(e, !0, n)
                        : i)
                      ? Ve(e, t, r)
                      : i) &&
                  t in tt &&
                  (i = tt[t]),
                "" === n || n
                  ? ((t = parseFloat(i)), !0 === n || isFinite(t) ? t || 0 : i)
                  : i
              );
            },
          }),
            A.each(["height", "width"], function (e, s) {
              A.cssHooks[s] = {
                get: function (e, t, n) {
                  if (t)
                    return !Ke.test(A.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? it(e, s, n)
                      : _e(e, et, function () {
                          return it(e, s, n);
                        });
                },
                set: function (e, t, n) {
                  var r,
                    i = We(e),
                    o = !v.scrollboxSize() && "absolute" === i.position,
                    a =
                      (o || n) && "border-box" === A.css(e, "boxSizing", !1, i),
                    n = n ? rt(e, s, n, a, i) : 0;
                  return (
                    a &&
                      o &&
                      (n -= Math.ceil(
                        e["offset" + s[0].toUpperCase() + s.slice(1)] -
                          parseFloat(i[s]) -
                          rt(e, s, "border", !1, i) -
                          0.5
                      )),
                    n &&
                      (r = ee.exec(t)) &&
                      "px" !== (r[3] || "px") &&
                      ((e.style[s] = t), (t = A.css(e, s))),
                    nt(0, t, n)
                  );
                },
              };
            }),
            (A.cssHooks.marginLeft = Qe(v.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ve(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      _e(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            A.each(
              { margin: "", padding: "", border: "Width" },
              function (i, o) {
                (A.cssHooks[i + o] = {
                  expand: function (e) {
                    for (
                      var t = 0,
                        n = {},
                        r = "string" == typeof e ? e.split(" ") : [e];
                      t < 4;
                      t++
                    )
                      n[i + te[t] + o] = r[t] || r[t - 2] || r[0];
                    return n;
                  },
                }),
                  "margin" !== i && (A.cssHooks[i + o].set = nt);
              }
            ),
            A.fn.extend({
              css: function (e, t) {
                return B(
                  this,
                  function (e, t, n) {
                    var r,
                      i,
                      o = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = We(e), i = t.length; a < i; a++)
                        o[t[a]] = A.css(e, t[a], !1, r);
                      return o;
                    }
                    return void 0 !== n ? A.style(e, t, n) : A.css(e, t);
                  },
                  e,
                  t,
                  1 < arguments.length
                );
              },
            }),
            ((A.Tween = ot).prototype = {
              constructor: ot,
              init: function (e, t, n, r, i, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || A.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = o || (A.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = ot.propHooks[this.prop];
                return (e && e.get ? e : ot.propHooks._default).get(this);
              },
              run: function (e) {
                var t,
                  n = ot.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        A.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  (n && n.set ? n : ot.propHooks._default).set(this),
                  this
                );
              },
            }),
            (ot.prototype.init.prototype = ot.prototype),
            (ot.propHooks = {
              _default: {
                get: function (e) {
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (e = A.css(e.elem, e.prop, "")) && "auto" !== e
                    ? e
                    : 0;
                },
                set: function (e) {
                  A.fx.step[e.prop]
                    ? A.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!A.cssHooks[e.prop] && null == e.elem.style[$e(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : A.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (ot.propHooks.scrollTop = ot.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (A.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (A.fx = ot.prototype.init),
            (A.fx.step = {});
          var at,
            st,
            lt = /^(?:toggle|show|hide)$/,
            ut = /queueHooks$/;
          function ct() {
            st &&
              (!1 === T.hidden && C.requestAnimationFrame
                ? C.requestAnimationFrame(ct)
                : C.setTimeout(ct, A.fx.interval),
              A.fx.tick());
          }
          function dt() {
            return (
              C.setTimeout(function () {
                at = void 0;
              }),
              (at = Date.now())
            );
          }
          function pt(e, t) {
            var n,
              r = 0,
              i = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              i["margin" + (n = te[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function ft(e, t, n) {
            for (
              var r,
                i = (ht.tweeners[t] || []).concat(ht.tweeners["*"]),
                o = 0,
                a = i.length;
              o < a;
              o++
            )
              if ((r = i[o].call(n, t, e))) return r;
          }
          function ht(i, e, t) {
            var n,
              o,
              r = 0,
              a = ht.prefilters.length,
              s = A.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (o) return !1;
                for (
                  var e = at || dt(),
                    e = Math.max(0, u.startTime + u.duration - e),
                    t = 1 - (e / u.duration || 0),
                    n = 0,
                    r = u.tweens.length;
                  n < r;
                  n++
                )
                  u.tweens[n].run(t);
                return (
                  s.notifyWith(i, [u, t, e]),
                  t < 1 && r
                    ? e
                    : (r || s.notifyWith(i, [u, 1, 0]),
                      s.resolveWith(i, [u]),
                      !1)
                );
              },
              u = s.promise({
                elem: i,
                props: A.extend({}, e),
                opts: A.extend(
                  !0,
                  { specialEasing: {}, easing: A.easing._default },
                  t
                ),
                originalProperties: e,
                originalOptions: t,
                startTime: at || dt(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                  e = A.Tween(
                    i,
                    u.opts,
                    e,
                    t,
                    u.opts.specialEasing[e] || u.opts.easing
                  );
                  return u.tweens.push(e), e;
                },
                stop: function (e) {
                  var t = 0,
                    n = e ? u.tweens.length : 0;
                  if (o) return this;
                  for (o = !0; t < n; t++) u.tweens[t].run(1);
                  return (
                    e
                      ? (s.notifyWith(i, [u, 1, 0]), s.resolveWith(i, [u, e]))
                      : s.rejectWith(i, [u, e]),
                    this
                  );
                },
              }),
              c = u.props;
            for (
              !(function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                  if (
                    ((i = t[(r = X(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                    n !== r && ((e[r] = o), delete e[n]),
                    (a = A.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((o = a.expand(o)), delete e[r], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = i));
                  else t[r] = i;
              })(c, u.opts.specialEasing);
              r < a;
              r++
            )
              if ((n = ht.prefilters[r].call(u, i, c, u.opts)))
                return (
                  b(n.stop) &&
                    (A._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)),
                  n
                );
            return (
              A.map(c, ft, u),
              b(u.opts.start) && u.opts.start.call(i, u),
              u
                .progress(u.opts.progress)
                .done(u.opts.done, u.opts.complete)
                .fail(u.opts.fail)
                .always(u.opts.always),
              A.fx.timer(
                A.extend(l, { elem: i, anim: u, queue: u.opts.queue })
              ),
              u
            );
          }
          (A.Animation = A.extend(ht, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ae(n.elem, e, ee.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              for (
                var n,
                  r = 0,
                  i = (e = b(e) ? ((t = e), ["*"]) : e.match(q)).length;
                r < i;
                r++
              )
                (n = e[r]),
                  (ht.tweeners[n] = ht.tweeners[n] || []),
                  ht.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  l,
                  u,
                  c = "width" in t || "height" in t,
                  d = this,
                  p = {},
                  f = e.style,
                  h = e.nodeType && oe(e),
                  g = Y.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = A._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  d.always(function () {
                    d.always(function () {
                      a.unqueued--, A.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[r]), lt.test(i))) {
                    if (
                      (delete t[r],
                      (o = o || "toggle" === i),
                      i === (h ? "hide" : "show"))
                    ) {
                      if ("show" !== i || !g || void 0 === g[r]) continue;
                      h = !0;
                    }
                    p[r] = (g && g[r]) || A.style(e, r);
                  }
                if ((l = !A.isEmptyObject(t)) || !A.isEmptyObject(p))
                  for (r in (c &&
                    1 === e.nodeType &&
                    ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                    null == (u = g && g.display) && (u = Y.get(e, "display")),
                    "none" === (c = A.css(e, "display")) &&
                      (u
                        ? (c = u)
                        : (le([e], !0),
                          (u = e.style.display || u),
                          (c = A.css(e, "display")),
                          le([e]))),
                    ("inline" === c || ("inline-block" === c && null != u)) &&
                      "none" === A.css(e, "float") &&
                      (l ||
                        (d.done(function () {
                          f.display = u;
                        }),
                        null == u &&
                          ((c = f.display), (u = "none" === c ? "" : c))),
                      (f.display = "inline-block"))),
                  n.overflow &&
                    ((f.overflow = "hidden"),
                    d.always(function () {
                      (f.overflow = n.overflow[0]),
                        (f.overflowX = n.overflow[1]),
                        (f.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  p))
                    l ||
                      (g
                        ? "hidden" in g && (h = g.hidden)
                        : (g = Y.access(e, "fxshow", { display: u })),
                      o && (g.hidden = !h),
                      h && le([e], !0),
                      d.done(function () {
                        for (r in (h || le([e]), Y.remove(e, "fxshow"), p))
                          A.style(e, r, p[r]);
                      })),
                      (l = ft(h ? g[r] : 0, r, d)),
                      r in g ||
                        ((g[r] = l.start),
                        h && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
            },
          })),
            (A.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? A.extend({}, e)
                  : {
                      complete: n || (!n && t) || (b(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !b(t) && t),
                    };
              return (
                A.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in A.fx.speeds
                      ? (r.duration = A.fx.speeds[r.duration])
                      : (r.duration = A.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  b(r.old) && r.old.call(this),
                    r.queue && A.dequeue(this, r.queue);
                }),
                r
              );
            }),
            A.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(oe)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (t, e, n, r) {
                var i = A.isEmptyObject(t),
                  o = A.speed(e, n, r),
                  r = function () {
                    var e = ht(this, A.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0);
                  };
                return (
                  (r.finish = r),
                  i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
                );
              },
              stop: function (i, e, o) {
                function a(e) {
                  var t = e.stop;
                  delete e.stop, t(o);
                }
                return (
                  "string" != typeof i && ((o = e), (e = i), (i = void 0)),
                  e && this.queue(i || "fx", []),
                  this.each(function () {
                    var e = !0,
                      t = null != i && i + "queueHooks",
                      n = A.timers,
                      r = Y.get(this);
                    if (t) r[t] && r[t].stop && a(r[t]);
                    else
                      for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
                    for (t = n.length; t--; )
                      n[t].elem !== this ||
                        (null != i && n[t].queue !== i) ||
                        (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                    (!e && o) || A.dequeue(this, i);
                  })
                );
              },
              finish: function (a) {
                return (
                  !1 !== a && (a = a || "fx"),
                  this.each(function () {
                    var e,
                      t = Y.get(this),
                      n = t[a + "queue"],
                      r = t[a + "queueHooks"],
                      i = A.timers,
                      o = n ? n.length : 0;
                    for (
                      t.finish = !0,
                        A.queue(this, a, []),
                        r && r.stop && r.stop.call(this, !0),
                        e = i.length;
                      e--;

                    )
                      i[e].elem === this &&
                        i[e].queue === a &&
                        (i[e].anim.stop(!0), i.splice(e, 1));
                    for (e = 0; e < o; e++)
                      n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish;
                  })
                );
              },
            }),
            A.each(["toggle", "show", "hide"], function (e, r) {
              var i = A.fn[r];
              A.fn[r] = function (e, t, n) {
                return null == e || "boolean" == typeof e
                  ? i.apply(this, arguments)
                  : this.animate(pt(r, !0), e, t, n);
              };
            }),
            A.each(
              {
                slideDown: pt("show"),
                slideUp: pt("hide"),
                slideToggle: pt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, r) {
                A.fn[e] = function (e, t, n) {
                  return this.animate(r, e, t, n);
                };
              }
            ),
            (A.timers = []),
            (A.fx.tick = function () {
              var e,
                t = 0,
                n = A.timers;
              for (at = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || A.fx.stop(), (at = void 0);
            }),
            (A.fx.timer = function (e) {
              A.timers.push(e), A.fx.start();
            }),
            (A.fx.interval = 13),
            (A.fx.start = function () {
              st || ((st = !0), ct());
            }),
            (A.fx.stop = function () {
              st = null;
            }),
            (A.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (A.fn.delay = function (r, e) {
              return (
                (r = (A.fx && A.fx.speeds[r]) || r),
                this.queue((e = e || "fx"), function (e, t) {
                  var n = C.setTimeout(e, r);
                  t.stop = function () {
                    C.clearTimeout(n);
                  };
                })
              );
            }),
            (Qt = T.createElement("input")),
            (Z = T.createElement("select").appendChild(
              T.createElement("option")
            )),
            (Qt.type = "checkbox"),
            (v.checkOn = "" !== Qt.value),
            (v.optSelected = Z.selected),
            ((Qt = T.createElement("input")).value = "t"),
            (Qt.type = "radio"),
            (v.radioValue = "t" === Qt.value);
          var gt,
            mt = A.expr.attrHandle;
          A.fn.extend({
            attr: function (e, t) {
              return B(this, A.attr, e, t, 1 < arguments.length);
            },
            removeAttr: function (e) {
              return this.each(function () {
                A.removeAttr(this, e);
              });
            },
          }),
            A.extend({
              attr: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? A.prop(e, t, n)
                    : ((1 === o && A.isXMLDoc(e)) ||
                        (i =
                          A.attrHooks[t.toLowerCase()] ||
                          (A.expr.match.bool.test(t) ? gt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void A.removeAttr(e, t)
                          : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : !(i && "get" in i && null !== (r = i.get(e, t))) &&
                          null == (r = A.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!v.radioValue && "radio" === t && k(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  i = t && t.match(q);
                if (i && 1 === e.nodeType)
                  for (; (n = i[r++]); ) e.removeAttribute(n);
              },
            }),
            (gt = {
              set: function (e, t, n) {
                return !1 === t ? A.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            A.each(A.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var a = mt[t] || A.find.attr;
              mt[t] = function (e, t, n) {
                var r,
                  i,
                  o = t.toLowerCase();
                return (
                  n ||
                    ((i = mt[o]),
                    (mt[o] = r),
                    (r = null != a(e, t, n) ? o : null),
                    (mt[o] = i)),
                  r
                );
              };
            });
          var yt = /^(?:input|select|textarea|button)$/i,
            vt = /^(?:a|area)$/i;
          function bt(e) {
            return (e.match(q) || []).join(" ");
          }
          function xt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function wt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(q)) || [];
          }
          A.fn.extend({
            prop: function (e, t) {
              return B(this, A.prop, e, t, 1 < arguments.length);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[A.propFix[e] || e];
              });
            },
          }),
            A.extend({
              prop: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && A.isXMLDoc(e)) ||
                      ((t = A.propFix[t] || t), (i = A.propHooks[t])),
                    void 0 !== n
                      ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = A.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : yt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            v.optSelected ||
              (A.propHooks.selected = {
                get: function (e) {
                  e = e.parentNode;
                  return e && e.parentNode && e.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  e = e.parentNode;
                  e &&
                    (e.selectedIndex,
                    e.parentNode && e.parentNode.selectedIndex);
                },
              }),
            A.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                A.propFix[this.toLowerCase()] = this;
              }
            ),
            A.fn.extend({
              addClass: function (t) {
                var e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s = 0;
                if (b(t))
                  return this.each(function (e) {
                    A(this).addClass(t.call(this, e, xt(this)));
                  });
                if ((e = wt(t)).length)
                  for (; (n = this[s++]); )
                    if (
                      ((a = xt(n)), (r = 1 === n.nodeType && " " + bt(a) + " "))
                    ) {
                      for (o = 0; (i = e[o++]); )
                        r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                      a !== (a = bt(r)) && n.setAttribute("class", a);
                    }
                return this;
              },
              removeClass: function (t) {
                var e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s = 0;
                if (b(t))
                  return this.each(function (e) {
                    A(this).removeClass(t.call(this, e, xt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((e = wt(t)).length)
                  for (; (n = this[s++]); )
                    if (
                      ((a = xt(n)), (r = 1 === n.nodeType && " " + bt(a) + " "))
                    ) {
                      for (o = 0; (i = e[o++]); )
                        for (; -1 < r.indexOf(" " + i + " "); )
                          r = r.replace(" " + i + " ", " ");
                      a !== (a = bt(r)) && n.setAttribute("class", a);
                    }
                return this;
              },
              toggleClass: function (i, t) {
                var o = typeof i,
                  a = "string" == o || Array.isArray(i);
                return "boolean" == typeof t && a
                  ? t
                    ? this.addClass(i)
                    : this.removeClass(i)
                  : b(i)
                  ? this.each(function (e) {
                      A(this).toggleClass(i.call(this, e, xt(this), t), t);
                    })
                  : this.each(function () {
                      var e, t, n, r;
                      if (a)
                        for (t = 0, n = A(this), r = wt(i); (e = r[t++]); )
                          n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                      else
                        (void 0 !== i && "boolean" != o) ||
                          ((e = xt(this)) && Y.set(this, "__className__", e),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              (!e &&
                                !1 !== i &&
                                Y.get(this, "__className__")) ||
                                ""
                            ));
                    });
              },
              hasClass: function (e) {
                for (var t, n = 0, r = " " + e + " "; (t = this[n++]); )
                  if (
                    1 === t.nodeType &&
                    -1 < (" " + bt(xt(t)) + " ").indexOf(r)
                  )
                    return !0;
                return !1;
              },
            });
          var Ct = /\r/g;
          A.fn.extend({
            val: function (t) {
              var n,
                e,
                r,
                i = this[0];
              return arguments.length
                ? ((r = b(t)),
                  this.each(function (e) {
                    1 === this.nodeType &&
                      (null == (e = r ? t.call(this, e, A(this).val()) : t)
                        ? (e = "")
                        : "number" == typeof e
                        ? (e += "")
                        : Array.isArray(e) &&
                          (e = A.map(e, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((n =
                        A.valHooks[this.type] ||
                        A.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in n &&
                        void 0 !== n.set(this, e, "value")) ||
                        (this.value = e));
                  }))
                : i
                ? (n =
                    A.valHooks[i.type] ||
                    A.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in n &&
                  void 0 !== (e = n.get(i, "value"))
                  ? e
                  : "string" == typeof (e = i.value)
                  ? e.replace(Ct, "")
                  : null == e
                  ? ""
                  : e
                : void 0;
            },
          }),
            A.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = A.find.attr(e, "value");
                    return null != t ? t : bt(A.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    for (
                      var t,
                        n = e.options,
                        r = e.selectedIndex,
                        i = "select-one" === e.type,
                        o = i ? null : [],
                        a = i ? r + 1 : n.length,
                        s = r < 0 ? a : i ? r : 0;
                      s < a;
                      s++
                    )
                      if (
                        ((t = n[s]).selected || s === r) &&
                        !t.disabled &&
                        (!t.parentNode.disabled || !k(t.parentNode, "optgroup"))
                      ) {
                        if (((t = A(t).val()), i)) return t;
                        o.push(t);
                      }
                    return o;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, i = e.options, o = A.makeArray(t), a = i.length;
                      a--;

                    )
                      ((r = i[a]).selected =
                        -1 < A.inArray(A.valHooks.option.get(r), o)) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            A.each(["radio", "checkbox"], function () {
              (A.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = -1 < A.inArray(A(e).val(), t));
                },
              }),
                v.checkOn ||
                  (A.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (v.focusin = "onfocusin" in C);
          function Tt(e) {
            e.stopPropagation();
          }
          var At = /^(?:focusinfocus|focusoutblur)$/;
          A.extend(A.event, {
            trigger: function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                l,
                u,
                c,
                d = [n || T],
                p = y.call(e, "type") ? e.type : e,
                f = y.call(e, "namespace") ? e.namespace.split(".") : [],
                h = (c = o = n = n || T);
              if (
                3 !== n.nodeType &&
                8 !== n.nodeType &&
                !At.test(p + A.event.triggered) &&
                (-1 < p.indexOf(".") &&
                  ((p = (f = p.split(".")).shift()), f.sort()),
                (s = p.indexOf(":") < 0 && "on" + p),
                ((e = e[A.expando]
                  ? e
                  : new A.Event(p, "object" == typeof e && e)).isTrigger = r
                  ? 2
                  : 3),
                (e.namespace = f.join(".")),
                (e.rnamespace = e.namespace
                  ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : A.makeArray(t, [e])),
                (u = A.event.special[p] || {}),
                r || !u.trigger || !1 !== u.trigger.apply(n, t))
              ) {
                if (!r && !u.noBubble && !g(n)) {
                  for (
                    a = u.delegateType || p,
                      At.test(a + p) || (h = h.parentNode);
                    h;
                    h = h.parentNode
                  )
                    d.push(h), (o = h);
                  o === (n.ownerDocument || T) &&
                    d.push(o.defaultView || o.parentWindow || C);
                }
                for (i = 0; (h = d[i++]) && !e.isPropagationStopped(); )
                  (c = h),
                    (e.type = 1 < i ? a : u.bindType || p),
                    (l =
                      (Y.get(h, "events") || Object.create(null))[e.type] &&
                      Y.get(h, "handle")) && l.apply(h, t),
                    (l = s && h[s]) &&
                      l.apply &&
                      V(h) &&
                      ((e.result = l.apply(h, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = p),
                  r ||
                    e.isDefaultPrevented() ||
                    (u._default && !1 !== u._default.apply(d.pop(), t)) ||
                    !V(n) ||
                    (s &&
                      b(n[p]) &&
                      !g(n) &&
                      ((o = n[s]) && (n[s] = null),
                      (A.event.triggered = p),
                      e.isPropagationStopped() && c.addEventListener(p, Tt),
                      n[p](),
                      e.isPropagationStopped() && c.removeEventListener(p, Tt),
                      (A.event.triggered = void 0),
                      o && (n[s] = o))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              e = A.extend(new A.Event(), n, { type: e, isSimulated: !0 });
              A.event.trigger(e, null, t);
            },
          }),
            A.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  A.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return A.event.trigger(e, t, n, !0);
              },
            }),
            v.focusin ||
              A.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
                function i(e) {
                  A.event.simulate(r, e.target, A.event.fix(e));
                }
                A.event.special[r] = {
                  setup: function () {
                    var e = this.ownerDocument || this.document || this,
                      t = Y.access(e, r);
                    t || e.addEventListener(n, i, !0),
                      Y.access(e, r, (t || 0) + 1);
                  },
                  teardown: function () {
                    var e = this.ownerDocument || this.document || this,
                      t = Y.access(e, r) - 1;
                    t
                      ? Y.access(e, r, t)
                      : (e.removeEventListener(n, i, !0), Y.remove(e, r));
                  },
                };
              });
          var Et = C.location,
            kt = { guid: Date.now() },
            St = /\?/;
          A.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new C.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                A.error(
                  "Invalid XML: " +
                    (n
                      ? A.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var Nt = /\[\]$/,
            jt = /\r?\n/g,
            Dt = /^(?:submit|button|image|reset|file)$/i,
            Lt = /^(?:input|select|textarea|keygen)/i;
          (A.param = function (e, t) {
            function n(e, t) {
              (t = b(t) ? t() : t),
                (i[i.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == t ? "" : t));
            }
            var r,
              i = [];
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !A.isPlainObject(e)))
              A.each(e, function () {
                n(this.name, this.value);
              });
            else
              for (r in e)
                !(function n(r, e, i, o) {
                  if (Array.isArray(e))
                    A.each(e, function (e, t) {
                      i || Nt.test(r)
                        ? o(r, t)
                        : n(
                            r +
                              "[" +
                              ("object" == typeof t && null != t ? e : "") +
                              "]",
                            t,
                            i,
                            o
                          );
                    });
                  else if (i || "object" !== h(e)) o(r, e);
                  else for (var t in e) n(r + "[" + t + "]", e[t], i, o);
                })(r, e[r], t, n);
            return i.join("&");
          }),
            A.fn.extend({
              serialize: function () {
                return A.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = A.prop(this, "elements");
                  return e ? A.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !A(this).is(":disabled") &&
                      Lt.test(this.nodeName) &&
                      !Dt.test(e) &&
                      (this.checked || !ue.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = A(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? A.map(n, function (e) {
                          return { name: t.name, value: e.replace(jt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(jt, "\r\n") };
                  })
                  .get();
              },
            });
          var _t = /%20/g,
            Ft = /#.*$/,
            qt = /([?&])_=[^&]*/,
            Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ht = /^(?:GET|HEAD)$/,
            Mt = /^\/\//,
            Ot = {},
            It = {},
            Pt = "*/".concat("*"),
            Bt = T.createElement("a");
          function Wt(o) {
            return function (e, t) {
              "string" != typeof e && ((t = e), (e = "*"));
              var n,
                r = 0,
                i = e.toLowerCase().match(q) || [];
              if (b(t))
                for (; (n = i[r++]); )
                  "+" === n[0]
                    ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
                    : (o[n] = o[n] || []).push(t);
            };
          }
          function Ut(t, r, i, o) {
            var a = {},
              s = t === It;
            function l(e) {
              var n;
              return (
                (a[e] = !0),
                A.each(t[e] || [], function (e, t) {
                  t = t(r, i, o);
                  return "string" != typeof t || s || a[t]
                    ? s
                      ? !(n = t)
                      : void 0
                    : (r.dataTypes.unshift(t), l(t), !1);
                }),
                n
              );
            }
            return l(r.dataTypes[0]) || (!a["*"] && l("*"));
          }
          function zt(e, t) {
            var n,
              r,
              i = A.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((i[n] ? e : (r = r || {}))[n] = t[n]);
            return r && A.extend(!0, e, r), e;
          }
          (Bt.href = Et.href),
            A.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Et.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Et.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Pt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": A.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? zt(zt(e, A.ajaxSettings), t) : zt(A.ajaxSettings, e);
              },
              ajaxPrefilter: Wt(Ot),
              ajaxTransport: Wt(It),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0));
                var l,
                  u,
                  c,
                  n,
                  d,
                  p,
                  f,
                  r,
                  i,
                  h = A.ajaxSetup({}, (t = t || {})),
                  g = h.context || h,
                  m = h.context && (g.nodeType || g.jquery) ? A(g) : A.event,
                  y = A.Deferred(),
                  v = A.Callbacks("once memory"),
                  b = h.statusCode || {},
                  o = {},
                  a = {},
                  s = "canceled",
                  x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (p) {
                        if (!n)
                          for (n = {}; (t = Rt.exec(c)); )
                            n[t[1].toLowerCase() + " "] = (
                              n[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = n[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return p ? c : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == p &&
                          ((e = a[e.toLowerCase()] = a[e.toLowerCase()] || e),
                          (o[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == p && (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      if (e)
                        if (p) x.always(e[x.status]);
                        else for (var t in e) b[t] = [b[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      e = e || s;
                      return l && l.abort(e), w(0, e), this;
                    },
                  };
                if (
                  (y.promise(x),
                  (h.url = ((e || h.url || Et.href) + "").replace(
                    Mt,
                    Et.protocol + "//"
                  )),
                  (h.type = t.method || t.type || h.method || h.type),
                  (h.dataTypes = (h.dataType || "*").toLowerCase().match(q) || [
                    "",
                  ]),
                  null == h.crossDomain)
                ) {
                  i = T.createElement("a");
                  try {
                    (i.href = h.url),
                      (i.href = i.href),
                      (h.crossDomain =
                        Bt.protocol + "//" + Bt.host !=
                        i.protocol + "//" + i.host);
                  } catch (e) {
                    h.crossDomain = !0;
                  }
                }
                if (
                  (h.data &&
                    h.processData &&
                    "string" != typeof h.data &&
                    (h.data = A.param(h.data, h.traditional)),
                  Ut(Ot, h, t, x),
                  p)
                )
                  return x;
                for (r in ((f = A.event && h.global) &&
                  0 == A.active++ &&
                  A.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Ht.test(h.type)),
                (u = h.url.replace(Ft, "")),
                h.hasContent
                  ? h.data &&
                    h.processData &&
                    0 ===
                      (h.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (h.data = h.data.replace(_t, "+"))
                  : ((i = h.url.slice(u.length)),
                    h.data &&
                      (h.processData || "string" == typeof h.data) &&
                      ((u += (St.test(u) ? "&" : "?") + h.data), delete h.data),
                    !1 === h.cache &&
                      ((u = u.replace(qt, "$1")),
                      (i = (St.test(u) ? "&" : "?") + "_=" + kt.guid++ + i)),
                    (h.url = u + i)),
                h.ifModified &&
                  (A.lastModified[u] &&
                    x.setRequestHeader("If-Modified-Since", A.lastModified[u]),
                  A.etag[u] && x.setRequestHeader("If-None-Match", A.etag[u])),
                ((h.data && h.hasContent && !1 !== h.contentType) ||
                  t.contentType) &&
                  x.setRequestHeader("Content-Type", h.contentType),
                x.setRequestHeader(
                  "Accept",
                  h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                    ? h.accepts[h.dataTypes[0]] +
                        ("*" !== h.dataTypes[0] ? ", " + Pt + "; q=0.01" : "")
                    : h.accepts["*"]
                ),
                h.headers))
                  x.setRequestHeader(r, h.headers[r]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, x, h) || p))
                  return x.abort();
                if (
                  ((s = "abort"),
                  v.add(h.complete),
                  x.done(h.success),
                  x.fail(h.error),
                  (l = Ut(It, h, t, x)))
                ) {
                  if (
                    ((x.readyState = 1), f && m.trigger("ajaxSend", [x, h]), p)
                  )
                    return x;
                  h.async &&
                    0 < h.timeout &&
                    (d = C.setTimeout(function () {
                      x.abort("timeout");
                    }, h.timeout));
                  try {
                    (p = !1), l.send(o, w);
                  } catch (e) {
                    if (p) throw e;
                    w(-1, e);
                  }
                } else w(-1, "No Transport");
                function w(e, t, n, r) {
                  var i,
                    o,
                    a,
                    s = t;
                  p ||
                    ((p = !0),
                    d && C.clearTimeout(d),
                    (l = void 0),
                    (c = r || ""),
                    (x.readyState = 0 < e ? 4 : 0),
                    (r = (200 <= e && e < 300) || 304 === e),
                    n &&
                      (a = (function (e, t, n) {
                        for (
                          var r, i, o, a, s = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (i in s)
                            if (s[i] && s[i].test(r)) {
                              l.unshift(i);
                              break;
                            }
                        if (l[0] in n) o = l[0];
                        else {
                          for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                              o = i;
                              break;
                            }
                            a = a || i;
                          }
                          o = o || a;
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o];
                      })(h, x, n)),
                    !r &&
                      -1 < A.inArray("script", h.dataTypes) &&
                      A.inArray("json", h.dataTypes) < 0 &&
                      (h.converters["text script"] = function () {}),
                    (a = (function (e, t, n, r) {
                      var i,
                        o,
                        a,
                        s,
                        l,
                        u = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (a in e.converters)
                          u[a.toLowerCase()] = e.converters[a];
                      for (o = c.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !l &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = o),
                          (o = c.shift()))
                        )
                          if ("*" === o) o = l;
                          else if ("*" !== l && l !== o) {
                            if (!(a = u[l + " " + o] || u["* " + o]))
                              for (i in u)
                                if (
                                  (s = i.split(" "))[1] === o &&
                                  (a = u[l + " " + s[0]] || u["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = u[i])
                                    : !0 !== u[i] &&
                                      ((o = s[0]), c.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? e
                                      : "No conversion from " + l + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(h, a, x, r)),
                    r
                      ? (h.ifModified &&
                          ((n = x.getResponseHeader("Last-Modified")) &&
                            (A.lastModified[u] = n),
                          (n = x.getResponseHeader("etag")) && (A.etag[u] = n)),
                        204 === e || "HEAD" === h.type
                          ? (s = "nocontent")
                          : 304 === e
                          ? (s = "notmodified")
                          : ((s = a.state), (i = a.data), (r = !(o = a.error))))
                      : ((o = s),
                        (!e && s) || ((s = "error"), e < 0 && (e = 0))),
                    (x.status = e),
                    (x.statusText = (t || s) + ""),
                    r
                      ? y.resolveWith(g, [i, s, x])
                      : y.rejectWith(g, [x, s, o]),
                    x.statusCode(b),
                    (b = void 0),
                    f &&
                      m.trigger(r ? "ajaxSuccess" : "ajaxError", [
                        x,
                        h,
                        r ? i : o,
                      ]),
                    v.fireWith(g, [x, s]),
                    f &&
                      (m.trigger("ajaxComplete", [x, h]),
                      --A.active || A.event.trigger("ajaxStop")));
                }
                return x;
              },
              getJSON: function (e, t, n) {
                return A.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return A.get(e, void 0, t, "script");
              },
            }),
            A.each(["get", "post"], function (e, i) {
              A[i] = function (e, t, n, r) {
                return (
                  b(t) && ((r = r || n), (n = t), (t = void 0)),
                  A.ajax(
                    A.extend(
                      { url: e, type: i, dataType: r, data: t, success: n },
                      A.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            A.ajaxPrefilter(function (e) {
              for (var t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (A._evalUrl = function (e, t, n) {
              return A.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  A.globalEval(e, t, n);
                },
              });
            }),
            A.fn.extend({
              wrapAll: function (e) {
                return (
                  this[0] &&
                    (b(e) && (e = e.call(this[0])),
                    (e = A(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && e.insertBefore(this[0]),
                    e
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (n) {
                return b(n)
                  ? this.each(function (e) {
                      A(this).wrapInner(n.call(this, e));
                    })
                  : this.each(function () {
                      var e = A(this),
                        t = e.contents();
                      t.length ? t.wrapAll(n) : e.append(n);
                    });
              },
              wrap: function (t) {
                var n = b(t);
                return this.each(function (e) {
                  A(this).wrapAll(n ? t.call(this, e) : t);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      A(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (A.expr.pseudos.hidden = function (e) {
              return !A.expr.pseudos.visible(e);
            }),
            (A.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (A.ajaxSettings.xhr = function () {
              try {
                return new C.XMLHttpRequest();
              } catch (e) {}
            });
          var Xt = { 0: 200, 1223: 204 },
            Vt = A.ajaxSettings.xhr();
          (v.cors = !!Vt && "withCredentials" in Vt),
            (v.ajax = Vt = !!Vt),
            A.ajaxTransport(function (i) {
              var o, a;
              if (v.cors || (Vt && !i.crossDomain))
                return {
                  send: function (e, t) {
                    var n,
                      r = i.xhr();
                    if (
                      (r.open(i.type, i.url, i.async, i.username, i.password),
                      i.xhrFields)
                    )
                      for (n in i.xhrFields) r[n] = i.xhrFields[n];
                    for (n in (i.mimeType &&
                      r.overrideMimeType &&
                      r.overrideMimeType(i.mimeType),
                    i.crossDomain ||
                      e["X-Requested-With"] ||
                      (e["X-Requested-With"] = "XMLHttpRequest"),
                    e))
                      r.setRequestHeader(n, e[n]);
                    (o = function (e) {
                      return function () {
                        o &&
                          ((o =
                            a =
                            r.onload =
                            r.onerror =
                            r.onabort =
                            r.ontimeout =
                            r.onreadystatechange =
                              null),
                          "abort" === e
                            ? r.abort()
                            : "error" === e
                            ? "number" != typeof r.status
                              ? t(0, "error")
                              : t(r.status, r.statusText)
                            : t(
                                Xt[r.status] || r.status,
                                r.statusText,
                                "text" !== (r.responseType || "text") ||
                                  "string" != typeof r.responseText
                                  ? { binary: r.response }
                                  : { text: r.responseText },
                                r.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (r.onload = o()),
                      (a = r.onerror = r.ontimeout = o("error")),
                      void 0 !== r.onabort
                        ? (r.onabort = a)
                        : (r.onreadystatechange = function () {
                            4 === r.readyState &&
                              C.setTimeout(function () {
                                o && a();
                              });
                          }),
                      (o = o("abort"));
                    try {
                      r.send((i.hasContent && i.data) || null);
                    } catch (e) {
                      if (o) throw e;
                    }
                  },
                  abort: function () {
                    o && o();
                  },
                };
            }),
            A.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            A.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return A.globalEval(e), e;
                },
              },
            }),
            A.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            A.ajaxTransport("script", function (n) {
              var r, i;
              if (n.crossDomain || n.scriptAttrs)
                return {
                  send: function (e, t) {
                    (r = A("<script>")
                      .attr(n.scriptAttrs || {})
                      .prop({ charset: n.scriptCharset, src: n.url })
                      .on(
                        "load error",
                        (i = function (e) {
                          r.remove(),
                            (i = null),
                            e && t("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      T.head.appendChild(r[0]);
                  },
                  abort: function () {
                    i && i();
                  },
                };
            });
          var Qt,
            Yt = [],
            Jt = /(=)\?(?=&|$)|\?\?/;
          A.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Yt.pop() || A.expando + "_" + kt.guid++;
              return (this[e] = !0), e;
            },
          }),
            A.ajaxPrefilter("json jsonp", function (e, t, n) {
              var r,
                i,
                o,
                a =
                  !1 !== e.jsonp &&
                  (Jt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Jt.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (r = e.jsonpCallback =
                    b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Jt, "$1" + r))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function () {
                    return o || A.error(r + " was not called"), o[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (i = C[r]),
                  (C[r] = function () {
                    o = arguments;
                  }),
                  n.always(function () {
                    void 0 === i ? A(C).removeProp(r) : (C[r] = i),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(r)),
                      o && b(i) && i(o[0]),
                      (o = i = void 0);
                  }),
                  "script"
                );
            }),
            (v.createHTMLDocument =
              (((Qt = T.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Qt.childNodes.length)),
            (A.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (v.createHTMLDocument
                      ? (((r = (t =
                          T.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = T.location.href),
                        t.head.appendChild(r))
                      : (t = T)),
                  (r = !n && []),
                  (n = S.exec(e))
                    ? [t.createElement(n[1])]
                    : ((n = me([e], t, r)),
                      r && r.length && A(r).remove(),
                      A.merge([], n.childNodes)));
              var r;
            }),
            (A.fn.load = function (e, t, n) {
              var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
              return (
                -1 < s && ((r = bt(e.slice(s))), (e = e.slice(0, s))),
                b(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (i = "POST"),
                0 < a.length &&
                  A.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (o = arguments),
                        a.html(
                          r ? A("<div>").append(A.parseHTML(e)).find(r) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (A.expr.pseudos.animated = function (t) {
              return A.grep(A.timers, function (e) {
                return t === e.elem;
              }).length;
            }),
            (A.offset = {
              setOffset: function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = A.css(e, "position"),
                  l = A(e),
                  u = {};
                "static" === s && (e.style.position = "relative"),
                  (o = l.offset()),
                  (r = A.css(e, "top")),
                  (a = A.css(e, "left")),
                  (a =
                    ("absolute" === s || "fixed" === s) &&
                    -1 < (r + a).indexOf("auto")
                      ? ((i = (s = l.position()).top), s.left)
                      : ((i = parseFloat(r) || 0), parseFloat(a) || 0)),
                  null != (t = b(t) ? t.call(e, n, A.extend({}, o)) : t).top &&
                    (u.top = t.top - o.top + i),
                  null != t.left && (u.left = t.left - o.left + a),
                  "using" in t ? t.using.call(e, u) : l.css(u);
              },
            }),
            A.fn.extend({
              offset: function (t) {
                if (arguments.length)
                  return void 0 === t
                    ? this
                    : this.each(function (e) {
                        A.offset.setOffset(this, t, e);
                      });
                var e,
                  n = this[0];
                return n
                  ? n.getClientRects().length
                    ? ((e = n.getBoundingClientRect()),
                      (n = n.ownerDocument.defaultView),
                      {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };
                  if ("fixed" === A.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === A.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((i = A(e).offset()).top += A.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (i.left += A.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - i.top - A.css(r, "marginTop", !0),
                    left: t.left - i.left - A.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === A.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ne;
                });
              },
            }),
            A.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (t, i) {
                var o = "pageYOffset" === i;
                A.fn[t] = function (e) {
                  return B(
                    this,
                    function (e, t, n) {
                      var r;
                      return (
                        g(e)
                          ? (r = e)
                          : 9 === e.nodeType && (r = e.defaultView),
                        void 0 === n
                          ? r
                            ? r[i]
                            : e[t]
                          : void (r
                              ? r.scrollTo(
                                  o ? r.pageXOffset : n,
                                  o ? n : r.pageYOffset
                                )
                              : (e[t] = n))
                      );
                    },
                    t,
                    e,
                    arguments.length
                  );
                };
              }
            ),
            A.each(["top", "left"], function (e, n) {
              A.cssHooks[n] = Qe(v.pixelPosition, function (e, t) {
                if (t)
                  return (
                    (t = Ve(e, n)), Be.test(t) ? A(e).position()[n] + "px" : t
                  );
              });
            }),
            A.each({ Height: "height", Width: "width" }, function (a, s) {
              A.each(
                { padding: "inner" + a, content: s, "": "outer" + a },
                function (r, o) {
                  A.fn[o] = function (e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e),
                      i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return B(
                      this,
                      function (e, t, n) {
                        var r;
                        return g(e)
                          ? 0 === o.indexOf("outer")
                            ? e["inner" + a]
                            : e.document.documentElement["client" + a]
                          : 9 === e.nodeType
                          ? ((r = e.documentElement),
                            Math.max(
                              e.body["scroll" + a],
                              r["scroll" + a],
                              e.body["offset" + a],
                              r["offset" + a],
                              r["client" + a]
                            ))
                          : void 0 === n
                          ? A.css(e, t, i)
                          : A.style(e, t, n, i);
                      },
                      s,
                      n ? e : void 0,
                      n
                    );
                  };
                }
              );
            }),
            A.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                A.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            A.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            A.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, n) {
                A.fn[n] = function (e, t) {
                  return 0 < arguments.length
                    ? this.on(n, null, e, t)
                    : this.trigger(n);
                };
              }
            );
          var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (A.proxy = function (e, t) {
            var n, r;
            if (("string" == typeof t && ((r = e[t]), (t = e), (e = r)), b(e)))
              return (
                (n = s.call(arguments, 2)),
                ((r = function () {
                  return e.apply(t || this, n.concat(s.call(arguments)));
                }).guid = e.guid =
                  e.guid || A.guid++),
                r
              );
          }),
            (A.holdReady = function (e) {
              e ? A.readyWait++ : A.ready(!0);
            }),
            (A.isArray = Array.isArray),
            (A.parseJSON = JSON.parse),
            (A.nodeName = k),
            (A.isFunction = b),
            (A.isWindow = g),
            (A.camelCase = X),
            (A.type = h),
            (A.now = Date.now),
            (A.isNumeric = function (e) {
              var t = A.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (A.trim = function (e) {
              return null == e ? "" : (e + "").replace(Gt, "");
            }),
            void 0 ===
              (tn = function () {
                return A;
              }.apply(en, [])) || (Zt.exports = tn);
          var $t = C.jQuery,
            Kt = C.$;
          return (
            (A.noConflict = function (e) {
              return (
                C.$ === A && (C.$ = Kt),
                e && C.jQuery === A && (C.jQuery = $t),
                A
              );
            }),
            void 0 === e && (C.jQuery = C.$ = A),
            A
          );
        });
      },
      824: (e) => {
        var r = 36e5,
          i = 864e5;
        function o(e, t, n, r) {
          t = 1.5 * n <= t;
          return Math.round(e / n) + " " + r + (t ? "s" : "");
        }
        e.exports = function (e, t) {
          t = t || {};
          var n = typeof e;
          if ("string" == n && 0 < e.length)
            return (function (e) {
              if (!(100 < (e = String(e)).length)) {
                e =
                  /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                    e
                  );
                if (e) {
                  var t = parseFloat(e[1]);
                  switch ((e[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                      return 315576e5 * t;
                    case "weeks":
                    case "week":
                    case "w":
                      return 6048e5 * t;
                    case "days":
                    case "day":
                    case "d":
                      return t * i;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                      return t * r;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                      return 6e4 * t;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                      return 1e3 * t;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                      return t;
                    default:
                      return;
                  }
                }
              }
            })(e);
          if ("number" == n && isFinite(e))
            return (
              t.long
                ? function (e) {
                    var t = Math.abs(e);
                    if (i <= t) return o(e, t, i, "day");
                    if (r <= t) return o(e, t, r, "hour");
                    if (6e4 <= t) return o(e, t, 6e4, "minute");
                    if (1e3 <= t) return o(e, t, 1e3, "second");
                    return e + " ms";
                  }
                : function (e) {
                    var t = Math.abs(e);
                    if (i <= t) return Math.round(e / i) + "d";
                    if (r <= t) return Math.round(e / r) + "h";
                    if (6e4 <= t) return Math.round(e / 6e4) + "m";
                    if (1e3 <= t) return Math.round(e / 1e3) + "s";
                    return e + "ms";
                  }
            )(e);
          throw new Error(
            "val is not a non-empty string or a valid number. val=" +
              JSON.stringify(e)
          );
        };
      },
    },
    r = {};
  function T(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    t = r[e] = { exports: {} };
    return n[e].call(t.exports, t, t.exports, T), t.exports;
  }
  (T.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return T.d(t, { a: t }), t;
  }),
    (T.d = (e, t) => {
      for (var n in t)
        T.o(t, n) &&
          !T.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (T.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
  (() => {
    "use strict";
    var e = T(755),
      u = T.n(e);
    const a = {
        af: { label: "Afrikaans", direction: "ltr" },
        sq: { label: "Albanian", direction: "ltr" },
        ar: { label: "Arabic", direction: "rtl" },
        hy: { label: "Armenian", direction: "ltr" },
        az: { label: "Azerbaijani", direction: "ltr" },
        eu: { label: "Basque", direction: "ltr" },
        be: { label: "Belarusian", direction: "ltr" },
        bn: { label: "Bengali", direction: "ltr" },
        bg: { label: "Bulgarian", direction: "ltr" },
        ca: { label: "Catalan", direction: "ltr" },
        "zh-CN": { label: "Chinese (Simplified)", direction: "ltr" },
        "zh-TW": { label: "Chinese (Traditional)", direction: "ltr" },
        hr: { label: "Croatian", direction: "ltr" },
        cs: { label: "Czech", direction: "ltr" },
        da: { label: "Danish", direction: "ltr" },
        nl: { label: "Dutch", direction: "ltr" },
        en: { label: "English", direction: "ltr" },
        eo: { label: "Esperanto", direction: "ltr" },
        et: { label: "Estonian", direction: "ltr" },
        tl: { label: "Filipino", direction: "ltr" },
        fi: { label: "Finnish", direction: "ltr" },
        fr: { label: "French", direction: "ltr" },
        gl: { label: "Galician", direction: "ltr" },
        ka: { label: "Georgian", direction: "ltr" },
        de: { label: "German", direction: "ltr" },
        el: { label: "Greek", direction: "ltr" },
        gu: { label: "Gujarati", direction: "ltr" },
        ht: { label: "Haitian (Creole)", direction: "ltr" },
        iw: { label: "Hebrew", direction: "rtl" },
        hi: { label: "Hindi", direction: "ltr" },
        hu: { label: "Hungarian", direction: "ltr" },
        is: { label: "Icelandic", direction: "ltr" },
        id: { label: "Indonesian", direction: "ltr" },
        ga: { label: "Irish", direction: "ltr" },
        it: { label: "Italian", direction: "ltr" },
        ja: { label: "Japanese", direction: "ltr" },
        kn: { label: "Kannada", direction: "ltr" },
        ko: { label: "Korean", direction: "ltr" },
        la: { label: "Latin", direction: "ltr" },
        lv: { label: "Latvian", direction: "ltr" },
        lt: { label: "Lithuanian", direction: "ltr" },
        mk: { label: "Macedonian", direction: "ltr" },
        ms: { label: "Malay", direction: "ltr" },
        mt: { label: "Maltese", direction: "ltr" },
        no: { label: "Norwegian", direction: "ltr" },
        fa: { label: "Persian", direction: "rtl" },
        pl: { label: "Polish", direction: "ltr" },
        pt: { label: "Portuguese", direction: "ltr" },
        ro: { label: "Romanian", direction: "ltr" },
        ru: { label: "Russian", direction: "ltr" },
        sr: { label: "Serbian", direction: "ltr" },
        sk: { label: "Slovak", direction: "ltr" },
        sl: { label: "Slovenian", direction: "ltr" },
        es: { label: "Spanish", direction: "ltr" },
        sw: { label: "Swahili", direction: "ltr" },
        sv: { label: "Swedish", direction: "ltr" },
        ta: { label: "Tamil", direction: "ltr" },
        te: { label: "Telugu", direction: "ltr" },
        th: { label: "Thai", direction: "ltr" },
        tr: { label: "Turkish", direction: "ltr" },
        uk: { label: "Ukrainian", direction: "ltr" },
        ur: { label: "Urdu", direction: "rtl" },
        vi: { label: "Vietnamese", direction: "ltr" },
        cy: { label: "Welsh", direction: "ltr" },
        yi: { label: "Yiddish", direction: "rtl" },
      },
      n = {
        16: "shift",
        17: "ctrl",
        18: "alt",
        224: "meta",
        91: "command",
        93: "command",
        13: "Return",
      };
    function s(t) {
      let n;
      try {
        n = JSON.parse(t);
      } catch (e) {
        if (!e.toString().match(/SyntaxError/)) throw e;
        n = t;
      }
      return n;
    }
    function l(e, { sl: t, tl: n }, r) {
      n = a[n].direction;
      let i = "",
        o = "rtl" == n ? " rtl" : "";
      e instanceof Array
        ? e.forEach(function (e) {
            var t = e.pos
                ? "<strong>" +
                  e.pos +
                  (e.gender ? " (" + e.gender + ")" : "") +
                  "</strong>: "
                : "",
              e =
                e.meanings.slice(0, 5).join(", ") +
                (5 < e.meanings.length ? "..." : "");
            i =
              i + '<div class="pos_translation ' + o + '">' + t + e + "</div>";
          })
        : (i = '<div class="pos_translation ' + o + '">' + c(e) + "</div>");
      t = a[t];
      return (
        t &&
          r.show_from_lang &&
          (i += `
      <div class="from_lang ${o}">
        <strong>translated from:</strong>
        <span> ${t.label}</span>
      </div>
    `),
        i
      );
    }
    function c(e) {
      return e.replace(new RegExp("(<|>|&)", "g"), function (e, t) {
        switch (t) {
          case "<":
            return "&lt;";
          case ">":
            return "&gt;";
          case "&":
            return "&amp;";
        }
      });
    }
    const d = T(227)("transover"),
      t = T(253),
      r = T(348);
    let p, i;
    function o(e) {
      return u()(document.createElement(e));
    }
    function f(e) {
      u()(e).each(function () {
        const e = u()(this.shadowRoot.querySelector("main"));
        d(`removePopup: ${e}`), e.fadeOut("fast", () => this.remove());
      });
    }
    function h(e) {
      e += ".js";
      const t = document.createElement("script");
      (t.type = "text/javascript"),
        (t.src = chrome.runtime.getURL(e)),
        (t.async = !0),
        document.head.appendChild(t);
    }
    let g;
    function m(t, e) {
      ["transover-popup", "transover-type-and-translate-popup"].forEach((e) => {
        f(e);
      });
      const n = o("transover-popup");
      u()("body").append(n),
        n.on("transover-popup_content_updated", function () {
          var e = (function (e, t, n) {
            const r = {},
              i = Number(n.attr("outer-width")),
              o = Number(n.attr("outer-height"));
            e + 10 + i + 5 < u()(window).width()
              ? (r.x = e + 10)
              : 0 < e - 10 - i - 5
              ? (r.x = e - 10 - i)
              : (i + 10 < u()(window).width() ||
                  ((e = i - Number(n.attr("content-width"))),
                  n.attr("content-width", u()(window).width() - 10 - e),
                  n.attr(
                    "content-height",
                    Number(n.attr("content-height")) + 4
                  )),
                (r.x = 5));
            0 < t - 10 - o - 5
              ? (r.y = t - 10 - o)
              : t + 10 + o + 5 < u()(window).height()
              ? (r.y = t + 10)
              : (r.y = 5);
            return r;
          })(t.clientX, t.clientY, n);
          n.each(function () {
            u()(this.shadowRoot.querySelector("main")).hide();
          })
            .attr({ top: e.y, left: e.x })
            .each(function () {
              u()(this.shadowRoot.querySelector("main")).fadeIn("fast");
            });
        }),
        n.attr({ content: e, options: JSON.stringify(p) });
    }
    async function y() {
      var e, t;
      (p = await new Promise((t) => {
        chrome.runtime.sendMessage({ handler: "get_options" }, function (e) {
          t(JSON.parse(e));
        });
      })),
        (i =
          ((e = p),
          (t =
            0 <
            u().grep(e.except_urls, function (e) {
              return RegExp(e).test(window.location.href);
            }).length),
          (e =
            0 <
              u().grep(e.only_urls, function (e) {
                return RegExp(e).test(window.location.href);
              }).length || 0 === e.only_urls.length),
          t || !e)),
        chrome.runtime.sendMessage({ handler: "setIcon", disabled: i });
    }
    function v(r) {
      function i(i) {
        const e = u()(document.elementFromPoint(i.clientX, i.clientY)),
          o = "\\p{L}+(?:['’]\\p{L}+)*",
          n = {
            "line-height": e.css("line-height"),
            "font-size": "1em",
            "font-family": e.css("font-family"),
          },
          t = e.contents().filter(function () {
            return (
              this.nodeType == Node.TEXT_NODE &&
              new RegExp(o, "u").test(this.nodeValue)
            );
          });
        if (0 == t.length) return d("no text"), "";
        const r =
          (t,
          (a = i),
          u()(t).wrap("<transblock />"),
          "TRANSBLOCK" !=
          (a = document.elementFromPoint(a.clientX, a.clientY)).nodeName
            ? (u()(t).unwrap(), null)
            : ((a = a.childNodes[0]), u()(t).unwrap(), a));
        var a, s, l;
        return r
          ? ((s = r),
            (l = function () {
              let e = "";
              var t = (function e(t, n) {
                if (
                  (d("getHitText: '" + t.textContent + "'"),
                  new RegExp(o, "u").test(t.textContent))
                ) {
                  u()(t).replaceWith(function () {
                    return this.textContent.replace(
                      new RegExp(
                        "^(.{" +
                          Math.round(t.textContent.length / 2) +
                          "}(?:\\p{L}|['’](?=\\p{L}))*)(.*)",
                        "us"
                      ),
                      function (e, t, n) {
                        return (
                          "<transblock>" +
                          c(t) +
                          "</transblock><transblock>" +
                          c(n) +
                          "</transblock>"
                        );
                      }
                    );
                  }),
                    u()("transblock").css(n);
                  var r = document.elementFromPoint(i.clientX, i.clientY)
                    .childNodes[0];
                  return r.textContent == t.textContent ? r : e(r, n);
                }
                return null;
              })(r, n);
              return (
                t &&
                  (u()(t).replaceWith(function () {
                    return this.textContent.replace(
                      new RegExp("(<|>|&|" + o + ")", "ugs"),
                      function (e, t) {
                        switch (t) {
                          case "<":
                            return "&lt;";
                          case ">":
                            return "&gt;";
                          case "&":
                            return "&amp;";
                          default:
                            return "<transover>" + t + "</transover>";
                        }
                      }
                    );
                  }),
                  u()("transover").css(n),
                  "TRANSOVER" !=
                  (t = document.elementFromPoint(i.clientX, i.clientY)).nodeName
                    ? d("missed!")
                    : ((e = u()(t).text()), d("got it: '" + e + "'"))),
                e
              );
            }),
            u()(s).wrap("<transwrapper />"),
            (s = l(s)),
            u()("transwrapper").replaceWith(c(u()("transwrapper").text())),
            s)
          : (d("hit between lines"), "");
      }
      const o = window.getSelection();
      var a = document.elementFromPoint(r.clientX, r.clientY);
      if (
        a &&
        !(
          /INPUT|TEXTAREA/.test(a.nodeName) ||
          a.isContentEditable ||
          0 <
            u()(a)
              .parents()
              .filter(function () {
                return this.isContentEditable;
              }).length
        )
      ) {
        let t = "",
          n = p.translate_by;
        if (o.toString()) {
          if (((n = "select"), p.selection_key_only))
            return void d('Skip because "selection_key_only"');
          d("Got selection: " + o.toString());
          let e = o.getRangeAt(0).commonAncestorContainer;
          for (; e.nodeType != Node.ELEMENT_NODE; ) e = e.parentNode;
          (u()(a).is(e) || u().contains(e, a)) && o.containsNode(a, !0)
            ? (t = o.toString())
            : "point" == p.translate_by && (t = i(r));
        } else t = i(r);
        "" != t &&
          (chrome.runtime.sendMessage({
            handler: "trackEvent",
            event: { ec: "translate", ea: n, el: "characters", ev: t.length },
          }),
          chrome.runtime.sendMessage(
            { handler: "translate", word: t },
            function (e) {
              var t;
              d("response: ", e),
                e.error
                  ? m(
                      r,
                      `
    <div class="pos_translation">
      <strong class="red">Error!</strong> ${e.message}
    </div>
  `
                    )
                  : (t = s(e.translation))
                  ? ((g = t), m(r, l(t, e, p)))
                  : d("skipping empty translation");
            }
          ));
      }
    }
    function b(e, t) {
      p && ((p.word_key_only && !x) || i || t());
    }
    document.addEventListener(
      "visibilitychange",
      function () {
        document.hidden ||
          y().catch((e) => {
            throw e;
          });
      },
      !1
    ),
      u()(document).on("mousestop", function (e) {
        b(0, function () {
          window.getSelection().toString()
            ? p.selection_key_only || v(e)
            : "point" == p.translate_by && v(e);
        });
      }),
      u()(document).click(function (e) {
        return (
          b(0, function () {
            "click" == p.translate_by &&
              (0 < u()(e.target).closest("a").length || v(e));
          }),
          !0
        );
      });
    let x = !1;
    u()(document)
      .keydown(function (e) {
        var t;
        p &&
          (n[e.keyCode] == p.popup_show_trigger &&
            ((x = !0),
            (t = window.getSelection().toString()),
            p.selection_key_only &&
              t &&
              (d("Got selection_key_only"),
              chrome.runtime.sendMessage(
                { handler: "translate", word: t },
                function (e) {
                  d("response: ", e);
                  var t = s(e.translation);
                  t
                    ? m({ clientX: C.x, clientY: C.y }, l((g = t), e, p))
                    : d("skipping empty translation");
                }
              ))),
          !e.originalEvent.repeat &&
            n[e.keyCode] == p.tts_key &&
            p.tts &&
            0 < u()("transover-popup").length &&
            (d("tts"), chrome.runtime.sendMessage({ handler: "tts" })),
          27 == e.keyCode && f("transover-type-and-translate-popup"));
      })
      .keyup(function (e) {
        p && n[e.keyCode] == p.popup_show_trigger && (x = !1);
      }),
      u()(document).mousemove(function (e) {
        if (
          ((t = e),
          (n = parseInt(C.x) - 5),
          (r = parseInt(C.x) + 5),
          (i = parseInt(C.y) - 5),
          (o = parseInt(C.y) + 5),
          t.clientX > r || t.clientX < n || t.clientY > o || t.clientY < i)
        ) {
          const a = new (u().Event)("mousemove_without_noise");
          (a.clientX = e.clientX),
            (a.clientY = e.clientY),
            u()(document).trigger(a);
        }
        var t, n, r, i, o;
      });
    let w;
    const C = { x: 0, y: 0 };
    u()(document).scroll(function () {
      f("transover-popup");
    }),
      u()(document).on("mousemove_without_noise", function (t) {
        if ((f("transover-popup"), clearTimeout(w), p)) {
          let e = p.delay;
          window.getSelection().toString()
            ? p.selection_key_only && (e = 200)
            : p.word_key_only && (e = 200),
            (w = setTimeout(function () {
              const e = new (u().Event)("mousestop");
              (C.x = e.clientX = t.clientX),
                (C.y = e.clientY = t.clientY),
                u()(document).trigger(e);
            }, e));
        }
      }),
      chrome.runtime.onMessage.addListener(function (e) {
        if (window == window.top)
          if ("open_type_and_translate" == e)
            0 == u()("transover-type-and-translate-popup").length
              ? chrome.runtime.sendMessage(
                  { handler: "get_last_tat_sl_tl" },
                  function (e) {
                    const t = o("transover-type-and-translate-popup"),
                      n = u().extend({}, a);
                    e.last_sl && (n[e.last_sl].selected_sl = !0),
                      (n[e.last_tl || p.target_lang].selected_tl = !0),
                      t.attr("data-languages", JSON.stringify(n)),
                      t.attr("data-disable_on_this_page", i),
                      u()("body").append(t),
                      t.each(function () {
                        u()(this.shadowRoot.querySelector("main"))
                          .hide()
                          .fadeIn("fast");
                      });
                  }
                )
              : f("transover-type-and-translate-popup");
          else if (
            "copy-translation-to-clipboard" == e &&
            (d("received copy-translation-to-clipboard"),
            0 < u()("transover-popup").length)
          ) {
            let e;
            (e = Array.isArray(g)
              ? g
                  .map((e) => {
                    let t = "";
                    return (
                      e.pos && (t = e.pos + ": "),
                      (t += e.meanings.slice(0, 5).join(", ")),
                      t
                    );
                  })
                  .join("; ")
              : g),
              (function (e) {
                const t = document.createElement("input");
                (t.style.position = "fixed"),
                  (t.style.opacity = 0),
                  (t.value = e),
                  document.body.appendChild(t),
                  t.select(),
                  document.execCommand("copy"),
                  document.body.removeChild(t);
              })(e);
          }
      }),
      u()(function () {
        u()(t).appendTo(document.documentElement),
          u()(r).appendTo(document.documentElement),
          h("popup"),
          h("tat_popup");
      }),
      y().catch((e) => {
        throw e;
      }),
      window.addEventListener("message", function (e) {
        e.source == window &&
          ("transoverTranslate" == e.data.type
            ? chrome.runtime.sendMessage(
                {
                  handler: "translate",
                  word: e.data.text,
                  sl: e.data.sl,
                  tl: e.data.tl,
                },
                function (e) {
                  d("tat response: ", e);
                  var t = s(e.translation);
                  t
                    ? m(
                        { clientX: u()(window).width(), clientY: 0 },
                        l((g = t), e, p)
                      )
                    : d("tat skipping empty translation");
                }
              )
            : "toggle_disable_on_this_page" === e.data.type
            ? ((i = e.data.disable_on_this_page),
              chrome.runtime.sendMessage({
                handler: "toggle_disable_on_this_page",
                disable_on_this_page: i,
                current_url: window.location.origin,
              }),
              chrome.runtime.sendMessage({ handler: "setIcon", disabled: i }),
              f("transover-type-and-translate-popup"))
            : "tat_close" === e.data.type
            ? f("transover-type-and-translate-popup")
            : "transoverTrackEvent" === e.data.type &&
              chrome.runtime.sendMessage({
                handler: "trackEvent",
                event: e.data.event,
              }));
      });
  })();
})();
