/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */



generateFiveNumbers();

//crea un array vuoto
//crea un ciclo for da 1 a 5 
// - crea una variabile per numeri random da 1 a 100
// - pusha i numeri random nell'array
// stampa 5 numeri dell array nel dom

/**
 * Description: this function generate 5 random numbers and print them on DOM
 * @returns void
 */
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
const seconds = 5 * 1000;

// -fai partire il timer
setTimeout(hidNumbers, seconds);;

// - creare una funzione che ti dirà cosa succede dopo i 30 secondi 
//     + scompare l'array in html

/**
 * Description: this function hid the numbers on DOM
 * @returns void
 */
function hidNumbers () {
    let numbers = document.getElementById('numbers');
    numbers.classList.add('hidden');
}

//     + 5 prompt, un secondo di ritardo rispetto a writeNumbers() per non mostrare i numeri dietro

setTimeout(askNumbers, 6000);

/**
 * Description: this function ask five prompts to ask numbers. then print on dom which number the user guessed
 * @returns: void
 */

function askNumbers() {
    for (let i = 0; i < 5; i++) {
        // chiedi 5 prompt
        const userNumbers = parseInt(prompt('scrivi un numero'));
        // se il numero scritto è presente nel dom 
        // - true
        // - stampa in dom
        // altrimenti
        // - il numero non viene stampato
        if (userNumbers === fiveNumbers[i]) {  
            let choice = true;
            console.log(choice);
        } else {
            let choice = false;
            console.log(choice);
        }
    }
}

//software dice quanti numeri hai indovinato e quali


