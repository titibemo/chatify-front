<template>
  <div class="container">
    
    <main class="main-content">
      <img src="@/assets/chatify-logo-cut.png" alt="Chatify-Logo" class="logo-large" />
      <button @click="login" class="button">Se connecter</button>
      <button @click="register" class="button">S'inscrire</button>
    </main>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const register = () => {
      router.push('/inscription')
    }
const login = () => {
      router.push('/login')
    }

</script>

<style scoped>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2a2240;
  color: white;
  height: 80vh;
  width: 100%;
  font-family: Arial, sans-serif;
  text-align: center;
  /*padding: 0 16px;*/
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo-large {
  height: 200px;
  margin-bottom: 40px;
  margin-top: 151px;
}

.button {
  background-color: #5a93e4;
  color: white;
  border: none;
  padding: 12px 24px;
  margin: 10px 0;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  width: 200px;
}

.button:hover {
  background-color: #4c82c6;
}

</style>
