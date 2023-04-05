function Personnage (nom, classe, arme, image){
    this.nom = nom;
    this.classe = classe;
    this.arme = arme;
    this.image = image
}

let personnage1 = new Personnage("arthur","chevalier","épee","img/chevalier.png");
let personnage2 = new Personnage("merlin","mage","baton","img/mage.png");
let personnage3 = new Personnage("jaskier","barde","luth","img/barde.png");
let personnage4 = new Personnage("nils","archet","arc","img/archet.png");
let personnage5 = new Personnage("ekemon","barbare","hache à deux mains","img/barbare.png");
let personnage6 = new Personnage("alderic","roublard","dagues","img/voleur.png");


const perso = [personnage1, personnage2, personnage3, personnage4, personnage5, personnage6];
let container = document.querySelector("#container");
let header = document.querySelector("header");
// console.log(perso)

container.style.display = "none";
container.style.opacity = "0";

let persoSearch = document.getElementById("searchBar");
document.getElementById("searchBar").addEventListener("keyup", () => {
   
    found(persoSearch, perso);
});
// document.getElementsById("container").style.display = "none";
function found(persoSearch, perso){
    document.getElementById("show").innerHTML = '';
    
    if (persoSearch.value.length > 2) {
        for (let p of perso){
            if(p.nom.includes(persoSearch.value) 
            || p.classe.includes(persoSearch.value)
            ||p.arme.includes(persoSearch.value)){
                // inclure recherche de classe et armes 
                container.style.display = "block";
                container.classList.add("transition");
                header.style.height = "60vh";
                document.getElementById("show").innerHTML += `<div> <h2>Nom : ${p.nom} </h2> <br> <h4>Classe : ${p.classe} </h4> <br> <h4>Arme : ${p.arme}</h4><br></div> <img src="${p.image}">`;
            }
        }
    }
    if (persoSearch.value.length <= 2) {
        container.style.display = "none";
        header.style.height = "100vh";
    }
}

    // console.log(p)
  


    
// const result = perso.filter(checkArray);


    
    
//     if (persoSearch !== p) {
//         return false;
//     }
//     else document.getElementById("show").innerHTML = i;
    
    // let result = perso.filter(item => item == persoSearch);
    // document.getElementById("show").innerHTML = result;

// console.log(result);


