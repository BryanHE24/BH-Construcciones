// este codigo hace que la barra de busqueda se esconda al hacer scroll

let ubicacionPrincipal = window.pageYOffset; //0



// ubicacion principal siempre va a valer 0
window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180


    if(ubicacionPrincipal >= desplazamientoActual){ // Si ubicacionPrincipal es menor o igual que desplazamientoActual hacer:
        document.getElementsByTagName("nav")[0].style.top = "0px" // si esta arriba, no hacer nada
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px" // al hacer scroll hacia abajo ocultar la barra de navegacion
    }
    ubicacionPrincipal= desplazamientoActual; // al subir, vuelve a mostrar la barra de navegacion

})
