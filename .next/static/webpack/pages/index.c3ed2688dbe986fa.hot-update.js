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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\n// import { YouTubeGetID, opts, _onReady, youtubeReg } from 'homework/lib/youtube'\nvar Home = function() {\n    var YouTubeGetID = function YouTubeGetID(url) {\n        var ID = '';\n        url = url.replace(/(>|<)/gi, '').split(/(vi\\/|v=|\\/v\\/|youtu\\.be\\/|\\/embed\\/)/);\n        if (url[2] !== undefined) {\n            ID = url[2].split(/[^0-9a-z_\\-]/i);\n            ID = ID[0];\n        } else {\n            ID = url;\n        }\n        return ID;\n    };\n    var _onReady = function _onReady(event) {\n        // 這裡不能用pauseVideo()，pauseVideo()會導致一直在加載狀態\n        event.target.stopVideo();\n    };\n    var opts = {\n        height: '390',\n        width: '640',\n        playerVars: {\n            // https://developers.google.com/youtube/player_parameters\n            autoplay: 1\n        }\n    };\n    var opts = {\n        height: '400',\n        width: '560',\n        playerVars: {\n            autoplay: 1\n        }\n    };\n    var youtubeReg = /^(https?\\:\\/\\/)?(www\\.)?(youtube\\.com|youtu\\.?be)\\/.+$/;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n            lineNumber: 41,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_youtube__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            videoId: YouTubeGetID('https://www.youtube.com/watch?v=Z0blPWAaaY8'),\n            opts: opts,\n            onReady: function(e) {\n                return _onReady(e);\n            },\n            onError: function(e) {\n                return _onError(e);\n            },\n            __source: {\n                fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 6\n            },\n            __self: _this\n        })\n    }));\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUNVOztBQUNuQyxFQUFrRjtBQUVsRixHQUFLLENBQUNFLElBQUksR0FBQyxRQUNWLEdBRGMsQ0FBQztRQVNQQyxZQUFZLEdBQXJCLFFBQVEsQ0FBQ0EsWUFBWSxDQUFFQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixHQUFHLENBQUNDLEVBQUUsR0FBRyxDQUFFO1FBQ1hELEdBQUcsR0FBR0EsR0FBRyxDQUFDRSxPQUFPLFlBQVksQ0FBRSxHQUFFQyxLQUFLO1FBQ3RDLEVBQUUsRUFBRUgsR0FBRyxDQUFDLENBQUMsTUFBTUksU0FBUyxFQUFFLENBQUM7WUFDekJILEVBQUUsR0FBR0QsR0FBRyxDQUFDLENBQUMsRUFBRUcsS0FBSztZQUNqQkYsRUFBRSxHQUFHQSxFQUFFLENBQUMsQ0FBQztRQUNYLENBQUMsTUFBTSxDQUFDO1lBQ05BLEVBQUUsR0FBR0QsR0FBRztRQUNWLENBQUM7UUFDRCxNQUFNLENBQUNDLEVBQUU7SUFDWCxDQUFDO1FBVVFJLFFBQVEsR0FBakIsUUFBUSxDQUFDQSxRQUFRLENBQUVDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLEVBQTJDO1FBQzNDQSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUztJQUN4QixDQUFDO0lBL0JDLEdBQUssQ0FBQ0MsSUFBSSxHQUFHLENBQUM7UUFDVkMsTUFBTSxFQUFFLENBQUs7UUFDYkMsS0FBSyxFQUFFLENBQUs7UUFDWkMsVUFBVSxFQUFFLENBQUM7WUFDWCxFQUEwRDtZQUMxREMsUUFBUSxFQUFFLENBQUM7UUFDYixDQUFDO0lBQ0wsQ0FBQztJQWFILEdBQUssQ0FBQ0osSUFBSSxHQUFHLENBQUM7UUFDWkMsTUFBTSxFQUFFLENBQUs7UUFDYkMsS0FBSyxFQUFFLENBQUs7UUFDWkMsVUFBVSxFQUFFLENBQUM7WUFDWEMsUUFBUSxFQUFFLENBQUM7UUFDYixDQUFDO0lBQ0gsQ0FBQztJQU9ELEdBQUssQ0FBQ0MsVUFBVTtJQUNkLE1BQU0sc0VBQ0hDLENBQUc7Ozs7Ozs7dUZBQ0ZsQixxREFBTztZQUFDbUIsT0FBTyxFQUFFakIsWUFBWSxDQUFDLENBQTZDO1lBQUdVLElBQUksRUFBRUEsSUFBSTtZQUFFUSxPQUFPLEVBQUVDLFFBQVEsQ0FBUkEsQ0FBQztnQkFBSWIsTUFBTSxDQUFOQSxRQUFRLENBQUNhLENBQUM7O1lBQUdDLE9BQU8sRUFBRUQsUUFBUSxDQUFSQSxDQUFDO2dCQUFJRSxNQUFNLENBQU5BLFFBQVEsQ0FBQ0YsQ0FBQzs7Ozs7Ozs7OztBQUduSixDQUFDO0tBeENLcEIsSUFBSTtBQTBDViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBZb3VUdWJlIGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xyXG4vLyBpbXBvcnQgeyBZb3VUdWJlR2V0SUQsIG9wdHMsIF9vblJlYWR5LCB5b3V0dWJlUmVnIH0gZnJvbSAnaG9tZXdvcmsvbGliL3lvdXR1YmUnXHJcblxyXG5jb25zdCBIb21lPSgpPT57XHJcbiAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgaGVpZ2h0OiAnMzkwJyxcclxuICAgICAgd2lkdGg6ICc2NDAnLFxyXG4gICAgICBwbGF5ZXJWYXJzOiB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9wbGF5ZXJfcGFyYW1ldGVyc1xyXG4gICAgICAgIGF1dG9wbGF5OiAxLFxyXG4gICAgICB9LFxyXG4gIH07XHJcbmZ1bmN0aW9uIFlvdVR1YmVHZXRJRCAodXJsKSB7XHJcbiAgbGV0IElEID0gJydcclxuICB1cmwgPSB1cmwucmVwbGFjZSgvKD58PCkvZ2ksICcnKS5zcGxpdCgvKHZpXFwvfHY9fFxcL3ZcXC98eW91dHVcXC5iZVxcL3xcXC9lbWJlZFxcLykvKVxyXG4gIGlmICh1cmxbMl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgSUQgPSB1cmxbMl0uc3BsaXQoL1teMC05YS16X1xcLV0vaSlcclxuICAgIElEID0gSURbMF1cclxuICB9IGVsc2Uge1xyXG4gICAgSUQgPSB1cmxcclxuICB9XHJcbiAgcmV0dXJuIElEXHJcbn1cclxuXHJcbmNvbnN0IG9wdHMgPSB7XHJcbiAgaGVpZ2h0OiAnNDAwJyxcclxuICB3aWR0aDogJzU2MCcsXHJcbiAgcGxheWVyVmFyczoge1xyXG4gICAgYXV0b3BsYXk6IDFcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9vblJlYWR5IChldmVudCkge1xyXG4gIC8vIOmAmeijoeS4jeiDveeUqHBhdXNlVmlkZW8oKe+8jHBhdXNlVmlkZW8oKeacg+WwjuiHtOS4gOebtOWcqOWKoOi8ieeLgOaFi1xyXG4gIGV2ZW50LnRhcmdldC5zdG9wVmlkZW8oKVxyXG59XHJcblxyXG5jb25zdCB5b3V0dWJlUmVnID0gL14oaHR0cHM/XFw6XFwvXFwvKT8od3d3XFwuKT8oeW91dHViZVxcLmNvbXx5b3V0dVxcLj9iZSlcXC8uKyQvXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiA+XHJcbiAgICAgPFlvdVR1YmUgdmlkZW9JZD17WW91VHViZUdldElEKCdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVowYmxQV0FhYVk4Jyl9IG9wdHM9e29wdHN9IG9uUmVhZHk9e2UgPT4gX29uUmVhZHkoZSl9IG9uRXJyb3I9e2UgPT4gX29uRXJyb3IoZSl9IC8+XHJcbiAgICA8L2Rpdj4gICAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sIm5hbWVzIjpbIlJlYWN0IiwiWW91VHViZSIsIkhvbWUiLCJZb3VUdWJlR2V0SUQiLCJ1cmwiLCJJRCIsInJlcGxhY2UiLCJzcGxpdCIsInVuZGVmaW5lZCIsIl9vblJlYWR5IiwiZXZlbnQiLCJ0YXJnZXQiLCJzdG9wVmlkZW8iLCJvcHRzIiwiaGVpZ2h0Iiwid2lkdGgiLCJwbGF5ZXJWYXJzIiwiYXV0b3BsYXkiLCJ5b3V0dWJlUmVnIiwiZGl2IiwidmlkZW9JZCIsIm9uUmVhZHkiLCJlIiwib25FcnJvciIsIl9vbkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});