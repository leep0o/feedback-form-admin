/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/theme.js":
/*!*******************************!*\
  !*** ./resources/js/theme.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function ($) {\n  \"use strict\"; // Start of use strict\n  // Toggle the side navigation\n\n  $(\"#sidebarToggle, #sidebarToggleTop\").on('click', function (e) {\n    $(\"body\").toggleClass(\"sidebar-toggled\");\n    $(\".sidebar\").toggleClass(\"toggled\");\n\n    if ($(\".sidebar\").hasClass(\"toggled\")) {\n      $('.sidebar .collapse').collapse('hide');\n    }\n\n    ;\n  }); // Close any open menu accordions when window is resized below 768px\n\n  $(window).resize(function () {\n    if ($(window).width() < 768) {\n      $('.sidebar .collapse').collapse('hide');\n    }\n\n    ;\n  }); // Prevent the content wrapper from scrolling when the fixed side navigation hovered over\n\n  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {\n    if ($(window).width() > 768) {\n      var e0 = e.originalEvent,\n          delta = e0.wheelDelta || -e0.detail;\n      this.scrollTop += (delta < 0 ? 1 : -1) * 30;\n      e.preventDefault();\n    }\n  }); // Scroll to top button appear\n\n  $(document).on('scroll', function () {\n    var scrollDistance = $(this).scrollTop();\n\n    if (scrollDistance > 100) {\n      $('.scroll-to-top').fadeIn();\n    } else {\n      $('.scroll-to-top').fadeOut();\n    }\n  }); // Smooth scrolling using jQuery easing\n\n  $(document).on('click', 'a.scroll-to-top', function (e) {\n    var $anchor = $(this);\n    $('html, body').stop().animate({\n      scrollTop: $($anchor.attr('href')).offset().top\n    }, 1000, 'easeInOutExpo');\n    e.preventDefault();\n  });\n})(jQuery); // End of use strict//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdGhlbWUuanM/YmM0ZCJdLCJuYW1lcyI6WyIkIiwib24iLCJlIiwidG9nZ2xlQ2xhc3MiLCJoYXNDbGFzcyIsImNvbGxhcHNlIiwid2luZG93IiwicmVzaXplIiwid2lkdGgiLCJlMCIsIm9yaWdpbmFsRXZlbnQiLCJkZWx0YSIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJzY3JvbGxUb3AiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50Iiwic2Nyb2xsRGlzdGFuY2UiLCJmYWRlSW4iLCJmYWRlT3V0IiwiJGFuY2hvciIsInN0b3AiLCJhbmltYXRlIiwiYXR0ciIsIm9mZnNldCIsInRvcCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQyxVQUFTQSxDQUFULEVBQVk7QUFDWCxlQURXLENBQ0c7QUFFZDs7QUFDQUEsR0FBQyxDQUFDLG1DQUFELENBQUQsQ0FBdUNDLEVBQXZDLENBQTBDLE9BQTFDLEVBQW1ELFVBQVNDLENBQVQsRUFBWTtBQUM3REYsS0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVRyxXQUFWLENBQXNCLGlCQUF0QjtBQUNBSCxLQUFDLENBQUMsVUFBRCxDQUFELENBQWNHLFdBQWQsQ0FBMEIsU0FBMUI7O0FBQ0EsUUFBSUgsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjSSxRQUFkLENBQXVCLFNBQXZCLENBQUosRUFBdUM7QUFDckNKLE9BQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCSyxRQUF4QixDQUFpQyxNQUFqQztBQUNEOztBQUFBO0FBQ0YsR0FORCxFQUpXLENBWVg7O0FBQ0FMLEdBQUMsQ0FBQ00sTUFBRCxDQUFELENBQVVDLE1BQVYsQ0FBaUIsWUFBVztBQUMxQixRQUFJUCxDQUFDLENBQUNNLE1BQUQsQ0FBRCxDQUFVRSxLQUFWLEtBQW9CLEdBQXhCLEVBQTZCO0FBQzNCUixPQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QkssUUFBeEIsQ0FBaUMsTUFBakM7QUFDRDs7QUFBQTtBQUNGLEdBSkQsRUFiVyxDQW1CWDs7QUFDQUwsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJDLEVBQTdCLENBQWdDLGlDQUFoQyxFQUFtRSxVQUFTQyxDQUFULEVBQVk7QUFDN0UsUUFBSUYsQ0FBQyxDQUFDTSxNQUFELENBQUQsQ0FBVUUsS0FBVixLQUFvQixHQUF4QixFQUE2QjtBQUMzQixVQUFJQyxFQUFFLEdBQUdQLENBQUMsQ0FBQ1EsYUFBWDtBQUFBLFVBQ0VDLEtBQUssR0FBR0YsRUFBRSxDQUFDRyxVQUFILElBQWlCLENBQUNILEVBQUUsQ0FBQ0ksTUFEL0I7QUFFQSxXQUFLQyxTQUFMLElBQWtCLENBQUNILEtBQUssR0FBRyxDQUFSLEdBQVksQ0FBWixHQUFnQixDQUFDLENBQWxCLElBQXVCLEVBQXpDO0FBQ0FULE9BQUMsQ0FBQ2EsY0FBRjtBQUNEO0FBQ0YsR0FQRCxFQXBCVyxDQTZCWDs7QUFDQWYsR0FBQyxDQUFDZ0IsUUFBRCxDQUFELENBQVlmLEVBQVosQ0FBZSxRQUFmLEVBQXlCLFlBQVc7QUFDbEMsUUFBSWdCLGNBQWMsR0FBR2pCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsU0FBUixFQUFyQjs7QUFDQSxRQUFJRyxjQUFjLEdBQUcsR0FBckIsRUFBMEI7QUFDeEJqQixPQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmtCLE1BQXBCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xsQixPQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQm1CLE9BQXBCO0FBQ0Q7QUFDRixHQVBELEVBOUJXLENBdUNYOztBQUNBbkIsR0FBQyxDQUFDZ0IsUUFBRCxDQUFELENBQVlmLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGlCQUF4QixFQUEyQyxVQUFTQyxDQUFULEVBQVk7QUFDckQsUUFBSWtCLE9BQU8sR0FBR3BCLENBQUMsQ0FBQyxJQUFELENBQWY7QUFDQUEsS0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnFCLElBQWhCLEdBQXVCQyxPQUF2QixDQUErQjtBQUM3QlIsZUFBUyxFQUFHZCxDQUFDLENBQUNvQixPQUFPLENBQUNHLElBQVIsQ0FBYSxNQUFiLENBQUQsQ0FBRCxDQUF3QkMsTUFBeEIsR0FBaUNDO0FBRGhCLEtBQS9CLEVBRUcsSUFGSCxFQUVTLGVBRlQ7QUFHQXZCLEtBQUMsQ0FBQ2EsY0FBRjtBQUNELEdBTkQ7QUFRRCxDQWhERCxFQWdER1csTUFoREgsRSxDQWdEWSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy90aGVtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XG4gIFwidXNlIHN0cmljdFwiOyAvLyBTdGFydCBvZiB1c2Ugc3RyaWN0XG5cbiAgLy8gVG9nZ2xlIHRoZSBzaWRlIG5hdmlnYXRpb25cbiAgJChcIiNzaWRlYmFyVG9nZ2xlLCAjc2lkZWJhclRvZ2dsZVRvcFwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJzaWRlYmFyLXRvZ2dsZWRcIik7XG4gICAgJChcIi5zaWRlYmFyXCIpLnRvZ2dsZUNsYXNzKFwidG9nZ2xlZFwiKTtcbiAgICBpZiAoJChcIi5zaWRlYmFyXCIpLmhhc0NsYXNzKFwidG9nZ2xlZFwiKSkge1xuICAgICAgJCgnLnNpZGViYXIgLmNvbGxhcHNlJykuY29sbGFwc2UoJ2hpZGUnKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBDbG9zZSBhbnkgb3BlbiBtZW51IGFjY29yZGlvbnMgd2hlbiB3aW5kb3cgaXMgcmVzaXplZCBiZWxvdyA3NjhweFxuICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgJCgnLnNpZGViYXIgLmNvbGxhcHNlJykuY29sbGFwc2UoJ2hpZGUnKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBQcmV2ZW50IHRoZSBjb250ZW50IHdyYXBwZXIgZnJvbSBzY3JvbGxpbmcgd2hlbiB0aGUgZml4ZWQgc2lkZSBuYXZpZ2F0aW9uIGhvdmVyZWQgb3ZlclxuICAkKCdib2R5LmZpeGVkLW5hdiAuc2lkZWJhcicpLm9uKCdtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsIHdoZWVsJywgZnVuY3Rpb24oZSkge1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xuICAgICAgdmFyIGUwID0gZS5vcmlnaW5hbEV2ZW50LFxuICAgICAgICBkZWx0YSA9IGUwLndoZWVsRGVsdGEgfHwgLWUwLmRldGFpbDtcbiAgICAgIHRoaXMuc2Nyb2xsVG9wICs9IChkZWx0YSA8IDAgPyAxIDogLTEpICogMzA7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTY3JvbGwgdG8gdG9wIGJ1dHRvbiBhcHBlYXJcbiAgJChkb2N1bWVudCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY3JvbGxEaXN0YW5jZSA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG4gICAgaWYgKHNjcm9sbERpc3RhbmNlID4gMTAwKSB7XG4gICAgICAkKCcuc2Nyb2xsLXRvLXRvcCcpLmZhZGVJbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuc2Nyb2xsLXRvLXRvcCcpLmZhZGVPdXQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNtb290aCBzY3JvbGxpbmcgdXNpbmcgalF1ZXJ5IGVhc2luZ1xuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnYS5zY3JvbGwtdG8tdG9wJywgZnVuY3Rpb24oZSkge1xuICAgIHZhciAkYW5jaG9yID0gJCh0aGlzKTtcbiAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsVG9wOiAoJCgkYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wKVxuICAgIH0sIDEwMDAsICdlYXNlSW5PdXRFeHBvJyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxufSkoalF1ZXJ5KTsgLy8gRW5kIG9mIHVzZSBzdHJpY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/theme.js\n");

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./resources/js/theme.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /web/feedback-form-admin/resources/js/theme.js */"./resources/js/theme.js");


/***/ })

/******/ });