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

let showMessage = "Enter a number";
let numberOfTry= 0;
let minValue= 20;
let maxValue = 80;

let randomValue = (min, max) =>{
    return Math.floor(Math.random()*(max-min)+min);
}

let testValue = correctPrice => {
    let guessedPrice = prompt(showMessage);
    if (guessedPrice < correctPrice){
        showMessage = "C'est plus";
        return false;
    } else {
        if(guessedPrice > correctPrice){
            showMessage="C'est moins";
            return false;
        } else {
            if(guessedPrice == correctPrice){
                showMessage = "C'est gagné!";
                console.log(correctPrice);
                return true;
            } else{showMessage= "Valeur entrée non valide!"}
        }
    }
}

let main = actualPrice => {
    if (testValue(actualPrice) == true){
        console.log("CONGRATULATIONS");
    } else {
        main(actualPrice);
    }
}
let realPrice = randomValue(minValue,maxValue);
main(realPrice);