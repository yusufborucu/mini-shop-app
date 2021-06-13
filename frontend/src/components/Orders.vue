<template>
  <div class="orders-container">
    <button class="back-btn" @click="$router.push('/')">Back</button>
    <h4>Orders</h4>
    <ul class="order-list">
      <li>
        <span class="order-info order-no">1.</span>
        <span v-show="isAdmin" class="order-info">Yusuf</span>
        <span class="order-info">3 Products</span>
        <span class="order-info">5.00 $</span>
        <span class="order-info">Ordered</span>
        <button class="order-detail-btn" @click="$router.push('/order-detail')">Detail</button>
      </li> 
      <li>
        <span class="order-info order-no">2.</span>
        <span v-show="isAdmin" class="order-info">Yusuf</span>
        <span class="order-info">1 Products</span>
        <span class="order-info">3.00 $</span>
        <span class="order-info">Preparing</span>
        <button class="order-detail-btn" @click="$router.push('/order-detail')">Detail</button>
      </li>  
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdmin: false
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
</style>