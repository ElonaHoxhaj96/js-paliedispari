//crea una funzione per analizzare se la parola inserita dall'utente è una parola palindroma.
function palindroma(parola1, parola2) {
// Scomposizione della parola in singoli caratteri
let caratteri = parola.split('');
// Creazione di una versione invertita della parola
let invertita = caratteri.reverse().join('');
// Verifica se la parola è palindroma
if (parola === invertita) {
	console.log(parola + " è una parola palindroma.");
} else {
	console.log(parola + " non è una parola palindroma.");
}
return palindroma;
    
}
