<template>
  {{ user }}
  <div class="top">
    <router-link to="/"><img src="@/assets/chatify-logo-cut.png" alt="logo" class="logo"></router-link>
    <div class="nav">
      <div class="nav-icons">
        <img
          src="./../assets/Recherche.svg"
          alt="search icon"
          class="icon2"
          @click="toggleSearch"
          @keydown.enter="toggleSearch"
          @keydown.space="toggleSearch"
          tabindex="0"
          role="button"
        />
      </div>
      <transition name="slide-right">
        <div v-if="isSearchOpen" class="search-container">
            <input
              type="text"
              v-model="searchQuery"
              class="search-input"
              placeholder="Entrez votre recherche"
              @keydown="handleKeydown"
            />
          <button @click="Search" class="recherche-btn">Recherche</button>
        </div>
      </transition>
      <div>
        <img src="./../assets/Icône-burger.svg" alt="burger" class="icon"
        @click="menu" @keydown.enter="menu" @keydown.space="menu">
      <transition name="slide-right">
      <div v-if="isMenuOpen" class="burger-dropdown">
        <ul v-if="user.id && user.id !== 1">
          <li><router-link @click="menu" to="/profile">Mon compte</router-link></li>
          <li><router-link @click="menu" to="/listeDiscussions">Les discussions</router-link></li>
          <li><router-link @click="menu" to="/creatediscussion">Créer une discussion</router-link></li>
          <li><router-link @click="menu" to="/mesdiscussions">Mes discussions</router-link></li>
          <li><router-link @click="menu" to="/favoris">Mes favoris</router-link></li>
          <li><a href="/login" @click="logout" class="deco">Se déconnecter</a></li>
        </ul>
        <ul v-if="user.id && user.id === 1">
          <li><router-link @click="menu"  to="/profile">Mon compte</router-link></li>
          <li><router-link @click="menu"  to="/discussion">Mes discussions</router-link></li>
          <li><router-link @click="menu"  to="/creatediscussion">Créer une discussion</router-link></li>
          <li><router-link @click="menu"  to="/favoris">Mes favoris</router-link></li>
          <li><router-link @click="menu"  to="/profile">Mon Compte</router-link></li>
          <li><a href="/login" @click="logout" class="deco">Se déconnecter</a></li>
        </ul>
        <ul v-else>
          <li><router-link @click="menu" to="/inscription">Inscription</router-link></li>
          <li><router-link @click="menu" to="/login">Login</router-link></li>
        </ul>
      </div>
    </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';


const store = useStore();
const router = useRouter();
const user = computed(() => store.state.user || {});

onMounted( () =>{
  const user = computed(() => store.state.user || {});
})



const isSearchOpen = ref(false);
const searchQuery = ref('');
const isMenuOpen = ref(false);

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};
const menu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const Search = () => {
  if (searchQuery.value) {
    console.log(`Recherche pour : ${searchQuery.value}`);
  } else {
    console.log('Veuillez entrer une recherche');
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    Search();
  }
};



const logout = () => {
  store.dispatch('logout');
  menu();
  router.push('/login');
};

</script>


<style scoped>
@media(max-width: 767px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .top {
    background-color: #495A91;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 16px;
    position: relative;

  }

  .nav {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
  }

  .icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    color: white;
  }

  .icon2 {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }

  .logo {
    position: absolute;
    height: 40px;
    top: 15px;
    left: 15px

  }

  .search-container {
    position: absolute;
    top: 11px;
    right: 0;
    width: 100vw;
    height: 25.5vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

  .search-input {
    background-color: #fff;
    width: 90%;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #3A231F;
    font-size: 16px;
    margin: 20px;
    outline: none;
  }

  .recherche-btn {
    background-color: #5a93e4;
    color: white;
    border: none;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
  }

  label {
    font-weight: bolder;
  }

  .slide-right-enter-active {
    transition: all 0.3s ease-out;
  }
  
  .slide-right-leave-active {
    transition: all 0.3s ease-in;
  }
  
  .slide-right-enter-from,
  .slide-right-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }


  .burger-dropdown {
    position: absolute;
    top: 60px;
    right: 0;
    background-color: rgba(73, 90, 145, 1);
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 101;
  }

  .burger-dropdown ul {
    list-style: none;
    padding: 0;
  }

  .burger-dropdown ul li {
    /*margin: 10px 0;*/
    border-bottom: 1px solid #2a2240;
  }

  .burger-dropdown ul li:last-child {
    border-bottom: none;
  }


  .burger-dropdown ul li a {
    text-decoration: none;
    color: #FFECE6;
    font-weight: bold;
    font-size: 20px;
    padding: 5px 0 5px 0;
  }
  li {
    padding: 10px 0 10px 0;
  }
  .burger-dropdown .deco {
    color: #ff7f7f;
  }
}
</style>
