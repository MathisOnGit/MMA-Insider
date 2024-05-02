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
      </div>`;
  articlePrincipalID.insertAdjacentHTML("beforeend",allArticlePrincipal)
  }

articlePrincipal()

function LesArticles(){
  let titreArticle = data.journal.articlePrincipal.titre;
  console.log(titreArticle);
  let themeArticle = data.journal.articlePrincipal.theme;
  console.log(themeArticle);
  let dateArticle = data.journal.articlePrincipal.date;
  console.log(dateArticle);
  let descriptionArticle = data.journal.articlePrincipal.description;
  console.log(descriptionArticle);
  let imageArticle = data.journal.articlePrincipal.image;
  console.log(imageArticle);
}
LesArticles()

function LesAuteurs(){
  let auteurs = data.journal.auteurs;
  console.log(auteurs);
  let prenomAuteurs = data.jounal.auteurs.prenom;
  console.log(prenomAuteurs);
  let typeExperience = data.journal.auteurs.typeExperience;
  console.log(typeExperience);
  let presentationAuteurs = data.journal.auteurs.presentation
  console.log(presentationAuteurs);
  let afficherLesAuteurs = `<div >
  <h1>${prenomAuteurs}<h1>
  <p>${typeExperience}</p>
<p>${presentationAuteurs}</p>
<img src="" alt="imageAuteurs">
      </div>`;
}
LesAuteurs()


       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici