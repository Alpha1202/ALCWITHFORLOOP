"use strict";

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 3000;

_index.default.listen(PORT, function () {
  return console.log('server is running');
});
//# sourceMappingURL=server.js.map