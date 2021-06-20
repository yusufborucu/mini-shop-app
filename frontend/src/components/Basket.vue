<script>
export default {
  data() {
    return {
      basketList: JSON.parse(localStorage.getItem('basket')) || [],
      name: '',
      phone: '',
      address: ''
    }
  },
  methods: {
    async order() {
      const token = localStorage.getItem('token')

      let products = []
      this.basketList.forEach((val) => {
        products.push(val.id)
      })

      const data = {
        name: this.name,
        phone: this.phone,
        address: this.address,
        products: products,
        total_price: this.total
      }

      const response = await fetch(`${process.env.VUE_APP_API_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        },
        body: JSON.stringify(data)
      })
      const order = await response.json()
      if (order.status == 'ordered') {
        localStorage.removeItem('basket')
        localStorage.removeItem('products')

        window.location.href = '/'
      }
    }
  },
  computed: {
    total() {
      let total = 0
      
      this.basketList.forEach(val => {
        total += parseInt(val.price)
      })

      return total
    }
  }
}
</script>

<template>
  <div class="basket-container">
    <button class="back-btn" @click="$router.push('/')">Back</button>
    <h4>Basket</h4>
    <ul class="basket-list">
      <li v-for="item in basketList" v-bind:key="item._id">
        {{ item.name }} - {{ item.price }} $
      </li>
    </ul>
    <span class="total">Total: {{ total }} $</span>
    <input class="order-input" placeholder="Name" v-model="name" />
    <input class="order-input" placeholder="Phone" v-model="phone" />
    <textarea class="order-input" placeholder="Address" v-model="address" ></textarea>
    <button class="order-btn" @click="order()">Order</button>
  </div>
</template>

<style scoped>
  .basket-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .back-btn {
    padding: 5px;
    border: 1px solid #000;
    border-radius: 5px;
    background: blue;
    color: white;
    margin-top: 10px;
    cursor: pointer;
  }
  
  .basket-list {
    list-style: none;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    margin: 0;
  }

  .total {
    font-size: 16px;
    font-weight: bold;
    margin: 10px;
  }

  .order-input {
    margin: 10px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    outline: none;
  }

  .order-btn {
    width: 100px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background: green;
    color: white;
    margin-top: 10px;
    cursor: pointer;
  }
</style>