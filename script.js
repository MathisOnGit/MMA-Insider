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
     
// afficher titre :

function afficherTitre() {
let nomjournal = data.journal.nomJournal
console.log(nomjournal);
let titleID = document.getElementById("nom-journal");
console.log(titleID);
titleID.insertAdjacentHTML("beforeend", nomjournal);
}
afficherTitre()

// Tableau themes nav :

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

// Titre principal, secondaire et date Article Principal :
 
function articlePrincipal() {
var articlePrincipal = data.journal.articlePrincipal;
console.log(articlePrincipal);
var articlePrincipalID = document.getElementById("article-principal");
console.log(articlePrincipalID);
var titre = data.journal.articlePrincipal.titre;
console.log(titre);
var theme = data.journal.articlePrincipal.theme
console.log(theme);
var date = data.journal.articlePrincipal.date
console.log(date);
var titreprincipalID = document.getElementById("titre-principal-article");
}

 /* function afficherThemeArticle() {
    var theme = data.journal.articlePrincipal.theme;
    console.log(theme);
    var themeprincipalID = document.getElementById("theme-principal-article");
    console.log(themeprincipalID);
    themeprincipalID.insertAdjacentHTML("beforeend", theme);
  }
  afficherThemeArticle();
*/



       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici