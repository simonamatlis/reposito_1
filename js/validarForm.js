let formulario = document.querySelector("#buscador");

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()

    if (campo.value == "") {
        aviso.innerText = 'El campo no puede estar vacío';
        campo.style.outline = '2px solid red'
        aviso.style.color = 'red'
    }
    else if (campo.value.length < 3) {
        aviso.innerText = 'Debe ingresar más caracteres';
        campo.style.outline = '2px solid red'
        aviso.style.color = 'red'
    }
    else {
        this.submit()
    }
})