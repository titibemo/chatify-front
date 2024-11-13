<template>
  <div class="main">
    <div class="contenu">
      <h1>Inscription</h1>
      <form action="submit" class="registration">
        <div class="up2">
          <div class="form-group">
            <label for="email" class="taille">E-mail</label>
            <input type="email" required v-model="email" id="email" class="big">
          </div>
          <div class="form-group">
            <label for="username" class="taille">Username</label>
            <input type="text" required v-model="username" id="username" class="big">
          </div>
          <div class="form-group">
            <label for="password" class="taille">Password</label>
            <input type="password" required v-model="password" id="password" class="big">
          </div>
        </div>
        <button type="button" @click="verify">Créer un compte</button>
      </form>
      <div class="connect">
        <p>Déjà un compte?</p>
        <router-link to="/login">Connectez-vous.</router-link>
      </div>
      <div class="help">
        <a href="">Obtenir de l'aide pour la connexion.</a>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const username = ref('');
const password = ref('');

const register = async () => {
  const data = {
    email: email.value,
    username: username.value,
    password: password.value,
  };
  console.log(data);
  
  try {
    const response = await fetch('http://127.0.0.1:8000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      console.error("Erreur lors de l'enregistrement2");
      return;
    }
    router.push('/login');
  } catch (err) {
    console.error('Erreur durant la connexion:', err);
  }
};

const verify = () => {
  if (username.value.length >= 2) {
    register();
  } else {
    console.error('Pseudo trop court!');
  }
};
</script>

<style>
@media(min-width: 320px) and (max-width: 767px)  {
  .main {
    display: flex;
    justify-content: center;
    color: #3A231F;
    background-color: rgba(38, 33, 74, 1);
    height: 100vh;
    width: 100vw;
}
.contenu {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 10px;
    width: 80vw;
    margin: 10px 0 10px 0;
}
.registration {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
}

.big {
    width: 60vw;
    height: 4vh;
}

.registration button {
    background-color: #5a93e4;
    color: #FFF3F0;
    border-radius: 15px;
    padding: 10px 0 10px 0;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
    width: 60%;
    border: none;
    margin-bottom: 20px;
}
.small {
  width: 30vw;
  height: 4vh;
}

label {
  width: 100%;
  text-align: start;
}

.up, .up2 {
  display: flex;
  width: 100%;
  padding-bottom: 10px;
}

.up label, .up2 label {
  display: block;
  width: 80%;
}

.up2 label {
  width: 100%;
}

.up2 input {
  width: 100%;
  border-radius: 15px;
  border: 1px solid #3A231F;
  background-color: #FFF;
}
.up input{
  width: 80%;
  border-radius: 10px;
  border: 1px solid #3A231F;
  background-color: #FFF;
}
.up2 {
  flex-direction: column;
  width: 70vw;
}
.taille {
  font-weight:600;
  font-size: 14px;
  padding-bottom: 5px;
  text-transform: uppercase;
  line-height: 14px;
}
.form-group1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.form-group {
  margin-bottom: 10px;
}
h1 {
  padding-bottom: 30px;
  color: #FFF;
}
.connect {
  display: flex;
  justify-content: center;
  padding: 10px 0 10px 0;
  font-size: 14px;
  font-weight: 400;
}
p{
  padding-right: 5px;
  color: #FFF;
}
a{
  text-decoration-color: #fff;
  color: #fff;
}
.help {
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
}
input:focus {
  outline: none;
  border: 1px solid #3A231F;
}
}
/*.main {
  display: flex;
  justify-content: center;
  color: #3A231F;
  background-color: rgba(38, 33, 74, 1);
  height: 80vh;
  width: 100vw;
  }

.registration {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

.contenu {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 10px;
  width: 80vw;
  margin: 10px 0 10px 0;
  }

.up2 {
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #ccc;
  margin: 0;
  font-size: 14px;
  color: #333;
}

 .registration button {
    background-color: #5a93e4;
    color: #FFF3F0;
    border-radius: 15px;
    padding: 10px 0 10px 0;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
    width: 60%;
    border: none;
    margin-bottom: 20px;
  }

  h1[data-v-eb2099ac] {
    padding-bottom: 30px;
    color: #FFF;
  }*/
</style>
