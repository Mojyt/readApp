;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-zhichizenglianggengxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M871.424 535.552L547.84 686.592c-30.72 13.824-43.52 13.824-71.68 0l-323.584-151.04c-17.408-9.216-22.016-44.544-22.016-63.488 21.504 12.8 51.712 27.136 50.688 26.112l330.24 147.968 330.24-147.968c0.512 0 30.208-15.36 50.688-26.112 1.024 19.456-5.12 55.808-20.992 63.488z" fill="#26A8BB" ></path>' +
    '' +
    '<path d="M871.424 684.544L547.84 835.072c-30.72 13.824-43.52 13.824-71.68 0l-323.584-151.04c-17.408-9.216-22.016-44.544-22.016-63.488 21.504 12.8 51.712 27.136 50.688 26.112l330.24 147.968 330.24-147.968c0.512 0 30.208-15.36 50.688-26.112 1.024 19.968-5.12 55.808-20.992 64zM871.424 409.088L547.84 541.696c-30.72 12.288-43.52 12.288-71.68 0L152.576 409.088c-25.6-12.288-24.576-50.688 0-65.536L476.16 188.416c28.672-12.8 46.592-13.824 71.68 0l323.584 155.648c24.576 12.288 23.552 55.296 0 65.024z" fill="#26A8BB" ></path>' +
    '' +
    '<path d="M512 214.528L181.76 376.32 512 503.296l330.24-126.976L512 214.528z" fill="#FFFFFF" ></path>' +
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