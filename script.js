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
      
let nomjournal = data.journal.nomJournal
console.log(nomjournal);
let titleID = document.getElementById("nom-journal");
console.log(titleID);
titleID.insertAdjacentHTML("beforeend", nomjournal);
// tableau themes nav :
var themes = data.journal.themes
console.log(themes);
var themesID = document.getElementById("nom-themes");
console.log(themesID);
themesID.insertAdjacentHTML("beforeend", themes);
//



       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici