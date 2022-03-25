//Chiedere all’utente di inserire una parola.
//Creare una funzione per capire se la parola 
//inserita è palindroma.


// creiamo il bottone
let bottone = document.getElementById("bottone");



// creiamo l'evento che si attiva al suo schiacciare

bottone.addEventListener("click",
function(){

    // estraiamo l'input dall'html 
    let parola = document.getElementById("testo").value
    console.log(parola)

    //dividiamo le lettere della parola e mettiamoli in un array
    let lettereParola = parola.split('');
    console.log(lettereParola)

    // creiamo l'array con l'ordine inverso
    let lettereParolaIn = []

    //riempiamo l'array con l'ordine inverso e confrontiamo i due array
    for(let i = lettereParola.length -1; i >= 0; i--){

        lettereParolaIn.push(lettereParola[i])

        if (lettereParola[i] == lettereParolaIn[i]) {
            document.getElementById("risposta").innerHTML = `La parolo inserita è palindroma`
        } else {
            document.getElementById("risposta").innerHTML = `La parolo inserita non è palindroma`
        }
        
    }
    

    
})
