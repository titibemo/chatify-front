<template>
  <div class="main">
    <div v-if="user" class="contenu">
      <p>{{ user.email }}</p>
      <p>{{ user.username }}</p>
      <!-- Note: Remove password display in a real application for security reasons -->
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();

const user = computed(() => store.getters.user);

onMounted(() => {
  store.dispatch('fetchUsers').catch(error => {
    console.error('Failed to fetch user data:', error);
  });
});

const logout = () => {
  store.dispatch('logout');
  router.push('/login');
};

const info = () => {
  const currentUser = user.value;

  if (!currentUser) {
    console.error('User not found');
    return;
  }
  const { id } = currentUser;
  console.log('Fetched ID:', id);
  if (id) {
    router.push(`/UpdateProfile/${id}`);
  } else {
    console.error('User ID not found');
  }
};
</script>

<style scoped>
/* Keep original styles here */
@media(min-width: 320px) and (max-width: 767px) {
  .profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FCEBE6;
    padding: 20px;
    border-radius: 15px;
    width: 100%;
    max-width: 400px;
    margin: auto;
  }
  /* Remaining styles unchanged */
}
</style>
