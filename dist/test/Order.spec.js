"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai.default.expect;

_chai.default.use(_chaiHttp.default);

describe('API Tests', function () {
  var order = {
    name: 'Beans',
    Description: 'lorem ipsum',
    price: 300,
    quantity: 'large'
  };
  describe('/POST Order', function () {
    it('it should post an order', function (done) {
      _chai.default.request(_index.default).post('/api/v1/orders').send(order).end(function (err, res) {
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
  describe('GET an order', function () {
    it('should GET an order', function (done) {
      _chai.default.request(_index.default).get('/api/v1/orders').end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('array');
        res.body.length.should.be.eql(4);
        done();
      });
    });
  });
  describe('Update an order ', function () {
    it('should return a 404 error if the ID of the order to be update cannot be found', function (done) {
      order.name = 'Rice';

      _chai.default.request(_index.default).put("/api/v1/orders/".concat(order._id)).end(function (err, res) {
        expect(res.statusCode).to.equal(404);
        expect(res.body.message).to.equal('Order Not Found');
        done();
      });
    });
  });
});
//# sourceMappingURL=Order.spec.js.map