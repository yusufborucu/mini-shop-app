<template>
  <div class="basket-container">
    <button class="back-btn" @click="$router.push('/')">Back</button>
    <h4>Basket</h4>
    <ul class="basket-list">
      <li>Incredible Steel Tuna - 1 Qty - 625.00 $</li>
      <li>Gorgeous Metal Gloves - 1 Qty - 481.00 $</li>
    </ul>
    <span class="total">Total: 1106.00 $</span>
    <input class="order-input" placeholder="Name" />
    <input class="order-input" placeholder="Phone" />
    <textarea class="order-input" placeholder="Address"></textarea>
    <button class="order-btn">Order</button>
  </div>
</template>

<script>
export default {
  
}
</script>

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