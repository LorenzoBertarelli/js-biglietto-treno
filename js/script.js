// Chiedo all'utente il numero di km che vuole percorrere
const UserKm = parseInt(prompt("Quanti anni km vuole percorrere?"));
console.log(UserKm);
// Chiedo all'utente la sua età
const UserAge = parseInt(prompt("Quanti anni ha?"));
console.log(UserAge);

// Prezzo del biglietto definito in base ai km (0.21 € al km)
const PriceKm = 0.21
const FinalPrice = UserKm*PriceKm
console.log(FinalPrice);
// Applicazione sconto del 20% per i minorenni

// Applicazione sconto del 40% per gli over 65