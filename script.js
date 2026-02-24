var hora = Number(prompt("Digite a hora"))

if (hora <= 11 && hora >= 6) {
    alert(` O horário ${hora} é manhâ`)
}
else if (hora >= 12 && hora <= 18) {
    alert(`O horário ${hora} é tarde`)
}

else if (hora >= 18 && hora <= 23) {
    alert(` O seu horário ${hora} é noite`)
}

else if (hora >= 24 && hora <= 5) {
    alert(` O horário ${hora} é madrugada`)
}

else {
    alert("Horário invalido")
}

