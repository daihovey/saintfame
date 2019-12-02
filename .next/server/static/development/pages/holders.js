module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_retina_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-retina-image */ "react-retina-image");
/* harmony import */ var react_retina_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_retina_image__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/davidhovey/SaintFame/saintfame/components/Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];


 // @ts-ignore



const Layout = ({
  children,
  title
}) => __jsx("div", {
  className: "jsx-578656268",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "//fonts.googleapis.com/css?family=Tenor+Sans",
  className: "jsx-578656268",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("title", {
  className: "jsx-578656268",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "SAINT FAME"), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  className: "jsx-578656268",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
})), __jsx("span", {
  className: "jsx-578656268" + " " + "content-header flex-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx(react_retina_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
  src: __webpack_require__(/*! ../public/assets/logo/logo.png */ "./public/assets/logo/logo.png"),
  style: {
    marginTop: 24
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
})), __jsx("span", {
  className: "jsx-578656268" + " " + "site",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-578656268" + " " + "site-nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
})), __jsx("span", {
  className: "jsx-578656268" + " " + "site-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-578656268" + " " + "site-topic",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, children))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "578656268",
  __self: undefined
}, "body{background:black;color:#fff;font-family:Tenor Sans;}a{font-family:Tenor Sans;font-style:normal;font-weight:normal;font-size:25px;line-height:40px;color:#fffafa;}a:link{-webkit-text-decoration:none;text-decoration:none;}a:hover{-webkit-text-decoration:underline;text-decoration:underline;}a:visited{-webkit-text-decoration:none;text-decoration:none;}a:active{-webkit-text-decoration:underline;text-decoration:underline;}h1{color:#fff;}.site{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100vh;padding-top:50px;width:80%;}.site-nav{width:300px;margin-right:100px;}.site-content{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.content-header{height:40px;margin-top:60px;}.content-topic{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.flex-center{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGhvdmV5L1NhaW50RmFtZS9zYWludGZhbWUvY29tcG9uZW50cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDMkIsQUFHa0MsQUFLTSxBQVFGLEFBR0ssQUFHTCxBQUdLLEFBR2YsQUFLRSxBQU9ELEFBS0wsQUFLSyxBQUtBLEFBSUMsV0E5QmpCLENBWXVCLEFBVUgsS0EvQ0wsTUFLTyxLQUpLLEFBK0MzQixHQVZBLEVBSWlCLFFBcENNLFNBT3ZCLEFBTUEsQ0FqQkEsU0FLbUIsQUFTbkIsQUFNQSxXQThCQSxHQXRCcUIsQUEwQk0sQ0FoRE4sZ0JBdUJBLENBdEJILGNBQ2xCLENBaUMwQixDQVhaLFVBQ2QsdURBd0J1QixZQWJ2QixpRkFjQSIsImZpbGUiOiIvVXNlcnMvZGF2aWRob3ZleS9TYWludEZhbWUvc2FpbnRmYW1lL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IFJldGluYUltYWdlIGZyb20gJ3JlYWN0LXJldGluYS1pbWFnZSdcblxudHlwZSBMYXlvdXRQcm9wcyA9IHtcbiAgICB0aXRsZT86IHN0cmluZ1xufVxuXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PExheW91dFByb3BzPiA9ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAgIGhyZWY9XCIvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGVub3IrU2Fuc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlNBSU5UIEZBTUU8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudC1oZWFkZXIgZmxleC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxSZXRpbmFJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL2Fzc2V0cy9sb2dvL2xvZ28ucG5nJyl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAyNCB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlLW5hdlwiPlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlLXRvcGljXCI+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFRlbm9yIFNhbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogVGVub3IgU2FucztcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZhZmE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmxpbmsge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vICMgUEFHRSBTVFJVQ1RVUkVcbiAgICAgICAgICAgIC5zaXRlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zaXRlLW5hdiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zaXRlLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnQtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRlbnQtdG9waWMge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZsZXgtY2VudGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbilcbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl19 */\n/*@ sourceURL=/Users/davidhovey/SaintFame/saintfame/components/Layout.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Loader.tsx":
/*!*******************************!*\
  !*** ./components/Loader.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/davidhovey/SaintFame/saintfame/components/Loader.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Loader = () => __jsx("div", {
  className: "jsx-4275889871",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-4275889871" + " " + "loader",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-4275889871",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "Loading...")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4275889871",
  __self: undefined
}, "h1.jsx-4275889871{font-family:'Tenor Sans';font-size:25px;line-height:40px;color:#fff;}.loader.jsx-4275889871{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGhvdmV5L1NhaW50RmFtZS9zYWludGZhbWUvY29tcG9uZW50cy9Mb2FkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtvQixBQUcwQyxBQU1aLHlCQUxFLGVBQ0UsaUJBQ04sV0FDZixNQUcyQixtR0FDSiw2RkFDUCxZQUNoQiIsImZpbGUiOiIvVXNlcnMvZGF2aWRob3ZleS9TYWludEZhbWUvc2FpbnRmYW1lL2NvbXBvbmVudHMvTG9hZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExvYWRlciA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cbiAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdUZW5vciBTYW5zJztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9hZGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIl19 */\n/*@ sourceURL=/Users/davidhovey/SaintFame/saintfame/components/Loader.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./components/Navigation.tsx":
/*!***********************************!*\
  !*** ./components/Navigation.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/davidhovey/SaintFame/saintfame/components/Navigation.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Navigation = () => __jsx("div", {
  className: "jsx-3834926958",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-3834926958" + " " + "nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/holders",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("a", {
  title: "Holders Page",
  className: "jsx-3834926958",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Tokens")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/finances",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("a", {
  title: "Finances Page",
  className: "jsx-3834926958",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Finances"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3834926958",
  __self: undefined
}, "h1.jsx-3834926958,a.jsx-3834926958{font-family:'Tenor Sans';font-size:25px;line-height:40px;color:#ff00d6;}a.jsx-3834926958{-webkit-text-decoration:none;text-decoration:none;}a.jsx-3834926958:hover{opacity:0.6;}a.jsx-3834926958:selected{color:#ff00d6;}.nav.jsx-3834926958{margin-left:100px;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGhvdmV5L1NhaW50RmFtZS9zYWludGZhbWUvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZb0IsQUFJMEMsQUFPSixBQUlULEFBR0UsQUFHSSxZQUx0QixFQUdBLElBR1csT0FqQlEsZUFDRSxVQU1yQixDQVdpQixNQWhCQyxjQUNsQixzREFnQjBCLDhFQUMxQiIsImZpbGUiOiIvVXNlcnMvZGF2aWRob3ZleS9TYWludEZhbWUvc2FpbnRmYW1lL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbGRlcnNcIj5cbiAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIkhvbGRlcnMgUGFnZVwiPlRva2VuczwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmluYW5jZXNcIj5cbiAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIkZpbmFuY2VzIFBhZ2VcIj5GaW5hbmNlczwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMSxcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVGVub3IgU2Fucyc7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmYwMGQ2O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6c2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmYwMGQ2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25cbiJdfQ== */\n/*@ sourceURL=/Users/davidhovey/SaintFame/saintfame/components/Navigation.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/holders/AddressBalance.tsx":
/*!***********************************************!*\
  !*** ./components/holders/AddressBalance.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper */ "./helper.tsx");
