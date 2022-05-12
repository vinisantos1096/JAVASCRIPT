function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `AGORA SÂO ${hora} HORAS `
    if (hora >= 0 && hora < 12){
        //BOM DIA !!!
        msg.innerText += '!  BOM DIA'
        img.src = 'manha.png'
        document.body.style.background = '#ffe6af'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE !!!
        msg.innerText += '!  BOA TARDE'
        img.src = 'tarde.png'
        document.body.style.background = '#aa6c60'
    } else {
        msg.innerText += '!  BOA NOITE'
        img.src = 'noite.png'
        document.body.style.background = '#04597b'
        //BOA NOITE !!!
    }
}
