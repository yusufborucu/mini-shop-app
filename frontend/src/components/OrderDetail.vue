<template>
  <div class="order-detail-container">
    <button class="back-btn" @click="$router.push('/orders')">Back</button>
    <h4>Order Detail</h4>
    <ul class="product-list">
      <li v-for="item in order.products" v-bind:key="item.id">
        {{ item.name }} - {{ item.price }}
      </li>
    </ul>
    <span class="total">Total: {{ order.total_price }} $</span>
    <span v-show="!isAdmin" class="status">{{ order.status }}</span>
    <div v-show="isAdmin">
      <select v-model="selectedStatus">
        <option value="ordered">Ordered</option>
        <option value="preparing">Preparing</option>
        <option value="on_way">On Way</option>
        <option value="delivered">Delivered</option>
      </select>
      <button class="edit-btn" @click="editStatus()">Edit Status</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {},
      isAdmin: localStorage.getItem('role') == 'admin',
      selectedStatus: ''
    }
  },
  async created() {
    const token = localStorage.getItem('token');
    const id = this.$route.params.id;

    const order = await fetch(`${process.env.VUE_APP_API_URL}/orders/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      }
    });
    const orderResponse = await order.json();
    this.order = orderResponse;
    this.selectedStatus = orderResponse.status;
  },
  methods: {
    async editStatus() {
      const token = localStorage.getItem('token');
      const id = this.$route.params.id;

      const data = {
        status: this.selectedStatus
      }

      const response = await fetch(`${process.env.VUE_APP_API_URL}/orders/change_order_status/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        },
        body: JSON.stringify(data)
      });
      const changeStatus = await response.json();
      if (changeStatus.status == this.selectedStatus) {
        window.location.href = '/orders';
      }
    }
  }
}
</script>

<style scoped>
  .order-detail-container {
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
  
  .product-list {
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

  .edit-btn {
    padding: 5px;
    border: 1px solid #000;
    border-radius: 5px;
    background: steelblue;
    color: white;
    margin-left: 5px;
    cursor: pointer;
  }
</style>