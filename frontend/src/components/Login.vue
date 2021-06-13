<template>
  <div class="login-container">
    <h2>Mini Shop App</h2>
    <input type="text" class="login-input" placeholder="E-Mail Address" />
    <input type="password" class="login-input" placeholder="Password" />
    <button class="login-btn">Login</button>
  </div>
</template>

<script>
  export default {
    
  }
</script>

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