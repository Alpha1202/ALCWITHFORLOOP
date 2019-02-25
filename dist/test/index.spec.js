"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

_chai.default.should();

describe('Index', function () {
  describe('App', function () {
    it('should run when started', function (done) {
      _chai.default.request(_index.default).get('/').end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.message.should.equal('Server is running');
        done();
      });
    });
  });
});
//# sourceMappingURL=index.spec.js.map