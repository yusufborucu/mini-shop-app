<template>
  <div class="product-container">    
    <img class="image" :src="this.product.image" />
    <span class="name">{{ this.product.name }}</span>
    <span class="price">{{ this.product.price }} $</span>
    <button class="plus-btn">Add to basket</button>
  </div>
</template>

<script>
  export default {
    props: ['product']
  }
</script>

<style scoped>
  .product-container {
    display: flex;
    flex: 0 0 25%;
    flex-direction: column;
    width: fit-content;   
    margin-bottom: 10px;
  }  

  .image {
    width: 200px;
  }

  .name {
    font-size: 16px;
    font-weight: bold;
    margin-top: 5px;
  }

  .price {
    font-size: 15px;
  }

  .plus-btn {
    width: fit-content;
    margin-bottom: 5px;
    background: green;
    color: white;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
  }
</style>