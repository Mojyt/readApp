;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xingbie" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M353.715361 557.379818c94.614617-13.115312 167.482118-94.279401 167.482118-192.497586 0-107.394713-87.030363-194.425076-194.425076-194.425076-107.352811 0-194.425076 87.030363-194.425076 194.425076 0 98.218185 72.867501 179.382274 167.52402 192.497586l0 93.60897L173.95597 650.988788l0 53.76021L299.871348 704.748997l0 125.95728 53.802111 0L353.673459 704.790899l125.915378 0 0-53.76021L353.715361 651.03069 353.715361 557.379818zM186.233243 364.882233c0-77.686226 62.894836-140.581062 140.53916-140.581062 77.686226 0 140.581062 62.936738 140.581062 140.581062s-62.894836 140.581062-140.581062 140.581062C249.128079 505.463295 186.233243 442.526557 186.233243 364.882233z"  ></path>' +
    '' +
    '<path d="M502.760619 661.254767c0.041902 107.394713 87.114166 194.425076 194.550782 194.383174 107.394713-0.041902 194.383174-87.114166 194.341272-194.50888-0.041902-98.218185-72.951305-179.340372-167.565922-192.455684l-0.083804-197.274409 51.4137 51.455602 38.046976-38.046976L723.919142 195.346919l0 0 0 0L696.976185 168.445863l-116.277928 116.403634 38.046976 38.005074 51.455602-51.497504 0.083804 197.274409C575.586218 481.830592 502.718717 563.036582 502.760619 661.254767zM837.766757 661.129061c0.083804 77.686226-62.852934 140.622964-140.53916 140.664866-77.686226 0.041902-140.581062-62.894836-140.622964-140.53916 0-77.644324 62.852934-140.581062 140.53916-140.622964C774.788117 520.547999 837.724855 583.484737 837.766757 661.129061z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-nan01fuzhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M832 128l-256 0c-19.2 0-32 12.8-32 32s12.8 32 32 32l192 0-182.4 182.4C537.6 339.2 480 320 416 320c-160 0-288 128-288 288s128 288 288 288c160 0 288-128 288-288 0-64-19.2-121.6-54.4-169.6L832 252.8l0 192c0 19.2 12.8 32 32 32 19.2 0 32-12.8 32-32l0-256C896 153.6 867.2 128 832 128zM416 828.8c-124.8 0-224-99.2-224-224s99.2-224 224-224 224 99.2 224 224S540.8 828.8 416 828.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-nv" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M605.790106 64.007803c-193.494922 0-350.918301 157.753907-350.918301 351.660198 0 79.201853 26.78197 156.182109 75.650981 218.073714l-90.421382 91.176582-105.359606-106.573247c-7.522324-7.528464-17.509792-11.67183-28.132734-11.67183s-20.617573 4.149507-28.132734 11.68104c-7.522324 7.528464-11.668761 17.546631-11.668761 28.205389s4.14132 20.675902 11.619642 28.167526L183.984315 781.505084 77.641311 888.730177c-15.498996 15.550161-15.498996 40.853453 0.00614 56.409754 7.522324 7.537673 17.522072 11.69332 28.152177 11.69332 10.635221 0 20.635993-4.155646 28.182876-11.718903l106.031918-106.926288L346.369705 945.783591c7.522324 7.531534 17.522072 11.68104 28.158317 11.68104 10.641361 0 20.642133-4.149507 28.152177-11.68104 7.522324-7.525394 11.668761-17.540492 11.668761-28.205389 0-10.654664-4.14132-20.672832-11.619642-28.164456L296.137651 781.595134l90.514503-91.281983c62.045101 49.742914 139.389654 77.007885 219.137952 77.007885 193.494922 0 350.918301-157.750837 350.918301-351.654059C956.707384 221.76171 799.285029 64.007803 605.790106 64.007803zM877.544417 415.666978c0 150.159952-121.910561 272.324292-271.755334 272.324292S334.034772 565.827953 334.034772 415.666978c0-150.163021 121.910561-272.330432 271.755334-272.330432S877.544417 265.503956 877.544417 415.666978z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)