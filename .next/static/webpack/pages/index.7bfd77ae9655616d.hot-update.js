"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar Home = function() {\n    var YouTubeGetID = function YouTubeGetID(url) {\n        var ID = '';\n        url = url.replace(/(>|<)/gi, '').split(/(vi\\/|v=|\\/v\\/|youtu\\.be\\/|\\/embed\\/)/);\n        if (url[2] !== undefined) {\n            ID = url[2].split(/[^0-9a-z_\\-]/i);\n            ID = ID[0];\n        } else {\n            ID = url;\n        }\n        return ID;\n    };\n    var onPlayerReady = function onPlayerReady(event) {\n        event.target.playVideo();\n    };\n    var onPlayerStateChange = function onPlayerStateChange(event) {\n        if (event.data == YT.PlayerState.PLAYING && !done) {\n            setTimeout(stopVideo, 6000);\n            done = true;\n        }\n    };\n    var stopVideo = function stopVideo() {\n        player.stopVideo();\n    };\n    var _onReady = // 在播放器准备就绪后触发\n    function _onReady(event) {\n        // 這裡不能用pauseVideo()，pauseVideo()會導致一直在加載狀態  \n        event.target.stopVideo();\n    };\n    var _onError = // \t播放器中发生错误时触发\n    function _onError(event) {\n        console.log(event);\n    };\n    // 參數對照博客：https://juejin.cn/post/6844903897836814349\n    var opts = {\n        height: '665',\n        width: '1182',\n        playerVars: {\n            enablejsapi: 1,\n            autoplay: 1,\n            cc_load_policy: 0,\n            rel: 0,\n            showinfo: 0,\n            color: 'red',\n            modestbranding: false,\n            controls: 0,\n            iv_load_policy: 1\n        },\n        events: {\n            'onReady': onPlayerReady,\n            'onStateChange': onPlayerStateChange\n        }\n    };\n    var done = false;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n            lineNumber: 64,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                style: {\n                    textAlign: \"center\",\n                    fontSize: \"20px\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"簡介：可以觀看到按下按鈕後光在電纜中傳輸的狀況\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    margin: \"5px auto\",\n                    width: \"1182px\",\n                    height: \"665px\",\n                    border: \"1px solid black\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                    lineNumber: 66,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_youtube__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    videoId: YouTubeGetID('https://www.youtube.com/watch?v=Z0blPWAaaY8'),\n                    opts: opts,\n                    onReady: function(e) {\n                        return _onReady(e);\n                    },\n                    onError: function(e) {\n                        return _onError(e);\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                        lineNumber: 67,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                })\n            })\n        ]\n    }));\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLENBQUM7Ozs7Ozs7K0ZBQ3JGN0MscURBQU87b0JBQUM4QyxPQUFPLEVBQUU1QyxZQUFZLENBQUMsQ0FBNkM7b0JBQUd1QixJQUFJLEVBQUVBLElBQUk7b0JBQUVzQixPQUFPLEVBQUVDLFFBQVEsQ0FBUkEsQ0FBQzt3QkFBSTNCLE1BQU0sQ0FBTkEsUUFBUSxDQUFDMkIsQ0FBQzs7b0JBQUdDLE9BQU8sRUFBRUQsUUFBUSxDQUFSQSxDQUFDO3dCQUFJMUIsTUFBTSxDQUFOQSxRQUFRLENBQUMwQixDQUFDOzs7Ozs7Ozs7Ozs7QUFJcEosQ0FBQztLQW5FSy9DLElBQUk7QUFxRVYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcclxuXHJcbmNvbnN0IEhvbWU9KCk9PntcclxuICAgIGZ1bmN0aW9uIFlvdVR1YmVHZXRJRCAodXJsKSB7XHJcbiAgICAgIGxldCBJRCA9ICcnXHJcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKC8oPnw8KS9naSwgJycpLnNwbGl0KC8odmlcXC98dj18XFwvdlxcL3x5b3V0dVxcLmJlXFwvfFxcL2VtYmVkXFwvKS8pXHJcbiAgICAgIGlmICh1cmxbMl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIElEID0gdXJsWzJdLnNwbGl0KC9bXjAtOWEtel9cXC1dL2kpXHJcbiAgICAgICAgSUQgPSBJRFswXVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIElEID0gdXJsXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIElEXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Y+D5pW45bCN54Wn5Y2a5a6i77yaaHR0cHM6Ly9qdWVqaW4uY24vcG9zdC82ODQ0OTAzODk3ODM2ODE0MzQ5XHJcbiAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICBoZWlnaHQ6ICc2NjUnLFxyXG4gICAgICB3aWR0aDogJzExODInLFxyXG4gICAgICBwbGF5ZXJWYXJzOiB7XHJcbiAgICAgICAgZW5hYmxlanNhcGk6IDEsLy/mmK/lkKblhYHorrjpgJrov4cgSUZyYW1lIEFQSSDmjqfliLbmkq3mlL7lmajjgIIwIOS4jeWFgeiuuO+8jDEg5YWB6K6477yM6buY6K6kIDDjgIJcclxuICAgICAgICBhdXRvcGxheTogMSwvL+WPluWAvDDlkowx77yM6Ieq5Yqo5pKt5pS+44CC6buY6K6k5Li6MOOAgu+8iOaIkeiHquW3seivleS6huWlveWDj+S4jeeUn+aViO+8jFN0YWNrIE92ZXJmbG93IOS4iuacieS6uuivtOaUueS6hu+8iVxyXG4gICAgICAgIGNjX2xvYWRfcG9saWN5OiAwLC8v5YC877yaMeOAgum7mOiupOagueaNrueUqOaIt+WBj+Wlveiuvue9ruehruWumueahOOAguiuvuS4ujHkvJrkvb/ns7vnu5/lnKjpu5jorqTmg4XlhrXkuIvmmL7npLrlrZfluZXvvIzljbPkvb/lnKjnlKjmiLflhbPpl63lrZfluZXjgIJcclxuICAgICAgICByZWw6IDAsLy/mkq3mlL7nu5PmnZ/lkI7mmL7npLrnm7jlhbPop4bpopHjgIIwIOS4jeaYvuekuu+8jDEg5pi+56S644CC77yI6L+Z5LiqYXBp5bey57uP5L+u5pS55Li6MOaOqOiNkOWQjOmikemBk++8jDHmjqjojZDnm7jlhbPvvIlcclxuICAgICAgICBzaG93aW5mbzogMCwvL+aYr+WQpuaYvuekuuinhumikeagh+mimOWSjOS4iuS8oOiAheetieS/oeaBr+OAgjAg5LiN5pi+56S677yMMSDmmL7npLrjgIJcclxuICAgICAgICBjb2xvcjoncmVkJywvL+i/m+W6puadoeminOiJsu+8jOWPquacieS4pOenjeWPr+mAiSByZWQg5ZKMIHdoaXRl77yM6K6+572u5oiQIHdoaXRlIOaXtu+8jG1vZGVzdGJyYW5kaW5nIOaXoOaViOOAglxyXG4gICAgICAgIG1vZGVzdGJyYW5kaW5nOiBmYWxzZSwvL+aYr+WQpuaYvuekuiBZb3VUdWJlIOW+veagh+OAglxyXG4gICAgICAgIGNvbnRyb2xzOiAwLC8v5piv5ZCm5pi+56S65pKt5pS+5Zmo5o6n5Lu2IDAg5LiN5pi+56S677yMMSDmmL7npLrvvIzpu5jorqQgMeOAglxyXG4gICAgICAgIGl2X2xvYWRfcG9saWN5OiAxLC8v5pi+56S66KeG6aKR5rOo6YeK77yM6ICM6K6+572u5Li6M+S4jeS8muaYvuekuuinhumikeazqOmHiuOAgum7mOiupOWAvOS4ujHjgIJcclxuICAgICAgfSxcclxuICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgJ29uUmVhZHknOiBvblBsYXllclJlYWR5LFxyXG4gICAgICAgICdvblN0YXRlQ2hhbmdlJzogb25QbGF5ZXJTdGF0ZUNoYW5nZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25QbGF5ZXJSZWFkeShldmVudCkge1xyXG4gICAgICBldmVudC50YXJnZXQucGxheVZpZGVvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRvbmUgPSBmYWxzZTtcclxuICAgIGZ1bmN0aW9uIG9uUGxheWVyU3RhdGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LmRhdGEgPT0gWVQuUGxheWVyU3RhdGUuUExBWUlORyAmJiAhZG9uZSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoc3RvcFZpZGVvLCA2MDAwKTtcclxuICAgICAgICBkb25lID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0b3BWaWRlbygpIHtcclxuICAgICAgcGxheWVyLnN0b3BWaWRlbygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWcqOaSreaUvuWZqOWHhuWkh+Wwsee7quWQjuinpuWPkVxyXG4gICAgZnVuY3Rpb24gX29uUmVhZHkgKGV2ZW50KSB7XHJcbiAgICAgIC8vIOmAmeijoeS4jeiDveeUqHBhdXNlVmlkZW8oKe+8jHBhdXNlVmlkZW8oKeacg+WwjuiHtOS4gOebtOWcqOWKoOi8ieeLgOaFiyAgXHJcbiAgICAgIGV2ZW50LnRhcmdldC5zdG9wVmlkZW8oKVxyXG4gICAgfVxyXG4gICAgLy8gXHTmkq3mlL7lmajkuK3lj5HnlJ/plJnor6/ml7bop6blj5FcclxuICAgIGZ1bmN0aW9uICBfb25FcnJvciAoZXZlbnQpIHsgXHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KSAgICBcclxuICAgIH1cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLGZvbnRTaXplOlwiMjBweFwifX0+57Ch5LuL77ya5Y+v5Lul6KeA55yL5Yiw5oyJ5LiL5oyJ6YiV5b6M5YWJ5Zyo6Zu757qc5Lit5YKz6Ly455qE54uA5rOBPC9wPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOlwiNXB4IGF1dG9cIix3aWR0aDpcIjExODJweFwiLGhlaWdodDpcIjY2NXB4XCIsYm9yZGVyOlwiMXB4IHNvbGlkIGJsYWNrXCJ9fT5cclxuICAgICAgPFlvdVR1YmUgdmlkZW9JZD17WW91VHViZUdldElEKCdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVowYmxQV0FhYVk4Jyl9IG9wdHM9e29wdHN9IG9uUmVhZHk9e2UgPT4gX29uUmVhZHkoZSl9IG9uRXJyb3I9e2UgPT4gX29uRXJyb3IoZSl9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+ICAgIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIllvdVR1YmUiLCJIb21lIiwiWW91VHViZUdldElEIiwidXJsIiwiSUQiLCJyZXBsYWNlIiwic3BsaXQiLCJ1bmRlZmluZWQiLCJvblBsYXllclJlYWR5IiwiZXZlbnQiLCJ0YXJnZXQiLCJwbGF5VmlkZW8iLCJvblBsYXllclN0YXRlQ2hhbmdlIiwiZGF0YSIsIllUIiwiUGxheWVyU3RhdGUiLCJQTEFZSU5HIiwiZG9uZSIsInNldFRpbWVvdXQiLCJzdG9wVmlkZW8iLCJwbGF5ZXIiLCJfb25SZWFkeSIsIl9vbkVycm9yIiwiY29uc29sZSIsImxvZyIsIm9wdHMiLCJoZWlnaHQiLCJ3aWR0aCIsInBsYXllclZhcnMiLCJlbmFibGVqc2FwaSIsImF1dG9wbGF5IiwiY2NfbG9hZF9wb2xpY3kiLCJyZWwiLCJzaG93aW5mbyIsImNvbG9yIiwibW9kZXN0YnJhbmRpbmciLCJjb250cm9scyIsIml2X2xvYWRfcG9saWN5IiwiZXZlbnRzIiwiZGl2IiwicCIsInN0eWxlIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJtYXJnaW4iLCJib3JkZXIiLCJ2aWRlb0lkIiwib25SZWFkeSIsImUiLCJvbkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});