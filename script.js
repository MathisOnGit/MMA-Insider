function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
      
function afficherTitre() {
let nomjournal = data.journal.nomJournal
console.log(nomjournal);
let titleID = document.getElementById("nom-journal");
console.log(titleID);
titleID.insertAdjacentHTML("beforeend", nomjournal);
}
afficherTitre()

// tableau themes nav :

function afficherThemes(){
var themes = data.journal.themes;
themes.forEach(element => {
console.log(themes);
  var themetitre = element.nom;
  console.log(themetitre);
  var list = `<li>${themetitre}</li>`
console.log(list);
var themesID = document.getElementById("themes");
console.log(themesID);
themesID.insertAdjacentHTML("beforeend", list);
});
}
afficherThemes()
//


       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici