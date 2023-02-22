// CALCOLO COSTO BIGLIETTO TRENO

/*

    Richiedo distanza in km da percorrere
    Richiedo età del passeggero
    Prezzo del tragitto al 0.21€/km
    sconto 20% per minorenni
    sconto 40% per over 65
    Mostra risultato con massimo 2 decimali
    
*/

//Richiesta distanza tragitto
let distanzaTragitto = parseInt(prompt("Inserisci la lunghezza in km del tragitto"));

//Richiesta età passeggero
let etaPasseggero = parseInt(prompt("Inserisci la tua età"));

//Prezzo del tragitto al km
const prezzoAlKm = 0.21;

// Scontistica
const scontoMinorenni = 0.8;
const scontoOver65 = 0.6;

//Calcolo prezzo biglietto con arrotondamento 2 decimali

if (isNaN(distanzaTragitto) || isNaN(etaPasseggero)) {
    document.getElementById("prezzoBiglietto2Decimali").innerHTML = 'Impossibile fare il calcolo, hai inserito qualcosa che non è un numero';
} else { 

    
    if (etaPasseggero < 18) { 

        // Under 18 sconto 20%
        
        //Calcolo prezzo scontato
        let prezzoBiglietto = (distanzaTragitto * prezzoAlKm) * scontoMinorenni;

        //Calcolo prezzo senza sconto
        let noSconto = (distanzaTragitto * prezzoAlKm);

        //Definizione decimali
        let prezzoBiglietto2Decimali = prezzoBiglietto.toFixed(2);
        let noSconto2Decimali = noSconto.toFixed(2);

        //Azioni
        document.getElementById("prezzoBiglietto2Decimali").innerHTML = 
        `€ ${prezzoBiglietto2Decimali}`

        document.getElementById("sconto").innerHTML =
        `Hai usufruito dello sconto del 20% per under 18!`

        document.getElementById("noSconto2Decimali").innerHTML = 
        `€ ${noSconto2Decimali}`
    
       
    } else if (etaPasseggero >= 65) { 

        // Over 65 sconto 40% 

        //Calcolo prezzo scontato
        let prezzoBiglietto = (distanzaTragitto * prezzoAlKm) * scontoOver65;

        //Calcolo prezzo senza sconto
        let noSconto = (distanzaTragitto * prezzoAlKm);

        //Definizione decimali
        let prezzoBiglietto2Decimali = prezzoBiglietto.toFixed(2);
        let noSconto2Decimali = noSconto.toFixed(2);

        //Azioni
        document.getElementById("prezzoBiglietto2Decimali").innerHTML = 
        `€ ${prezzoBiglietto2Decimali}`

        document.getElementById("sconto").innerHTML =
        `Hai usufruito dello sconto del 40% per over 65!`

        document.getElementById("noSconto2Decimali").innerHTML = 
        `€ ${noSconto2Decimali}`

        
    } else {

        // Tariffa standard

        //Calcolo prezzo biglietto
        const prezzoBiglietto = (distanzaTragitto * prezzoAlKm);

        //Definizione decimali
        let prezzoBiglietto2Decimali = prezzoBiglietto.toFixed(2); 

        //Azioni
        document.getElementById("prezzoBiglietto2Decimali").innerHTML = "€" + " " + prezzoBiglietto2Decimali;
    }
}



