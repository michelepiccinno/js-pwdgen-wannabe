const firstName = prompt("Inserisci nome");
const lastName = prompt("Inserisci cognome");
const eta = prompt("Inserisci età");
const prefColor = prompt("Inserisci il tuo colore preferito");
const password = firstName + lastName + prefColor + (parseInt(eta) + 21);

console.log(password);

document.getElementById("my-name").innerHTML = firstName;
document.getElementById("my-lastname").innerHTML = lastName;
document.getElementById("my-age").innerHTML = eta;
document.getElementById("my-password").innerHTML = password;
