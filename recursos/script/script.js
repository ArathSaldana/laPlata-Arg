document.addEventListener("DOMContentLoaded", function () {
    // Siempre inicia en la sección del banner al cargar la página
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);

    // Deshabilitar el scroll inicialmente
    function bloquearScroll() {
        window.scrollTo(0, 0);
    }

    // Bloqueamos el scroll al cargar la página
    window.addEventListener("scroll", bloquearScroll);

    const botonGo = document.querySelector("#banner a");

    botonGo.addEventListener("click", function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Eliminar la restricción de scroll
        window.removeEventListener("scroll", bloquearScroll);

        // Hace scroll suave a la sección con id "funciona"
        document.querySelector("#funciona").scrollIntoView({
            behavior: "smooth"
        });
    });
});
