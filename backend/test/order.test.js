const chai = require('chai')
const chaiHttp = require('chai-http')
chai.should()
const server = require('../app')

chai.use(chaiHttp)

let token

describe('/orders tests', () => {
  before((done) => {
    const data = {
      email: 'user@mail.com', 
      password: '123456'
    }

    chai.request(server)
      .post('/auth/login')
      .send(data)
      .end((err, res) => {
        token = res.body.token
        done()
      })
  })

  it('/ GET', (done) => {
    chai.request(server)
      .get('/orders')
      .set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        done()
      })
  })

  it('/ POST', (done) => {
    const data = {
      name: "yusuf",
      phone: "05123456789",
      address: "sakarya",
      products: [
        "60bb683375355d175cfacf97", 
        "60bb683375355d175cfacf98"
      ],
      total_price: "500.00"
    }

    chai.request(server)
      .post('/orders')
      .set('x-access-token', token)
      .send(data)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('name')
        res.body.should.have.property('phone')
        res.body.should.have.property('address')
        res.body.should.have.property('products')
        res.body.should.have.property('total_price')
        done()
      })
  })

  it('/orders_placed GET', (done) => {
    chai.request(server)
      .get('/orders/orders_placed')
      .set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        done()
      })
  })

  it('/:id GET', (done) => {
    chai.request(server)
      .get('/orders/60bc91e28ca85b24e4ae3211')
      .set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('name')
        res.body.should.have.property('phone')
        res.body.should.have.property('address')
        res.body.should.have.property('products')
        res.body.should.have.property('total_price')
        done()
      })
  })

  it('/change_order_status PUT', (done) => {
    const data = {
      status: 'on_way'
    };

    chai.request(server)
      .put('/orders/change_order_status/60bc91e28ca85b24e4ae3211')
      .set('x-access-token', token)
      .send(data)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('status')
        res.body.status.should.equal(data.status)
        done()
      })
  })
})