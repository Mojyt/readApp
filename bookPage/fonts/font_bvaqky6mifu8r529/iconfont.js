;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-bianji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M829.873698 268.679275c-30.556946-28.325116-61.117986-56.657394-91.674932-84.98251-13.116739-12.216229-23.614837-28.788673-50.062186-28.3947-4.145413 1.585101-8.91709 1.110287-12.68388 2.489704-4.885264 1.780553-8.363482 5.196349-12.68388 7.04751-26.400277 24.659633-52.812833 49.329499-79.21311 73.993225 59.699684 55.543014 119.419833 111.102401 179.119517 166.642344 20.61962-19.271926 41.24231-38.555108 61.857836-57.82601 10.45205-9.734712 22.547529-17.752316 26.700105-33.370015 0.073678-2.972705 0.148379-5.940292 0.226151-8.912997C851.459319 286.026362 840.200904 278.29733 829.873698 268.679275zM809.624515 305.987996c0 0.066515 0 0.1361 0 0.206708-15.648398 14.507412-31.30089 29.017894-46.949288 43.525306-39.750329-37.027311-79.512938-74.066903-119.264291-111.095237 15.648398-14.647605 31.30089-29.29521 46.949288-43.942815 39.750329 36.96182 79.512938 73.930803 119.264291 110.88853C809.624515 305.71068 809.624515 305.847803 809.624515 305.987996z"  ></path>' +
    '' +
    '<path d="M693.029006 404.850631c-19.578917-18.235316-39.162952-36.478819-58.741869-54.717206-20.171412-18.788925-40.35101-37.585013-60.525492-56.377008-7.877411-7.335059-14.585183-18.659989-30.039153-18.651802-3.576455 1.355881-6.864338 1.246387-9.78997 2.902096-4.678556 2.645247-8.843412 7.686053-12.235672 11.605316-5.340635 5.321192-10.68127 10.642384-16.022928 15.960507-14.016225 13.953803-28.036543 27.9117-42.056861 41.869596-65.485457 65.072041-208.901821 208.080106-274.386254 273.155217 0 36.544311 0 73.100902 0 109.645213-0.004093 16.833387-2.675946 34.857902 7.565303 42.48972 10.443863 7.783267 29.715789 5.3918 48.059576 5.3918 37.674041 0 75.360362 0 113.038496 0 71.788-66.322521 221.516116-210.57288 293.304116-276.891308 16.833387-15.542998 33.677007-31.091112 50.510394-46.63411 5.476735-5.103228 15.769149-11.083429 13.794168-22.594601C713.321168 419.279249 701.124382 412.388305 693.029006 404.850631zM336.974731 738.742141c-35.153638 0-105.4691 0-105.4691 0l0-98.246605c0 0 233.529731-236.408291 311.328631-315.64903 0.814552-0.689708 1.632173-1.379417 2.450818-2.072195 39.672558 37.027311 79.361489 74.066903 119.042233 111.098307C581.189825 509.513366 420.11529 663.093207 336.974731 738.742141z"  ></path>' +
    '' +
    '<path d="M208.205972 817.297264c141.570319 0 361.099175 0 502.668471 0 27.113521 0 54.234205 0 81.343633 0 11.667737-0.004093 27.701922-1.690502 35.20071 2.692319 5.223978 3.054569 11.58178 10.085706 9.871835 19.485797-3.564175 19.630083-20.697391 17.202801-43.99705 17.202801-29.474288 0-214.779691 0-244.249887 0-96.79044 0-115.699092 0-212.485439 0-29.903054 0-59.813271 0-89.715301 0-9.516748 0-19.033495 0-28.547173 0-4.331655 0-9.661034 0.534166-13.307074-0.416486-10.635221-2.765997-20.766976-16.154935-13.093203-28.812209C196.371436 820.067354 199.818955 820.546262 208.205972 817.297264z"  ></path>' +
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