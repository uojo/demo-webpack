'use strict';

var c = {
  d: 3
};

var d = 1;

console.log({ name: 'foo', items: [...c.sequence], ...c });
console.log(d);
