var a = 1;
var b = [1, 2, 3];

var c = function c() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return console.log(args);
};
