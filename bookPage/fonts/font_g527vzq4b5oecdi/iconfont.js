;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jinlingyingcaiwangtubiao74" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M792.0128 492.8 531.2 492.8 531.2 232.0128c0-10.5984-8.6016-19.2-19.2-19.2s-19.2 8.6016-19.2 19.2l0 272.6144c0 1.3056 0.4864 2.4576 0.7424 3.6864-0.256 1.2288-0.7424 2.3808-0.7424 3.6864 0 10.5984 8.6016 19.2 19.2 19.2l280.0128 0c10.5984 0 19.2-8.6016 19.2-19.2S802.6112 492.8 792.0128 492.8z"  ></path>' +
    '' +
    '<path d="M512 51.2C257.92 51.2 51.2256 257.92 51.2256 512.0256 51.2256 766.1056 257.92 972.8 512 972.8s460.7744-206.6944 460.7744-460.7744C972.7744 257.92 766.08 51.2 512 51.2zM512 934.4c-232.9088 0-422.3744-189.4656-422.3744-422.3744C89.6256 279.0912 279.0912 89.6 512 89.6s422.3744 189.4912 422.3744 422.4256C934.3744 744.9344 744.9088 934.4 512 934.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yanjing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.99755 720.512181c152.428084 0 359.182696-155.772939 373.549761-198.595598-5.605977-46.913112-200.197479-216.570241-373.549761-216.570241-164.905002 0-373.649498 135.134576-373.668959 217.605321C142.667172 563.578881 342.982634 720.512181 511.99755 720.512181M511.99755 762.046766C338.835014 762.046766 96.831712 599.074482 96.831712 523.306826c0-120.0657 243.451928-259.501151 415.165839-259.501151 187.905441 0 415.170704 182.613273 415.170704 259.501151C927.168254 587.282348 678.769589 762.046766 511.99755 762.046766L511.99755 762.046766 511.99755 762.046766 511.99755 762.046766zM511.99755 762.046766"  ></path>' +
    '' +
    '<path d="M511.99755 616.720721c57.209184 0 103.795109-46.587141 103.795109-103.795109s-46.585925-103.790243-103.795109-103.790243S408.207307 455.716429 408.207307 512.925613 454.788366 616.720721 511.99755 616.720721M511.99755 658.256523c-80.271655 0-145.329694-65.059255-145.329694-145.33091 0-80.271655 65.058038-145.329694 145.329694-145.329694 80.276521 0 145.329694 65.058038 145.329694 145.329694C657.327244 593.197268 592.274071 658.256523 511.99755 658.256523L511.99755 658.256523 511.99755 658.256523 511.99755 658.256523zM511.99755 658.256523"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.011256 890.104477c-5.384637 0-10.768251-1.856277-15.129582-5.567809l-333.270363-283.751552c-0.473791-0.403183-0.931209-0.825808-1.372254-1.26583l-23.506367-23.502273c-48.924269-48.916083-75.866898-113.953332-75.866898-183.133947 0-69.179592 26.943652-134.216841 75.867922-183.130877 48.90892-48.916083 113.946168-75.857688 183.126784-75.857688s134.218888 26.940582 183.137017 75.858712l7.009647 7.006578 7.000438-7.003508c48.91506-48.921199 113.953332-75.862805 183.139064-75.862805 69.183685 0 134.226051 26.940582 183.145204 75.858712 48.90892 48.91506 75.843362 113.951285 75.843362 183.127807s-26.934442 134.214794-75.842339 183.131901l-23.527856 23.51046c-0.438998 0.437975-0.89437 0.859577-1.366114 1.260713L527.139815 884.535645C522.780531 888.2482 517.39487 890.104477 512.011256 890.104477zM194.579627 565.852512l317.430606 270.264377 317.41935-270.2654 22.861684-22.846334c82.760912-82.776262 82.760912-217.470987-0.007163-300.248272-40.101323-40.101323-93.422739-62.187341-150.140509-62.187341-56.716746 0-110.034069 22.084994-150.130276 62.187341l-23.500227 23.508413c-4.375657 4.377704-10.311857 6.837732-16.500812 6.838755-6.189979 0.001023-12.127202-2.456958-16.503882-6.833639l-23.514553-23.511483c-40.104393-40.104393-93.422739-62.190411-150.136416-62.190411-56.712653 0-110.026906 22.084994-150.123113 62.187341-40.10951 40.101323-62.196551 93.4166-62.196551 150.127206 0 56.710606 22.088064 110.026906 62.194504 150.126182L194.579627 565.852512z"  ></path>' +
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