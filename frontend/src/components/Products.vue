<template>
  <div class="products-container">
    <Product v-for="product in products" v-bind:key="product._id" :product="product" />
  </div>
</template>

<script>
  import Product from './Product';

  export default {
    data() {
      return {
        products: []
      }
    },
    components: {
      Product
    },
    async created() {
      const response = await fetch('http://localhost:3000/products');
      const products = await response.json();
      this.products = products;
    }
  }
</script>

<style scoped>
  .products-container {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }
</style>