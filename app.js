// function estHeureValide(heures, minutes) {
//   return heures >= 0 && heures <= 23 && minutes >= 0 && minutes <= 59; 
//   alert("L'heure est valide.");
// }
// function fraisDePort(poidsKg, totalCommande) {
//     if (totalCommande >= 50) {
//         return 0;
//     } if (poidsKg <= 2) {
//         return 5;
//     } else if (poidsKg <= 5) {
//         return 8;
//     } else {
//         return 12;
//     }
// }

// function actionFeu(couleurActuelle) {
//     if (couleurActuelle === "rouge") {
//         return "Arrêt";
//     } else if (couleurActuelle === "vert") {
//         return "Avance";
//     } else if (couleurActuelle === "orange") {
//         return "ralentir";
//     } else {
//         return "feu défectueux";
//     }}
// function estBissextile(annee) {
//     if (annee % 4 === 0) {
//         if (annee % 100 === 0) {
//             return annee % 400 === 0;
//         }
//         return true;
//     }
//     return false;
// }

// let para = document.querySelector("p");

// para.addEventListener("click", updateName);

// function updateName() {
//   let name = prompt("Enter a new name");
//   para.textContent = "Player 1: " + name;
// }
// document.addEventListener("DOMContentLoaded", function () {
//   function createParagraph() {
//     let para = document.createElement("p");
//     para.textContent = "Vous avez cliqué sur le bouton!";
//     document.body.appendChild(para);
//   }

//   const buttons = document.querySelectorAll("button");

//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", createParagraph);
//   }
// });

// function euroToDollar(montantEuro) {
//   const tauxDeConversion = 1.8; // Taux de conversion Euro vers Dollar
//   alert(montantEuro * tauxDeConversion);
// }
// euroToDollar(100);
// function calculerSurfaceRect(largeur, longueur) {
//   if (largeur <= 0 || longueur <= 0) {
//     alert(" Erreur: aucune dimension ne peut être inférieure à zéro.");
//     return null;
//   }
//   return largeur * longueur;
// }
// calculerSurfaceRect(5, 10);

// function saluer(nom, genre) {
//   if (genre === "homme") {
//     alert("Bonjour Monsieur, " + nom + "!");
//   } else if (genre === "femme") {
//     alert("Bonjour Madame, " + nom + "!");
//   } else {
//     alert("Bonjour, " + nom + "!");
//     genre = prompt("Veuillez entrer votre genre:");}
// }
// // saluer("Jean");
// function nomComplet(prenom, nom) {
//    upperPrenom = prenom.charAt(0).toUpperCase() + prenom.slice(1);
//    upperNom = nom.charAt(0).toUpperCase(1) + nom.slice(1);
//    return upperPrenom + " " + upperNom;
// }
// nomComplet("jean", "dupont");
// const smartphone = {
//     id: "SP-01",
//     marque: "Samsung",
//     modele: "Galaxy A54",
//     prixUSD: 350,
//     enStock: true
// };
// // 1. Lire (Notation pointée)
// console.log(smartphone.modele);     // "Galaxy A54"

// // 2. Modifier
// smartphone.prixUSD = 320;           // Remise accordée !

// // 3. Ajouter une nouvelle clé
// smartphone.garantieMois = 24;
// const inventaire = [
//     { id: 1, nom: "Ordinateur Portable", prix: 850, categorie: "INFORMATIQUE", enStock: true },
//     { id: 2, nom: "Souris Sans Fil",      prix: 25,  categorie: "ACCESSOIRE",   enStock: true },
//     { id: 3, nom: "Casque Audio",         prix: 60,  categorie: "AUDIO",        enStock: false },
//     { id: 4, nom: "Clavier Mécanique",    prix: 75,  categorie: "ACCESSOIRE",   enStock: true }
// ];

// console.log(inventaire[0].nom);
// function afficherProps(obj, nomObjet) {
//   let resultat = "";
//   for (let i in obj) {
//     if (obj.hasOwnProperty(i)) {
//       resultat += `${nomObjet}.${i} = ${obj[i]}\n`;
//     }
//   }
//   return resultat;
// }
function estBissextile(année) {
    if (année % 4 === 0) {
      return true;
    }
      if (année % 100 === 0) {
            return année % 400 === 0;
        }
    return false;
}
estBissextile(2020); 