var _jsxFileName = "/Users/davidhovey/SaintFame/saintfame/components/holders/AddressBalance.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const AddressBalance = props => {
  let contractAddress = '0xD275B1550E8ca8Da84c552ACa9313Ec4a5B9bD07';
  let address = props.address;
  let BALANCE_ENDPOINT = `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${address}&tag=latest&apikey=${_helper__WEBPACK_IMPORTED_MODULE_4__["API_KEY"]}`;
  console.log(BALANCE_ENDPOINT);
  const {
    0: balance,
    1: setBalance
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('...');
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(BALANCE_ENDPOINT).then(result => {
    const rawAmount = result.data.result;
    let wei = ethers__WEBPACK_IMPORTED_MODULE_3__["ethers"].utils.bigNumberify(rawAmount);
    const amountWithDecimal = ethers__WEBPACK_IMPORTED_MODULE_3__["ethers"].utils.formatEther(wei); // Parsed value has decimal place .0, removing for aesthetics

    const amount = amountWithDecimal.substring(0, amountWithDecimal.length - 2);
    setBalance(amount);
  }).catch(err => {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    });
  });
  return __jsx("div", {
    className: "jsx-870804550",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-870804550" + " " + "balance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, balance), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "870804550",
    __self: undefined
  }, ".balance.jsx-870804550{font-family:Tenor Sans;font-style:normal;font-weight:normal;font-size:25px;color:#fffafa;text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGhvdmV5L1NhaW50RmFtZS9zYWludGZhbWUvY29tcG9uZW50cy9ob2xkZXJzL0FkZHJlc3NCYWxhbmNlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ3dCLEFBRzRDLHVCQUNMLGtCQUNDLG1CQUNKLGVBQ0QsY0FDRyxpQkFDckIiLCJmaWxlIjoiL1VzZXJzL2RhdmlkaG92ZXkvU2FpbnRGYW1lL3NhaW50ZmFtZS9jb21wb25lbnRzL2hvbGRlcnMvQWRkcmVzc0JhbGFuY2UudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IEFQSV9LRVkgfSBmcm9tICcuLi8uLi9oZWxwZXInXG5cbmNvbnN0IEFkZHJlc3NCYWxhbmNlID0gKHByb3BzOiBhbnkpID0+IHtcbiAgICBsZXQgY29udHJhY3RBZGRyZXNzID0gJzB4RDI3NUIxNTUwRThjYThEYTg0YzU1MkFDYTkzMTNFYzRhNUI5YkQwNydcblxuICAgIGxldCBhZGRyZXNzOiBzdHJpbmcgPSBwcm9wcy5hZGRyZXNzXG5cbiAgICBsZXQgQkFMQU5DRV9FTkRQT0lOVCA9IGBodHRwczovL2FwaS5ldGhlcnNjYW4uaW8vYXBpP21vZHVsZT1hY2NvdW50JmFjdGlvbj10b2tlbmJhbGFuY2UmY29udHJhY3RhZGRyZXNzPSR7Y29udHJhY3RBZGRyZXNzfSZhZGRyZXNzPSR7YWRkcmVzc30mdGFnPWxhdGVzdCZhcGlrZXk9JHtBUElfS0VZfWBcblxuICAgIGNvbnNvbGUubG9nKEJBTEFOQ0VfRU5EUE9JTlQpXG4gICAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoJy4uLicpXG5cbiAgICBheGlvc1xuICAgICAgICAuZ2V0KEJBTEFOQ0VfRU5EUE9JTlQpXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBjb25zdCByYXdBbW91bnQgPSByZXN1bHQuZGF0YS5yZXN1bHRcbiAgICAgICAgICAgIGxldCB3ZWkgPSBldGhlcnMudXRpbHMuYmlnTnVtYmVyaWZ5KHJhd0Ftb3VudClcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudFdpdGhEZWNpbWFsID0gZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKHdlaSlcbiAgICAgICAgICAgIC8vIFBhcnNlZCB2YWx1ZSBoYXMgZGVjaW1hbCBwbGFjZSAuMCwgcmVtb3ZpbmcgZm9yIGFlc3RoZXRpY3NcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IGFtb3VudFdpdGhEZWNpbWFsLnN1YnN0cmluZyhcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIGFtb3VudFdpdGhEZWNpbWFsLmxlbmd0aCAtIDJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgc2V0QmFsYW5jZShhbW91bnQpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XG4gICAgICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFsYW5jZVwiPntiYWxhbmNlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuYmFsYW5jZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBUZW5vciBTYW5zO1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZhZmE7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRyZXNzQmFsYW5jZVxuIl19 */\n/*@ sourceURL=/Users/davidhovey/SaintFame/saintfame/components/holders/AddressBalance.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (AddressBalance);

/***/ }),

/***/ "./components/holders/HoldersList.tsx":
/*!********************************************!*\
  !*** ./components/holders/HoldersList.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper */ "./helper.tsx");
/* harmony import */ var _AddressBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddressBalance */ "./components/holders/AddressBalance.tsx");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Loader */ "./components/Loader.tsx");


var _jsxFileName = "/Users/davidhovey/SaintFame/saintfame/components/holders/HoldersList.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__["ethers"].providers.EtherscanProvider('mainnet', _helper__WEBPACK_IMPORTED_MODULE_5__["API_KEY"]); // prettier-ignore

const addressContractABI = [{
  "constant": true,
  "inputs": [],
  "name": "name",
  "outputs": [{
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_spender",
    "type": "address"
  }, {
    "name": "_amount",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [{
    "name": "success",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "creationBlock",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_from",
    "type": "address"
  }, {
    "name": "_to",
    "type": "address"
  }, {
    "name": "_amount",
    "type": "uint256"
  }],
  "name": "transferFrom",
  "outputs": [{
    "name": "success",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "decimals",
  "outputs": [{
    "name": "",
    "type": "uint8"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_newController",
    "type": "address"
  }],
  "name": "changeController",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }, {
    "name": "_blockNumber",
    "type": "uint256"
  }],
  "name": "balanceOfAt",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "version",
  "outputs": [{
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_cloneTokenName",
    "type": "string"
  }, {
    "name": "_cloneDecimalUnits",
    "type": "uint8"
  }, {
    "name": "_cloneTokenSymbol",
    "type": "string"
  }, {
    "name": "_snapshotBlock",
    "type": "uint256"
  }, {
    "name": "_transfersEnabled",
    "type": "bool"
  }],
  "name": "createCloneToken",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "name": "balance",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "parentToken",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }, {
    "name": "_amount",
    "type": "uint256"
  }],
  "name": "generateTokens",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "symbol",
  "outputs": [{
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_blockNumber",
    "type": "uint256"
  }],
  "name": "totalSupplyAt",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_to",
    "type": "address"
  }, {
    "name": "_amount",
    "type": "uint256"
  }],
  "name": "transfer",
  "outputs": [{
    "name": "success",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "transfersEnabled",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "parentSnapShotBlock",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_spender",
    "type": "address"
  }, {
    "name": "_amount",
    "type": "uint256"
  }, {
    "name": "_extraData",
    "type": "bytes"
  }],
  "name": "approveAndCall",
  "outputs": [{
    "name": "success",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }, {
    "name": "_amount",
    "type": "uint256"
  }],
  "name": "destroyTokens",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }, {
    "name": "_spender",
    "type": "address"
  }],
  "name": "allowance",
  "outputs": [{
    "name": "remaining",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_token",
    "type": "address"
  }],
  "name": "claimTokens",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "tokenFactory",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_transfersEnabled",
    "type": "bool"
  }],
  "name": "enableTransfers",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "controller",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "name": "_tokenFactory",
    "type": "address"
  }, {
    "name": "_parentToken",
    "type": "address"
  }, {
    "name": "_parentSnapShotBlock",
    "type": "uint256"
  }, {
    "name": "_tokenName",
    "type": "string"
  }, {
    "name": "_decimalUnits",
    "type": "uint8"
  }, {
    "name": "_tokenSymbol",
    "type": "string"
  }, {
    "name": "_transfersEnabled",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "payable": true,
  "stateMutability": "payable",
  "type": "fallback"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "_token",
    "type": "address"
  }, {
    "indexed": true,
    "name": "_controller",
    "type": "address"
  }, {
    "indexed": false,
    "name": "_amount",
    "type": "uint256"
  }],
  "name": "ClaimedTokens",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "_from",
    "type": "address"
  }, {
    "indexed": true,
    "name": "_to",
    "type": "address"
  }, {
    "indexed": false,
    "name": "_amount",
    "type": "uint256"
  }],
  "name": "Transfer",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "_cloneToken",
    "type": "address"
  }, {
    "indexed": false,
    "name": "_snapshotBlock",
    "type": "uint256"
  }],
  "name": "NewCloneToken",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "_owner",
    "type": "address"
  }, {
    "indexed": true,
    "name": "_spender",
    "type": "address"
  }, {
    "indexed": false,
    "name": "_amount",
    "type": "uint256"
  }],
  "name": "Approval",
  "type": "event"
}];
let addressContract = new ethers__WEBPACK_IMPORTED_MODULE_4__["ethers"].Contract(_helper__WEBPACK_IMPORTED_MODULE_5__["TOKEN_HOLDER_ADDRESS"], addressContractABI, new ethers__WEBPACK_IMPORTED_MODULE_4__["ethers"].providers.JsonRpcProvider());

