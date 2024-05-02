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

function afficherThemes(){
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
afficherThemes()

function articlePrincipal(){
  let articleprincipal = data.journal.articlePrincipal
console.log(articleprincipal);
let articlePrincipalID = document.getElementById("article-principal")
console.log(articlePrincipalID);

  let titreArticlePrincipal = data.journal.articlePrincipal.titre;
  console.log(titreArticlePrincipal);
  let themeArticlePrincipal = data.journal.articlePrincipal.theme;
  console.log(themeArticlePrincipal);
  let dateArticlePrincipal = data.journal.articlePrincipal.date;
  console.log(dateArticlePrincipal);
  let descriptionArticlePrincipal = data.journal.articlePrincipal.description;
  console.log(descriptionArticlePrincipal);
  let imageArticlePrincipal = data.journal.articlePrincipal.image;
  console.log(imageArticlePrincipal);
  let allArticlePrincipal = `<div >
  <img src="${imageArticlePrincipal}" alt="imageArticlePrincipal">
  <h1>${titreArticlePrincipal}<h1>
  <p>${descriptionArticlePrincipal}</p>
<p>${dateArticlePrincipal}</p>
<h4>${themeArticlePrincipal}</h4>
<a href="">sdXdq</a>
      </div>`;
  articlePrincipalID.insertAdjacentHTML("beforeend",allArticlePrincipal)
  }

articlePrincipal()

function LesArticles(){
  let articles = data.journal.articles;
  console.log(articles);
  articles.forEach(element => {
    let articlesID = document.getElementById("articles")
    console.log(articlesID);
    let titreArticles = element.titre;
    console.log(titreArticles);
    let themeArticles = element.theme;
    console.log(themeArticles);
    let dateArticles = element.date;
    console.log(dateArticles);
    let descriptionArticles = element.description;
    console.log(descriptionArticles);
    let imageArticles = element.image;
    console.log(imageArticles);
    let allArticles = `<div >
    <img src="${imageArticles}" alt="imageArticle">
    <h1>${titreArticles}<h1>
  <p>${dateArticles}</p>
  <h4>${themeArticles}</h4>
  <a href="">sdXdq</a>
        </div>`;
    articlesID.insertAdjacentHTML("beforeend",allArticles)
  });
  }

LesArticles()

function LesAuteurs(){
  let auteurs = data.journal.auteurs;
  console.log(auteurs);
  auteurs.forEach(element => {
    let auteursID = document.getElementById("notre-equipe");
    console.log(auteursID);
  let prenomAuteurs = element.prenom;
  console.log(prenomAuteurs);
  let typeExperience = element.typeExperience;
  console.log(typeExperience);
  let presentationAuteurs = element.presentation
  console.log(presentationAuteurs);
  let afficherLesAuteurs = `<div >
  <h1>${prenomAuteurs}<h1>
  <p>${typeExperience}</p>
<p>${presentationAuteurs}</p>
<img src="" alt="imageAuteurs">
      </div>`;
      auteursID.insertAdjacentHTML("beforeend",afficherLesAuteurs);
    });
  }
LesAuteurs()


       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici