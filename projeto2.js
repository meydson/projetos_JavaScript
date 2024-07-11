let numero = Math.floor(Math.random() * 10);
let novo_numero = numero;
window.onload = function() {
    document.getElementById("counter").innerHTML = `<h1>${numero}</h1>`;
    comparador(numero);
}

function comparador(x) {
    if (x > 0) {
        document.getElementById("counter").style.color = "blue";
    } else if (x < 0) {
        document.getElementById("counter").style.color = "red";
    } else {
        document.getElementById("counter").style.color = "black";
    }
}

function decremento() {
    novo_numero--;
    document.getElementById("counter").innerHTML = `<h1>${novo_numero}</h1>`;
    comparador(novo_numero);
}

function reset() {
    novo_numero = numero;
    document.getElementById("counter").innerHTML = `<h1>${novo_numero}</h1>`;
    comparador(novo_numero);  
}

function incremento() {
    novo_numero++;
    document.getElementById("counter").innerHTML = `<h1>${novo_numero}</h1>`;
    comparador(novo_numero);  
}