function parseLogs(logs, contract) {
  let iface = new ethers__WEBPACK_IMPORTED_MODULE_4__["ethers"].utils.Interface(contract.interface.abi);
  return logs.map(log => iface.parseLog(log)).map(item => {
    let result = {
      name: item.name,
      signature: item.signature,
      values: {}
    };

    const keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(item.values);

    const values = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(item.values);

    const start = item.values.length;

    for (let i = start; i < start * 2 - 1; i++) {
      result.values[keys[i]] = values[i];
    }

    return result;
  });
}

const getAddresses = async () => {
  let filter = {
    address: _helper__WEBPACK_IMPORTED_MODULE_5__["TOKEN_HOLDER_ADDRESS"],
    fromBlock: 8960961,
    // Block of Contract's first transaction
    toBlock: 'latest',
    topics: []
  };
  const logs = await provider.getLogs(filter);
  const parsedLogs = parseLogs(logs, addressContract);
  const addresses = parsedLogs.map(function (log) {
    return log.values['_to'];
  }); // const addresses = [
  //     '0xd247cf531B9374eB2ba115b68c3b4eBE6C64F5f9',
  //     '0x7BB81632c66cfAf0c9c7aA2DBaBf21FBC036D013',
  //     '0x8969bAfb1ae4786b776FdDcF7F8B5f0ae1E50C36',
  //     '0x5e349eca2dc61aBCd9dD99Ce94d04136151a09Ee',
  //     '0x9079a0a7e0eBEe7650C8c9Da2b6946e5a5B07C19',
  //     '0x4defA30195094963cFAc7285d8d6E6E523c7f90D'
  // ]

  return addresses;
};

