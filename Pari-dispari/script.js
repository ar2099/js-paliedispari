// Pari e Dispari
// L’utente sceglie pari o dispari 
//e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) 
//per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri
// è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

//1 step = creare funzione numeri casuale da 1 a 5
function numeroRandom(){
 let random =   Math.floor(Math.random()*5) +1;
 return random;
}
 
//controllo step1
// console.log(numeroRandom())

//2 step = creiamo una funzione che sommi due numeri
function somma(x, y){
   z = x + y;
   return z;
}

//controllo step2
// console.log(somma(3, 5))

//3 step = creiamo una funzione che stabilisca se un numero è pari o dispari
function determina(pd){
if (pd % 2 == 0) {
   return determinazione = "pari";
} else {
  return  determinazione = "dispari";
}
}

// verifica step 3
// console.log(determina(6))


//4 step = creaiamo l'estrazione del numero e
//la funzione che dice se rispetta 
// i parametri indicati sopra "dal 1 al 5"

let numeroUtente = Number(document.getElementById("numero-utente").value) ;

function estrazione(n){
    if((n < 6) && (n > 0) && (n == Math.floor(n))){
      return condizioniNumero = "rispettate";
    } else{
        return condizioniNumero = "riprova";
    }
}

//5 step = creiamo una variabile che ci dica se l'utente ha
//scelto pari o dispari
let scelta = document.getElementById("pari-dispari").value

//6 step = creiamo il bottone e assembliamo tutte le funzioni

let bottone = document.getElementById("invia")

bottone.addEventListener("click",

function(){
    //6.1 creiamo numero pc e somma dei numeri pc e utente
    let numeroPc = numeroRandom();

    // 6.2 testiamo se prende i parametri interni
    // console.log("test eventi interno funzione finale")
    // console.log(numeroPc)
    // console.log(numeroUtente)
    // console.log(estrazione())
    // console.log(scelta)

    // non li prende, quindi mettiamo le variabili all'interno della funzione
    let numeroUtente = Number(document.getElementById("numero-utente").value);
    let scelta = document.getElementById("pari-dispari").value

    //ritestiamo
    console.log("2 test eventi interno funzione finale")
    console.log(numeroPc)
    console.log(numeroUtente)
    console.log(estrazione(numeroUtente))
    console.log(scelta)
    //funzionano 

    //6.3 creiamo somma dei numeri pc e utente
    let sommaFinale = somma(numeroPc, numeroUtente);
    console.log(sommaFinale);

    //1 condizione per continuare il ciclo= il numero utente deve rispettare le condizioni
    if(estrazione(numeroUtente) == "rispettate"){

        //con un altro if, stabiliamo le due casistiche: vittoria e sconfitta
        if(scelta == determina(sommaFinale)){
        
            document.getElementById("responso").innerHTML = `<p>Numero utente = ${numeroUtente}</p><p>Numero pc = ${numeroPc}</p><p>Scelta giocatore = ${scelta}</p><p>Somma numeri = ${sommaFinale}</p><p>L'utente ha vinto</p>`
    }
        else{ 
            document.getElementById("responso").innerHTML =`<p>Numero utente = ${numeroUtente}</p><p>Numero pc = ${numeroPc}</p><p>Scelta giocatore = ${scelta}</p><p>Somma numeri = ${sommaFinale}</p><p>L'utente ha perso</p>`
    }
    } else{
        alert("Inserimento non valido. Inserire un numero intero tra 1 e 5 compresi")
    }
}
)





