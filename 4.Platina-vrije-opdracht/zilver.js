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

const station = [
    "Station Roermond",
    "Laurentius Ziekenhuis",
    "Lindelaan",
    "Kasteel Osenstraat",
    "Donderbergweg",
    "Marathonlaan (Eindhalte)"
];

in_bus = [];

let halte = 0;

function volgendeHalte() {
    const status = document.getElementById("status");
    const in_bus_see = document.getElementById("in_bus");
    const situation = document.getElementById("situation");

    if (halte < station.length) {

        situation.innerHTML = "";

        status.innerHTML = "Aangekomen bij: " + station[halte];

        //console.log("Aangekomen bij:", station[halte]);

        if (halte === 0) {
            passagiers[0].saldo -= 4;

            document.getElementById("piep").play();

            //console.log(passagiers[0].naam + " checkt in. Saldo: €" + passagiers[0].saldo);

            situation.innerHTML = passagiers[0].naam + " stapt in bij " + station[halte];

            in_bus.push(passagiers[0].naam);

        } else if (halte === 3) {
            passagiers[1].saldo -= 4;

            document.getElementById("piep").play();

            //console.log(passagiers[1].naam + " checkt in. Saldo: €" + passagiers[1].saldo);

            situation.innerHTML = passagiers[1].naam + " stapt in bij " + station[halte];

            in_bus.push(passagiers[1].naam);
        }
        
        let tekst_bus = "";

        for (let i = 0; i < in_bus.length; i++) {
            tekst_bus += in_bus[i] + "<br>";
        }

        in_bus_see.innerHTML = tekst_bus;

        halte++;

        setTimeout(volgendeHalte, 1500);
    } else {
        document.getElementById("piep").play();
        status.innerHTML = "Busrit voltooid!";
        in_bus = [];
        in_bus_see.innerHTML = "Niemand...";
    }
}

function startBusrit() {
    halte = 0;
    in_bus = [];
    volgendeHalte();
}

/*
for (let i = 0; i < station.length; i++) {
    console.log("Bus aangekomen bij:", station[i]);

    if (i === 0) {
        passagiers[0].saldo -= 4;
        console.log(passagiers[0].naam + " checkt in.");
        console.log("Nieuw saldo:", passagiers[0].saldo);
    } else if (i === 2) {
        passagiers[1].saldo -= 4;
        console.log(passagiers[1].naam + " checkt in.");
        console.log("Nieuw saldo:", passagiers[1].saldo);
    } else if (i == station.length - 1){
        console.log("=== EINDHALTE ===");
    } else {
        console.log("Bus gaat verder...");
    }
}

passagiers.forEach(passagier => {
    passagier.saldo += 2;
    console.log(passagier.naam + " checkt uit. Nieuw saldo: " + passagier.saldo);
});

console.log("=== PASSAGIERSLIJST ===");

passagiers.forEach(passagier => {
    console.log(passagier.naam + " | Saldo: €" + passagier.saldo);
});*/