const HoldersList = () => {
  const {
    0: holders,
    1: setHolders
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([__jsx(_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  })]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    getAddresses().then(addresses => {
      const list = addresses.map(address => __jsx("div", {
        className: "holderRow",
        key: address,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: undefined
      }, __jsx("div", {
        className: "tableHeaderLeft ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: undefined
      }, __jsx("a", {
        href: 'https://etherscan.io/address/' + address,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: undefined
      }, address)), __jsx("div", {
        className: "tableHeaderRight rightAlignText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: undefined
      }, __jsx(_AddressBalance__WEBPACK_IMPORTED_MODULE_6__["default"], {
        address: address,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: undefined
      }))));
      setHolders(list);
    });
  });
  return __jsx("div", {
    className: "jsx-1432098537",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, holders, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1432098537",
    __self: undefined
  }, ".holderRow{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.holderLink{text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGhvdmV5L1NhaW50RmFtZS9zYWludGZhbWUvY29tcG9uZW50cy9ob2xkZXJzL0hvbGRlcnNMaXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RitCLEFBR2tDLEFBTUcsZ0JBQ3BCLDBEQU51QixxRUFDQSw2RkFDUSx5R0FDL0IiLCJmaWxlIjoiL1VzZXJzL2RhdmlkaG92ZXkvU2FpbnRGYW1lL3NhaW50ZmFtZS9jb21wb25lbnRzL2hvbGRlcnMvSG9sZGVyc0xpc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZXRoZXJzLCBDb250cmFjdCB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IEFQSV9LRVksIFRPS0VOX0hPTERFUl9BRERSRVNTIH0gZnJvbSAnLi4vLi4vaGVscGVyJ1xuaW1wb3J0IEFkZHJlc3NCYWxhbmNlIGZyb20gJy4vQWRkcmVzc0JhbGFuY2UnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcidcblxuY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5FdGhlcnNjYW5Qcm92aWRlcignbWFpbm5ldCcsIEFQSV9LRVkpXG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgYWRkcmVzc0NvbnRyYWN0QUJJID0gW3tcImNvbnN0YW50XCI6dHJ1ZSxcImlucHV0c1wiOltdLFwibmFtZVwiOlwibmFtZVwiLFwib3V0cHV0c1wiOlt7XCJuYW1lXCI6XCJcIixcInR5cGVcIjpcInN0cmluZ1wifV0sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcInZpZXdcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6ZmFsc2UsXCJpbnB1dHNcIjpbe1wibmFtZVwiOlwiX3NwZW5kZXJcIixcInR5cGVcIjpcImFkZHJlc3NcIn0se1wibmFtZVwiOlwiX2Ftb3VudFwiLFwidHlwZVwiOlwidWludDI1NlwifV0sXCJuYW1lXCI6XCJhcHByb3ZlXCIsXCJvdXRwdXRzXCI6W3tcIm5hbWVcIjpcInN1Y2Nlc3NcIixcInR5cGVcIjpcImJvb2xcIn1dLFwicGF5YWJsZVwiOmZhbHNlLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJub25wYXlhYmxlXCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJjb25zdGFudFwiOnRydWUsXCJpbnB1dHNcIjpbXSxcIm5hbWVcIjpcImNyZWF0aW9uQmxvY2tcIixcIm91dHB1dHNcIjpbe1wibmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9XSxcInBheWFibGVcIjpmYWxzZSxcInN0YXRlTXV0YWJpbGl0eVwiOlwidmlld1wiLFwidHlwZVwiOlwiZnVuY3Rpb25cIn0se1wiY29uc3RhbnRcIjp0cnVlLFwiaW5wdXRzXCI6W10sXCJuYW1lXCI6XCJ0b3RhbFN1cHBseVwiLFwib3V0cHV0c1wiOlt7XCJuYW1lXCI6XCJcIixcInR5cGVcIjpcInVpbnQyNTZcIn1dLFwicGF5YWJsZVwiOmZhbHNlLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJ2aWV3XCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJjb25zdGFudFwiOmZhbHNlLFwiaW5wdXRzXCI6W3tcIm5hbWVcIjpcIl9mcm9tXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9LHtcIm5hbWVcIjpcIl90b1wiLFwidHlwZVwiOlwiYWRkcmVzc1wifSx7XCJuYW1lXCI6XCJfYW1vdW50XCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9XSxcIm5hbWVcIjpcInRyYW5zZmVyRnJvbVwiLFwib3V0cHV0c1wiOlt7XCJuYW1lXCI6XCJzdWNjZXNzXCIsXCJ0eXBlXCI6XCJib29sXCJ9XSxcInBheWFibGVcIjpmYWxzZSxcInN0YXRlTXV0YWJpbGl0eVwiOlwibm9ucGF5YWJsZVwiLFwidHlwZVwiOlwiZnVuY3Rpb25cIn0se1wiY29uc3RhbnRcIjp0cnVlLFwiaW5wdXRzXCI6W10sXCJuYW1lXCI6XCJkZWNpbWFsc1wiLFwib3V0cHV0c1wiOlt7XCJuYW1lXCI6XCJcIixcInR5cGVcIjpcInVpbnQ4XCJ9XSxcInBheWFibGVcIjpmYWxzZSxcInN0YXRlTXV0YWJpbGl0eVwiOlwidmlld1wiLFwidHlwZVwiOlwiZnVuY3Rpb25cIn0se1wiY29uc3RhbnRcIjpmYWxzZSxcImlucHV0c1wiOlt7XCJuYW1lXCI6XCJfbmV3Q29udHJvbGxlclwiLFwidHlwZVwiOlwiYWRkcmVzc1wifV0sXCJuYW1lXCI6XCJjaGFuZ2VDb250cm9sbGVyXCIsXCJvdXRwdXRzXCI6W10sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcIm5vbnBheWFibGVcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6dHJ1ZSxcImlucHV0c1wiOlt7XCJuYW1lXCI6XCJfb3duZXJcIixcInR5cGVcIjpcImFkZHJlc3NcIn0se1wibmFtZVwiOlwiX2Jsb2NrTnVtYmVyXCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9XSxcIm5hbWVcIjpcImJhbGFuY2VPZkF0XCIsXCJvdXRwdXRzXCI6W3tcIm5hbWVcIjpcIlwiLFwidHlwZVwiOlwidWludDI1NlwifV0sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcInZpZXdcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6dHJ1ZSxcImlucHV0c1wiOltdLFwibmFtZVwiOlwidmVyc2lvblwiLFwib3V0cHV0c1wiOlt7XCJuYW1lXCI6XCJcIixcInR5cGVcIjpcInN0cmluZ1wifV0sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcInZpZXdcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6ZmFsc2UsXCJpbnB1dHNcIjpbe1wibmFtZVwiOlwiX2Nsb25lVG9rZW5OYW1lXCIsXCJ0eXBlXCI6XCJzdHJpbmdcIn0se1wibmFtZVwiOlwiX2Nsb25lRGVjaW1hbFVuaXRzXCIsXCJ0eXBlXCI6XCJ1aW50OFwifSx7XCJuYW1lXCI6XCJfY2xvbmVUb2tlblN5bWJvbFwiLFwidHlwZVwiOlwic3RyaW5nXCJ9LHtcIm5hbWVcIjpcIl9zbmFwc2hvdEJsb2NrXCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9LHtcIm5hbWVcIjpcIl90cmFuc2ZlcnNFbmFibGVkXCIsXCJ0eXBlXCI6XCJib29sXCJ9XSxcIm5hbWVcIjpcImNyZWF0ZUNsb25lVG9rZW5cIixcIm91dHB1dHNcIjpbe1wibmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9XSxcInBheWFibGVcIjpmYWxzZSxcInN0YXRlTXV0YWJpbGl0eVwiOlwibm9ucGF5YWJsZVwiLFwidHlwZVwiOlwiZnVuY3Rpb25cIn0se1wiY29uc3RhbnRcIjp0cnVlLFwiaW5wdXRzXCI6W3tcIm5hbWVcIjpcIl9vd25lclwiLFwidHlwZVwiOlwiYWRkcmVzc1wifV0sXCJuYW1lXCI6XCJiYWxhbmNlT2ZcIixcIm91dHB1dHNcIjpbe1wibmFtZVwiOlwiYmFsYW5jZVwiLFwidHlwZVwiOlwidWludDI1NlwifV0sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcInZpZXdcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6dHJ1ZSxcImlucHV0c1wiOltdLFwibmFtZVwiOlwicGFyZW50VG9rZW5cIixcIm91dHB1dHNcIjpbe1wibmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9XSxcInBheWFibGVcIjpmYWxzZSxcInN0YXRlTXV0YWJpbGl0eVwiOlwidmlld1wiLFwidHlwZVwiOlwiZnVuY3Rpb25cIn0se1wiY29uc3RhbnRcIjpmYWxzZSxcImlucHV0c1wiOlt7XCJuYW1lXCI6XCJfb3duZXJcIixcInR5cGVcIjpcImFkZHJlc3NcIn0se1wibmFtZVwiOlwiX2Ftb3VudFwiLFwidHlwZVwiOlwidWludDI1NlwifV0sXCJuYW1lXCI6XCJnZW5lcmF0ZVRva2Vuc1wiLFwib3V0cHV0c1wiOlt7XCJuYW1lXCI6XCJcIixcInR5cGVcIjpcImJvb2xcIn1dLFwicGF5YWJsZVwiOmZhbHNlLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJub25wYXlhYmxlXCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJjb25zdGFudFwiOnRydWUsXCJpbnB1dHNcIjpbXSxcIm5hbWVcIjpcInN5bWJvbFwiLFwib3V0cHV0c1wiOlt7XCJuYW1lXCI6XCJcIixcInR5cGVcIjpcInN0cmluZ1wifV0sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcInZpZXdcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6dHJ1ZSxcImlucHV0c1wiOlt7XCJuYW1lXCI6XCJfYmxvY2tOdW1iZXJcIixcInR5cGVcIjpcInVpbnQyNTZcIn1dLFwibmFtZVwiOlwidG90YWxTdXBwbHlBdFwiLFwib3V0cHV0c1wiOlt7XCJuYW1lXCI6XCJcIixcInR5cGVcIjpcInVpbnQyNTZcIn1dLFwicGF5YWJsZVwiOmZhbHNlLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJ2aWV3XCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJjb25zdGFudFwiOmZhbHNlLFwiaW5wdXRzXCI6W3tcIm5hbWVcIjpcIl90b1wiLFwidHlwZVwiOlwiYWRkcmVzc1wifSx7XCJuYW1lXCI6XCJfYW1vdW50XCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9XSxcIm5hbWVcIjpcInRyYW5zZmVyXCIsXCJvdXRwdXRzXCI6W3tcIm5hbWVcIjpcInN1Y2Nlc3NcIixcInR5cGVcIjpcImJvb2xcIn1dLFwicGF5YWJsZVwiOmZhbHNlLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJub25wYXlhYmxlXCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJjb25zdGFudFwiOnRydWUsXCJpbnB1dHNcIjpbXSxcIm5hbWVcIjpcInRyYW5zZmVyc0VuYWJsZWRcIixcIm91dHB1dHNcIjpbe1wibmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJib29sXCJ9XSxcInBheWFibGVcIjpmYWxzZSxcInN0YXRlTXV0YWJpbGl0eVwiOlwidmlld1wiLFwidHlwZVwiOlwiZnVuY3Rpb25cIn0se1wiY29uc3RhbnRcIjp0cnVlLFwiaW5wdXRzXCI6W10sXCJuYW1lXCI6XCJwYXJlbnRTbmFwU2hvdEJsb2NrXCIsXCJvdXRwdXRzXCI6W3tcIm5hbWVcIjpcIlwiLFwidHlwZVwiOlwidWludDI1NlwifV0sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcInZpZXdcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6ZmFsc2UsXCJpbnB1dHNcIjpbe1wibmFtZVwiOlwiX3NwZW5kZXJcIixcInR5cGVcIjpcImFkZHJlc3NcIn0se1wibmFtZVwiOlwiX2Ftb3VudFwiLFwidHlwZVwiOlwidWludDI1NlwifSx7XCJuYW1lXCI6XCJfZXh0cmFEYXRhXCIsXCJ0eXBlXCI6XCJieXRlc1wifV0sXCJuYW1lXCI6XCJhcHByb3ZlQW5kQ2FsbFwiLFwib3V0cHV0c1wiOlt7XCJuYW1lXCI6XCJzdWNjZXNzXCIsXCJ0eXBlXCI6XCJib29sXCJ9XSxcInBheWFibGVcIjpmYWxzZSxcInN0YXRlTXV0YWJpbGl0eVwiOlwibm9ucGF5YWJsZVwiLFwidHlwZVwiOlwiZnVuY3Rpb25cIn0se1wiY29uc3RhbnRcIjpmYWxzZSxcImlucHV0c1wiOlt7XCJuYW1lXCI6XCJfb3duZXJcIixcInR5cGVcIjpcImFkZHJlc3NcIn0se1wibmFtZVwiOlwiX2Ftb3VudFwiLFwidHlwZVwiOlwidWludDI1NlwifV0sXCJuYW1lXCI6XCJkZXN0cm95VG9rZW5zXCIsXCJvdXRwdXRzXCI6W3tcIm5hbWVcIjpcIlwiLFwidHlwZVwiOlwiYm9vbFwifV0sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcIm5vbnBheWFibGVcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6dHJ1ZSxcImlucHV0c1wiOlt7XCJuYW1lXCI6XCJfb3duZXJcIixcInR5cGVcIjpcImFkZHJlc3NcIn0se1wibmFtZVwiOlwiX3NwZW5kZXJcIixcInR5cGVcIjpcImFkZHJlc3NcIn1dLFwibmFtZVwiOlwiYWxsb3dhbmNlXCIsXCJvdXRwdXRzXCI6W3tcIm5hbWVcIjpcInJlbWFpbmluZ1wiLFwidHlwZVwiOlwidWludDI1NlwifV0sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcInZpZXdcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6ZmFsc2UsXCJpbnB1dHNcIjpbe1wibmFtZVwiOlwiX3Rva2VuXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9XSxcIm5hbWVcIjpcImNsYWltVG9rZW5zXCIsXCJvdXRwdXRzXCI6W10sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcIm5vbnBheWFibGVcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6dHJ1ZSxcImlucHV0c1wiOltdLFwibmFtZVwiOlwidG9rZW5GYWN0b3J5XCIsXCJvdXRwdXRzXCI6W3tcIm5hbWVcIjpcIlwiLFwidHlwZVwiOlwiYWRkcmVzc1wifV0sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcInZpZXdcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6ZmFsc2UsXCJpbnB1dHNcIjpbe1wibmFtZVwiOlwiX3RyYW5zZmVyc0VuYWJsZWRcIixcInR5cGVcIjpcImJvb2xcIn1dLFwibmFtZVwiOlwiZW5hYmxlVHJhbnNmZXJzXCIsXCJvdXRwdXRzXCI6W10sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcIm5vbnBheWFibGVcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6dHJ1ZSxcImlucHV0c1wiOltdLFwibmFtZVwiOlwiY29udHJvbGxlclwiLFwib3V0cHV0c1wiOlt7XCJuYW1lXCI6XCJcIixcInR5cGVcIjpcImFkZHJlc3NcIn1dLFwicGF5YWJsZVwiOmZhbHNlLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJ2aWV3XCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJpbnB1dHNcIjpbe1wibmFtZVwiOlwiX3Rva2VuRmFjdG9yeVwiLFwidHlwZVwiOlwiYWRkcmVzc1wifSx7XCJuYW1lXCI6XCJfcGFyZW50VG9rZW5cIixcInR5cGVcIjpcImFkZHJlc3NcIn0se1wibmFtZVwiOlwiX3BhcmVudFNuYXBTaG90QmxvY2tcIixcInR5cGVcIjpcInVpbnQyNTZcIn0se1wibmFtZVwiOlwiX3Rva2VuTmFtZVwiLFwidHlwZVwiOlwic3RyaW5nXCJ9LHtcIm5hbWVcIjpcIl9kZWNpbWFsVW5pdHNcIixcInR5cGVcIjpcInVpbnQ4XCJ9LHtcIm5hbWVcIjpcIl90b2tlblN5bWJvbFwiLFwidHlwZVwiOlwic3RyaW5nXCJ9LHtcIm5hbWVcIjpcIl90cmFuc2ZlcnNFbmFibGVkXCIsXCJ0eXBlXCI6XCJib29sXCJ9XSxcInBheWFibGVcIjpmYWxzZSxcInN0YXRlTXV0YWJpbGl0eVwiOlwibm9ucGF5YWJsZVwiLFwidHlwZVwiOlwiY29uc3RydWN0b3JcIn0se1wicGF5YWJsZVwiOnRydWUsXCJzdGF0ZU11dGFiaWxpdHlcIjpcInBheWFibGVcIixcInR5cGVcIjpcImZhbGxiYWNrXCJ9LHtcImFub255bW91c1wiOmZhbHNlLFwiaW5wdXRzXCI6W3tcImluZGV4ZWRcIjp0cnVlLFwibmFtZVwiOlwiX3Rva2VuXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9LHtcImluZGV4ZWRcIjp0cnVlLFwibmFtZVwiOlwiX2NvbnRyb2xsZXJcIixcInR5cGVcIjpcImFkZHJlc3NcIn0se1wiaW5kZXhlZFwiOmZhbHNlLFwibmFtZVwiOlwiX2Ftb3VudFwiLFwidHlwZVwiOlwidWludDI1NlwifV0sXCJuYW1lXCI6XCJDbGFpbWVkVG9rZW5zXCIsXCJ0eXBlXCI6XCJldmVudFwifSx7XCJhbm9ueW1vdXNcIjpmYWxzZSxcImlucHV0c1wiOlt7XCJpbmRleGVkXCI6dHJ1ZSxcIm5hbWVcIjpcIl9mcm9tXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9LHtcImluZGV4ZWRcIjp0cnVlLFwibmFtZVwiOlwiX3RvXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9LHtcImluZGV4ZWRcIjpmYWxzZSxcIm5hbWVcIjpcIl9hbW91bnRcIixcInR5cGVcIjpcInVpbnQyNTZcIn1dLFwibmFtZVwiOlwiVHJhbnNmZXJcIixcInR5cGVcIjpcImV2ZW50XCJ9LHtcImFub255bW91c1wiOmZhbHNlLFwiaW5wdXRzXCI6W3tcImluZGV4ZWRcIjp0cnVlLFwibmFtZVwiOlwiX2Nsb25lVG9rZW5cIixcInR5cGVcIjpcImFkZHJlc3NcIn0se1wiaW5kZXhlZFwiOmZhbHNlLFwibmFtZVwiOlwiX3NuYXBzaG90QmxvY2tcIixcInR5cGVcIjpcInVpbnQyNTZcIn1dLFwibmFtZVwiOlwiTmV3Q2xvbmVUb2tlblwiLFwidHlwZVwiOlwiZXZlbnRcIn0se1wiYW5vbnltb3VzXCI6ZmFsc2UsXCJpbnB1dHNcIjpbe1wiaW5kZXhlZFwiOnRydWUsXCJuYW1lXCI6XCJfb3duZXJcIixcInR5cGVcIjpcImFkZHJlc3NcIn0se1wiaW5kZXhlZFwiOnRydWUsXCJuYW1lXCI6XCJfc3BlbmRlclwiLFwidHlwZVwiOlwiYWRkcmVzc1wifSx7XCJpbmRleGVkXCI6ZmFsc2UsXCJuYW1lXCI6XCJfYW1vdW50XCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9XSxcIm5hbWVcIjpcIkFwcHJvdmFsXCIsXCJ0eXBlXCI6XCJldmVudFwifV1cblxubGV0IGFkZHJlc3NDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgVE9LRU5fSE9MREVSX0FERFJFU1MsXG4gICAgYWRkcmVzc0NvbnRyYWN0QUJJLFxuICAgIG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcigpXG4pXG5cbmZ1bmN0aW9uIHBhcnNlTG9ncyhsb2dzOiBldGhlcnMucHJvdmlkZXJzLkxvZ1tdLCBjb250cmFjdDogQ29udHJhY3QpOiBhbnlbXSB7XG4gICAgbGV0IGlmYWNlID0gbmV3IGV0aGVycy51dGlscy5JbnRlcmZhY2UoY29udHJhY3QuaW50ZXJmYWNlLmFiaSlcbiAgICByZXR1cm4gbG9nc1xuICAgICAgICAubWFwKGxvZyA9PiBpZmFjZS5wYXJzZUxvZyhsb2cpKVxuICAgICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgc2lnbmF0dXJlOiBpdGVtLnNpZ25hdHVyZSxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHt9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhpdGVtLnZhbHVlcylcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoaXRlbS52YWx1ZXMpXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGl0ZW0udmFsdWVzLmxlbmd0aFxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBzdGFydCAqIDIgLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWVzW2tleXNbaV1dID0gdmFsdWVzW2ldXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfSlcbn1cblxuY29uc3QgZ2V0QWRkcmVzc2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBmaWx0ZXIgPSB7XG4gICAgICAgIGFkZHJlc3M6IFRPS0VOX0hPTERFUl9BRERSRVNTLFxuICAgICAgICBmcm9tQmxvY2s6IDg5NjA5NjEsIC8vIEJsb2NrIG9mIENvbnRyYWN0J3MgZmlyc3QgdHJhbnNhY3Rpb25cbiAgICAgICAgdG9CbG9jazogJ2xhdGVzdCcsXG4gICAgICAgIHRvcGljczogW11cbiAgICB9XG5cbiAgICBjb25zdCBsb2dzID0gYXdhaXQgcHJvdmlkZXIuZ2V0TG9ncyhmaWx0ZXIpXG5cbiAgICBjb25zdCBwYXJzZWRMb2dzID0gcGFyc2VMb2dzKGxvZ3MsIGFkZHJlc3NDb250cmFjdClcblxuICAgIGNvbnN0IGFkZHJlc3Nlczogc3RyaW5nW10gPSBwYXJzZWRMb2dzLm1hcChmdW5jdGlvbihsb2cpIHtcbiAgICAgICAgcmV0dXJuIGxvZy52YWx1ZXNbJ190byddXG4gICAgfSlcblxuICAgIC8vIGNvbnN0IGFkZHJlc3NlcyA9IFtcbiAgICAvLyAgICAgJzB4ZDI0N2NmNTMxQjkzNzRlQjJiYTExNWI2OGMzYjRlQkU2QzY0RjVmOScsXG4gICAgLy8gICAgICcweDdCQjgxNjMyYzY2Y2ZBZjBjOWM3YUEyREJhQmYyMUZCQzAzNkQwMTMnLFxuICAgIC8vICAgICAnMHg4OTY5YkFmYjFhZTQ3ODZiNzc2RmREY0Y3RjhCNWYwYWUxRTUwQzM2JyxcbiAgICAvLyAgICAgJzB4NWUzNDllY2EyZGM2MWFCQ2Q5ZEQ5OUNlOTRkMDQxMzYxNTFhMDlFZScsXG4gICAgLy8gICAgICcweDkwNzlhMGE3ZTBlQkVlNzY1MEM4YzlEYTJiNjk0NmU1YTVCMDdDMTknLFxuICAgIC8vICAgICAnMHg0ZGVmQTMwMTk1MDk0OTYzY0ZBYzcyODVkOGQ2RTZFNTIzYzdmOTBEJ1xuICAgIC8vIF1cblxuICAgIHJldHVybiBhZGRyZXNzZXNcbn1cblxuY29uc3QgSG9sZGVyc0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW2hvbGRlcnMsIHNldEhvbGRlcnNdID0gdXNlU3RhdGUoWzxMb2FkZXIgLz5dKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0QWRkcmVzc2VzKCkudGhlbihhZGRyZXNzZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGFkZHJlc3Nlcy5tYXAoYWRkcmVzcyA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2xkZXJSb3dcIiBrZXk9e2FkZHJlc3N9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlSGVhZGVyTGVmdCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL2V0aGVyc2Nhbi5pby9hZGRyZXNzLycgKyBhZGRyZXNzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVIZWFkZXJSaWdodCByaWdodEFsaWduVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZHJlc3NCYWxhbmNlIGFkZHJlc3M9e2FkZHJlc3N9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIHNldEhvbGRlcnMobGlzdClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtob2xkZXJzfVxuXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgICAgIC5ob2xkZXJSb3cge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ob2xkZXJMaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9sZGVyc0xpc3RcbiJdfQ== */\n/*@ sourceURL=/Users/davidhovey/SaintFame/saintfame/components/holders/HoldersList.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (HoldersList);

/***/ }),

