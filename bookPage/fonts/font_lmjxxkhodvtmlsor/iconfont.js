;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-x" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.527233 62.969147c-248.320599 0-449.613114 201.291492-449.613114 449.613114 0 248.315482 201.291492 449.606974 449.613114 449.606974 248.315482 0 449.606974-201.291492 449.606974-449.606974C961.134207 264.260639 759.842715 62.969147 511.527233 62.969147zM511.527233 917.227208c-223.481887 0-404.651087-181.169199-404.651087-404.644947 0-223.481887 181.169199-404.651087 404.651087-404.651087 223.475747 0 404.644947 181.169199 404.644947 404.651087C916.172179 736.058009 735.00298 917.227208 511.527233 917.227208z"  ></path>' +
    '' +
    '<path d="M702.877305 321.206606c-7.973602-7.971555-20.98187-7.971555-28.954449 0L511.503696 483.624742 349.126492 321.247538c-7.973602-7.973602-21.021779-7.973602-28.954449 0-7.971555 7.971555-7.971555 20.98187 0 28.952402l162.378228 162.378228-162.378228 162.378228c-7.971555 7.973602-7.971555 20.98187 0 28.954449 7.973602 7.971555 20.980847 7.971555 28.954449 0l162.378228-162.378228L673.922856 703.950753c7.972579 7.973602 20.980847 7.973602 28.954449 0 7.971555-7.971555 7.971555-20.98187 0-28.953426L540.459169 512.579191l162.418137-162.418137C710.84886 342.188476 710.84886 329.179185 702.877305 321.206606z"  ></path>' +
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