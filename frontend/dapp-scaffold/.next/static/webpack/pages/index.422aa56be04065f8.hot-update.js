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

/***/ "./src/views/home/index.tsx":
/*!**********************************!*\
  !*** ./src/views/home/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomeView: function() { return /* binding */ HomeView; }\n/* harmony export */ });\n/* harmony import */ var _Users_knedlicc_Documents_study_sos_092023_final_task_knedlicc_frontend_dapp_scaffold_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectDestructuringEmpty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.js\");\n/* harmony import */ var _components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/RequestAirdrop */ \"./src/components/RequestAirdrop.tsx\");\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../package.json */ \"./package.json\");\n/* harmony import */ var _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stores/useUserSOLBalanceStore */ \"./src/stores/useUserSOLBalanceStore.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/knedlicc/Documents/study/sos-092023-final-task-knedlicc/frontend/dapp-scaffold/src/views/home/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Next, React\n\n// Wallet\n // Components\n\n\n // Store\n\n\n\nvar HomeView = function HomeView(_ref) {\n  _s();\n\n  (0,_Users_knedlicc_Documents_study_sos_092023_final_task_knedlicc_frontend_dapp_scaffold_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  var wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet)();\n\n  var _useConnection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useConnection)(),\n      connection = _useConnection.connection;\n\n  var balance = (0,_stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function (s) {\n    return s.balance;\n  });\n\n  var _useUserSOLBalanceSto = (0,_stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      getUserSOLBalance = _useUserSOLBalanceSto.getUserSOLBalance;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (wallet.publicKey) {\n      console.log(wallet.publicKey.toBase58());\n      getUserSOLBalance(wallet.publicKey, connection);\n    }\n  }, [wallet.publicKey, connection, getUserSOLBalance]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"md:hero mx-auto p-4\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"md:hero-content flex flex-col\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"mt-6\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"text-sm font-normal align-bottom text-right text-slate-600 mt-4\",\n          children: [\"v\", _package_json__WEBPACK_IMPORTED_MODULE_3__.version]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n          className: \"text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4\",\n          children: \"Solana Next\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h4\", {\n        className: \"md:w-full text-2x1 md:text-4xl text-center text-slate-300 my-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n          children: \"Unleash the full power of blockchain with Solana and Next.js 13.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n          className: \"text-slate-500 text-2x1 leading-relaxed\",\n          children: \"Full-stack Solana applications made easy.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"relative group\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"max-w-md mx-auto mockup-code bg-primary border-2 border-[#5252529f] p-6 px-10 my-2\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"pre\", {\n            \"data-prefix\": \">\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"code\", {\n              className: \"truncate\",\n              children: [\"npx create-solana-dapp <dapp-name>\", \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"flex flex-col mt-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_2__.RequestAirdrop, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h4\", {\n          className: \"md:w-full text-2xl text-slate-300 my-2\",\n          children: wallet && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"flex flex-row justify-center\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              children: (balance || 0).toLocaleString()\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              className: \"text-slate-600 ml-2\",\n              children: \"SOL\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HomeView, \"Mf4qfiCLk4MA3CmEeGJoa3eP6Rk=\", false, function () {\n  return [_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useConnection, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = HomeView;\n\nvar _c;\n\n$RefreshReg$(_c, \"HomeView\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvaG9tZS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0NBR0E7O0FBQ0E7O0FBRU8sSUFBTU0sUUFBWSxHQUFHLFNBQWZBLFFBQWUsT0FBUztFQUFBOztFQUFBOztFQUNuQyxJQUFNQyxNQUFNLEdBQUdOLHVFQUFTLEVBQXhCOztFQUNBLHFCQUF1QkMsMkVBQWEsRUFBcEM7RUFBQSxJQUFRTSxVQUFSLGtCQUFRQSxVQUFSOztFQUVBLElBQU1DLE9BQU8sR0FBR0osMEVBQXNCLENBQUMsVUFBQ0ssQ0FBRDtJQUFBLE9BQU9BLENBQUMsQ0FBQ0QsT0FBVDtFQUFBLENBQUQsQ0FBdEM7O0VBQ0EsNEJBQThCSiwwRUFBc0IsRUFBcEQ7RUFBQSxJQUFRTSxpQkFBUix5QkFBUUEsaUJBQVI7O0VBRUFYLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQUlPLE1BQU0sQ0FBQ0ssU0FBWCxFQUFzQjtNQUNwQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlQLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQkcsUUFBakIsRUFBWjtNQUNBSixpQkFBaUIsQ0FBQ0osTUFBTSxDQUFDSyxTQUFSLEVBQW1CSixVQUFuQixDQUFqQjtJQUNEO0VBQ0YsQ0FMUSxFQUtOLENBQUNELE1BQU0sQ0FBQ0ssU0FBUixFQUFtQkosVUFBbkIsRUFBK0JHLGlCQUEvQixDQUxNLENBQVQ7RUFPQSxvQkFFRTtJQUFLLFNBQVMsRUFBQyxxQkFBZjtJQUFBLHVCQUNFO01BQUssU0FBUyxFQUFDLCtCQUFmO01BQUEsd0JBQ0U7UUFBSyxTQUFTLEVBQUMsTUFBZjtRQUFBLHdCQUNBO1VBQUssU0FBUyxFQUFDLGlFQUFmO1VBQUEsZ0JBQW1GUCxrREFBbkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREEsZUFFQTtVQUFJLFNBQVMsRUFBQyw2SEFBZDtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQUZBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURGLGVBT0U7UUFBSSxTQUFTLEVBQUMsZ0VBQWQ7UUFBQSx3QkFDRTtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQURGLGVBRUU7VUFBRyxTQUFTLEVBQUMseUNBQWI7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FGRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FQRixlQVdFO1FBQUssU0FBUyxFQUFDLGdCQUFmO1FBQUEsd0JBQ0U7VUFBSyxTQUFTLEVBQUM7UUFBZjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREYsZUFFRTtVQUFLLFNBQVMsRUFBQyxvRkFBZjtVQUFBLHVCQUNFO1lBQUssZUFBWSxHQUFqQjtZQUFBLHVCQUNFO2NBQU0sU0FBUyxFQUFDLFVBQWhCO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBO1VBREY7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQURGO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FGRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FYRixlQW1CRTtRQUFLLFNBQVMsRUFBQyxvQkFBZjtRQUFBLHdCQUNFLDhEQUFDLHNFQUFEO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FERixlQUVFO1VBQUksU0FBUyxFQUFDLHdDQUFkO1VBQUEsVUFDQ0csTUFBTSxpQkFDUDtZQUFLLFNBQVMsRUFBQyw4QkFBZjtZQUFBLHdCQUNFO2NBQUEsVUFDRyxDQUFDRSxPQUFPLElBQUksQ0FBWixFQUFlUSxjQUFmO1lBREg7Y0FBQTtjQUFBO2NBQUE7WUFBQSxTQURGLGVBSUk7Y0FBSyxTQUFTLEVBQUMscUJBQWY7Y0FBQTtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FKSjtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFGQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBbkJGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FGRjtBQXdDRCxDQXRETTs7R0FBTVg7VUFDSUwscUVBQ1FDLHlFQUVQRyx3RUFDY0E7OztLQUxuQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL2hvbWUvaW5kZXgudHN4Pzc0YjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dCwgUmVhY3RcbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbi8vIFdhbGxldFxuaW1wb3J0IHsgdXNlV2FsbGV0LCB1c2VDb25uZWN0aW9uIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IFJlcXVlc3RBaXJkcm9wIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0QWlyZHJvcCc7XG5pbXBvcnQgcGtnIGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbic7XG5cbi8vIFN0b3JlXG5pbXBvcnQgdXNlVXNlclNPTEJhbGFuY2VTdG9yZSBmcm9tICcuLi8uLi9zdG9yZXMvdXNlVXNlclNPTEJhbGFuY2VTdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBIb21lVmlldzogRkMgPSAoeyB9KSA9PiB7XG4gIGNvbnN0IHdhbGxldCA9IHVzZVdhbGxldCgpO1xuICBjb25zdCB7IGNvbm5lY3Rpb24gfSA9IHVzZUNvbm5lY3Rpb24oKTtcblxuICBjb25zdCBiYWxhbmNlID0gdXNlVXNlclNPTEJhbGFuY2VTdG9yZSgocykgPT4gcy5iYWxhbmNlKVxuICBjb25zdCB7IGdldFVzZXJTT0xCYWxhbmNlIH0gPSB1c2VVc2VyU09MQmFsYW5jZVN0b3JlKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3YWxsZXQucHVibGljS2V5KSB7XG4gICAgICBjb25zb2xlLmxvZyh3YWxsZXQucHVibGljS2V5LnRvQmFzZTU4KCkpXG4gICAgICBnZXRVc2VyU09MQmFsYW5jZSh3YWxsZXQucHVibGljS2V5LCBjb25uZWN0aW9uKVxuICAgIH1cbiAgfSwgW3dhbGxldC5wdWJsaWNLZXksIGNvbm5lY3Rpb24sIGdldFVzZXJTT0xCYWxhbmNlXSlcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoZXJvIG14LWF1dG8gcC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhlcm8tY29udGVudCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC02Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtc20gZm9udC1ub3JtYWwgYWxpZ24tYm90dG9tIHRleHQtcmlnaHQgdGV4dC1zbGF0ZS02MDAgbXQtNCc+dntwa2cudmVyc2lvbn08L2Rpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNXhsIG1kOnBsLTEyIGZvbnQtYm9sZCB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1iciBmcm9tLWluZGlnby01MDAgdG8tZnVjaHNpYS01MDAgbWItNFwiPlxuICAgICAgICAgIFNvbGFuYSBOZXh0XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWQ6dy1mdWxsIHRleHQtMngxIG1kOnRleHQtNHhsIHRleHQtY2VudGVyIHRleHQtc2xhdGUtMzAwIG15LTJcIj5cbiAgICAgICAgICA8cD5VbmxlYXNoIHRoZSBmdWxsIHBvd2VyIG9mIGJsb2NrY2hhaW4gd2l0aCBTb2xhbmEgYW5kIE5leHQuanMgMTMuPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbGF0ZS01MDAgdGV4dC0yeDEgbGVhZGluZy1yZWxheGVkJz5GdWxsLXN0YWNrIFNvbGFuYSBhcHBsaWNhdGlvbnMgbWFkZSBlYXN5LjwvcD5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncm91cFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWluc2V0LTAuNSBiZy1ncmFkaWVudC10by1yIGZyb20taW5kaWdvLTUwMCB0by1pbmRpZ28tNTAwIHJvdW5kZWQtbGcgYmx1ciBvcGFjaXR5LTQwIGFuaW1hdGUtdGlsdFwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgbXgtYXV0byBtb2NrdXAtY29kZSBiZy1wcmltYXJ5IGJvcmRlci0yIGJvcmRlci1bIzUyNTI1MjlmXSBwLTYgcHgtMTAgbXktMlwiPlxuICAgICAgICAgICAgPHByZSBkYXRhLXByZWZpeD1cIj5cIj5cbiAgICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj57YG5weCBjcmVhdGUtc29sYW5hLWRhcHAgPGRhcHAtbmFtZT5gfSA8L2NvZGU+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0yXCI+XG4gICAgICAgICAgPFJlcXVlc3RBaXJkcm9wIC8+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1kOnctZnVsbCB0ZXh0LTJ4bCB0ZXh0LXNsYXRlLTMwMCBteS0yXCI+XG4gICAgICAgICAge3dhbGxldCAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgeyhiYWxhbmNlIHx8IDApLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zbGF0ZS02MDAgbWwtMic+XG4gICAgICAgICAgICAgICAgU09MXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VXYWxsZXQiLCJ1c2VDb25uZWN0aW9uIiwiUmVxdWVzdEFpcmRyb3AiLCJwa2ciLCJ1c2VVc2VyU09MQmFsYW5jZVN0b3JlIiwiSG9tZVZpZXciLCJ3YWxsZXQiLCJjb25uZWN0aW9uIiwiYmFsYW5jZSIsInMiLCJnZXRVc2VyU09MQmFsYW5jZSIsInB1YmxpY0tleSIsImNvbnNvbGUiLCJsb2ciLCJ0b0Jhc2U1OCIsInZlcnNpb24iLCJ0b0xvY2FsZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/views/home/index.tsx\n"));

/***/ })

});