<template>
    <div class="main">
    <div class="contenu">
        <h1>Les mentions légales</h1>
        <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
            la confiance en l'économie numérique, il est précisé aux utilisateurs du site
            L'Atelier Sucré l'identité des différents intervenants
            dans le cadre de sa réalisation et de son suivi.</p>
        <h2>Edition du site</h2>
        <p>Le présent site, accessible à l'URL www.atelier-sucre.fr (le « Site »),
            est édité par :</p>
        <p>Ludovic Marchant, résidant 2 rue de la Pâtisserie, de nationalité Française (France),
             né(e) le 01/01/1990,</p>
        <h2>Hébergement</h2>
        <p>Le Site est hébergé par la société OVH SAS, situé 2 rue Kellermann -
             BP 80157 - 59053 Roubaix Cedex 1,
            (contact téléphonique ou email : 1007).</p>
        <h2>Directeur de publication</h2>
        <p>Le Directeur de la publication du Site est Ludovic Marchant.</p>
        <h2>Nous contacter</h2>
        <p>Par téléphone : +33102030405</p>
        <p>Par email : ludovic@atelier-sucre.fr</p>
        <p>Par courrier : 2 rue de la Pâtisserie</p>
        <h2>Données personnelles</h2>
        <p>Le traitement de vos données à caractère personnel est régi par notre Charte du respect
             de la vie privée,
              disponible depuis la section "Charte de Protection des Données Personnelles",
              conformément au Règlement Général sur la Protection des
              Données 2016/679 du 27 avril 2016 («RGPD»).</p>
    </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
@media(min-width: 320px) and (max-width: 767px)  {
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Montserrat';
}
.main {
    width: 100vw;
    display: flex;
    justify-content: center;
    color: #fff;
    background-color: rgba(38, 33, 74, 1);
    padding-bottom: 40px;
}
.contenu {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 70vw;
}
H1 {
    padding: 10px 0 10px 0;
}
h2 {
    padding: 10px 0 10px 0;
    text-align: start;
}
p {
    padding: 10px 0 10px 0;
    text-align: start;
}
}
</style>