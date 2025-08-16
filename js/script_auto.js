//console.log("script_auto.js se načetl!");
//document.getElementById("vysledek").innerHTML = "<p class='vysledek-text'>TEST TEXT</p>";
document.getElementById("calcForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let spotreba = parseFloat(document.getElementById("spotreba").value.replace(",", "."));
    let cena = parseFloat(document.getElementById("cena").value.replace(",", "."));
    let km = parseFloat(document.getElementById("km").value.replace(",", "."));

    console.log("Spotreba:", spotreba);
    console.log("Cena:", cena);
    console.log("Km:", km);
    console.log("Listener se spustil!");

    // Přepsaná logika z Pythonu:
    let vypspotreby = spotreba / 100;
    let vypocetcenyzakm = vypspotreby * cena;
    let finalnicena = vypocetcenyzakm * km;

    document.getElementById("vysledek").innerHTML =
        `<p class="vysledek-text">
            Zaplatíte <b>${finalnicena.toFixed(2)}</b> Kč
        </p>`;
});
