function contar() {
    var res = document.getElementById('resultado')

    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')

    var n_inicio = Number(inicio.value)
    var n_fim = Number(fim.value)
    var n_passo = Number(passo.value)

    res.innerHTML = "Contando: "

    if (n_passo <= 0) {
        alert("Passo inválido!")
    } else if (n_fim < n_inicio) {
        alert('[ERRO] O valor final precisa ser maior ou igual ao valor inicial. Tente novamente')
    } else if (n_fim < 0 || n_inicio < 0) {
        window.alert('[ERRO] Você digitou algum valor negativo. Tente novamente.')
    } else {
        for (var contador = n_inicio; contador <= n_fim; contador += n_passo) {
            res.innerHTML += contador + " 👉 ";
        }
    } 
    res.innerHTML += "🏁"// emoji de bandeira
}


    