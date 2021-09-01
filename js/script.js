// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
var numeroDiCelle = parseInt(prompt("Inserisci il numero di celle di cui sarà composto il campo da gioco."));

// Minimo di controllo
while (isNaN(numeroDiCelle)) {
    var numeroDiCelle = parseInt(prompt("INSERISCI UN NUMERO"));
}

// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
function disegnaTabella(num) {
    
    for (var i = 1; i <= num; i++) {
        document.getElementById("campo-da-gioco").innerHTML += `<div class="quadrato"> ${i} </div>`
    }

}
disegnaTabella(numeroDiCelle);

// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.