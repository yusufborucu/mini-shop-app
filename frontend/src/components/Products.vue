<script>
  import Product from './Product'

  export default {
    props: ['page', 'searchText'],
    data() {
      return {
        products: []
      }
    },
    components: {
      Product
    },
    async created() {
      let response = ''
      if (this.searchText) {
        response = await fetch(`${process.env.VUE_APP_API_URL}/products?page=${this.page}&search=${this.searchText}`)
      } else {
        response = await fetch(`${process.env.VUE_APP_API_URL}/products?page=${this.page}`)
      }      
      const products = await response.json()
      this.products = products
    }
  }
</script>

<template>
  <div class="products-container">
    <Product v-for="product in products" v-bind:key="product._id" :product="product" />
  </div>
</template>

<style scoped>
  .products-container {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }
</style>