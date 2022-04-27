/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

//creare 5 numeri random da 1 a 99 
// - creare un ciclo for per generare i numeri
// -creare un array vuoto dove andranno 5 numeri (do while)

generateFiveNumbers();

function generateFiveNumbers() {
    fiveNumbers = [];
    for (let i=0; i<5; i++) {
        //crea un numero random
        const numbers = Math.floor(Math.random()*100);
        console.log(numbers);
        //pushato i 5 numeri random nell'array
        fiveNumbers.push(numbers);
    }
    console.log(fiveNumbers);
    //stampa i numeri
    document.getElementById('numbers').innerHTML = fiveNumbers;
}




// crea un timer di 30 secondi che parte appena si visualizza la pagina

//software dice quanti numeri hai indovinato e quali