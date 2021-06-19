<template>
  <div class="orders-container">
    <button class="logout-btn" v-if="isAdmin" @click="logout()">Logout</button>
    <button class="back-btn" v-if="!isAdmin" @click="$router.push('/')">Back</button>
    <h4>Orders</h4>
    <ul class="order-list">
      <li v-for="(item, index) in orders" v-bind:key="item._id">
        <span class="order-info order-no">{{ index + 1 }}.</span>
        <span v-show="isAdmin" class="order-info">{{ item.name }}</span>
        <span class="order-info">{{ item.products.length }} Products</span>
        <span class="order-info">{{ item.total_price }} $</span>
        <span class="order-info">{{ item.status }}</span>
        <button class="order-detail-btn" @click="$router.push(`/order-detail/${item._id}`)">Detail</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      isAdmin: localStorage.getItem('role') == 'admin'
    }
  },
  async created() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (role == 'user') {
      const orders = await fetch(`${process.env.VUE_APP_API_URL}/orders`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        }
      });
      const ordersResponse = await orders.json();
      this.orders = ordersResponse;
    } else {
      const orders = await fetch(`${process.env.VUE_APP_API_URL}/orders/orders_placed`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        }
      });
      const ordersResponse = await orders.json();
      this.orders = ordersResponse;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('role');

      window.location.href = 'login';
    }
  }
}
</script>

<style scoped>
  .orders-container {
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

  .order-list {
    list-style: none;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    margin: 0;
  }

  .order-no {
    font-weight: bold;
  }
  
  .order-info {
    margin: 5px;
  }

  .order-detail-btn {
    padding: 5px;
    border: 1px solid #000;
    border-radius: 5px;
    background: green;
    color: white;
    margin-top: 10px;
    cursor: pointer;
  }

  .logout-btn {
    margin-top: 10px;
    padding: 10px;
    background: red;
    color: white;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
  }
</style>