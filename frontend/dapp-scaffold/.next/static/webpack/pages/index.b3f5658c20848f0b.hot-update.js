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

/***/ "./src/components/Form.tsx":
/*!*********************************!*\
  !*** ./src/components/Form.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/knedlicc/Documents/study/sos-092023-final-task-knedlicc/frontend/dapp-scaffold/src/components/Form.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar Form = function Form() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      topic = _useState[0],\n      setTopic = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"flex flex-col border rounded-3xl p-4 opacity-80 m-2 mx-64\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n      className: \"bg-transparent text-white border rounded-xl p-2 mb-4 outline-none focus:border-purple-500\",\n      placeholder: \"Topic\",\n      type: \"text\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n      className: \"bg-transparent text-white p-3 h-40 border rounded-xl outline-none focus:border-purple-500\",\n      placeholder: \"Put your tweet message here\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 13\n  }, _this);\n};\n\n_s(Form, \"Ze7Bjxa2M59K+/eALj2XS5qkTig=\");\n\n_c = Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7QUFFTyxJQUFNQyxJQUFRLEdBQUcsU0FBWEEsSUFBVyxHQUFNO0VBQUE7O0VBQzFCLGdCQUEwQkQsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0VBQUEsSUFBT0UsS0FBUDtFQUFBLElBQWNDLFFBQWQ7O0VBQ0EsaUJBQThCSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7RUFBQSxJQUFPSSxPQUFQO0VBQUEsSUFBZ0JDLFVBQWhCOztFQUVBLG9CQUVRO0lBQUssU0FBUyxFQUFDLDJEQUFmO0lBQUEsd0JBQ0k7TUFBTyxTQUFTLEVBQUMsMkZBQWpCO01BQTZHLFdBQVcsRUFBQyxPQUF6SDtNQUFpSSxJQUFJLEVBQUM7SUFBdEk7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURKLGVBRUk7TUFBVSxTQUFTLEVBQUMsMkZBQXBCO01BQWdILFdBQVcsRUFBQztJQUE1SDtNQUFBO01BQUE7TUFBQTtJQUFBLFNBRko7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBRlI7QUFRSCxDQVpNOztHQUFNSjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybS50c3g/M2E1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEZDLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgRm9ybTogRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgW3RvcGljLCBzZXRUb3BpY10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgcmV0dXJuIChcbiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBib3JkZXIgcm91bmRlZC0zeGwgcC00IG9wYWNpdHktODAgbS0yIG14LTY0XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYm9yZGVyIHJvdW5kZWQteGwgcC0yIG1iLTQgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1wdXJwbGUtNTAwXCIgcGxhY2Vob2xkZXI9XCJUb3BpY1wiIHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBwLTMgaC00MCBib3JkZXIgcm91bmRlZC14bCBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDBcIiBwbGFjZWhvbGRlcj1cIlB1dCB5b3VyIHR3ZWV0IG1lc3NhZ2UgaGVyZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgKTtcbn07XG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZvcm0iLCJ0b3BpYyIsInNldFRvcGljIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Form.tsx\n"));

/***/ })

});