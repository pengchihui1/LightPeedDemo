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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar Home = function() {\n    var YouTubeGetID = function YouTubeGetID(url) {\n        var ID = '';\n        url = url.replace(/(>|<)/gi, '').split(/(vi\\/|v=|\\/v\\/|youtu\\.be\\/|\\/embed\\/)/);\n        if (url[2] !== undefined) {\n            ID = url[2].split(/[^0-9a-z_\\-]/i);\n            ID = ID[0];\n        } else {\n            ID = url;\n        }\n        return ID;\n    };\n    var _onReady = function _onReady(event) {\n        // 這裡不能用pauseVideo()，pauseVideo()會導致一直在加載狀態\n        event.target.stopVideo();\n    };\n    var _onError = function _onError(event) {\n        console.log(event);\n    };\n    // 參數對照博客：https://juejin.cn/post/6844903897836814349\n    var opts = {\n        height: '665',\n        width: '1182',\n        playerVars: {\n            enablejsapi: 1,\n            autoplay: 1,\n            cc_load_policy: 0,\n            rel: 0,\n            showinfo: 0,\n            color: 'red',\n            modestbranding: false\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n            lineNumber: 40,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                style: {\n                    textAlign: \"center\",\n                    fontSize: \"20px\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"簡介：可以觀看到按下按鈕後光在電纜中傳輸的狀況\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    margin: \"5px auto\",\n                    width: \"1182px\",\n                    height: \"665px\",\n                    border: \"1px solid black\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_youtube__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    videoId: YouTubeGetID('https://www.youtube.com/watch?v=Z0blPWAaaY8'),\n                    opts: opts,\n                    onReady: function(e) {\n                        return _onReady(e);\n                    },\n                    onError: function(e) {\n                        return _onError(e);\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                })\n            })\n        ]\n    }));\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxQztBQUNGOztBQUVuQyxHQUFLLENBQUNHLElBQUksR0FBQyxRQUNWLEdBRGMsQ0FBQztRQUNIQyxZQUFZLEdBQXJCLFFBQVEsQ0FBQ0EsWUFBWSxDQUFFQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixHQUFHLENBQUNDLEVBQUUsR0FBRyxDQUFFO1FBQ1hELEdBQUcsR0FBR0EsR0FBRyxDQUFDRSxPQUFPLFlBQVksQ0FBRSxHQUFFQyxLQUFLO1FBQ3RDLEVBQUUsRUFBRUgsR0FBRyxDQUFDLENBQUMsTUFBTUksU0FBUyxFQUFFLENBQUM7WUFDekJILEVBQUUsR0FBR0QsR0FBRyxDQUFDLENBQUMsRUFBRUcsS0FBSztZQUNqQkYsRUFBRSxHQUFHQSxFQUFFLENBQUMsQ0FBQztRQUNYLENBQUMsTUFBTSxDQUFDO1lBQ05BLEVBQUUsR0FBR0QsR0FBRztRQUNWLENBQUM7UUFDRCxNQUFNLENBQUNDLEVBQUU7SUFDWCxDQUFDO1FBaUJRSSxRQUFRLEdBQWpCLFFBQVEsQ0FBQ0EsUUFBUSxDQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixFQUEyQztRQUNYQSxLQUEzQixDQUFDQyxNQUFNLENBQUNDLFNBQVM7SUFDeEIsQ0FBQztRQUNTQyxRQUFRLEdBQWxCLFFBQVEsQ0FBRUEsUUFBUSxDQUFFSCxLQUFLLEVBQUUsQ0FBQztRQUMxQkksT0FBTyxDQUFDQyxHQUFHLENBQUNMLEtBQUs7SUFDbkIsQ0FBQztJQXJCRCxFQUFrRTtJQUNsRSxHQUFLLENBQUNNLElBQUksR0FBRyxDQUFDO1FBQ1pDLE1BQU0sRUFBRSxDQUFLO1FBQ2JDLEtBQUssRUFBRSxDQUFNO1FBQ2JDLFVBQVUsRUFBRSxDQUFDO1lBQ1hDLFdBQVcsRUFBQyxDQUFDO1lBQ2JDLFFBQVEsRUFBRSxDQUFDO1lBQ1hDLGNBQWMsRUFBQyxDQUFDO1lBQ2hCQyxHQUFHLEVBQUMsQ0FBQztZQUNMQyxRQUFRLEVBQUMsQ0FBQztZQUNWQyxLQUFLLEVBQUMsQ0FBSztZQUNYQyxjQUFjLEVBQUMsS0FBSztRQUN0QixDQUFDO0lBQ0gsQ0FBQztJQVNILE1BQU0sdUVBQ0hDLENBQUc7Ozs7Ozs7O2lGQUNEQyxDQUFDO2dCQUFDQyxLQUFLLEVBQUUsQ0FBQ0M7b0JBQUFBLFNBQVMsRUFBQyxDQUFRO29CQUFDQyxRQUFRLEVBQUMsQ0FBTTtnQkFBQSxDQUFDOzs7Ozs7OzBCQUFFLENBQXVCOztpRkFDdEVKLENBQUc7Z0JBQUNFLEtBQUssRUFBRSxDQUFDRztvQkFBQUEsTUFBTSxFQUFDLENBQVU7b0JBQUNkLEtBQUssRUFBQyxDQUFRO29CQUFDRCxNQUFNLEVBQUMsQ0FBTztvQkFBQ2dCLE1BQU0sRUFBQyxDQUFpQjtnQkFBQSxDQUFDOzs7Ozs7OytGQUNyRmhDLHFEQUFPO29CQUFDaUMsT0FBTyxFQUFFL0IsWUFBWSxDQUFDLENBQTZDO29CQUFHYSxJQUFJLEVBQUVBLElBQUk7b0JBQUVtQixPQUFPLEVBQUVDLFFBQVEsQ0FBUkEsQ0FBQzt3QkFBSTNCLE1BQU0sQ0FBTkEsUUFBUSxDQUFDMkIsQ0FBQzs7b0JBQUdDLE9BQU8sRUFBRUQsUUFBUSxDQUFSQSxDQUFDO3dCQUFJdkIsTUFBTSxDQUFOQSxRQUFRLENBQUN1QixDQUFDOzs7Ozs7Ozs7Ozs7QUFJcEosQ0FBQztLQTNDS2xDLElBQUk7QUE2Q1YsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcclxuXHJcbmNvbnN0IEhvbWU9KCk9PntcclxuICAgIGZ1bmN0aW9uIFlvdVR1YmVHZXRJRCAodXJsKSB7XHJcbiAgICAgIGxldCBJRCA9ICcnXHJcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKC8oPnw8KS9naSwgJycpLnNwbGl0KC8odmlcXC98dj18XFwvdlxcL3x5b3V0dVxcLmJlXFwvfFxcL2VtYmVkXFwvKS8pXHJcbiAgICAgIGlmICh1cmxbMl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIElEID0gdXJsWzJdLnNwbGl0KC9bXjAtOWEtel9cXC1dL2kpXHJcbiAgICAgICAgSUQgPSBJRFswXVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIElEID0gdXJsXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIElEXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Y+D5pW45bCN54Wn5Y2a5a6i77yaaHR0cHM6Ly9qdWVqaW4uY24vcG9zdC82ODQ0OTAzODk3ODM2ODE0MzQ5XHJcbiAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICBoZWlnaHQ6ICc2NjUnLFxyXG4gICAgICB3aWR0aDogJzExODInLFxyXG4gICAgICBwbGF5ZXJWYXJzOiB7XHJcbiAgICAgICAgZW5hYmxlanNhcGk6MSwvL+aYr+WQpuWFgeiuuOmAmui/hyBJRnJhbWUgQVBJIOaOp+WItuaSreaUvuWZqOOAgjAg5LiN5YWB6K6477yMMSDlhYHorrjvvIzpu5jorqQgMOOAglxyXG4gICAgICAgIGF1dG9wbGF5OiAxLC8v5Y+W5YC8MOWSjDHvvIzoh6rliqjmkq3mlL7jgILpu5jorqTkuLow44CC77yI5oiR6Ieq5bex6K+V5LqG5aW95YOP5LiN55Sf5pWI77yMU3RhY2sgT3ZlcmZsb3cg5LiK5pyJ5Lq66K+05pS55LqG77yJXHJcbiAgICAgICAgY2NfbG9hZF9wb2xpY3k6MCwvL+WAvO+8mjHjgILpu5jorqTmoLnmja7nlKjmiLflgY/lpb3orr7nva7noa7lrprnmoTjgILorr7kuLox5Lya5L2/57O757uf5Zyo6buY6K6k5oOF5Ya15LiL5pi+56S65a2X5bmV77yM5Y2z5L2/5Zyo55So5oi35YWz6Zet5a2X5bmV44CCXHJcbiAgICAgICAgcmVsOjAsLy/mkq3mlL7nu5PmnZ/lkI7mmL7npLrnm7jlhbPop4bpopHjgIIwIOS4jeaYvuekuu+8jDEg5pi+56S644CC77yI6L+Z5LiqYXBp5bey57uP5L+u5pS55Li6MOaOqOiNkOWQjOmikemBk++8jDHmjqjojZDnm7jlhbPvvIlcclxuICAgICAgICBzaG93aW5mbzowLC8v5piv5ZCm5pi+56S66KeG6aKR5qCH6aKY5ZKM5LiK5Lyg6ICF562J5L+h5oGv44CCMCDkuI3mmL7npLrvvIwxIOaYvuekuuOAglxyXG4gICAgICAgIGNvbG9yOidyZWQnLC8v6L+b5bqm5p2h6aKc6Imy77yM5Y+q5pyJ5Lik56eN5Y+v6YCJIHJlZCDlkowgd2hpdGXvvIzorr7nva7miJAgd2hpdGUg5pe277yMbW9kZXN0YnJhbmRpbmcg5peg5pWI44CCXHJcbiAgICAgICAgbW9kZXN0YnJhbmRpbmc6ZmFsc2UsLy/mmK/lkKbmmL7npLogWW91VHViZSDlvr3moIfjgIJcclxuICAgICAgfSxcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfb25SZWFkeSAoZXZlbnQpIHtcclxuICAgICAgLy8g6YCZ6KOh5LiN6IO955SocGF1c2VWaWRlbygp77yMcGF1c2VWaWRlbygp5pyD5bCO6Ie05LiA55u05Zyo5Yqg6LyJ54uA5oWLXHJcbiAgICAgIGV2ZW50LnRhcmdldC5zdG9wVmlkZW8oKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gIF9vbkVycm9yIChldmVudCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudCkgICAgXHJcbiAgICB9XHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIixmb250U2l6ZTpcIjIwcHhcIn19PuewoeS7i++8muWPr+S7peingOeci+WIsOaMieS4i+aMiemIleW+jOWFieWcqOmbu+e6nOS4reWCs+i8uOeahOeLgOazgTwvcD5cclxuICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjpcIjVweCBhdXRvXCIsd2lkdGg6XCIxMTgycHhcIixoZWlnaHQ6XCI2NjVweFwiLGJvcmRlcjpcIjFweCBzb2xpZCBibGFja1wifX0+XHJcbiAgICAgIDxZb3VUdWJlIHZpZGVvSWQ9e1lvdVR1YmVHZXRJRCgnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1aMGJsUFdBYWFZOCcpfSBvcHRzPXtvcHRzfSBvblJlYWR5PXtlID0+IF9vblJlYWR5KGUpfSBvbkVycm9yPXtlID0+IF9vbkVycm9yKGUpfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiAgICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJZb3VUdWJlIiwiSG9tZSIsIllvdVR1YmVHZXRJRCIsInVybCIsIklEIiwicmVwbGFjZSIsInNwbGl0IiwidW5kZWZpbmVkIiwiX29uUmVhZHkiLCJldmVudCIsInRhcmdldCIsInN0b3BWaWRlbyIsIl9vbkVycm9yIiwiY29uc29sZSIsImxvZyIsIm9wdHMiLCJoZWlnaHQiLCJ3aWR0aCIsInBsYXllclZhcnMiLCJlbmFibGVqc2FwaSIsImF1dG9wbGF5IiwiY2NfbG9hZF9wb2xpY3kiLCJyZWwiLCJzaG93aW5mbyIsImNvbG9yIiwibW9kZXN0YnJhbmRpbmciLCJkaXYiLCJwIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsIm1hcmdpbiIsImJvcmRlciIsInZpZGVvSWQiLCJvblJlYWR5IiwiZSIsIm9uRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});