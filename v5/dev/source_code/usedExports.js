// usedExports = true 非生产模式下，只是标记，但不注入

__webpack_require__.d(__webpack_exports__, {
  default: () => __WEBPACK_DEFAULT_EXPORT__,
});
var a = 1;
var b = 2;
var c = { a: 1 };
const __WEBPACK_DEFAULT_EXPORT__ = { d: 3 };

// usedExports = false 按源码注入

__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  a: () => a,
  b: () => b,
  c: () => c,
  default: () => __WEBPACK_DEFAULT_EXPORT__,
});
var a = 1;
var b = 2;
var c = { a: 1 };
const __WEBPACK_DEFAULT_EXPORT__ = { d: 3 };

