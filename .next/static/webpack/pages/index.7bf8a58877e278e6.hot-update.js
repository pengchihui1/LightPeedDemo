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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var YouTubeGetID = function YouTubeGetID(url) {\n        var ID = '';\n        url = url.replace(/(>|<)/gi, '').split(/(vi\\/|v=|\\/v\\/|youtu\\.be\\/|\\/embed\\/)/);\n        if (url[2] !== undefined) {\n            ID = url[2].split(/[^0-9a-z_\\-]/i);\n            ID = ID[0];\n        } else {\n            ID = url;\n        }\n        return ID;\n    };\n    var _onReady = function _onReady(event) {\n        // 這裡不能用pauseVideo()，pauseVideo()會導致一直在加載狀態\n        event.target.stopVideo();\n    };\n    var _onError = function _onError(event) {\n        console.log(event);\n    };\n    _s();\n    var opts = {\n        height: '400',\n        width: '560',\n        playerVars: {\n            autoplay: 1\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n            lineNumber: 36,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                style: {\n                    \"textAlign\": \"center\",\n                    \"fontSize\": \"20px\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"簡介：可以觀看到按下後光在電纜中傳輸的狀況\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_youtube__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    videoId: YouTubeGetID('https://www.youtube.com/watch?v=Z0blPWAaaY8'),\n                    opts: opts,\n                    onReady: function(e) {\n                        return _onReady(e);\n                    },\n                    onError: function(e) {\n                        return _onError(e);\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                })\n            })\n        ]\n    }));\n};\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxQztBQUNGOzs7QUFFbkMsR0FBSyxDQUFDRyxJQUFJLEdBQUMsUUFDVixHQURjLENBQUM7UUFDREMsWUFBWSxHQUFyQixRQUFRLENBQUNBLFlBQVksQ0FBRUMsR0FBRyxFQUFFLENBQUM7UUFDM0IsR0FBRyxDQUFDQyxFQUFFLEdBQUcsQ0FBRTtRQUNYRCxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0UsT0FBTyxZQUFZLENBQUUsR0FBRUMsS0FBSztRQUN0QyxFQUFFLEVBQUVILEdBQUcsQ0FBQyxDQUFDLE1BQU1JLFNBQVMsRUFBRSxDQUFDO1lBQ3pCSCxFQUFFLEdBQUdELEdBQUcsQ0FBQyxDQUFDLEVBQUVHLEtBQUs7WUFDakJGLEVBQUUsR0FBR0EsRUFBRSxDQUFDLENBQUM7UUFDWCxDQUFDLE1BQU0sQ0FBQztZQUNOQSxFQUFFLEdBQUdELEdBQUc7UUFDVixDQUFDO1FBQ0QsTUFBTSxDQUFDQyxFQUFFO0lBQ1gsQ0FBQztRQVVNSSxRQUFRLEdBQWpCLFFBQVEsQ0FBQ0EsUUFBUSxDQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixFQUEyQztRQUNYQSxLQUEzQixDQUFDQyxNQUFNLENBQUNDLFNBQVM7SUFDeEIsQ0FBQztRQUNTQyxRQUFRLEdBQWxCLFFBQVEsQ0FBRUEsUUFBUSxDQUFFSCxLQUFLLEVBQUUsQ0FBQztRQUMxQkksT0FBTyxDQUFDQyxHQUFHLENBQUNMLEtBQUs7SUFDbkIsQ0FBQzs7SUFkQyxHQUFLLENBQUNNLElBQUksR0FBRyxDQUFDO1FBQ1pDLE1BQU0sRUFBRSxDQUFLO1FBQ2JDLEtBQUssRUFBRSxDQUFLO1FBQ1pDLFVBQVUsRUFBRSxDQUFDO1lBQ1hDLFFBQVEsRUFBRSxDQUFDO1FBQ2IsQ0FBQztJQUNILENBQUM7SUFTTHBCLGdEQUFTLENBQUMsUUFDWCxHQURlLENBQUM7SUFFZixDQUFDO0lBQ0QsTUFBTSx1RUFDSHFCLENBQUc7Ozs7Ozs7O2lGQUNEQyxDQUFDO2dCQUFDQyxLQUFLLEVBQUUsQ0FBQztvQkFBQSxDQUFXLFlBQUMsQ0FBUTtvQkFBQyxDQUFVLFdBQUMsQ0FBTTtnQkFBQSxDQUFDOzs7Ozs7OzBCQUFFLENBQXFCOztpRkFDeEVGLENBQUc7Ozs7Ozs7K0ZBQ0hwQixxREFBTztvQkFBQ3VCLE9BQU8sRUFBRXJCLFlBQVksQ0FBQyxDQUE2QztvQkFBR2EsSUFBSSxFQUFFQSxJQUFJO29CQUFFUyxPQUFPLEVBQUVDLFFBQVEsQ0FBUkEsQ0FBQzt3QkFBSWpCLE1BQU0sQ0FBTkEsUUFBUSxDQUFDaUIsQ0FBQzs7b0JBQUdDLE9BQU8sRUFBRUQsUUFBUSxDQUFSQSxDQUFDO3dCQUFJYixNQUFNLENBQU5BLFFBQVEsQ0FBQ2EsQ0FBQzs7Ozs7Ozs7Ozs7O0FBSXBKLENBQUM7R0F2Q0t4QixJQUFJO0tBQUpBLElBQUk7QUF5Q1YsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcclxuXHJcbmNvbnN0IEhvbWU9KCk9PntcclxuICAgICAgZnVuY3Rpb24gWW91VHViZUdldElEICh1cmwpIHtcclxuICAgICAgICBsZXQgSUQgPSAnJ1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC8oPnw8KS9naSwgJycpLnNwbGl0KC8odmlcXC98dj18XFwvdlxcL3x5b3V0dVxcLmJlXFwvfFxcL2VtYmVkXFwvKS8pXHJcbiAgICAgICAgaWYgKHVybFsyXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBJRCA9IHVybFsyXS5zcGxpdCgvW14wLTlhLXpfXFwtXS9pKVxyXG4gICAgICAgICAgSUQgPSBJRFswXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBJRCA9IHVybFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gSURcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgICBoZWlnaHQ6ICc0MDAnLFxyXG4gICAgICAgIHdpZHRoOiAnNTYwJyxcclxuICAgICAgICBwbGF5ZXJWYXJzOiB7XHJcbiAgICAgICAgICBhdXRvcGxheTogMVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9vblJlYWR5IChldmVudCkge1xyXG4gICAgICAvLyDpgJnoo6HkuI3og73nlKhwYXVzZVZpZGVvKCnvvIxwYXVzZVZpZGVvKCnmnIPlsI7oh7TkuIDnm7TlnKjliqDovInni4DmhYtcclxuICAgICAgZXZlbnQudGFyZ2V0LnN0b3BWaWRlbygpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiAgX29uRXJyb3IgKGV2ZW50KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KSAgICBcclxuICAgIH1cclxuICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgfSlcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBzdHlsZT17e1widGV4dEFsaWduXCI6XCJjZW50ZXJcIixcImZvbnRTaXplXCI6XCIyMHB4XCJ9fT7nsKHku4vvvJrlj6/ku6Xop4DnnIvliLDmjInkuIvlvozlhYnlnKjpm7vnupzkuK3lgrPovLjnmoTni4Dms4E8L3A+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxZb3VUdWJlIHZpZGVvSWQ9e1lvdVR1YmVHZXRJRCgnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1aMGJsUFdBYWFZOCcpfSBvcHRzPXtvcHRzfSBvblJlYWR5PXtlID0+IF9vblJlYWR5KGUpfSBvbkVycm9yPXtlID0+IF9vbkVycm9yKGUpfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiAgICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJZb3VUdWJlIiwiSG9tZSIsIllvdVR1YmVHZXRJRCIsInVybCIsIklEIiwicmVwbGFjZSIsInNwbGl0IiwidW5kZWZpbmVkIiwiX29uUmVhZHkiLCJldmVudCIsInRhcmdldCIsInN0b3BWaWRlbyIsIl9vbkVycm9yIiwiY29uc29sZSIsImxvZyIsIm9wdHMiLCJoZWlnaHQiLCJ3aWR0aCIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsImRpdiIsInAiLCJzdHlsZSIsInZpZGVvSWQiLCJvblJlYWR5IiwiZSIsIm9uRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});