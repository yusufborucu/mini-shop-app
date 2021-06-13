const chai = require('chai');
const chaiHttp = require('chai-http');
chai.should();
const server = require('../app');

chai.use(chaiHttp);

let token;

describe('/baskets tests', () => {
  before((done) => {
    const data = {
      email: 'user@mail.com', 
      password: '123456'
    };

    chai.request(server)
      .post('/auth/login')
      .send(data)
      .end((err, res) => {
        token = res.body.token;
        done();
      });
  });

  it('/ GET', (done) => {
    chai.request(server)
      .get('/baskets')
      .set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });      
  });

  it('/ PUT', (done) => {
    const data = {
      products: [
        "60bb683375355d175cfacf97", 
        "60bb683375355d175cfacf98"
      ]
    }

    chai.request(server)
      .get('/baskets')
      .set('x-access-token', token)
      .send(data)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('user_id');
        res.body.should.have.property('products');
        done();
      });
  })
});