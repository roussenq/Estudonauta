function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    
    if (fano.value == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var genero = ''
            if (fsex[0].checked){
                genero = 'Homem'
            } else {
                genero = 'Mulher'
            }
        var idade = ano - Number(fano.value)
        res.innerHTML = `${genero} com idade calculada ${idade} anos`
    }
}