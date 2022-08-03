let num = document.getElementById('fnumber')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    }  else {
         alert('Valor inválido ou já encontrado na lista!')
    }
    num.value=''
    num.focus()
}

function finalizado() {
    if (valores.length == 0) {
        alert('Please, add values to continue!') 
    } else {
        let total = valores.length

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`

    }
}