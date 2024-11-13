<template>
  <div class="container">
    <div v-if="error" class="">
            {{ error }}
    </div>
      <div class="main-content">
        <div class="contenu">
          <img src="@/assets/chatify-logo-cut.png" alt="Chatify-Logo" class="logo-large" />
            <h1>Se connecter</h1>
            <form @submit.prevent class="login"> 
              <div>
                <IcProfileCircle class="icon" />
                <input type="email" placeholder="ADRESSE MAIL" v-model="email" required />
              </div>
              <div>
                <IcProfileCircle class="icon" />
                <input type="password" placeholder="MOT DE PASSE" v-model="password" />
              </div>
              <!--<input type="text" placeholder="email" name="email" v-model="email" />
              <input type="password" placeholder="password" v-model="password" />-->
              <button class="validate" type="submit" @click="login">SE CONNECTER</button> 
              <p class="oublie">Mot de passe oublié ? <router-link to="/inscription"></router-link></p>
            </form>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

//import { HeFilledUiUserProfile, IcProfileCircle, FlFilledPeopleCommunity, McBirthday2Fill, CoBrandMailRu, CgKeyhole, MdDescription } from '@kalimahapps/vue-icons';

const router = useRouter();
const store = useStore();
const email = ref('');
const password = ref('');
const error = ref('');

const setTokenStore = (token) => {
  const user = JSON.parse(atob(token.split('.')[1]));
  store.commit('setUser', user);
  store.commit('setToken', token);
  store.commit('createToken', token);

  router.push('/mesdiscussions')
};

const login = async () => {
  const data = {
    email: email.value,
    password: password.value,
    
  };

  try {
    const response = await fetch(`http://localhost:8000/api/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });
    
    
    if (!response.ok) {
      const data = await response.json();
      console.log(data);
      error.value = data.message
      return;
    }

    const result = await response.json();

    console.log("res", result);
    

    
    setTokenStore(result.token);
    router.push('/mesdiscussions');
  } catch (err) {
    console.error('Error during login:', err);
  }
};
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
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f5f5f5; 
}

.main-content {
  background-color: rgb(38, 33, 74); 
  border-radius: 10px; 
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); 
  max-width: 400px;
  width: 100vw;
  height: 80vh;
  text-align: center;
}

.contenu {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-large {
  width: 120px; 
  margin-bottom: 20px;
  margin-top: 120px;
}

h1 {
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
}

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.input-container {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
}

.icon {
  margin-right: 10px;
  font-size: 20px;
  color: #6c757d; 
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 0;
  font-size: 14px;
  color: #333;
}

input:focus {
  outline: none;
  border-color: #007bff; 
}

button.validate {
  width: 58%;
  padding: 12px;
  background-color: #007bff; 
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 60px;
}

button.validate:hover {
  background-color: #0056b3; 
}

.forgot-password {
  margin-top: 15px;
  font-size: 14px;
}

.forgot-password a {
  color: #007bff;
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
}

.oublie {
  padding-top: 25px;
}
</style>