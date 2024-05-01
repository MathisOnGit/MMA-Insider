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
     
/* afficher titre :

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
 function afficherTitre() {
  let nomjournal = data.journal.nomJournal
  console.log(nomjournal);
  let titleID = document.getElementById("nom-journal");
  console.log(titleID);
  titleID.insertAdjacentHTML("beforeend", nomjournal);
  }
  afficherTitre()

function afficherLesThemes(){
let themes = data.journal.themes;
 console.log(themes);
 themes.forEach(element => {
   let themeTitre = element.nom
   console.log(themeTitre);
   let liste = `<li >
     <a href="#">${themeTitre}</a>
     </li>`;
   let themesId = document.getElementById("themes")
   console.log(themesId);
   themesId.insertAdjacentHTML("beforeend",liste )
 })
}
afficherLesThemes()
 
function articleprincipal(){
let articleprincipal = data.journal.articlePrincipal
console.log(articleprincipal);
let articleprincipalId = document.getElementById("article-principal")
console.log(articleprincipalId);
let title = articleprincipal.titre;
console.log(title);
let date = articleprincipal.date;
console.log(date);
let description = articleprincipal.description;
console.log(description);
let themes = articleprincipal.theme
console.log(themes);
let image = articleprincipal.image
console.log(image);
let articlepricipalGlobal = `<div class="fond">
<h1>${title}</h1>
<p>${description}</p>
<p>${date}</p>
<h4>${themes}</h4>
<img src="${image}" alt="">
</div>`
console.log(articlepricipalGlobal);
articleprincipalId.insertAdjacentHTML("beforeend", articleprincipalGlobal);
}
articleprincipal()
/*
function LesArticles() {
let articles = data.journal.articles
console.log(articles);
articles.forEach(element => {
let articleId = document.getElementById("articles")
console.log(articleId);
let titre = element.titre
console.log(titre);
let date  = element.date
console.log(date);
let theme  = element.theme
console.log(theme);
let image  = element.image
console.log(image);
let arti = `<div>
<img src="${image}" alt="">
<h1>${titre}</h1>
<h3>${theme}-${date}</h3>
<a href="">lire article</a>
</div>
<div>`
console.log(arti);
articleId.insertAdjacentHTML("beforeend",arti)
});
}
function touslesauteurs() {
let auteurs = data.journal.auteurs
console.log(auteurs);
auteurs.forEach(element => {
let auteurId = document.getElementById("auteurs")
console.log(auteurId);
let prenom = element.prenom
console.log(prenom);
let expreience = element.typeExperience
console.log(expreience);
let presentation = element.presentation
console.log(presentation);
let lesauteurs = ` <div>
<img src="" alt="">
<h2>${prenom}</h2>
<h3>${expreience}</h3>
<p>${presentation}</p>
</div>`
console.log(lesauteurs);
auteurId.insertAdjacentHTML("beforeend", lesauteurs)
});
}
*/


   LesArticles()
   touslesauteurs()



       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici