<script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async login() {
        const data = {
          email: this.email,
          password: this.password
        }

        const response = await fetch(`${process.env.VUE_APP_API_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        const login = await response.json()

        if (!login.status) {
          alert(login.message)
        } else {
          localStorage.setItem('token', login.token)
          localStorage.setItem('role', login.role)

          window.location.href = '/'
        }
      }
    }
  }
</script>

<template>
  <div class="login-container">
    <h2>Mini Shop App</h2>
    <input type="text" v-model="email" class="login-input" placeholder="E-Mail Address" />
    <input type="password" v-model="password" class="login-input" placeholder="Password" />
    <button class="login-btn" @click="login()">Login</button>
  </div>
</template>

<style scoped>
  .login-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .login-input {
    margin: 10px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    outline: none;
  }

  .login-btn {
    width: 100px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background: green;
    color: white;
    cursor: pointer;    
  }
</style>