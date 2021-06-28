function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
            //window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        var c = Number
        if (p < 1) {
            window.alert('Passo inválido! Considendo Passo 1')
            p = 1
        }
        if (i < f) { //Contagem crescente
            for (c = i; c <= f; c = c + p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else { //Contagem regressiva
            for (c = i; c >= f; c = c - p) {
                res.innerHTML += `${c} \u{1F449}`
            }

        }
        res.innerHTML += `\u{1F3C1}`
    }
}