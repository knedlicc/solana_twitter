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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/knedlicc/Documents/study/sos-092023-final-task-knedlicc/frontend/dapp-scaffold/src/components/Form.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar Form = function Form() {\n  _s();\n\n  var _useConnection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useConnection)(),\n      connection = _useConnection.connection;\n\n  var _useWallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)(),\n      publicKey = _useWallet.publicKey;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"justify-center flex flex-col text-gray-800 border rounded-3xl p-4 shadow-lg max-w-2xl\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      className: \"title bg-transparent border border-gray-300 p-2 mb-4 outline-none\",\n      placeholder: \"Topic\",\n      type: \"text\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n      className: \"description bg-transparent sec p-3 h-60 border border-gray-300 outline-none\",\n      placeholder: \"Put your tweet message here\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"icons flex  m-2\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"count ml-auto text-xs font-semibold\",\n        children: \"0/300\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"buttons flex\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer ml-2 bg-indigo-500\",\n        children: \"Post\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 13\n  }, _this);\n};\n\n_s(Form, \"hd/vBS8IeyQWqhRyAqTBy/N4LDM=\", false, function () {\n  return [_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useConnection, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet];\n});\n\n_c = Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUtPLElBQU1FLElBQVEsR0FBRyxTQUFYQSxJQUFXLEdBQU07RUFBQTs7RUFDMUIscUJBQXVCRiwyRUFBYSxFQUFwQztFQUFBLElBQVFHLFVBQVIsa0JBQVFBLFVBQVI7O0VBQ0EsaUJBQXNCRix1RUFBUyxFQUEvQjtFQUFBLElBQVFHLFNBQVIsY0FBUUEsU0FBUjs7RUFHQSxvQkFFUTtJQUFLLFNBQVMsRUFBQyx1RkFBZjtJQUFBLHdCQUNJO01BQU8sU0FBUyxFQUFDLG1FQUFqQjtNQUFxRixXQUFXLEVBQUMsT0FBakc7TUFBeUcsSUFBSSxFQUFDO0lBQTlHO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FESixlQUVJO01BQVUsU0FBUyxFQUFDLDZFQUFwQjtNQUFrRyxXQUFXLEVBQUM7SUFBOUc7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUZKLGVBSUk7TUFBSyxTQUFTLEVBQUMsaUJBQWY7TUFBQSx1QkFFQTtRQUFLLFNBQVMsRUFBQyxxQ0FBZjtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUZBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FKSixlQVNJO01BQUssU0FBUyxFQUFDLGNBQWY7TUFBQSx1QkFDQTtRQUFLLFNBQVMsRUFBQyx1RkFBZjtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FUSjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FGUjtBQW1CSCxDQXhCTTs7R0FBTUY7VUFDY0YseUVBQ0RDOzs7S0FGYkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybS50c3g/M2E1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb25uZWN0aW9uLCB1c2VXYWxsZXQgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0JztcbmltcG9ydCB7IExBTVBPUlRTX1BFUl9TT0wsIFRyYW5zYWN0aW9uU2lnbmF0dXJlIH0gZnJvbSAnQHNvbGFuYS93ZWIzLmpzJztcbmltcG9ydCB7IEZDLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gXCIuLi91dGlscy9ub3RpZmljYXRpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBGb3JtOiBGQyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbm5lY3Rpb24gfSA9IHVzZUNvbm5lY3Rpb24oKTtcbiAgICBjb25zdCB7IHB1YmxpY0tleSB9ID0gdXNlV2FsbGV0KCk7XG5cbiAgICBcbiAgICByZXR1cm4gKFxuICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBmbGV4IGZsZXgtY29sIHRleHQtZ3JheS04MDAgYm9yZGVyIHJvdW5kZWQtM3hsIHAtNCBzaGFkb3ctbGcgbWF4LXctMnhsXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRpdGxlIGJnLXRyYW5zcGFyZW50IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcC0yIG1iLTQgb3V0bGluZS1ub25lXCIgcGxhY2Vob2xkZXI9XCJUb3BpY1wiIHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gYmctdHJhbnNwYXJlbnQgc2VjIHAtMyBoLTYwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgb3V0bGluZS1ub25lXCIgcGxhY2Vob2xkZXI9XCJQdXQgeW91ciB0d2VldCBtZXNzYWdlIGhlcmVcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnMgZmxleCAgbS0yXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50IG1sLWF1dG8gdGV4dC14cyBmb250LXNlbWlib2xkXCI+MC8zMDA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucyBmbGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4gYm9yZGVyIGJvcmRlci1pbmRpZ28tNTAwIHAtMSBweC00IGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgbWwtMiBiZy1pbmRpZ28tNTAwXCI+UG9zdDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuXG4gICAgICAgIFxuICAgICk7XG59O1xuXG4iXSwibmFtZXMiOlsidXNlQ29ubmVjdGlvbiIsInVzZVdhbGxldCIsIkZvcm0iLCJjb25uZWN0aW9uIiwicHVibGljS2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Form.tsx\n"));

/***/ })

});