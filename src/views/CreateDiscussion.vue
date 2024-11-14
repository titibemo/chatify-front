<template>
  <main>
    <h1>Créer une discussion</h1>
    
    <form action="">
      <label for="title">Choisissez un nom pour votre discussion :</label>
      <input class="title" type="text" name="title" id="title">

      <label for="description">Choisissez un nom pour votre discussion :</label>
      <textarea rows="4" name="description" id="description"></textarea>

      <div class="picture">
        <p>Choisissez votre image: </p>
        <label for="picture" class="upload-label">
          <input type="file" id="picture" class="upload-input" />
          <span class="upload-text">
            <img class="pictureLogo" src="./../assets/icon-picture.png" alt="">
          </span>
      </label>
      </div>
      
      <button class="validation" type="submit">Créer la discussion</button>
    </form>
  </main>
    
</template>

<script setup>

</script>

<style scoped>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main{
  min-height: 80%;
  background-color: #26214A;
  color: white;
}
h1{
  padding: 10px;
  font-size: 1.4em;
}
label, input{
  display: block;
  margin: auto;
  text-align: center;
}
label{
  margin: 10px 0;
}
input, textarea{
  width: 70%;
  border-radius: 10px;
  padding: 5px
}
.picture{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.picture > p{
  margin-right: 10px;
}

/*  css upload */

.upload-input {
    display: none;
}

.upload-label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px; 
  height: 50px;
  background-color: lightgray;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  position: relative;
}

.upload-label:hover {
    background-color: blue; 
}

.upload-text {
    display: flex;
    position: relative;
    margin: 0;
}
.pictureLogo{
  width: 30px;
  height: 30px;
}

.validation{
  width: 70%;
  padding: 5px;
  margin-bottom: 20px;
  background-color: #38C0B3;
  border: 0;
  border-radius: 10px;
  font-size: 1em;
}


</style>