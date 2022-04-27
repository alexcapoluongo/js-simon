/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */




//crea un array vuoto
//crea un ciclo for da 1 a 5 
// - crea una variabile per numeri random da 1 a 100
// - pusha i 5 numeri random nell'array
// stampa array nel dom

/**
 * Description: this function generate 5 random numbers and print them on DOM
 * @returns void
 */
generateFiveNumbers();
function generateFiveNumbers() {
    fiveNumbers = [];
    for (let i=0; i<5; i++) {
        //crea un numero random
        const numbers = Math.floor(Math.random()*100);
        console.log(numbers);
        //push i 5 numeri random nell'array
        fiveNumbers.push(numbers);
    }
    console.log(fiveNumbers);
    //stampa i numeri
    document.getElementById('numbers').innerHTML = fiveNumbers;
}


// crea un timer di 30 secondi che parte appena si visualizza la pagina
// - creare una variabile seconds
const seconds = 30 * 1000;
// -fai partire il timer
setTimeout(hidNumbers, seconds);;

// - creare una funzione che dopo 30 secondi
//     + fa scomparire l'array in html
/**
 * Description: this function hid the numbers on DOM
 * @returns void
 */
function hidNumbers () {
    let numbers = document.getElementById('numbers');
    numbers.classList.add('hidden');
}

setTimeout(askNumbers, 31 * 1000);

//     funzione che chiede 5 prompt, un secondo di ritardo rispetto a hidNumbers() per non mostrare i numeri dietro durante i prompt

/**
 * Description: this function ask five prompts to ask numbers. then print on dom which number the user guessed
 * @returns: void
 */

function askNumbers() {
    let choice;
    const guessedNumber = [];
    for (let i = 0; i < 5; i++) {
        // chiedi 5 prompt
        const userNumbers = parseInt(prompt('scrivi un numero'));
        // se il numero scritto è presente nell'array fiveNumbers allora:
        // - pusha nell'array guessedNumbers
        if (userNumbers === fiveNumbers[i]) {  
            guessedNumber.push(fiveNumbers[i])
        }
    }
    // stampa risultato finale
    //software dice quanti numeri hai indovinato e quali
    let result = document.getElementById('result');
    result.innerHTML = `hai indovinato i numeri ${guessedNumber} vale a dire ${guessedNumber.length} su 5`;
}



