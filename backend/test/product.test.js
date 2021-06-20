const chai = require('chai')
const chaiHttp = require('chai-http')
chai.should()
const server = require('../app')

chai.use(chaiHttp)

describe('/products tests', () => {
  it('/ GET', (done) => {
    chai.request(server)
      .get('/products')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        done()
      })
  })
})