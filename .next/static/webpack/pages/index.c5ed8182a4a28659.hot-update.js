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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar Home = function() {\n    var YouTubeGetID = function YouTubeGetID(url) {\n        var ID = '';\n        url = url.replace(/(>|<)/gi, '').split(/(vi\\/|v=|\\/v\\/|youtu\\.be\\/|\\/embed\\/)/);\n        if (url[2] !== undefined) {\n            ID = url[2].split(/[^0-9a-z_\\-]/i);\n            ID = ID[0];\n        } else {\n            ID = url;\n        }\n        return ID;\n    };\n    var _onReady = function _onReady(event) {\n        // 這裡不能用pauseVideo()，pauseVideo()會導致一直在加載狀態\n        event.target.stopVideo();\n    };\n    var _onError = function _onError(event) {\n        console.log(event);\n    };\n    var opts = {\n        height: '665',\n        width: '1182',\n        playerVars: {\n            autoplay: 1\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n            lineNumber: 33,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                style: {\n                    textAlign: \"center\",\n                    fontSize: \"20px\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"簡介：可以觀看到按下按鈕後後光在電纜中傳輸的狀況\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    margin: \"5px auto\",\n                    width: \"1182px\",\n                    height: \"665px\",\n                    border: \"1px solid black\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_youtube__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    videoId: YouTubeGetID('https://www.youtube.com/watch?v=Z0blPWAaaY8'),\n                    opts: opts,\n                    onReady: function(e) {\n                        return _onReady(e);\n                    },\n                    onError: function(e) {\n                        return _onError(e);\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                })\n            })\n        ]\n    }));\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxQztBQUNGOztBQUVuQyxHQUFLLENBQUNHLElBQUksR0FBQyxRQUNWLEdBRGMsQ0FBQztRQUNEQyxZQUFZLEdBQXJCLFFBQVEsQ0FBQ0EsWUFBWSxDQUFFQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixHQUFHLENBQUNDLEVBQUUsR0FBRyxDQUFFO1FBQ1hELEdBQUcsR0FBR0EsR0FBRyxDQUFDRSxPQUFPLFlBQVksQ0FBRSxHQUFFQyxLQUFLO1FBQ3RDLEVBQUUsRUFBRUgsR0FBRyxDQUFDLENBQUMsTUFBTUksU0FBUyxFQUFFLENBQUM7WUFDekJILEVBQUUsR0FBR0QsR0FBRyxDQUFDLENBQUMsRUFBRUcsS0FBSztZQUNqQkYsRUFBRSxHQUFHQSxFQUFFLENBQUMsQ0FBQztRQUNYLENBQUMsTUFBTSxDQUFDO1lBQ05BLEVBQUUsR0FBR0QsR0FBRztRQUNWLENBQUM7UUFDRCxNQUFNLENBQUNDLEVBQUU7SUFDWCxDQUFDO1FBVU1JLFFBQVEsR0FBakIsUUFBUSxDQUFDQSxRQUFRLENBQUVDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLEVBQTJDO1FBQ1hBLEtBQTNCLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUztJQUN4QixDQUFDO1FBQ1NDLFFBQVEsR0FBbEIsUUFBUSxDQUFFQSxRQUFRLENBQUVILEtBQUssRUFBRSxDQUFDO1FBQzFCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsS0FBSztJQUNuQixDQUFDO0lBZEQsR0FBSyxDQUFDTSxJQUFJLEdBQUcsQ0FBQztRQUNaQyxNQUFNLEVBQUUsQ0FBSztRQUNiQyxLQUFLLEVBQUUsQ0FBTTtRQUNiQyxVQUFVLEVBQUUsQ0FBQztZQUNYQyxRQUFRLEVBQUUsQ0FBQztRQUNiLENBQUM7SUFDSCxDQUFDO0lBU0gsTUFBTSx1RUFDSEMsQ0FBRzs7Ozs7Ozs7aUZBQ0RDLENBQUM7Z0JBQUNDLEtBQUssRUFBRSxDQUFDQztvQkFBQUEsU0FBUyxFQUFDLENBQVE7b0JBQUNDLFFBQVEsRUFBQyxDQUFNO2dCQUFBLENBQUM7Ozs7Ozs7MEJBQUUsQ0FBd0I7O2lGQUN2RUosQ0FBRztnQkFBQ0UsS0FBSyxFQUFFLENBQUNHO29CQUFBQSxNQUFNLEVBQUMsQ0FBVTtvQkFBQ1IsS0FBSyxFQUFDLENBQVE7b0JBQUNELE1BQU0sRUFBQyxDQUFPO29CQUFDVSxNQUFNLEVBQUMsQ0FBaUI7Z0JBQUEsQ0FBQzs7Ozs7OzsrRkFDckYxQixxREFBTztvQkFBQzJCLE9BQU8sRUFBRXpCLFlBQVksQ0FBQyxDQUE2QztvQkFBR2EsSUFBSSxFQUFFQSxJQUFJO29CQUFFYSxPQUFPLEVBQUVDLFFBQVEsQ0FBUkEsQ0FBQzt3QkFBSXJCLE1BQU0sQ0FBTkEsUUFBUSxDQUFDcUIsQ0FBQzs7b0JBQUdDLE9BQU8sRUFBRUQsUUFBUSxDQUFSQSxDQUFDO3dCQUFJakIsTUFBTSxDQUFOQSxRQUFRLENBQUNpQixDQUFDOzs7Ozs7Ozs7Ozs7QUFJcEosQ0FBQztLQXBDSzVCLElBQUk7QUFzQ1YsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcclxuXHJcbmNvbnN0IEhvbWU9KCk9PntcclxuICAgICAgZnVuY3Rpb24gWW91VHViZUdldElEICh1cmwpIHtcclxuICAgICAgICBsZXQgSUQgPSAnJ1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC8oPnw8KS9naSwgJycpLnNwbGl0KC8odmlcXC98dj18XFwvdlxcL3x5b3V0dVxcLmJlXFwvfFxcL2VtYmVkXFwvKS8pXHJcbiAgICAgICAgaWYgKHVybFsyXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBJRCA9IHVybFsyXS5zcGxpdCgvW14wLTlhLXpfXFwtXS9pKVxyXG4gICAgICAgICAgSUQgPSBJRFswXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBJRCA9IHVybFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gSURcclxuICAgICAgfVxyXG5cclxuICAgIGNvbnN0IG9wdHMgPSB7XHJcbiAgICAgIGhlaWdodDogJzY2NScsXHJcbiAgICAgIHdpZHRoOiAnMTE4MicsXHJcbiAgICAgIHBsYXllclZhcnM6IHtcclxuICAgICAgICBhdXRvcGxheTogMVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX29uUmVhZHkgKGV2ZW50KSB7XHJcbiAgICAgIC8vIOmAmeijoeS4jeiDveeUqHBhdXNlVmlkZW8oKe+8jHBhdXNlVmlkZW8oKeacg+WwjuiHtOS4gOebtOWcqOWKoOi8ieeLgOaFi1xyXG4gICAgICBldmVudC50YXJnZXQuc3RvcFZpZGVvKClcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uICBfb25FcnJvciAoZXZlbnQpIHtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQpICAgIFxyXG4gICAgfVxyXG4gIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIsZm9udFNpemU6XCIyMHB4XCJ9fT7nsKHku4vvvJrlj6/ku6Xop4DnnIvliLDmjInkuIvmjInpiJXlvozlvozlhYnlnKjpm7vnupzkuK3lgrPovLjnmoTni4Dms4E8L3A+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46XCI1cHggYXV0b1wiLHdpZHRoOlwiMTE4MnB4XCIsaGVpZ2h0OlwiNjY1cHhcIixib3JkZXI6XCIxcHggc29saWQgYmxhY2tcIn19PlxyXG4gICAgICA8WW91VHViZSB2aWRlb0lkPXtZb3VUdWJlR2V0SUQoJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9WjBibFBXQWFhWTgnKX0gb3B0cz17b3B0c30gb25SZWFkeT17ZSA9PiBfb25SZWFkeShlKX0gb25FcnJvcj17ZSA9PiBfb25FcnJvcihlKX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gICAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiWW91VHViZSIsIkhvbWUiLCJZb3VUdWJlR2V0SUQiLCJ1cmwiLCJJRCIsInJlcGxhY2UiLCJzcGxpdCIsInVuZGVmaW5lZCIsIl9vblJlYWR5IiwiZXZlbnQiLCJ0YXJnZXQiLCJzdG9wVmlkZW8iLCJfb25FcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvcHRzIiwiaGVpZ2h0Iiwid2lkdGgiLCJwbGF5ZXJWYXJzIiwiYXV0b3BsYXkiLCJkaXYiLCJwIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsIm1hcmdpbiIsImJvcmRlciIsInZpZGVvSWQiLCJvblJlYWR5IiwiZSIsIm9uRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});