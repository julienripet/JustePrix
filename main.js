// Déclarez les variables suivantes :

//     Variable qui sera utilisée pour afficher un message
//     Variable qui va compter le nombre d'essais
//     Variable de la valeur minimum qu'on peut entrer (ici 20)
//     Variable de la valeur maximale qu'on peut entrer (ici 80)

// Déclarez les fonctions suivantes :

//     crée une fonction qui retourne un numéro aléatoire arondi entre la variable minimale et la variable maximale
//     crée une fonction
//         qui prends un argument pour tester si le numéro qu'on a entré est le bon
//         la fonction retourne un de ces 3 messages : C'est plus, C'est moins,C'est juste tu as trouvé en X coups

//-----------------------------------------------------------------------------------------------//

let showMessage = "";
let numberOfTry= 0;
let minValue= 20;
let maxValue = 80;

let randomValue = (min, max) =>{
    Math.floor(Math.random()*max)+min;
}

let testValue = 