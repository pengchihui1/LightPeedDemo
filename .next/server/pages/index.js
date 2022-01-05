"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ \"react-youtube\");\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Home = ()=>{\n    function YouTubeGetID(url) {\n        let ID = '';\n        url = url.replace(/(>|<)/gi, '').split(/(vi\\/|v=|\\/v\\/|youtu\\.be\\/|\\/embed\\/)/);\n        if (url[2] !== undefined) {\n            ID = url[2].split(/[^0-9a-z_\\-]/i);\n            ID = ID[0];\n        } else {\n            ID = url;\n        }\n        return ID;\n    }\n    const opts = {\n        height: '665',\n        width: '1182',\n        playerVars: {\n            enablejsapi: 0,\n            autoplay: 1,\n            cc_load_policy: 0,\n            rel: 0,\n            showinfo: 0,\n            color: 'red',\n            modestbranding: false,\n            controls: 1,\n            iv_load_policy: 1,\n            showinfo: 0\n        }\n    };\n    // 在播放器准备就绪后触发\n    function _onReady(event) {\n        // 這裡不能用pauseVideo()，pauseVideo()會導致一直在加載狀態  \n        event.target.stopVideo();\n    }\n    // \t播放器中发生错误时触发\n    function _onError(event) {\n        console.log(event);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n            lineNumber: 44,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                style: {\n                    textAlign: \"center\",\n                    fontSize: \"20px\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: \"簡介：可以觀看到按下按鈕後光在電纜中傳輸的狀況\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    margin: \"5px auto\",\n                    width: \"1182px\",\n                    height: \"665px\",\n                    border: \"1px solid black\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_youtube__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    videoId: YouTubeGetID('https://www.youtube.com/watch?v=Z0blPWAaaY8'),\n                    opts: opts,\n                    onReady: (e)=>_onReady(e)\n                    ,\n                    onError: (e)=>_onError(e)\n                    ,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\administration\\\\Desktop\\\\demo\\\\light-peed\\\\pages\\\\index.js\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    },\n                    __self: undefined\n                })\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQztBQUNGO0FBRW5DLEtBQUssQ0FBQ0csSUFBSSxPQUFLLENBQUM7YUFDSEMsWUFBWSxDQUFFQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixHQUFHLENBQUNDLEVBQUUsR0FBRyxDQUFFO1FBQ1hELEdBQUcsR0FBR0EsR0FBRyxDQUFDRSxPQUFPLFlBQVksQ0FBRSxHQUFFQyxLQUFLO1FBQ3RDLEVBQUUsRUFBRUgsR0FBRyxDQUFDLENBQUMsTUFBTUksU0FBUyxFQUFFLENBQUM7WUFDekJILEVBQUUsR0FBR0QsR0FBRyxDQUFDLENBQUMsRUFBRUcsS0FBSztZQUNqQkYsRUFBRSxHQUFHQSxFQUFFLENBQUMsQ0FBQztRQUNYLENBQUMsTUFBTSxDQUFDO1lBQ05BLEVBQUUsR0FBR0QsR0FBRztRQUNWLENBQUM7UUFDRCxNQUFNLENBQUNDLEVBQUU7SUFDWCxDQUFDO0lBRUQsS0FBSyxDQUFDSSxJQUFJLEdBQUcsQ0FBQztRQUNaQyxNQUFNLEVBQUUsQ0FBSztRQUNiQyxLQUFLLEVBQUUsQ0FBTTtRQUNiQyxVQUFVLEVBQUUsQ0FBQztZQUNYQyxXQUFXLEVBQUUsQ0FBQztZQUNkQyxRQUFRLEVBQUUsQ0FBQztZQUNYQyxjQUFjLEVBQUUsQ0FBQztZQUNqQkMsR0FBRyxFQUFFLENBQUM7WUFDTkMsUUFBUSxFQUFFLENBQUM7WUFDWEMsS0FBSyxFQUFDLENBQUs7WUFDWEMsY0FBYyxFQUFFLEtBQUs7WUFDckJDLFFBQVEsRUFBRSxDQUFDO1lBQ1hDLGNBQWMsRUFBRSxDQUFDO1lBQ2pCSixRQUFRLEVBQUcsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRUQsRUFBYzthQUNpQkssUUFBZCxDQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixFQUE2QztRQUNiQSxLQUEzQixDQUFDQyxNQUFNLENBQUNDLFNBQVM7SUFDeEIsQ0FBQztJQUNELEVBQWU7YUFDaUJDLFFBQWQsQ0FBRUgsS0FBSyxFQUFFLENBQUM7UUFDMUJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxLQUFLO0lBQ25CLENBQUM7SUFDSCxNQUFNLHVFQUNITSxDQUFHOzs7Ozs7OztpRkFDREMsQ0FBQztnQkFBQ0MsS0FBSyxFQUFFLENBQUNDO29CQUFBQSxTQUFTLEVBQUMsQ0FBUTtvQkFBQ0MsUUFBUSxFQUFDLENBQU07Z0JBQUEsQ0FBQzs7Ozs7OzswQkFBRSxDQUF1Qjs7aUZBQ3RFSixDQUFHO2dCQUFDRSxLQUFLLEVBQUUsQ0FBQ0c7b0JBQUFBLE1BQU0sRUFBQyxDQUFVO29CQUFDdkIsS0FBSyxFQUFDLENBQVE7b0JBQUNELE1BQU0sRUFBQyxDQUFPO29CQUFDeUIsTUFBTSxFQUFDLENBQWlCO2dCQUFBLENBQUM7Ozs7Ozs7K0ZBQ3JGbEMsc0RBQU87b0JBQUNtQyxPQUFPLEVBQUVqQyxZQUFZLENBQUMsQ0FBNkM7b0JBQUdNLElBQUksRUFBRUEsSUFBSTtvQkFBRTRCLE9BQU8sR0FBRUMsQ0FBQyxHQUFJaEIsUUFBUSxDQUFDZ0IsQ0FBQzs7b0JBQUdDLE9BQU8sR0FBRUQsQ0FBQyxHQUFJWixRQUFRLENBQUNZLENBQUM7Ozs7Ozs7Ozs7OztBQUlwSixDQUFDO0FBRUQsaUVBQWVwQyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcclxuXHJcbmNvbnN0IEhvbWU9KCk9PntcclxuICAgIGZ1bmN0aW9uIFlvdVR1YmVHZXRJRCAodXJsKSB7XHJcbiAgICAgIGxldCBJRCA9ICcnXHJcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKC8oPnw8KS9naSwgJycpLnNwbGl0KC8odmlcXC98dj18XFwvdlxcL3x5b3V0dVxcLmJlXFwvfFxcL2VtYmVkXFwvKS8pXHJcbiAgICAgIGlmICh1cmxbMl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIElEID0gdXJsWzJdLnNwbGl0KC9bXjAtOWEtel9cXC1dL2kpXHJcbiAgICAgICAgSUQgPSBJRFswXVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIElEID0gdXJsXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIElEXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgaGVpZ2h0OiAnNjY1JyxcclxuICAgICAgd2lkdGg6ICcxMTgyJyxcclxuICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgIGVuYWJsZWpzYXBpOiAwLCAvLzEg5YiZ5Y+v5YWB6K646YCa6L+HIGlmcmFtZSDmiJYgSmF2YVNjcmlwdCBQbGF5ZXIgQVBJIOiwg+eUqOadpeaOp+WItuaSreaUvuWZqOOAgum7mOiupOWAvOS4uiAw77yM6KGo56S65peg5rOV5L2/55So6L+Z5LqbIEFQSSDmjqfliLbmkq3mlL7lmajjgIJcclxuICAgICAgICBhdXRvcGxheTogMSwgLy/lj5blgLww5ZKMMe+8jOiHquWKqOaSreaUvuOAgum7mOiupOS4ujDjgILvvIjmiJHoh6rlt7Hor5Xkuoblpb3lg4/kuI3nlJ/mlYjvvIxTdGFjayBPdmVyZmxvdyDkuIrmnInkurror7TmlLnkuobvvIlcclxuICAgICAgICBjY19sb2FkX3BvbGljeTogMCwvL+WAvO+8mjHjgILpu5jorqTmoLnmja7nlKjmiLflgY/lpb3orr7nva7noa7lrprnmoTjgILorr7kuLox5Lya5L2/57O757uf5Zyo6buY6K6k5oOF5Ya15LiL5pi+56S65a2X5bmV77yM5Y2z5L2/5Zyo55So5oi35YWz6Zet5a2X5bmV44CCXHJcbiAgICAgICAgcmVsOiAwLC8v5pKt5pS+57uT5p2f5ZCO5pi+56S655u45YWz6KeG6aKR44CCMCDkuI3mmL7npLrvvIwxIOaYvuekuuOAgu+8iOi/meS4qmFwaeW3sue7j+S/ruaUueS4ujDmjqjojZDlkIzpopHpgZPvvIwx5o6o6I2Q55u45YWz77yJXHJcbiAgICAgICAgc2hvd2luZm86IDAsLy/mmK/lkKbmmL7npLrop4bpopHmoIfpopjlkozkuIrkvKDogIXnrYnkv6Hmga/jgIIwIOS4jeaYvuekuu+8jDEg5pi+56S644CCXHJcbiAgICAgICAgY29sb3I6J3JlZCcsLy/ov5vluqbmnaHpopzoibLvvIzlj6rmnInkuKTnp43lj6/pgIkgcmVkIOWSjCB3aGl0Ze+8jOiuvue9ruaIkCB3aGl0ZSDml7bvvIxtb2Rlc3RicmFuZGluZyDml6DmlYjjgIJcclxuICAgICAgICBtb2Rlc3RicmFuZGluZzogZmFsc2UsLy/mmK/lkKbmmL7npLogWW91VHViZSDlvr3moIfjgIJcclxuICAgICAgICBjb250cm9sczogMSwvL+aYr+WQpuaYvuekuuaSreaUvuWZqOaOp+S7tiAwIOS4jeaYvuekuu+8jDEg5pi+56S677yM6buY6K6kIDHjgIJcclxuICAgICAgICBpdl9sb2FkX3BvbGljeTogMSwvL+aYvuekuuinhumikeazqOmHiu+8jOiAjOiuvue9ruS4ujPkuI3kvJrmmL7npLrop4bpopHms6jph4rjgILpu5jorqTlgLzkuLox44CCXHJcbiAgICAgICAgc2hvd2luZm8gOiAwLC8v5pyJ5Yqp5LqO56Gu5L+d5Zyo6KeG6aKR5byA5aeL5pKt5pS+5LmL5YmN5LiN5Zyo5pKt5pS+5Zmo5Lit5pi+56S66KeG6aKR5qCH6aKY5ZKM5LiK5Lyg6ICF5aeT5ZCN562J5L+h5oGvXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Zyo5pKt5pS+5Zmo5YeG5aSH5bCx57uq5ZCO6Kem5Y+RXHJcbiAgICBmdW5jdGlvbiBfb25SZWFkeSAoZXZlbnQpIHtcclxuICAgICAgLy8g6YCZ6KOh5LiN6IO955SocGF1c2VWaWRlbygp77yMcGF1c2VWaWRlbygp5pyD5bCO6Ie05LiA55u05Zyo5Yqg6LyJ54uA5oWLICBcclxuICAgICAgZXZlbnQudGFyZ2V0LnN0b3BWaWRlbygpXHJcbiAgICB9XHJcbiAgICAvLyBcdOaSreaUvuWZqOS4reWPkeeUn+mUmeivr+aXtuinpuWPkVxyXG4gICAgZnVuY3Rpb24gIF9vbkVycm9yIChldmVudCkgeyBcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQpICAgIFxyXG4gICAgfVxyXG4gIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIsZm9udFNpemU6XCIyMHB4XCJ9fT7nsKHku4vvvJrlj6/ku6Xop4DnnIvliLDmjInkuIvmjInpiJXlvozlhYnlnKjpm7vnupzkuK3lgrPovLjnmoTni4Dms4E8L3A+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46XCI1cHggYXV0b1wiLHdpZHRoOlwiMTE4MnB4XCIsaGVpZ2h0OlwiNjY1cHhcIixib3JkZXI6XCIxcHggc29saWQgYmxhY2tcIn19PlxyXG4gICAgICA8WW91VHViZSB2aWRlb0lkPXtZb3VUdWJlR2V0SUQoJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9WjBibFBXQWFhWTgnKX0gb3B0cz17b3B0c30gb25SZWFkeT17ZSA9PiBfb25SZWFkeShlKX0gb25FcnJvcj17ZSA9PiBfb25FcnJvcihlKX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gICAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiWW91VHViZSIsIkhvbWUiLCJZb3VUdWJlR2V0SUQiLCJ1cmwiLCJJRCIsInJlcGxhY2UiLCJzcGxpdCIsInVuZGVmaW5lZCIsIm9wdHMiLCJoZWlnaHQiLCJ3aWR0aCIsInBsYXllclZhcnMiLCJlbmFibGVqc2FwaSIsImF1dG9wbGF5IiwiY2NfbG9hZF9wb2xpY3kiLCJyZWwiLCJzaG93aW5mbyIsImNvbG9yIiwibW9kZXN0YnJhbmRpbmciLCJjb250cm9scyIsIml2X2xvYWRfcG9saWN5IiwiX29uUmVhZHkiLCJldmVudCIsInRhcmdldCIsInN0b3BWaWRlbyIsIl9vbkVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsInAiLCJzdHlsZSIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibWFyZ2luIiwiYm9yZGVyIiwidmlkZW9JZCIsIm9uUmVhZHkiLCJlIiwib25FcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-youtube":
/*!********************************!*\
  !*** external "react-youtube" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("react-youtube");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();