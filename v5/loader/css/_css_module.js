/**
 * index.js
 */
__webpack_require__.r(__webpack_exports__);
var _a_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/a.css");
console.log('app');
//# sourceURL=webpack:///./src/index.js?


/**
 * css-loader > a.css
 */
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  default: () => __WEBPACK_DEFAULT_EXPORT__,
});
var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
  __webpack_require__(
    "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
  );
var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
  __webpack_require__.n(
    _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
  );
var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
  __webpack_require__(
    "./node_modules/css-loader/dist/runtime/api.js"
  );
var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
  __webpack_require__.n(
    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
  );
// Imports

var ___CSS_LOADER_EXPORT___ =
  _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
    _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
  );
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {background-color: #ccc;}", ""]);
// Exports
const __WEBPACK_DEFAULT_EXPORT__ =
  ___CSS_LOADER_EXPORT___;
//# sourceURL=webpack:///./src/a.css?


/**
 * css-loader/dist/runtime/noSourceMaps.js
 */
module.exports = function (i) {
  return i[1];
};
//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?


/**
 * css-loader/dist/runtime/api.js
 */
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list

  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};
 //# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?