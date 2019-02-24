import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';


const { expect } = chai;
chai.use(chaiHttp);

describe('API Tests', () => {
  const order = {
    name: 'Beans',
    Description: 'lorem ipsum',
    price: 300,
    quantity: 'large',
  };

  describe('/POST Order', () => {
    it('it should post an order', (done) => {
      chai.request(app)
        .post('/api/v1/orders')
        .send(order)
        .end((err, res) => {
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

  describe('GET an order', () => {
    it('should GET an order', (done) => {
      chai.request(app)
        .get('/api/v1/orders')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('array');
          res.body.length.should.be.eql(4);
          done();
        });
    });
  });

  describe('Update an order ', () => {
    it('should return a 404 error if the ID of the order to be update cannot be found', (done) => {
      order.name = 'Rice';
      chai.request(app)
        .put(`/api/v1/orders/${order._id}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          expect(res.body.message).to.equal('Order Not Found');
          done();
        });
    });
  });
});
