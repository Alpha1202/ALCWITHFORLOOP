"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai.default.expect;

_chai.default.use(_chaiHttp.default);

describe('API Tests', function () {
  var menu = {
    name: 'Beans',
    Description: 'lorem ipsum',
    price: 300,
    quantity: 'large'
  };
  describe('/POST menu', function () {
    it('it should create a new menu', function (done) {
      _chai.default.request(_index.default).post('/api/v1/menu').send(menu).end(function (err, res) {
        expect(res.statusCode).to.equal(201);
        expect(res.body).to.be.a('object');
        expect(res.body.name).to.be.a('string');
        expect(res.body.Description).to.be.a('string');
        expect(res.body.price).to.be.a('number');
        expect(res.body.quantity).to.be.a('string');
        done();
      });
    });
  });
  describe('GET a menu', function () {
    it('should GET the menu', function (done) {
      _chai.default.request(_index.default).get('/api/v1/menu').end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('array');
        res.body.length.should.be.eql(4);
        done();
      });
    });
  });
});
//# sourceMappingURL=menu.spec.js.map