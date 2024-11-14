<template>
  <div class="main">
    <div v-if="user" class="contenu">
    <h1>Mon profil</h1>
      <p>Email: {{ user.email }}</p>
      <p>Pseaudo: {{ user.username }}</p>
     
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();

const email = ref('');
const username = ref('');
const newPassword = ref('');

const profile = async () => {
  const data = {
    email: email.value,
    username: username.value,
    password: password.value,
  };
  console.log(data);
}
const user = computed(() => store.getters.user);

console.log(user);


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

}
form {
  color: #fff;
}
</style>