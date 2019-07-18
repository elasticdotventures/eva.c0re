"use strict";

var _index = _interopRequireDefault(require("coda-js/src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var coda = new _index["default"]('a3974175-890d-4e70-b289-d113329abc4f'); // insert your token
// trick for using async in a script

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var whoAmI;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return coda.whoAmI();

        case 2:
          whoAmI = _context.sent;
          console.log(whoAmI);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))()["catch"](function (error) {
  return console.log(error);
});