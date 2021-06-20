<script>
  import Products from './Products'

  export default {
    data() {
      return {
        searchText: this.$route.query.search || '',
        page: this.$route.query.page || 1,
        productCount: 0
      }
    },
    components: {
      Products
    },
    async created() {
      const token = localStorage.getItem('token')

      const baskets = await fetch(`${process.env.VUE_APP_API_URL}/baskets`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        }
      })
      const basketResponse = await baskets.json()

      if (basketResponse)
        this.productCount = basketResponse.products.length
    },
    methods: {
      logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('role')

        window.location.href = 'login'
      },
      home() {
        window.location.href = '/'
      },
      search() {
        window.location.href = '?search=' + this.searchText
      },
      previousPage() {
        this.page--
        if (this.searchText == '')
          window.location.href = '?page=' + this.page
        else
          window.location.href = '?page=' + this.page + '&search=' + this.searchText
      },
      nextPage() {
        this.page++
        if (this.searchText == '')
          window.location.href = '?page=' + this.page
        else
          window.location.href = '?page=' + this.page + '&search=' + this.searchText
      }
    }
  }
</script>

<template>
  <div class="home-container">
    <h1 class="title" @click="home()">Mini Shop App</h1>
    <input type="text" class="search" placeholder="Search..." v-model="searchText" v-on:keyup.13="search()" />
    <span class="product-count">{{ productCount }}</span>
    <button class="basket-btn" @click="$router.push('basket')">Basket</button>
    <button class="orders-btn" @click="$router.push('orders')">Orders</button>
    <button class="logout-btn" @click="logout()">Logout</button>
    <Products :page="page" :searchText="searchText" />
    <div class="bottom-buttons">
      <button class="previous-page-btn" v-if="page != 1" @click="previousPage()">Previous Page</button>
      <button class="next-page-btn" @click="nextPage()">Next Page</button>
    </div>
  </div>
</template>

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
    cursor: pointer;
  }

  .search {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #000;
    outline: none;
    position: absolute;
    top: 30px;
  }
  
  .product-count {
    position: absolute;
    top: 35px;
    right: 270px;
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

  .previous-page-btn {
    padding: 5px;
    border: 1px solid #000;
    border-radius: 5px;
    background: blue;
    color: white;
    margin-top: 10px;
    cursor: pointer;
    margin-right: 10px;
  }

  .next-page-btn {
    padding: 5px;
    border: 1px solid #000;
    border-radius: 5px;
    background: blue;
    color: white;
    margin-top: 10px;
    cursor: pointer;
  }

  .orders-btn {
    position: absolute;
    top: 80px;
    right: 200px;
    padding: 10px;
    background: indigo;
    color: white;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
  }

  .logout-btn {
    position: absolute;
    top: 130px;
    right: 200px;
    padding: 10px;
    background: red;
    color: white;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
  }
</style>