/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
  var __webpack_exports__ = {};

  ;// CONCATENATED MODULE: ../project_src/es_c.js
  let a = 1;
  let b = 2;
  let count = 0;
  const c = {
    a: 1,
    sequence: [count++]
  };
/* harmony default export */ const es_c = ({
    d: 3
  });
  ;// CONCATENATED MODULE: ../project_src/es_d.js
/* harmony default export */ const es_d = (1);
  ;// CONCATENATED MODULE: ../project_src/entry_es_module.js


  console.log({
    name: 'foo',
    items: [...c.sequence],
    ...es_c
  });
  console.log(es_d);
  /******/
})()
  ;