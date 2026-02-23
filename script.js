let num =  Number (prompt("Digite um número:"))
 let num_two =  Number (prompt("Digite um número:"))
 let num_three =  Number (prompt("Digite um número:"))
 let num_four =  Number (prompt("Digite um número:"))
let media = (num+num_two+num_three+num_four) /4
if(media >= 7){
    alert(`Sua média é: ${media} está aprovado`)
}
else{
    alert(`Sua média é: ${media} está reprovado`)
}