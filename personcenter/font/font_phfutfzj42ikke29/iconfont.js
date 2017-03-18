;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-37qingchuhuancunicon0101" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M723.478261 532.127536 650.666667 532.127536c-10.62029 0-19.246377-8.626087-19.246377-19.246377l0-14.515942c0-10.62029 8.626087-19.246377 19.246377-19.246377l72.811594 0c10.666667 0 19.246377 8.626087 19.246377 19.246377l0 14.515942C742.724638 523.501449 734.098551 532.127536 723.478261 532.127536L723.478261 532.127536zM519.234783 736.324638l-14.515942 0c-10.666667 0-19.246377-8.626087-19.246377-19.246377l0-72.811594c0-10.62029 8.626087-19.246377 19.246377-19.246377l14.515942 0c10.62029 0 19.246377 8.626087 19.246377 19.246377l0 72.811594C538.481159 727.698551 529.855072 736.324638 519.234783 736.324638L519.234783 736.324638zM519.234783 386.226087l-14.515942 0c-10.666667 0-19.246377-8.626087-19.246377-19.246377l0-72.811594c0-10.62029 8.626087-19.246377 19.246377-19.246377l14.515942 0c10.62029 0 19.246377 8.626087 19.246377 19.246377l0 72.811594C538.481159 377.6 529.855072 386.226087 519.234783 386.226087L519.234783 386.226087zM373.333333 532.127536 300.521739 532.127536c-10.62029 0-19.246377-8.626087-19.246377-19.246377l0-14.515942c0-10.62029 8.626087-19.246377 19.246377-19.246377l72.811594 0c10.62029 0 19.246377 8.626087 19.246377 19.246377l0 14.515942C392.57971 523.501449 383.953623 532.127536 373.333333 532.127536L373.333333 532.127536zM432.695652 622.376812l-51.478261 51.478261c-7.513043 7.513043-19.710145 7.513043-27.223188 0l-10.249275-10.249275c-7.513043-7.513043-7.513043-19.710145 0-27.223188l51.478261-51.478261c7.513043-7.513043 19.710145-7.513043 27.223188 0l10.249275 10.249275C440.208696 602.713043 440.208696 614.863768 432.695652 622.376812L432.695652 622.376812zM680.255072 374.863768l-51.478261 51.478261c-7.513043 7.513043-19.710145 7.513043-27.223188 0L591.304348 416.092754c-7.513043-7.513043-7.513043-19.710145 0-27.223188l51.478261-51.478261c7.513043-7.513043 19.710145-7.513043 27.223188 0l10.249275 10.249275C687.814493 355.153623 687.814493 367.304348 680.255072 374.863768L680.255072 374.863768zM432.695652 416.046377l-10.249275 10.249275c-7.513043 7.513043-19.710145 7.513043-27.223188 0l-51.478261-51.478261c-7.513043-7.513043-7.513043-19.710145 0-27.223188l10.249275-10.249275c7.513043-7.513043 19.710145-7.513043 27.223188 0l51.478261 51.478261C440.208696 396.336232 440.208696 408.57971 432.695652 416.046377L432.695652 416.046377zM680.255072 663.605797l-10.249275 10.249275c-7.513043 7.513043-19.710145 7.513043-27.223188 0l-51.478261-51.478261c-7.513043-7.513043-7.513043-19.710145 0-27.223188l10.249275-10.249275c7.513043-7.513043 19.710145-7.513043 27.223188 0l51.478261 51.478261C687.814493 643.895652 687.814493 656.092754 680.255072 663.605797L680.255072 663.605797z"  ></path>' +
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