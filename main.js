//Palidroma. Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma.

//chiediamo all'utente di inserire una parola. Dichiarazione della parola da analizzare
let parola = prompt('Inserisci una parola');
console.log(parola);
//Associo una variabile alla mia funzione che analizza la parola inserita dall'utente 
let risultato = palindroma(parola);
// stampiamo il risultato nel mio foglio html
let contenuto = document.getElementById('parola_palindorma');
let tagVerifica = `           
        <div class="word">
        ${risultato}
        </div>`;
contenuto.innerHTML += tagVerifica;