/***/ "./components/holders/TotalSupply.tsx":
/*!********************************************!*\
  !*** ./components/holders/TotalSupply.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper */ "./helper.tsx");
var _jsxFileName = "/Users/davidhovey/SaintFame/saintfame/components/holders/TotalSupply.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const TotalSupply = () => {
  let contractAddress = '0xD275B1550E8ca8Da84c552ACa9313Ec4a5B9bD07';
  let TOTAL_ENDPOINT = `https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${contractAddress}&apikey=${_helper__WEBPACK_IMPORTED_MODULE_4__["API_KEY"]}`;
  const {
    0: balance,
    1: setBalance
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('...');
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOTAL_ENDPOINT).then(result => {
    const rawAmount = result.data.result;
    let wei = ethers__WEBPACK_IMPORTED_MODULE_3__["ethers"].utils.bigNumberify(rawAmount);
    const amountWithDecimal = ethers__WEBPACK_IMPORTED_MODULE_3__["ethers"].utils.formatEther(wei); // Parsed value has decimal place .0, removing for aesthetics

    const amount = amountWithDecimal.substring(0, amountWithDecimal.length - 2);
    setBalance(amount);
  }).catch(err => {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    });
  });
  return __jsx("div", {
    className: "jsx-1839663905",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1839663905" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1839663905" + " " + "LHS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1839663905" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Total supply"), __jsx("span", {
    className: "jsx-1839663905" + " " + "balance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, balance)), __jsx("span", {
    className: "jsx-1839663905" + " " + "RHS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1839663905" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Token"), __jsx("span", {
    className: "jsx-1839663905" + " " + "balance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "$AINT"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1839663905",
    __self: undefined
  }, ".container.jsx-1839663905{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.LHS.jsx-1839663905,.RHS.jsx-1839663905{-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;}.balance.jsx-1839663905{font-family:Tenor Sans;font-style:normal;font-weight:normal;font-size:25px;line-height:40px;color:#fffafa;text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGhvdmV5L1NhaW50RmFtZS9zYWludGZhbWUvY29tcG9uZW50cy9ob2xkZXJzL1RvdGFsU3VwcGx5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ3dCLEFBR2tDLEFBTUUsQUFHUSx1QkFDTCxrQkFDQyxtQkFDSixNQUxuQixRQU51QixDQVlGLGlCQUNILGNBQ0csaUJBQ3JCLG9CQWQrQix5R0FDL0IiLCJmaWxlIjoiL1VzZXJzL2RhdmlkaG92ZXkvU2FpbnRGYW1lL3NhaW50ZmFtZS9jb21wb25lbnRzL2hvbGRlcnMvVG90YWxTdXBwbHkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IEFQSV9LRVkgfSBmcm9tICcuLi8uLi9oZWxwZXInXG5cbmNvbnN0IFRvdGFsU3VwcGx5ID0gKCkgPT4ge1xuICAgIGxldCBjb250cmFjdEFkZHJlc3MgPSAnMHhEMjc1QjE1NTBFOGNhOERhODRjNTUyQUNhOTMxM0VjNGE1QjliRDA3J1xuXG4gICAgbGV0IFRPVEFMX0VORFBPSU5UID0gYGh0dHBzOi8vYXBpLmV0aGVyc2Nhbi5pby9hcGk/bW9kdWxlPXN0YXRzJmFjdGlvbj10b2tlbnN1cHBseSZjb250cmFjdGFkZHJlc3M9JHtjb250cmFjdEFkZHJlc3N9JmFwaWtleT0ke0FQSV9LRVl9YFxuXG4gICAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoJy4uLicpXG5cbiAgICBheGlvc1xuICAgICAgICAuZ2V0KFRPVEFMX0VORFBPSU5UKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmF3QW1vdW50ID0gcmVzdWx0LmRhdGEucmVzdWx0XG4gICAgICAgICAgICBsZXQgd2VpID0gZXRoZXJzLnV0aWxzLmJpZ051bWJlcmlmeShyYXdBbW91bnQpXG4gICAgICAgICAgICBjb25zdCBhbW91bnRXaXRoRGVjaW1hbCA9IGV0aGVycy51dGlscy5mb3JtYXRFdGhlcih3ZWkpXG4gICAgICAgICAgICAvLyBQYXJzZWQgdmFsdWUgaGFzIGRlY2ltYWwgcGxhY2UgLjAsIHJlbW92aW5nIGZvciBhZXN0aGV0aWNzXG4gICAgICAgICAgICBjb25zdCBhbW91bnQgPSBhbW91bnRXaXRoRGVjaW1hbC5zdWJzdHJpbmcoXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICBhbW91bnRXaXRoRGVjaW1hbC5sZW5ndGggLSAyXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIHNldEJhbGFuY2UoYW1vdW50KVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PlxuICAgICAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkxIU1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+VG90YWwgc3VwcGx5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhbGFuY2VcIj57YmFsYW5jZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlJIU1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+VG9rZW48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFsYW5jZVwiPiRBSU5UPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuTEhTLFxuICAgICAgICAgICAgICAgIC5SSFMge1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5iYWxhbmNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFRlbm9yIFNhbnM7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZhZmE7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3RhbFN1cHBseVxuIl19 */\n/*@ sourceURL=/Users/davidhovey/SaintFame/saintfame/components/holders/TotalSupply.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TotalSupply);

/***/ }),

