import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';


const { expect } = chai;
chai.use(chaiHttp);

describe('API Tests', () => {
  const meals = {
    name: 'Beans',
    Description: 'lorem ipsum',
    price: 300,
    quantity: 'large',
  };


  describe('GET all meals', () => {
    it('should GET all the meals', (done) => {
      chai.request(app)
        .get('/api/v1/meals')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('array');
          res.body.length.should.be.eql(3);
          done();
        });
    });
  });


  describe('/POST meal', () => {
    it('it should post a meal', (done) => {
      chai.request(app)
        .post('/api/v1/meals')
        .send(meals)
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


  describe('Get a meal by id', () => {
    it('it should return a 404 error if the meal.id is not found', (done) => {
      chai.request(app)
        .get(`/api/v1/meals/${meals._id}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          expect(res.body.message).to.equal('Meal Not Found');
          done();
        });
    });
  });

  describe('Update a meal by id', () => {
    it('should return a 404 error if the ID of the meal to be modified cannot be found', (done) => {
      meals.name = 'Rice';
      chai.request(app)
        .put(`/api/v1/meals/${meals._id}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          expect(res.body.message).to.equal('Meal Not Found');
          done();
        });
    });
  });

  describe('Delete a meal by id', () => {
    it('should return a 404 error if the ID of the meal to be deleted cannot be found', (done) => {
      chai.request(app)
        .delete(`/api/v1/meals/${meals._id}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          expect(res.body.message).to.equal('Meal Not found');
          done();
        });
    });
  });
});
