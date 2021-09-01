function verificar () {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var contar = document.getElementById('res')
    
    do {
        console.log(`${inicio}`)
        fim++
    } while (passo <= 6)
}