/***/ "./helper.tsx":
/*!********************!*\
  !*** ./helper.tsx ***!
  \********************/
/*! exports provided: API_KEY, TOKEN_HOLDER_ADDRESS, FINANCES_ADDRESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_HOLDER_ADDRESS", function() { return TOKEN_HOLDER_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINANCES_ADDRESS", function() { return FINANCES_ADDRESS; });
const API_KEY = 'X3SIP83C2DJ8VRBYIF9NSUKRBRGHI6DX22';
const TOKEN_HOLDER_ADDRESS = '0xD275B1550E8ca8Da84c552ACa9313Ec4a5B9bD07';
const FINANCES_ADDRESS = '0xf739C4d15854CaB9874E24a4D1Ec084DCAF1F13F';

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/holders.tsx":
/*!***************************!*\
  !*** ./pages/holders.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_holders_TotalSupply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/holders/TotalSupply */ "./components/holders/TotalSupply.tsx");
/* harmony import */ var _components_holders_HoldersList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/holders/HoldersList */ "./components/holders/HoldersList.tsx");
var _jsxFileName = "/Users/davidhovey/SaintFame/saintfame/pages/holders.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Holders = () => {
  return __jsx("div", {
    className: "jsx-1489156093",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_components_holders_TotalSupply__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1489156093" + " " + "title topPadding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Ownership distribution"), __jsx("span", {
    className: "jsx-1489156093" + " " + "tableHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1489156093" + " " + "title tableHeaderLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Holder"), __jsx("span", {
    className: "jsx-1489156093" + " " + "title tableHeaderRight rightAlignText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Balance")), __jsx(_components_holders_HoldersList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1489156093",
    __self: undefined
  }, ".title{font-family:Tenor Sans;font-style:normal;font-weight:normal;font-size:20px;line-height:40px;color:##fffafa;opacity:0.5;}.tableHeader{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.tableHeaderLeft,.tableHeaderRight{-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;}.rightAlignText{text-align:right;}.topPadding{padding-top:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGhvdmV5L1NhaW50RmFtZS9zYWludGZhbWUvcGFnZXMvaG9sZGVycy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUIrQixBQUc0QyxBQVVWLEFBTUUsQUFHRSxBQUdBLGlCQUZyQixBQUdBLE1BdEJzQixrQkFDQyxtQkFDSixNQWNuQixRQU51QixDQVBGLGlCQUNGLGVBQ0gsWUFDaEIsd0JBSytCLHlHQUMvQiIsImZpbGUiOiIvVXNlcnMvZGF2aWRob3ZleS9TYWludEZhbWUvc2FpbnRmYW1lL3BhZ2VzL2hvbGRlcnMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBUb3RhbFN1cHBseSBmcm9tICcuLi9jb21wb25lbnRzL2hvbGRlcnMvVG90YWxTdXBwbHknXG5pbXBvcnQgSG9sZGVyc0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9ob2xkZXJzL0hvbGRlcnNMaXN0J1xuXG5jb25zdCBIb2xkZXJzOiBOZXh0UGFnZTx7fT4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFRvdGFsU3VwcGx5IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSB0b3BQYWRkaW5nXCI+T3duZXJzaGlwIGRpc3RyaWJ1dGlvbjwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhYmxlSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlIHRhYmxlSGVhZGVyTGVmdFwiPkhvbGRlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUgdGFibGVIZWFkZXJSaWdodCByaWdodEFsaWduVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxIb2xkZXJzTGlzdCAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBUZW5vciBTYW5zO1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjI2ZmZmFmYTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50YWJsZUhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRhYmxlSGVhZGVyTGVmdCxcbiAgICAgICAgICAgICAgICAudGFibGVIZWFkZXJSaWdodCB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJpZ2h0QWxpZ25UZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50b3BQYWRkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbGRlcnNcbiJdfQ== */\n/*@ sourceURL=/Users/davidhovey/SaintFame/saintfame/pages/holders.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Holders);

/***/ }),

