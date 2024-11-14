<template>
    <main>
      <h1>test</h1>
      <p>bonjour</p>
    </main>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* S'assurer que html et body prennent toute la hauteur */
  html, body {
    height: 100%;
    margin: 0;
  }
  
  /* Style de la balise main */
  main {
    background-color: aquamarine;
    min-height: 100%; /* Prendre au minimum 100% de la hauteur de son parent */
    height: 100%; /* S'assurer qu'il prend toute la hauteur disponible */
    padding: 20px; /* Un peu de padding pour le contenu */
  }
  </style>
  