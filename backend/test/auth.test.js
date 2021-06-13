const chai = require('chai');
const chaiHttp = require('chai-http');
chai.should();
const server = require('../app');

chai.use(chaiHttp);

describe('/auth tests', () => {
  it('/login', (done) => {
    const data = {
      email: 'user@mail.com',
      password: '123456'
    };

    chai.request(server)
      .post('/auth/login')
      .send(data)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('token');
        done();
      })
  });
});