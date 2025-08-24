let res = document.getElementById('res')
let num = document.getElementById('valor')
let lista = document.getElementById('lista')
let vetor = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(n) {
    if(isNumero(num.value) && !inLista(num.value, vetor)) {
        
        // Colocando valor no vetor
        vetor.push(Number(num.value))

        // Colocando valor no select do HTML
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }

    // Apagando o 18 do Input 'num'
    num.value = ''

    // Acionando novamente o cursor do Input
    num.focus()
}

function finalizar() {
    res.innerHTML = ''
    
    if (vetor.length == 0) {
        window.alert('[ERRO] Adicione valores à lista e tente novamente.')
    } else {
        let total_numeros = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0

        for (let pos in vetor) {
            soma += vetor[pos]

            if (vetor[pos] > maior) {
                maior = vetor[pos]
            }

            if (vetor[pos] < menor) {
                menor = vetor[pos]
            }
        }
        media = soma / total_numeros

        res.innerHTMLL = ''
        res.innerHTML += `<p>Ao todo, temos ${total_numeros} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}