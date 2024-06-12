//crea una funzione per analizzare se la parola inserita dall'utente è una parola palindroma.
function palindroma(parola1) {
// Scomposizione della parola in singoli caratteri
let caratteri = parola1.split('');
// Creazione di una versione invertita della parola
let invertita = caratteri.reverse().join('');
// Verifica se la parola è palindroma
if (parola1 === invertita) {
	return(parola1 + " è una parola palindroma.");
} else {
	return(parola1 + " non è una parola palindroma.");
}  
}


//ESERCIZIO 2 //

//creiamo una funzione che mi genera un numero randomico tra 1 e 5
function pariODispari(number){
	if(number % 2 === 0){
		return "pari";
	}else{
		return "dispari";
	}
}

// creiamo una funzione che mi generi un numero randomico tra 1 e 5
function randomicoFinoACinque (nr){
	let numeroGenerico = nr;
	numeroGenerico =  Math.floor( Math.random() * 5);
	return numeroGenerico;
}