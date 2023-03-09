// Chiedo all'utente il numero di km che vuole percorrere
const UserKm = parseInt(prompt("Quanti km vuole percorrere?"));
console.log(UserKm);
// Chiedo all'utente la sua età
const UserAge = parseInt(prompt("Quanti anni hai?"));
console.log(UserAge);

// Prezzo del biglietto definito in base ai km (0.21 € al km)
const PriceKm = 0.21
let FinalPrice = UserKm*PriceKm
console.log(FinalPrice);

// Applicazione sconto del 20% per i minorenni
// Applicazione sconto del 40% per gli over 65
if(UserAge<18){
    FinalPrice=FinalPrice*(1-0.20)
}
else if(UserAge>=65){
    FinalPrice=FinalPrice*(1-0.40)
}
console.log(FinalPrice);

// Risultato a schermo

const message = `Il prezzo del biglietto è € ${FinalPrice.toFixed(2)}`;

document.getElementById("result").innerHTML = message;