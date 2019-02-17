"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.post('/', function (res, req) {
  return res.status(200).send({
    message: 'Server is running'
  });
});
var PORT = 3000;
app.listen(PORT, function () {
  console.log('server is running');
});