(() => {
  "use strict";
  var __webpack_modules__ = {
    "../project_src/es_c.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n __webpack_require__.d(__webpack_exports__, {\n   "a": () => ( a),\n   "b": () => ( b),\n   "c": () => ( c),\n   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n });\nvar a = 1;\nvar b = 2;\nvar c = {\n  a: 1\n};\n const __WEBPACK_DEFAULT_EXPORT__ = ({\n  d: 3\n});\n\n//# sourceURL=webpack:///../project_src/es_c.js?'
      );
    },

    "../project_src/tree_shaking.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n var _es_c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( "../project_src/es_c.js");\n\nconsole.log(_es_c__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack:///../project_src/tree_shaking.js?'
      );
    },
  };

  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  (() => {
    // 为 module.exports 上赋值
    // define getter functions for harmony exports
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();

  (() => {
    // 判断对象上是否存在指定属性
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  (() => {
    // 标记模块是 esModule
    // define __esModule on exports
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
  })();

  // startup
  // Load entry module and return exports
  // This entry module can't be inlined because the eval devtool is used.
  var __webpack_exports__ = __webpack_require__("../project_src/tree_shaking.js");
})();
