// opdracht 1
const passagiers = [
    "Jan",
    "Emma",
    "Noah",
    "Sophie",
    "Lucas",
    "Mila",
    "Daan",
    "Lisa",
    "Finn",
    "Sara"
];

// Programmeertip
function who_in_the_bus() {
    for (let passagier = 0; passagier < passagiers.length; passagier++) {
        console.log(passagiers[passagier]);
    }
    console.log("");
}

console.log("Opdracht 1");
who_in_the_bus();

// opdracht 2
passagiers.push("Thomas");

console.log("Opdracht 2");
who_in_the_bus();

// opdracht 3
passagiers.splice(4, 1);

console.log("Opdracht 3");
who_in_the_bus();

// opdracht 4
passagiers.sort(() => Math.random() - 0.5);

console.log("Opdracht 4");
console.log("Nieuwe volgorde van de passagiers:");
who_in_the_bus();

//opdracht 5

console.log("Opdracht 5");
while (passagiers.length != 0) {
    console.log("Een mens heeft uitgestapt:");
    passagiers.shift();
    if (passagiers.length == 0) {
        console.log("");
        console.log("...");
        console.log("");
    } else {
        who_in_the_bus();
    }
    if (passagiers.length == 0) {
        console.log("Er is niemand in de bus...");
    } else if (passagiers.length == 1) {
        console.log("Er zijn " + passagiers.length + " mens in de bus...");
    } else {
        console.log("Er zijn " + passagiers.length + " mensen in de bus...");
    }
    console.log("");
}