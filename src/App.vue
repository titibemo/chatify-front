<template>
  <Topside/>
  <router-view/>
  <Bottomside/>
</template>

<script setup>
import Topside from '@/components/AppTopside.vue';
import Bottomside from '@/components/AppBottomside.vue';

import { useStore } from 'vuex';
import { onMounted } from 'vue';

const store = useStore();
onMounted(() => {
  store.dispatch('checkAuth');
});

</script>

<style lang="scss">
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

h1, h2 {
  font-family: var(--font-fraunces);
}
p, label, button, a {
  font-family: var(--font-montserrat);
}
</style>
