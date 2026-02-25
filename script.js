var hora = Number(prompt("Digite a hora atual: "));
var minuto = Number(prompt("Digite o minuto atual: "));
var segundo = Number(prompt("Digite o segundo atual: "));
if (hora >= 0 && hora <= 23 && minuto >= 0 && minuto <= 59 && segundo >= 0 && segundo <= 59) {
    if (hora >= 6 && hora < 12) {
        alert("Bom dia!");
    } else if (hora >= 12 && hora < 19) {
        alert("Boa tarde!");
    }   
    else {
        alert("Boa noite!");
    }       
} else {
    alert("Hora ou minuto inválidos. Por favor, insira valores válidos.");
}






