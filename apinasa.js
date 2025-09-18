let key =`b0guUnf4BeGhlql7UYesZsz739sYAFvYIyEIbXge`
let botonFecha = document.querySelector("#botonFecha");
let imagenFecha = document.querySelector("#imagenFecha");
let fecha1 = document.querySelector("#fecha1");
let fecha2 = document.querySelector("#fecha2");
let titulo = document.querySelector("#titulo");

botonFecha.onclick = function() {
    if (fecha1.value && !fecha2.value) {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${fecha1.value}`)
            .then(res => res.json())
            .then(fotoFecha => {
                imagenFecha.src = fotoFecha.hdurl;
                titulo.textContent = fotoFecha.title;
            });
    }
    else if (fecha1.value && fecha2.value) {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${fecha1.value}&end_date=${fecha2.value}`)
            .then(res => res.json())
            .then(fotos => {
                if (Array.isArray(fotos) && fotos.length > 0) {
                    imagenFecha.src = fotos[0].hdurl;
                    titulo.textContent = fotos[0].title;
                }
            });
    }
    else {
        titulo.textContent = "Selecciona al menos una fecha";
        imagenFecha.src = "";
    }
}