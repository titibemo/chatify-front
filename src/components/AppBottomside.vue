<template>
    <footer class="footer">
      <router-link to="/mentionlegales" class="white">Conditions Générales d'utilisations</router-link><br>
      <router-link to="/cgu" class="white">Mentions Légales</router-link>
      <p>Chatify - All rights reserved</p>
    </footer>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const cgu = () => {
      router.push('/cgu')
    }
const ml = () => {
      router.push('/ml')
    }
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 16px;
  background-color: #495A91;
  font-size: 12px;
  line-height: 1.6;
}

.white {
  color: #fff;
}
p {
  color: white;
}
</style>