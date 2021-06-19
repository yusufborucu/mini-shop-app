<template>
  <div class="order-detail-container">
    <button class="back-btn" @click="$router.push('/orders')">Back</button>
    <h4>Order Detail</h4>
    <ul class="product-list">
      <li>Incredible Steel Tuna - 1 Qty - 625.00 $</li>
      <li>Gorgeous Metal Gloves - 1 Qty - 481.00 $</li>
    </ul>
    <span class="total">Total: 1106.00 $</span>
    <span v-show="!isAdmin" class="status">Preparing</span>
    <div v-show="isAdmin">
      <select>
        <option value="ordered">Ordered</option>
        <option value="preparing">Preparing</option>
        <option value="on_way">On Way</option>
        <option value="delivered">Delivered</option>
      </select>
      <button class="edit-btn">Edit Status</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdmin: localStorage.getItem('role') == 'admin'
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