/***/ "./public/assets/logo/logo.png":
/*!*************************************!*\
  !*** ./public/assets/logo/logo.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAYCAYAAABTE9enAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAvZSURBVHgB7Vt9cBVXFf8RwhC+kk1KCB9iFqTq1JnyLGDRtvKw0xmoo4SpVDtlSNqx4BdN8A9xGMc8/qgtf1QCtFaqTh4KHaXaJNSBaoHEAWy1Qh6O1FJL3iJNpxaT3QQoIJD1nPt239u3b79f2tCZ/jInbz/Onnvuvb8992svUAiJpJGkkyRNovsI69XbbMRJ2khUQ4d/W0lkREPcSMe0l3awx343k3T7+AbjuRbk8qe66Dbb0vUT1SNNJzj57Gffnu+4cc1a1m3G9Q8a4sjnTdFl3YjglWeXNDIF3eyj14xwaA1gT4b3y2f6FiSPTK4YgpPMTdhvySNfMZsfquGnl9jz3eRw33reZOQ7qiCgnuSg65V3J2xGYZ15ibXsOp3SazYVxsWhT9uL9Kx+qHN06F4yoxN6qZxXKeK3qhm6+XxtGjqfIzypRSZLKqFWb0F6tppJs/YU1Iq1eRWsmn6zP6TD6aqcB4tvrN9oPiM15vxj3SmtefkQMjaWZ0/3E7bHdthf5EjtBNnwR1+Gxd2vY19axwlVx6u6l/TjJfVRfFe1Vaa4xvcMvXQrHtGrUOFU8UFEbca3dau97UiolSgvsDMbH1E7kdRN30/hj+pa3G+tl3oEg+CehEn6FmxIW9L2kBPqXvw0LWO6ldQYZTGYKCGO1zwDZcLS8F2D3sXAxa7MMRFOGzO78I25fBTamfnZ6wmSjR4m4+wkkQxEKoyRCxXOJYH/PJA5nlAHTGtztKP13o7TF49grnlhMr0mUlOh4hUFOHMLtCEVEqf7UYrRJWHjjM0OnVLJoMumwt2dxqW4Q9mL7TJC4ihOaPOxgm1rRCIQsQq8VNBLCdfT71sIA7KnBbFHOtpR/FaSUF5gYyt2Ko34kWycrkMmv25gvTSRmZrE5+hkBsKA/boF92gqBkVZjzYMtvPN6QeQGv8FfBIRMJEIpW4CyldDK1/l3NyUTkcZE/NChziNG5f/5GIyQRKbTEUxPu6sQBEUl45Au9KDsun7gNHO5CsrfxBlF/fj5NUzmMrEr3YpXn6+pAqX3n0eZTOJzKVTEQnCzni8/e4+UQ4yyQ6byqMkU3+NxzEdU8oQEvzMAM7hZnz80iosc8w1E60Od6IDB6CRbhCsxgotqL1j+F3ZVFQ72rkVN0vUQigv4BDbWmJc9qrnhd/AV/E13I2wYL8+hpkvP4s/yHRaWUL/GvjGJPo/7nOiXxcJHMmYYBWrvfU4nZpcQ5xApp/nBBFRx91B5eeBifdDoq6GYwS3QJpxGLXjbsNxHz1M/EomH356fpi4MvtSO5WpuDYPNyEq4liA+/BFz/aDo10nvUvULCMIgtqbh09pfpH0YayUqfugGKcJuHczRT0vo5clKu7EQrOM5zKhF/GR9B1v4gRBaS0R+wb/wYCN1NxPduprCTtOXRcrmHjcPQgAQWqK5se5S+CG0ZWQonQznOyAW0T3wRHdGxU5pQpqomegRvHTC0PqIM096+zHLwL5HYLUobsaVlRSaRiQmNCC3WPnoWhcPh5c10bqJIIPIIqBNK0DtQNPwdNTL8IHxTVVBAiZpOhA4YTjeC2wbthI7QenfrMbmNQ0SDVPEwg/y+ULGlOYhwoTWgwuEHKa5XIKGLJU1WASuKogFJjUVbnsJfE+kXryptwA0QmcD3OAGxXnd2aJ3I5hBg+EWvCrUM8MN6nDoAHL8V6Seht2mdztYEIrJJIRUQKDyXy2KTO70bce2n/XIRKqEgWkjuM6AM+eRI3U/LKffTgbILZgGMFkXo614jcsRprUNM2mIBM8ExgGUmsYpCmUx2i0+VfzUm0p/aPih3zpEE3XfTn4oJAHYixc6URqaaiIhpVJzejPTOLx5NtijDA4SvPLytN7Y+dm8uoFzj8T+SKN5fsT2RaPc5TCMCBJxXKapszSROQoZDZhkjrKlF6xWIrPy4exM3U7dUOQIXUk7MdL2hEck9JiKnEBfohvalX4LJd3nOeh60jaxtwIpfZ1UQmhBypi3vXTmUqlRZTIMwREBJPU5ushzdG9n+GuweCOvP540XhjVOE1v3yxH735ryHnJOGizrlSaIFARgQ8gA1E8HbQgoxyI2plRIDTPHUaLxY1OAuKv+DvyhI8JBvTieLlLzJtZRRukvmAuxzcx1Ou/Aty3/cRCVzRZpQtBpbuR6QXa5ihINNShG17FJJZKCICvR8Yye4HzVPLnDYvpmAY6rkHb5o2UiXGgai0ge2Q3r6XFioUhEZ5fbRVNTtsfeqRRheiEVrBe4gUTmI4MJKkjtH6nYXURWEzdph1lDIXVmI8l1vbA63iW5DMpj/MSJ/JXOxihAkmtdPS9IeA6Gqk8E8MF5jUbXgCIwEm9Tb8QEFE6PS3BwdST+IZ2bgkVgrFVFn1U1B4MYAHPzXJTJT0GwjZ4Rehw0R+Tn84In4xg9XrDV00ml8nVs39sQW/RFAwsfxW6jbiSTGrEABamLRX4kty2CitYlD7GXZr96CRpy9jr9CxcWtRdmFlwpLi+zJ+5Dn/G/HdRSCKMZn5u4tica0fWv9GfCBxDK9qjXhEWYNmjQdwi6kxDfpdxlwi6d1Yo1AcC1TePFvghXqaO8ik70tqiUe8/AIExXxaSkcIVKJcugu3Sc9hKw5Sm0VL8dlVWXNhRUGRnXOOvpd9Jqgq1kDqvYt0A5La6MIUFWPNpfPrjNTGtJ432Q7hb9JW7JKfxrNSF17hSwrJchiLNafR61pncXwGn8AsmabIlKCk7oPmqsddE/44KQipm7BKtCZBSa3ifNDon+ePBdlVWXNhRaZZDgVFgPvdjP+95m6Hoy5/iXdmfjBSX+4W/XjPF42X2/1WKKVGymlLMFJTRFdsl8S5X+tz9a3scwPwB7/60h50Kl5K7ThgHvLiDE2MitkTJrNYun8enZ5ecZQ+gu7YQtynqRjQ/NL6Pbo8y7qWBo8pWnKfhxVav4+9N/GOkiBC+5E6TZpH8Q+pg2JtVOzGC+ahGBSKTxvPNiIyLlARnzM+kNQ2eX9LzQNN/k7Yj9Qc8fkz08Ed8AQT1b4Mb8c1LXPfMs/tigt7sv6b33uIzx6NT15dcW5n9rAN/hC5asAG2Y1o3A+1ROUm5C/QJPkfRW/pCI46fpfC88wmmWjeV56Pe+GW1ib8XOO0iIDaKfzbUYeJtxE/Ecc9OCMtIHtOpNYNe2/gtMznJql1FC4o0DVtKdaIfLVQft3S9gL7sB6Pmy9ikv/xidiNQLMLepCdGVaZ3FKwz8vVDl+36IqdHbz7xGnnR+ns3E6LGx5z3DGilq/O6Uxc4bqrRC27NX/7kpt/vLPGsmvF/K5EFr5K0Gd2Oz9XvTVv+5OMYOjkZ6jp1Pdhe5p3hpi7Utbj69bdIXUuzzeZZf49PNjdhz+L51W8rHfgiW7LDpOk4ZdIay+lNYQTKon+Dg53W9IaMvOwFRvSfeQH65A/+m78uNNij5ewetzsPYQVVnsJwTk6b0CdfhJ7WVdn/YNo1eeI5SqhK3Q4je1oZlumnpeo7djWPRszzfTyQnzcLEBaMUzX7EKatx45youZbUa8hYkr2VLw7HwMBqmZkNVPQ2V9/uXtURbdmFHQ4nxSA/RpbdBrdkNlslnsZit2/FLDL7LHLxH7ify9eOKadQsWH4+dl7exttmapklQfoGmdaDbQuZOG3k4b8KvKcnc1q1ZfUhXrs/b4lSP4JCMdHR7PiznDT42EkDBPjzzmAnVaujJ4DFmjrT2tJhQTYa9IZs91cGeFMBeg6HLdd1jy5e1zHoM/5zS9hKrXwfhMAaMI9gub7t0Iv+DopiHnbRNN+Fjl52s87DXjdymTC/f08hFzgZ477Mz07UjAe9yaEI0NKBwR3sLgkd61mtFhkRDxi9XcNwlrYMWXSbTZuSnFYtgb8jDnukjXz9ms5lAflnHbWl7iWmj3prQKBcnF8G9QDVDuO/D/bcuF70GZAqn1tDnvmg7CmctZPCGhUxm+N6Aoddl04kbfnEBnHbQMdOsR26XSMpIt8WWLttLILNbImbJTxKF26WsiCOz0TaO3OxQh/FcCh9ixPF/DLSdPXDpDGkAAAAASUVORK5CYII="

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/holders.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidhovey/SaintFame/saintfame/pages/holders.tsx */"./pages/holders.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ethers");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-retina-image":
/*!*************************************!*\
  !*** external "react-retina-image" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-retina-image");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=holders.js.map