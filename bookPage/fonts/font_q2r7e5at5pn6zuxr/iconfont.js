;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-banbengengxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M994.716 577.957 560.262 773.514c-41.572 18.161-58.122 18.161-96.522 0L29.284 577.957C6.244 565.7 0 520.297 0 495.536c29.036 16.574 69.766 35.082 68.28 34.139L512 734.512l443.72-204.837c0.793-0.198 40.334-20.146 68.28-34.139C1024 520.892 1016.121 567.933 994.716 577.957L994.716 577.957zM994.716 373.071 560.262 568.678c-41.572 18.111-58.122 18.111-96.522 0L29.284 373.071c-34.091-18.112-33.05-75.226 0-96.563L463.739 46.811c38.4-19.204 62.383-20.246 96.522 0l434.454 229.696C1027.766 294.669 1026.676 358.185 994.716 373.071L994.716 373.071zM512 85.814 68.28 324.789 512 512.06l443.72-187.271L512 85.814 512 85.814zM512 85.814C514.378 86.558 515.221 89.535 512 85.814L512 85.814zM512 939.397l443.72-204.886c0.793-0.149 40.334-20.146 68.28-34.14 0 25.357-7.879 72.449-29.284 82.422L560.262 978.401c-41.572 18.111-58.122 18.111-96.522 0L29.284 782.793C6.244 770.537 0 725.183 0 700.372c29.036 16.624 69.766 35.083 68.28 34.14L512 939.397 512 939.397z"  ></path>' +
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