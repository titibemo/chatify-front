<template>
    <main>
        <h1>Mes Discussions</h1>
        <ul class="discussion-list">
            <!-- Discussion Item 1 -->
            <li class="discussion-item">
                <img src="../assets/chatify-logo-cut.png" alt="Les petits chats" class="avatar">
                <div class="discussion-content">
                    <h2>Les petits chats</h2>
                    <p>besoins de conseils ? vous voulez parler de votre petit matou ? venez ici !</p>
                </div>
                <div class="actions">
                    <button class="edit-button">éditer</button>
                    <button class="delete-button">supprimer</button>
                </div>
            </li>
            <!-- Discussion Item 2 -->
            <li class="discussion-item">
                <img src="../assets/chatify-logo-cut.png" alt="Cupcake en folie !" class="avatar">
                <div class="discussion-content">
                    <h2>Cupcake en folie !</h2>
                    <p>Partagez vos meilleurs recettes de cupcake.</p>
                </div>
                <div class="actions">
                    <button class="edit-button">éditer</button>
                    <button class="delete-button">supprimer</button>
                </div>
            </li>
            <!-- Discussion Item 3 -->
            <li class="discussion-item">
                <img src="../assets/chatify-logo-cut.png" alt="Fashion" class="avatar">
                <div class="discussion-content">
                    <h2>Fashion blog</h2>
                    <p>Vos meilleurs looks de mode.</p>
                </div>
                <div class="actions">
                    <button class="edit-button">éditer</button>
                    <button class="delete-button">supprimer</button>
                </div>
            </li>
            <!-- Discussion Item 1 -->
            <li class="discussion-item">
                <img src="../assets/chatify-logo-cut.png" alt="Les petits chats" class="avatar">
                <div class="discussion-content">
                    <h2>Les petits chats</h2>
                    <p>besoins de conseils ? vous voulez parler de votre petit matou ? venez ici !</p>
                </div>
                <div class="actions">
                    <button class="edit-button">éditer</button>
                    <button class="delete-button">supprimer</button>
                </div>
            </li>
            <!-- Discussion Item 2 -->
            <li class="discussion-item">
                <img src="../assets/chatify-logo-cut.png" alt="Cupcake en folie !" class="avatar">
                <div class="discussion-content">
                    <h2>Cupcake en folie !</h2>
                    <p>Partagez vos meilleurs recettes de cupcake.</p>
                </div>
                <div class="actions">
                    <button class="edit-button">éditer</button>
                    <button class="delete-button">supprimer</button>
                </div>
            </li>
            <!-- Discussion Item 3 -->
            <li class="discussion-item">
                <img src="../assets/chatify-logo-cut.png" alt="Fashion" class="avatar">
                <div class="discussion-content">
                    <h2>Fashion blog</h2>
                    <p>Vos meilleurs looks de mode.</p>
                </div>
                <div class="actions">
                    <button class="edit-button">éditer</button>
                    <button class="delete-button">supprimer</button>
                </div>
            </li>
        </ul>
    </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const user = computed(() => store.state.user || {});
const idUser = user.value.id
console.log(user);
console.log(user.value);
console.log(idUser);

</script>

<style scoped>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    background-color: #1a1649;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

main{
    background-color: #2b2765;
    padding-bottom: 20px;
}
.container {
    width: 90%;
    max-width: 400px;
    text-align: center;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #3e397b;
}

.logo {
    height: 40px;
}

.menu-button {
    background: none;
    border: none;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
}

h1 {
    font-size: 1.5em;
    padding-top: 37px;
    margin-bottom: 35px;
}

.discussion-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.discussion-item {
    display: flex;
    align-items: center;  
    padding: 15px;
    background-color: #2b2765;
}

.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
}

.discussion-content {
    flex-grow: 1;
    text-align: left;
}

.discussion-content h2 {
    font-size: 1.1em;
    margin-bottom: 5px;
    color: #fff;
}

.discussion-content p {
    font-size: 0.9em;
    color: #fff;
}

.actions {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.edit-button, .delete-button {
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.9em;
    cursor: pointer;
}

.edit-button {
    background-color: rgb(56, 192, 179);
    color: #fff;
}

.delete-button {
    background-color: rgba(255, 90, 95, 1);
;
    color: #fff;
}

.footer {
    background-color: #201d4e;
    padding: 20px;
    font-size: 0.9em;
}

.footer a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    font-size: 0.8em;
}

.footer p {
    margin-top: 10px;
    color: #bbb;
    font-size: 0.8em;
}

</style>