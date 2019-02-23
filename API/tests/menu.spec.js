import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';


const { expect } = chai;
chai.use(chaiHttp);


describe('API Tests', () => {
  const menu = {
    name: 'Beans',
    Description: 'lorem ipsum',
    price: 300,
    quantity: 'large',
  };


  describe('/POST menu', () => {
    it('it should create a new menu', (done) => {
      chai.request(app)
        .post('/api/v1/menu')
        .send(menu)
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

  describe('GET a menu', () => {
    it('should GET the menu', (done) => {
      chai.request(app)
        .get('/api/v1/menu')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('array');
          res.body.length.should.be.eql(4);
          done();
        });
    });
  });
});
