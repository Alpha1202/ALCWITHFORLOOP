"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai.default.expect;

_chai.default.use(_chaiHttp.default);

describe('API Tests', function () {
  var meals = {
    name: 'Beans',
    Description: 'lorem ipsum',
    price: 300,
    quantity: 'large'
  };
  describe('GET all meals', function () {
    it('should GET all the meals', function (done) {
      _chai.default.request(_index.default).get('/api/v1/meals').end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('array');
        res.body.length.should.be.eql(3);
        done();
      });
    });
  });
  describe('/POST meal', function () {
    it('it should post a meal', function (done) {
      _chai.default.request(_index.default).post('/api/v1/meals').send(meals).end(function (err, res) {
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
  describe('Get a meal by id', function () {
    it('it should return a 404 error if the meal.id is not found', function (done) {
      _chai.default.request(_index.default).get("/api/v1/meals/".concat(meals._id)).end(function (err, res) {
        expect(res.statusCode).to.equal(404);
        expect(res.body.message).to.equal('Meal Not Found');
        done();
      });
    });
  });
  describe('Update a meal by id', function () {
    it('should return a 404 error if the ID of the meal to be modified cannot be found', function (done) {
      meals.name = 'Rice';

      _chai.default.request(_index.default).put("/api/v1/meals/".concat(meals._id)).end(function (err, res) {
        expect(res.statusCode).to.equal(404);
        expect(res.body.message).to.equal('Meal Not Found');
        done();
      });
    });
  });
  describe('Delete a meal by id', function () {
    it('should return a 404 error if the ID of the meal to be deleted cannot be found', function (done) {
      _chai.default.request(_index.default).delete("/api/v1/meals/".concat(meals._id)).end(function (err, res) {
        expect(res.statusCode).to.equal(404);
        expect(res.body.message).to.equal('Meal Not found');
        done();
      });
    });
  });
});
//# sourceMappingURL=meal.spec.js.map