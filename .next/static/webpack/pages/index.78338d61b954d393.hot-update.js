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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar Home = function() {\n    var YouTubeGetID = function YouTubeGetID(url) {\n        var ID = '';\n        url = url.replace(/(>|<)/gi, '').split(/(vi\\/|v=|\\/v\\/|youtu\\.be\\/|\\/embed\\/)/);\n        if (url[2] !== undefined) {\n            ID = url[2].split(/[^0-9a-z_\\-]/i);\n            ID = ID[0];\n        } else {\n            ID = url;\n        }\n        return ID;\n    };\n    var _onReady = // 在播放器准备就绪后触发\n    function _onReady(event) {\n        // 這裡不能用pauseVideo()，pauseVideo()會導致一直在加載狀態  \n        event.target.stopVideo();\n    };\n    var _onError = // \t播放器中发生错误时触发\n    function _onError(event) {\n        console.log(event);\n    };\n    // 參數對照博客：https://juejin.cn/post/6844903897836814349\n    var opts = {\n        height: '665',\n        width: '1182',\n        playerVars: {\n            enablejsapi: 1,\n            autoplay: 1,\n            cc_load_policy: 0,\n            rel: 0,\n            showinfo: 0,\n            color: 'red',\n            modestbranding: false,\n            controls: 1,\n            iv_load_policy: 1\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n            lineNumber: 44,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                style: {\n                    textAlign: \"center\",\n                    fontSize: \"20px\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"簡介：可以觀看到按下按鈕後光在電纜中傳輸的狀況\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    margin: \"5px auto\",\n                    width: \"1182px\",\n                    height: \"665px\",\n                    border: \"1px solid black\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_youtube__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    videoId: YouTubeGetID('https://www.youtube.com/watch?v=Z0blPWAaaY8'),\n                    opts: opts,\n                    onReady: function(e) {\n                        return _onReady(e);\n                    },\n                    onError: function(e) {\n                        return _onError(e);\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                })\n            })\n        ]\n    }));\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxQztBQUNGOztBQUVuQyxHQUFLLENBQUNHLElBQUksR0FBQyxRQUNWLEdBRGMsQ0FBQztRQUNIQyxZQUFZLEdBQXJCLFFBQVEsQ0FBQ0EsWUFBWSxDQUFFQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixHQUFHLENBQUNDLEVBQUUsR0FBRyxDQUFFO1FBQ1hELEdBQUcsR0FBR0EsR0FBRyxDQUFDRSxPQUFPLFlBQVksQ0FBRSxHQUFFQyxLQUFLO1FBQ3RDLEVBQUUsRUFBRUgsR0FBRyxDQUFDLENBQUMsTUFBTUksU0FBUyxFQUFFLENBQUM7WUFDekJILEVBQUUsR0FBR0QsR0FBRyxDQUFDLENBQUMsRUFBRUcsS0FBSztZQUNqQkYsRUFBRSxHQUFHQSxFQUFFLENBQUMsQ0FBQztRQUNYLENBQUMsTUFBTSxDQUFDO1lBQ05BLEVBQUUsR0FBR0QsR0FBRztRQUNWLENBQUM7UUFDRCxNQUFNLENBQUNDLEVBQUU7SUFDWCxDQUFDO1FBb0JRSSxRQUFRLEdBRGpCLEVBQW9DO0lBQ3BDLFFBQVEsQ0FBQ0EsUUFBUSxDQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixFQUE2QztRQUNiQSxLQUEzQixDQUFDQyxNQUFNLENBQUNDLFNBQVM7SUFDeEIsQ0FBQztRQUVTQyxRQUFRLEdBRGxCLEVBQXFDO0lBQ3JDLFFBQVEsQ0FBRUEsUUFBUSxDQUFFSCxLQUFLLEVBQUUsQ0FBQztRQUMxQkksT0FBTyxDQUFDQyxHQUFHLENBQUNMLEtBQUs7SUFDbkIsQ0FBQztJQXpCRCxFQUFrRTtJQUNsRSxHQUFLLENBQUNNLElBQUksR0FBRyxDQUFDO1FBQ1pDLE1BQU0sRUFBRSxDQUFLO1FBQ2JDLEtBQUssRUFBRSxDQUFNO1FBQ2JDLFVBQVUsRUFBRSxDQUFDO1lBQ1hDLFdBQVcsRUFBRSxDQUFDO1lBQ2RDLFFBQVEsRUFBRSxDQUFDO1lBQ1hDLGNBQWMsRUFBRSxDQUFDO1lBQ2pCQyxHQUFHLEVBQUUsQ0FBQztZQUNOQyxRQUFRLEVBQUUsQ0FBQztZQUNYQyxLQUFLLEVBQUMsQ0FBSztZQUNYQyxjQUFjLEVBQUUsS0FBSztZQUNyQkMsUUFBUSxFQUFFLENBQUM7WUFDWEMsY0FBYyxFQUFFLENBQUM7UUFDbkIsQ0FBQztJQUNILENBQUM7SUFXSCxNQUFNLHVFQUNIQyxDQUFHOzs7Ozs7OztpRkFDREMsQ0FBQztnQkFBQ0MsS0FBSyxFQUFFLENBQUNDO29CQUFBQSxTQUFTLEVBQUMsQ0FBUTtvQkFBQ0MsUUFBUSxFQUFDLENBQU07Z0JBQUEsQ0FBQzs7Ozs7OzswQkFBRSxDQUF1Qjs7aUZBQ3RFSixDQUFHO2dCQUFDRSxLQUFLLEVBQUUsQ0FBQ0c7b0JBQUFBLE1BQU0sRUFBQyxDQUFVO29CQUFDaEIsS0FBSyxFQUFDLENBQVE7b0JBQUNELE1BQU0sRUFBQyxDQUFPO29CQUFDa0IsTUFBTSxFQUFDLENBQWlCO2dCQUFBLENBQUM7Ozs7Ozs7K0ZBQ3JGbEMscURBQU87b0JBQUNtQyxPQUFPLEVBQUVqQyxZQUFZLENBQUMsQ0FBNkM7b0JBQUdhLElBQUksRUFBRUEsSUFBSTtvQkFBRXFCLE9BQU8sRUFBRUMsUUFBUSxDQUFSQSxDQUFDO3dCQUFJN0IsTUFBTSxDQUFOQSxRQUFRLENBQUM2QixDQUFDOztvQkFBR0MsT0FBTyxFQUFFRCxRQUFRLENBQVJBLENBQUM7d0JBQUl6QixNQUFNLENBQU5BLFFBQVEsQ0FBQ3lCLENBQUM7Ozs7Ozs7Ozs7OztBQUlwSixDQUFDO0tBL0NLcEMsSUFBSTtBQWlEViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBZb3VUdWJlIGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xyXG5cclxuY29uc3QgSG9tZT0oKT0+e1xyXG4gICAgZnVuY3Rpb24gWW91VHViZUdldElEICh1cmwpIHtcclxuICAgICAgbGV0IElEID0gJydcclxuICAgICAgdXJsID0gdXJsLnJlcGxhY2UoLyg+fDwpL2dpLCAnJykuc3BsaXQoLyh2aVxcL3x2PXxcXC92XFwvfHlvdXR1XFwuYmVcXC98XFwvZW1iZWRcXC8pLylcclxuICAgICAgaWYgKHVybFsyXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgSUQgPSB1cmxbMl0uc3BsaXQoL1teMC05YS16X1xcLV0vaSlcclxuICAgICAgICBJRCA9IElEWzBdXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgSUQgPSB1cmxcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gSURcclxuICAgIH1cclxuXHJcbiAgICAvLyDlj4PmlbjlsI3nhafljZrlrqLvvJpodHRwczovL2p1ZWppbi5jbi9wb3N0LzY4NDQ5MDM4OTc4MzY4MTQzNDlcclxuICAgIGNvbnN0IG9wdHMgPSB7XHJcbiAgICAgIGhlaWdodDogJzY2NScsXHJcbiAgICAgIHdpZHRoOiAnMTE4MicsXHJcbiAgICAgIHBsYXllclZhcnM6IHtcclxuICAgICAgICBlbmFibGVqc2FwaTogMSwvL+aYr+WQpuWFgeiuuOmAmui/hyBJRnJhbWUgQVBJIOaOp+WItuaSreaUvuWZqOOAgjAg5LiN5YWB6K6477yMMSDlhYHorrjvvIzpu5jorqQgMOOAglxyXG4gICAgICAgIGF1dG9wbGF5OiAxLC8v5Y+W5YC8MOWSjDHvvIzoh6rliqjmkq3mlL7jgILpu5jorqTkuLow44CC77yI5oiR6Ieq5bex6K+V5LqG5aW95YOP5LiN55Sf5pWI77yMU3RhY2sgT3ZlcmZsb3cg5LiK5pyJ5Lq66K+05pS55LqG77yJXHJcbiAgICAgICAgY2NfbG9hZF9wb2xpY3k6IDAsLy/lgLzvvJox44CC6buY6K6k5qC55o2u55So5oi35YGP5aW96K6+572u56Gu5a6a55qE44CC6K6+5Li6MeS8muS9v+ezu+e7n+WcqOm7mOiupOaDheWGteS4i+aYvuekuuWtl+W5le+8jOWNs+S9v+WcqOeUqOaIt+WFs+mXreWtl+W5leOAglxyXG4gICAgICAgIHJlbDogMCwvL+aSreaUvue7k+adn+WQjuaYvuekuuebuOWFs+inhumikeOAgjAg5LiN5pi+56S677yMMSDmmL7npLrjgILvvIjov5nkuKphcGnlt7Lnu4/kv67mlLnkuLow5o6o6I2Q5ZCM6aKR6YGT77yMMeaOqOiNkOebuOWFs++8iVxyXG4gICAgICAgIHNob3dpbmZvOiAwLC8v5piv5ZCm5pi+56S66KeG6aKR5qCH6aKY5ZKM5LiK5Lyg6ICF562J5L+h5oGv44CCMCDkuI3mmL7npLrvvIwxIOaYvuekuuOAglxyXG4gICAgICAgIGNvbG9yOidyZWQnLC8v6L+b5bqm5p2h6aKc6Imy77yM5Y+q5pyJ5Lik56eN5Y+v6YCJIHJlZCDlkowgd2hpdGXvvIzorr7nva7miJAgd2hpdGUg5pe277yMbW9kZXN0YnJhbmRpbmcg5peg5pWI44CCXHJcbiAgICAgICAgbW9kZXN0YnJhbmRpbmc6IGZhbHNlLC8v5piv5ZCm5pi+56S6IFlvdVR1YmUg5b695qCH44CCXHJcbiAgICAgICAgY29udHJvbHM6IDEsLy/mmK/lkKbmmL7npLrmkq3mlL7lmajmjqfku7YgMCDkuI3mmL7npLrvvIwxIOaYvuekuu+8jOm7mOiupCAx44CCXHJcbiAgICAgICAgaXZfbG9hZF9wb2xpY3k6IDEsLy/mmL7npLrop4bpopHms6jph4rvvIzogIzorr7nva7kuLoz5LiN5Lya5pi+56S66KeG6aKR5rOo6YeK44CC6buY6K6k5YC85Li6MeOAglxyXG4gICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWcqOaSreaUvuWZqOWHhuWkh+Wwsee7quWQjuinpuWPkVxyXG4gICAgZnVuY3Rpb24gX29uUmVhZHkgKGV2ZW50KSB7XHJcbiAgICAgIC8vIOmAmeijoeS4jeiDveeUqHBhdXNlVmlkZW8oKe+8jHBhdXNlVmlkZW8oKeacg+WwjuiHtOS4gOebtOWcqOWKoOi8ieeLgOaFiyAgXHJcbiAgICAgIGV2ZW50LnRhcmdldC5zdG9wVmlkZW8oKVxyXG4gICAgfVxyXG4gICAgLy8gXHTmkq3mlL7lmajkuK3lj5HnlJ/plJnor6/ml7bop6blj5FcclxuICAgIGZ1bmN0aW9uICBfb25FcnJvciAoZXZlbnQpIHsgXHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KSAgICBcclxuICAgIH1cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLGZvbnRTaXplOlwiMjBweFwifX0+57Ch5LuL77ya5Y+v5Lul6KeA55yL5Yiw5oyJ5LiL5oyJ6YiV5b6M5YWJ5Zyo6Zu757qc5Lit5YKz6Ly455qE54uA5rOBPC9wPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOlwiNXB4IGF1dG9cIix3aWR0aDpcIjExODJweFwiLGhlaWdodDpcIjY2NXB4XCIsYm9yZGVyOlwiMXB4IHNvbGlkIGJsYWNrXCJ9fT5cclxuICAgICAgPFlvdVR1YmUgdmlkZW9JZD17WW91VHViZUdldElEKCdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVowYmxQV0FhYVk4Jyl9IG9wdHM9e29wdHN9IG9uUmVhZHk9e2UgPT4gX29uUmVhZHkoZSl9IG9uRXJyb3I9e2UgPT4gX29uRXJyb3IoZSl9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+ICAgIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIllvdVR1YmUiLCJIb21lIiwiWW91VHViZUdldElEIiwidXJsIiwiSUQiLCJyZXBsYWNlIiwic3BsaXQiLCJ1bmRlZmluZWQiLCJfb25SZWFkeSIsImV2ZW50IiwidGFyZ2V0Iiwic3RvcFZpZGVvIiwiX29uRXJyb3IiLCJjb25zb2xlIiwibG9nIiwib3B0cyIsImhlaWdodCIsIndpZHRoIiwicGxheWVyVmFycyIsImVuYWJsZWpzYXBpIiwiYXV0b3BsYXkiLCJjY19sb2FkX3BvbGljeSIsInJlbCIsInNob3dpbmZvIiwiY29sb3IiLCJtb2Rlc3RicmFuZGluZyIsImNvbnRyb2xzIiwiaXZfbG9hZF9wb2xpY3kiLCJkaXYiLCJwIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsIm1hcmdpbiIsImJvcmRlciIsInZpZGVvSWQiLCJvblJlYWR5IiwiZSIsIm9uRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});