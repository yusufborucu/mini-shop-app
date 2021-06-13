<template>
  <div class="home-container">
    <h1 class="title">Mini Shop App</h1>
    <input type="text" class="search" placeholder="Search..." />
    <span class="product-count">0</span>
    <button class="basket-btn">Basket</button>
    <Products />
  </div>
</template>

<script>
  import Products from './Products';
  
  export default {
    components: {
      Products
    }  
  }
</script>

<style scoped>
  .home-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    align-self: flex-start;
    margin-left: 50px;
  }

  .search {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #000;
    outline: none;
    position: absolute;
    top: 30px;
  }

  .basket-btn {
    position: absolute;
    top: 30px;
    right: 200px;
    padding: 10px;
    background: dodgerblue;
    color: white;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
  }
</style>