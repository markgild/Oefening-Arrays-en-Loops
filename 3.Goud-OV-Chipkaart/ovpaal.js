// opdract 1
const passagiers = [
    {
        id: 163821,
        naam: "Leo Daams",
        saldo: 34,
        woonplaats: "Den Bosch"
    },
    {
        id: 145032, 
        naam: "Nicole Hops",
        saldo: 18,
        woonplaats: "Maastricht"
    }
];

// Nieuwe passagier toevoegen
passagiers.push({
    id: 200001,
    naam: "Jan Janssen",
    saldo: 25,
    woonplaats: "Eindhoven"
});

console.log("Nieuwe passagier toegevoegd:");
console.log(passagiers);

// inchecken
passagiers[0].saldo -= 4;

console.log("Na inchecken:");
console.log(passagiers[0]);

// uitchecken
passagiers[0].saldo += 2;

console.log("Na uitchecken:");
console.log(passagiers[0]);

// passagier verwijderen
passagiers.splice(1, 1);

console.log("Na verwijderen:");
console.log(passagiers);

// lijst met passagiers tonen
console.log("Passagierslijst:");
passagiers.forEach(passagier => {
    console.log(
        passagier.id,
        passagier.naam,
        passagier.saldo,
        passagier.woonplaats
    );
});