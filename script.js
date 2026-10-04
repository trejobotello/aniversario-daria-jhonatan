/* =========================================================
   =========================================================
   DARÍA ❤️ JHONATAN
   SCRIPT.JS
   =========================================================
   ========================================================= */

"use strict";


/* =========================================================
   1. CONFIGURACIÓN PRINCIPAL
========================================================= */

const CONFIG = {

    persona1: "Daría",

    persona2: "Jhonatan",

    /*
        Fecha de inicio:
        04 de enero de 2026
    */

    fechaInicio:
        new Date(
            2026,
            0,
            4,
            0,
            0,
            0
        ),

    /*
        Volumen máximo de la música.
    */

    volumenMusica:
        0.45,

    /*
        Corazones flotantes.
    */

    corazonesActivos:
        true

};


/* =========================================================
   2. ELEMENTOS PRINCIPALES DEL HTML
========================================================= */


/* HEADER */

const header =
    document.getElementById(
        "header"
    );


/* MENÚ */

const menuToggle =
    document.getElementById(
        "menu-toggle"
    );


const navMenu =
    document.getElementById(
        "nav-menu"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


/* =========================================================
   3. ELEMENTOS DE MÚSICA
========================================================= */

const musica =
    document.getElementById(
        "musica"
    );


const btnMusica =
    document.getElementById(
        "btn-musica"
    );


const btnHistoria =
    document.getElementById(
        "btn-historia"
    );


const iconoMusica =
    document.getElementById(
        "icono-musica"
    );


const textoMusica =
    document.getElementById(
        "texto-musica"
    );


/* =========================================================
   4. ELEMENTOS DE LA CARTA
========================================================= */

const sobre =
    document.getElementById(
        "sobre"
    );


const abrirCarta =
    document.getElementById(
        "abrir-carta"
    );


const papelCarta =
    document.getElementById(
        "papel-carta"
    );


/* =========================================================
   5. ELEMENTOS DE LA SORPRESA
========================================================= */

const btnSorpresa =
    document.getElementById(
        "btn-sorpresa"
    );


const sorpresaOculta =
    document.getElementById(
        "sorpresa-oculta"
    );


/* =========================================================
   6. CONTENEDOR DE CORAZONES
========================================================= */

const contenedorCorazones =
    document.getElementById(
        "corazones-flotantes"
    );


/* =========================================================
   7. ELEMENTOS DEL CONTADOR
========================================================= */

const elementoAnios =
    document.getElementById(
        "anios"
    );


const elementoMeses =
    document.getElementById(
        "meses"
    );


const elementoDias =
    document.getElementById(
        "dias"
    );


const elementoHoras =
    document.getElementById(
        "horas"
    );


const elementoMinutos =
    document.getElementById(
        "minutos"
    );


const elementoSegundos =
    document.getElementById(
        "segundos"
    );


/* =========================================================
   8. FUNCIÓN AUXILIAR — DOS DÍGITOS
========================================================= */

function dosDigitos(numero) {

    return String(
        numero
    ).padStart(
        2,
        "0"
    );

}


/* =========================================================
   9. CALCULAR TIEMPO JUNTOS
========================================================= */

function calcularTiempo(
    inicio,
    ahora
) {

    /*
        Primero calculamos los años
        completos transcurridos.
    */

    let anios =
        ahora.getFullYear() -
        inicio.getFullYear();


    /*
        Después calculamos los meses.
    */

    let meses =
        ahora.getMonth() -
        inicio.getMonth();


    /*
        Si todavía no hemos llegado
        al día correspondiente del mes,
        restamos un mes.
    */

    if (
        ahora.getDate() <
        inicio.getDate()
    ) {

        meses--;

    }


    /*
        Corregimos cuando los meses
        quedan en negativo.
    */

    if (
        meses < 0
    ) {

        anios--;

        meses += 12;

    }


    /*
        Creamos una fecha base con
        los años y meses completos.
    */

    const fechaBase =
        new Date(

            inicio.getFullYear() +
            anios,

            inicio.getMonth() +
            meses,

            inicio.getDate(),

            inicio.getHours(),

            inicio.getMinutes(),

            inicio.getSeconds()

        );


    /*
        Calculamos el tiempo restante.
    */

    let diferencia =
        ahora.getTime() -
        fechaBase.getTime();


    /*
        Protección por si la fecha
        todavía no ha llegado.
    */

    if (
        diferencia < 0
    ) {

        diferencia = 0;

    }


    /*
        Convertimos a segundos.
    */

    const segundosTotales =
        Math.floor(
            diferencia / 1000
        );


    /*
        DÍAS
    */

    const dias =
        Math.floor(
            segundosTotales /
            86400
        );


    /*
        HORAS
    */

    const horas =
        Math.floor(

            (
                segundosTotales %
                86400
            ) /

            3600

        );


    /*
        MINUTOS
    */

    const minutos =
        Math.floor(

            (
                segundosTotales %
                3600
            ) /

            60

        );


    /*
        SEGUNDOS
    */

    const segundos =
        segundosTotales %
        60;


    /*
        Devolvemos todos los valores.
    */

    return {

        anios,

        meses,

        dias,

        horas,

        minutos,

        segundos

    };

}


/* =========================================================
   10. ACTUALIZAR CONTADOR
========================================================= */

function actualizarContador() {

    /*
        Si alguno de los elementos
        principales no existe,
        evitamos errores.
    */

    if (
        !elementoAnios ||
        !elementoMeses ||
        !elementoDias ||
        !elementoHoras ||
        !elementoMinutos ||
        !elementoSegundos
    ) {

        return;

    }


    const ahora =
        new Date();


    /*
        Si todavía no ha llegado
        la fecha de inicio,
        mostramos todo en 00.
    */

    if (
        ahora <
        CONFIG.fechaInicio
    ) {

        elementoAnios.textContent =
            "00";

        elementoMeses.textContent =
            "00";

        elementoDias.textContent =
            "00";

        elementoHoras.textContent =
            "00";

        elementoMinutos.textContent =
            "00";

        elementoSegundos.textContent =
            "00";

        return;

    }


    /*
        Calculamos el tiempo.
    */

    const tiempo =
        calcularTiempo(

            CONFIG.fechaInicio,

            ahora

        );


    /*
        Mostramos los valores.
    */

    elementoAnios.textContent =
        dosDigitos(
            tiempo.anios
        );


    elementoMeses.textContent =
        dosDigitos(
            tiempo.meses
        );


    elementoDias.textContent =
        dosDigitos(
            tiempo.dias
        );


    elementoHoras.textContent =
        dosDigitos(
            tiempo.horas
        );


    elementoMinutos.textContent =
        dosDigitos(
            tiempo.minutos
        );


    elementoSegundos.textContent =
        dosDigitos(
            tiempo.segundos
        );

}


/* =========================================================
   11. INICIAR CONTADOR
========================================================= */

actualizarContador();


setInterval(

    actualizarContador,

    1000

);


/* =========================================================
   12. HEADER AL HACER SCROLL
========================================================= */

function controlarHeader() {

    /*
        Si no existe el header,
        no hacemos nada.
    */

    if (
        !header
    ) {

        return;

    }


    /*
        Agregamos una clase cuando
        bajamos por la página.
    */

    if (
        window.scrollY > 30
    ) {

        header.classList.add(
            "scrolled"
        );

    } else {

        header.classList.remove(
            "scrolled"
        );

    }

}


/* Ejecutar al cargar */

controlarHeader();


/* Ejecutar al desplazarse */

window.addEventListener(

    "scroll",

    controlarHeader,

    {
        passive: true
    }

);


/* =========================================================
   13. ABRIR MENÚ MÓVIL
========================================================= */

function abrirMenu() {

    if (
        !navMenu ||
        !menuToggle
    ) {

        return;

    }


    navMenu.classList.add(
        "abierto"
    );


    menuToggle.classList.add(
        "activo"
    );


    document.body.classList.add(
        "menu-abierto"
    );


    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

}


/* =========================================================
   14. CERRAR MENÚ MÓVIL
========================================================= */

function cerrarMenu() {

    if (
        !navMenu ||
        !menuToggle
    ) {

        return;

    }


    navMenu.classList.remove(
        "abierto"
    );


    menuToggle.classList.remove(
        "activo"
    );


    document.body.classList.remove(
        "menu-abierto"
    );


    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

}


/* =========================================================
   15. ALTERNAR MENÚ
========================================================= */

function alternarMenu() {

    if (
        !navMenu
    ) {

        return;

    }


    const abierto =
        navMenu.classList.contains(
            "abierto"
        );


    if (
        abierto
    ) {

        cerrarMenu();

    } else {

        abrirMenu();

    }

}


/* =========================================================
   16. BOTÓN DEL MENÚ
========================================================= */

if (
    menuToggle
) {

    menuToggle.addEventListener(

        "click",

        alternarMenu

    );

}


/* =========================================================
   17. CERRAR MENÚ AL PULSAR UN ENLACE
========================================================= */

navLinks.forEach(

    (link) => {

        link.addEventListener(

            "click",

            cerrarMenu

        );

    }

);


/* =========================================================
   18. CERRAR MENÚ CON ESC
========================================================= */

document.addEventListener(

    "keydown",

    (evento) => {

        if (
            evento.key ===
            "Escape"
        ) {

            cerrarMenu();

        }

    }

);


/* =========================================================
   19. SECCIONES DE LA PÁGINA
========================================================= */

const secciones =
    document.querySelectorAll(
        "main section[id]"
    );


/* =========================================================
   20. ACTUALIZAR NAVEGACIÓN ACTIVA
========================================================= */

function actualizarNavegacion() {

    /*
        Por defecto consideramos
        Inicio como sección activa.
    */

    let seccionActual =
        "inicio";


    /*
        Recorremos las secciones.
    */

    secciones.forEach(

        (seccion) => {

            const posicion =
                seccion.offsetTop -
                150;


            if (
                window.scrollY >=
                posicion
            ) {

                seccionActual =
                    seccion.id;

            }

        }

    );


    /*
        Quitamos el estado activo
        de todos los enlaces.
    */

    navLinks.forEach(

        (link) => {

            link.classList.remove(
                "activo"
            );


            /*
                Activamos solamente
                el enlace correspondiente.
            */

            if (
                link.getAttribute(
                    "href"
                ) ===
                `#${seccionActual}`
            ) {

                link.classList.add(
                    "activo"
                );

            }

        }

    );

}


/* =========================================================
   21. DETECTAR SCROLL PARA LA NAVEGACIÓN
========================================================= */

window.addEventListener(

    "scroll",

    actualizarNavegacion,

    {
        passive: true
    }

);


/* Ejecutar inicialmente */

actualizarNavegacion();


/* =========================================================
   22. AJUSTAR MENÚ AL CAMBIAR TAMAÑO
========================================================= */

window.addEventListener(

    "resize",

    () => {

        if (
            window.innerWidth >
            850
        ) {

            cerrarMenu();

        }

    }

);


/* =========================================================
   FIN PARTE 1
========================================================= */


/* =========================================================
   =========================================================
   PARTE 2
   SISTEMA DE MÚSICA
   =========================================================
   ========================================================= */


/* =========================================================
   23. ESTADO DE LA MÚSICA
========================================================= */

let musicaIniciada = false;

let intervaloVolumen = null;


/* =========================================================
   24. ACTUALIZAR BOTÓN DE MÚSICA
========================================================= */

function actualizarBotonMusica() {

    /*
        Si no existe el audio,
        evitamos errores.
    */

    if (!musica) {

        return;

    }


    /*
        MÚSICA REPRODUCIÉNDOSE
    */

    if (!musica.paused) {

        if (iconoMusica) {

            iconoMusica.textContent = "❚❚";

        }


        if (textoMusica) {

            textoMusica.textContent = "Pausar música";

        }


        if (btnMusica) {

            btnMusica.classList.add(
                "reproduciendo"
            );


            btnMusica.setAttribute(
                "aria-label",
                "Pausar música"
            );

        }

    }


    /*
        MÚSICA PAUSADA
    */

    else {

        if (iconoMusica) {

            iconoMusica.textContent = "♫";

        }


        if (textoMusica) {

            textoMusica.textContent = "Música";

        }


        if (btnMusica) {

            btnMusica.classList.remove(
                "reproduciendo"
            );


            btnMusica.setAttribute(
                "aria-label",
                "Reproducir música"
            );

        }

    }

}


/* =========================================================
   25. DETENER SUBIDA DE VOLUMEN
========================================================= */

function detenerSubidaVolumen() {

    if (intervaloVolumen) {

        clearInterval(
            intervaloVolumen
        );


        intervaloVolumen = null;

    }

}


/* =========================================================
   26. SUBIR VOLUMEN SUAVEMENTE
========================================================= */

function subirVolumenSuavemente() {

    if (!musica) {

        return;

    }


    /*
        Detenemos cualquier transición
        anterior para evitar duplicados.
    */

    detenerSubidaVolumen();


    /*
        Comenzamos con volumen bajo.
    */

    musica.volume = 0;


    /*
        Cantidad que aumentará
        en cada paso.
    */

    const incremento = 0.025;


    /*
        Cada 70 ms aumentamos
        ligeramente el volumen.
    */

    intervaloVolumen =
        setInterval(

            () => {

                /*
                    Si la música se pausó,
                    detenemos el efecto.
                */

                if (musica.paused) {

                    detenerSubidaVolumen();

                    return;

                }


                /*
                    Calculamos el siguiente
                    nivel de volumen.
                */

                const siguienteVolumen =
                    Math.min(

                        musica.volume +
                        incremento,

                        CONFIG.volumenMusica

                    );


                musica.volume =
                    siguienteVolumen;


                /*
                    Cuando llegamos al volumen
                    configurado, terminamos.
                */

                if (
                    siguienteVolumen >=
                    CONFIG.volumenMusica
                ) {

                    musica.volume =
                        CONFIG.volumenMusica;


                    detenerSubidaVolumen();

                }

            },

            70

        );

}


/* =========================================================
   27. REPRODUCIR MÚSICA
========================================================= */

async function reproducirMusica(
    usarFade = true
) {

    if (!musica) {

        return false;

    }


    /*
        Si ya está reproduciéndose,
        no hacemos nada.
    */

    if (!musica.paused) {

        actualizarBotonMusica();

        return true;

    }


    try {

        /*
            Si queremos entrada suave,
            comenzamos desde volumen 0.
        */

        if (usarFade) {

            musica.volume = 0;

        } else {

            musica.volume =
                CONFIG.volumenMusica;

        }


        /*
            Intentamos reproducir.
        */

        await musica.play();


        musicaIniciada = true;


        /*
            Aplicamos subida gradual.
        */

        if (usarFade) {

            subirVolumenSuavemente();

        }


        actualizarBotonMusica();


        return true;

    }

    catch (error) {

        /*
            Los navegadores pueden bloquear
            la reproducción automática.

            No es un problema si ocurre antes
            de que el usuario pulse un botón.
        */

        console.warn(
            "La música necesita una interacción del usuario para comenzar.",
            error
        );


        actualizarBotonMusica();


        return false;

    }

}


/* =========================================================
   28. PAUSAR MÚSICA
========================================================= */

function pausarMusica() {

    if (!musica) {

        return;

    }


    detenerSubidaVolumen();


    musica.pause();


    actualizarBotonMusica();

}


/* =========================================================
   29. ALTERNAR MÚSICA
========================================================= */

async function alternarMusica() {

    if (!musica) {

        return;

    }


    /*
        Si está pausada,
        la reproducimos.
    */

    if (musica.paused) {

        await reproducirMusica(
            true
        );

    }


    /*
        Si está sonando,
        la pausamos.
    */

    else {

        pausarMusica();

    }

}


/* =========================================================
   30. BOTÓN DE MÚSICA DEL HEADER
========================================================= */

if (btnMusica) {

    btnMusica.addEventListener(

        "click",

        async () => {

            await alternarMusica();

        }

    );

}


/* =========================================================
   31. BOTÓN "VER NUESTRA HISTORIA"
========================================================= */

if (btnHistoria) {

    btnHistoria.addEventListener(

        "click",

        async () => {

            /*
                Iniciamos la música solamente
                si todavía está pausada.
            */

            if (
                musica &&
                musica.paused
            ) {

                await reproducirMusica(
                    true
                );

            }


            /*
                Buscamos la sección Historia.
            */

            const historia =
                document.getElementById(
                    "historia"
                );


            /*
                Nos desplazamos suavemente.
            */

            if (historia) {

                historia.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }

    );

}


/* =========================================================
   32. EVENTO PLAY
========================================================= */

if (musica) {

    musica.addEventListener(

        "play",

        () => {

            musicaIniciada = true;

            actualizarBotonMusica();

        }

    );

}


/* =========================================================
   33. EVENTO PAUSE
========================================================= */

if (musica) {

    musica.addEventListener(

        "pause",

        () => {

            detenerSubidaVolumen();

            actualizarBotonMusica();

        }

    );

}


/* =========================================================
   34. EVENTO ENDED
========================================================= */

if (musica) {

    musica.addEventListener(

        "ended",

        () => {

            musicaIniciada = false;

            detenerSubidaVolumen();

            actualizarBotonMusica();

        }

    );

}


/* =========================================================
   35. CONFIGURACIÓN INICIAL DEL AUDIO
========================================================= */

if (musica) {

    /*
        Dejamos preparado el volumen
        máximo de la página.
    */

    musica.volume =
        CONFIG.volumenMusica;


    /*
        Como el HTML ya tiene "loop",
        esta propiedad sirve como
        protección adicional.
    */

    musica.loop = true;


    /*
        Sincronizamos el botón
        al cargar la página.
    */

    actualizarBotonMusica();

}


/* =========================================================
   36. PROTECCIÓN DE ERRORES DEL AUDIO
========================================================= */

if (musica) {

    musica.addEventListener(

        "error",

        () => {

            console.warn(
                "No se pudo cargar el archivo de música."
            );


            if (textoMusica) {

                textoMusica.textContent =
                    "Música no disponible";

            }

        }

    );

}


/* =========================================================
   FIN PARTE 2
========================================================= */


/* =========================================================
   =========================================================
   PARTE 3
   CARTA + SORPRESA
   =========================================================
   ========================================================= */


/* =========================================================
   37. ESTADO DE LA CARTA
========================================================= */

let cartaAbierta = false;


/* =========================================================
   38. ABRIR LA CARTA
========================================================= */

function abrirLaCarta() {

    /*
        Si no existe el sobre,
        evitamos errores.
    */

    if (!sobre) {

        return;

    }


    /*
        Marcamos la carta como abierta.
    */

    cartaAbierta = true;


    /*
        Estas clases son compatibles
        con el CSS que acabamos de crear.
    */

    sobre.classList.add(
        "abierto"
    );


    sobre.classList.add(
        "activo"
    );


    /*
        Si existe el papel de la carta,
        también lo activamos.
    */

    if (papelCarta) {

        papelCarta.classList.add(
            "abierto"
        );


        papelCarta.classList.add(
            "activo"
        );

    }


    /*
        Buscamos una posible carta completa.
    */

    const cartaCompleta =
        document.querySelector(
            ".carta-completa"
        );


    if (cartaCompleta) {

        cartaCompleta.classList.add(
            "activa"
        );

    }


    /*
        Cambiamos el estado del botón.
    */

    if (abrirCarta) {

        abrirCarta.classList.add(
            "activo"
        );


        abrirCarta.setAttribute(
            "aria-expanded",
            "true"
        );

    }

}


/* =========================================================
   39. CERRAR LA CARTA
========================================================= */

function cerrarLaCarta() {

    if (!sobre) {

        return;

    }


    cartaAbierta = false;


    sobre.classList.remove(
        "abierto"
    );


    sobre.classList.remove(
        "activo"
    );


    if (papelCarta) {

        papelCarta.classList.remove(
            "abierto"
        );


        papelCarta.classList.remove(
            "activo"
        );

    }


    const cartaCompleta =
        document.querySelector(
            ".carta-completa"
        );


    if (cartaCompleta) {

        cartaCompleta.classList.remove(
            "activa"
        );


        cartaCompleta.classList.remove(
            "abierta"
        );


        cartaCompleta.classList.remove(
            "mostrar"
        );

    }


    if (abrirCarta) {

        abrirCarta.classList.remove(
            "activo"
        );


        abrirCarta.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}


/* =========================================================
   40. ALTERNAR CARTA
========================================================= */

function alternarCarta() {

    if (cartaAbierta) {

        cerrarLaCarta();

    } else {

        abrirLaCarta();

    }

}


/* =========================================================
   41. BOTÓN ABRIR CARTA
========================================================= */

if (abrirCarta) {

    abrirCarta.addEventListener(

        "click",

        () => {

            alternarCarta();

        }

    );

}


/* =========================================================
   42. PERMITIR ABRIR EL SOBRE DIRECTAMENTE
========================================================= */

if (sobre) {

    sobre.addEventListener(

        "click",

        (evento) => {

            /*
                Si el usuario pulsó directamente
                el botón, no ejecutamos dos veces
                la misma acción.
            */

            if (
                abrirCarta &&
                (
                    evento.target === abrirCarta ||
                    abrirCarta.contains(
                        evento.target
                    )
                )
            ) {

                return;

            }


            alternarCarta();

        }

    );

}


/* =========================================================
   43. ACCESIBILIDAD DE LA CARTA
========================================================= */

if (abrirCarta) {

    abrirCarta.setAttribute(
        "aria-expanded",
        "false"
    );

}


/* =========================================================
   44. ESTADO DE LA SORPRESA
========================================================= */

let sorpresaAbierta = false;


/* =========================================================
   45. ABRIR SORPRESA
========================================================= */

function abrirSorpresa() {

    if (!sorpresaOculta) {

        return;

    }


    sorpresaAbierta = true;


    /*
        Agregamos varias clases compatibles
        con nuestro CSS.
    */

    sorpresaOculta.classList.add(
        "activa"
    );


    sorpresaOculta.classList.add(
        "mostrar"
    );


    sorpresaOculta.classList.add(
        "visible"
    );


    /*
        Actualizamos el botón.
    */

    if (btnSorpresa) {

        btnSorpresa.classList.add(
            "activo"
        );


        btnSorpresa.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    /*
        Creamos algunos corazones
        para acompañar la sorpresa.

        La función se define más adelante.
    */

    if (
        typeof crearExplosionCorazones ===
        "function"
    ) {

        crearExplosionCorazones();

    }

}


/* =========================================================
   46. CERRAR SORPRESA
========================================================= */

function cerrarSorpresa() {

    if (!sorpresaOculta) {

        return;

    }


    sorpresaAbierta = false;


    sorpresaOculta.classList.remove(
        "activa"
    );


    sorpresaOculta.classList.remove(
        "mostrar"
    );


    sorpresaOculta.classList.remove(
        "visible"
    );


    if (btnSorpresa) {

        btnSorpresa.classList.remove(
            "activo"
        );


        btnSorpresa.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}


/* =========================================================
   47. ALTERNAR SORPRESA
========================================================= */

function alternarSorpresa() {

    if (sorpresaAbierta) {

        cerrarSorpresa();

    } else {

        abrirSorpresa();

    }

}


/* =========================================================
   48. BOTÓN DE SORPRESA
========================================================= */

if (btnSorpresa) {

    btnSorpresa.addEventListener(

        "click",

        () => {

            alternarSorpresa();

        }

    );


    btnSorpresa.setAttribute(
        "aria-expanded",
        "false"
    );

}


/* =========================================================
   49. COMPATIBILIDAD CON OTRO CONTENEDOR DE SORPRESA
========================================================= */

const sorpresaMensaje =
    document.querySelector(
        ".sorpresa-mensaje"
    );


function sincronizarSorpresaMensaje(
    mostrar
) {

    if (!sorpresaMensaje) {

        return;

    }


    if (mostrar) {

        sorpresaMensaje.classList.add(
            "activa"
        );


        sorpresaMensaje.classList.add(
            "mostrar"
        );


        sorpresaMensaje.classList.add(
            "visible"
        );

    } else {

        sorpresaMensaje.classList.remove(
            "activa"
        );


        sorpresaMensaje.classList.remove(
            "mostrar"
        );


        sorpresaMensaje.classList.remove(
            "visible"
        );

    }

}


/* =========================================================
   50. SINCRONIZAR LA SORPRESA PRINCIPAL
========================================================= */

/*
    Observamos cambios en el contenedor principal
    para mantener sincronizado cualquier segundo
    bloque de mensaje.
*/

if (
    sorpresaOculta &&
    sorpresaMensaje
) {

    const observadorSorpresa =
        new MutationObserver(

            () => {

                const estaVisible =

                    sorpresaOculta.classList.contains(
                        "activa"
                    ) ||

                    sorpresaOculta.classList.contains(
                        "mostrar"
                    ) ||

                    sorpresaOculta.classList.contains(
                        "visible"
                    );


                sincronizarSorpresaMensaje(
                    estaVisible
                );

            }

        );


    observadorSorpresa.observe(

        sorpresaOculta,

        {
            attributes: true,

            attributeFilter: [
                "class"
            ]
        }

    );

}


/* =========================================================
   51. ESC PARA CERRAR CARTA O SORPRESA
========================================================= */

document.addEventListener(

    "keydown",

    (evento) => {

        if (
            evento.key !==
            "Escape"
        ) {

            return;

        }


        /*
            Cerramos la sorpresa
            si está abierta.
        */

        if (sorpresaAbierta) {

            cerrarSorpresa();

        }


        /*
            Cerramos la carta
            si está abierta.
        */

        if (cartaAbierta) {

            cerrarLaCarta();

        }

    }

);


/* =========================================================
   FIN PARTE 3
========================================================= */


/* =========================================================
   =========================================================
   PARTE 5
   VISOR DE LAS 4 FOTOGRAFÍAS
   =========================================================
   ========================================================= */


/* =========================================================
   68. INFORMACIÓN DE LOS RECUERDOS
========================================================= */

const recuerdos = [

    {
        imagen:
            "foto1.jpg.jpeg",

        titulo:
            "Nuestro comienzo",

        descripcion:
            "Uno de esos recuerdos que siempre tendrá un lugar especial en nuestra historia."
    },

    {
        imagen:
            "foto2.jpg.jpeg",

        titulo:
            "Un momento especial",

        descripcion:
            "Un instante sencillo, pero lleno de recuerdos que vale la pena guardar."
    },

    {
        imagen:
            "foto3.jpg.jpeg",

        titulo:
            "Juntos",

        descripcion:
            "Cada fotografía guarda una pequeña parte de todo lo que hemos vivido."
    },

    {
        imagen:
            "foto4.jpg.jpeg",

        titulo:
            "Nuestra historia",

        descripcion:
            "Un recuerdo más de una historia que todavía tiene mucho por contar."
    }

];


/* =========================================================
   69. ELEMENTOS DEL VISOR
========================================================= */

const visor =
    document.getElementById(
        "visor"
    ) ||

    document.querySelector(
        ".visor-fotos"
    ) ||

    document.querySelector(
        ".visor-recuerdo"
    ) ||

    document.querySelector(
        ".modal-foto"
    );


const imagenVisor =
    document.getElementById(
        "visor-imagen"
    );


const tituloVisor =
    document.getElementById(
        "visor-titulo"
    );


const descripcionVisor =
    document.getElementById(
        "visor-descripcion"
    );


const cerrarVisor =
    document.getElementById(
        "cerrar-visor"
    ) ||

    document.querySelector(
        ".visor-cerrar"
    ) ||

    document.querySelector(
        ".visor-recuerdo-cerrar"
    ) ||

    document.querySelector(
        ".modal-foto-cerrar"
    );


const botonAnterior =
    document.getElementById(
        "visor-anterior"
    ) ||

    document.querySelector(
        ".visor-anterior"
    );


const botonSiguiente =
    document.getElementById(
        "visor-siguiente"
    ) ||

    document.querySelector(
        ".visor-siguiente"
    );


/* =========================================================
   70. ESTADO DEL VISOR
========================================================= */

let recuerdoActual = 0;

let visorAbierto = false;


/* =========================================================
   71. NORMALIZAR ÍNDICE
========================================================= */

function normalizarIndiceRecuerdo(
    indice
) {

    /*
        Si no existen recuerdos,
        devolvemos 0.
    */

    if (
        recuerdos.length === 0
    ) {

        return 0;

    }


    /*
        Si retrocedemos desde la primera
        fotografía, vamos a la última.
    */

    if (
        indice < 0
    ) {

        return (
            recuerdos.length - 1
        );

    }


    /*
        Si avanzamos desde la última,
        regresamos a la primera.
    */

    if (
        indice >= recuerdos.length
    ) {

        return 0;

    }


    return indice;

}


/* =========================================================
   72. MOSTRAR RECUERDO EN EL VISOR
========================================================= */

function mostrarRecuerdo(
    indice
) {

    /*
        Normalizamos el índice.
    */

    recuerdoActual =
        normalizarIndiceRecuerdo(
            indice
        );


    /*
        Obtenemos el recuerdo.
    */

    const recuerdo =
        recuerdos[
            recuerdoActual
        ];


    if (!recuerdo) {

        return;

    }


    /*
        Cambiamos la imagen.
    */

    if (imagenVisor) {

        imagenVisor.src =
            recuerdo.imagen;


        imagenVisor.alt =
            recuerdo.titulo;

    }


    /*
        Cambiamos el título.
    */

    if (tituloVisor) {

        tituloVisor.textContent =
            recuerdo.titulo;

    }


    /*
        Cambiamos la descripción.
    */

    if (descripcionVisor) {

        descripcionVisor.textContent =
            recuerdo.descripcion;

    }

}


/* =========================================================
   73. ABRIR VISOR
========================================================= */

function abrirVisor(
    indice = 0
) {

    if (!visor) {

        return;

    }


    /*
        Mostramos el recuerdo elegido.
    */

    mostrarRecuerdo(
        indice
    );


    visorAbierto = true;


    /*
        Agregamos las clases compatibles
        con el CSS nuevo.
    */

    visor.classList.add(
        "activo"
    );


    visor.classList.add(
        "abierto"
    );


    visor.classList.add(
        "visible"
    );


    /*
        Evitamos que la página de fondo
        continúe desplazándose.
    */

    document.body.classList.add(
        "visor-abierto"
    );


    document.body.classList.add(
        "sin-scroll"
    );


    /*
        Accesibilidad.
    */

    visor.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
        Enviamos el foco al botón cerrar.
    */

    if (cerrarVisor) {

        setTimeout(

            () => {

                cerrarVisor.focus();

            },

            150

        );

    }

}


/* =========================================================
   74. CERRAR VISOR
========================================================= */

function cerrarElVisor() {

    if (!visor) {

        return;

    }


    visorAbierto = false;


    visor.classList.remove(
        "activo"
    );


    visor.classList.remove(
        "abierto"
    );


    visor.classList.remove(
        "visible"
    );


    document.body.classList.remove(
        "visor-abierto"
    );


    document.body.classList.remove(
        "sin-scroll"
    );


    visor.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================================
   75. FOTOGRAFÍA ANTERIOR
========================================================= */

function recuerdoAnterior() {

    mostrarRecuerdo(
        recuerdoActual - 1
    );

}


/* =========================================================
   76. FOTOGRAFÍA SIGUIENTE
========================================================= */

function recuerdoSiguiente() {

    mostrarRecuerdo(
        recuerdoActual + 1
    );

}


/* =========================================================
   77. BOTONES / TARJETAS DE LA GALERÍA
========================================================= */

/*
    Buscamos diferentes formas posibles
    de identificar las cuatro fotografías.
*/

const botonesRecuerdos =
    document.querySelectorAll(

        [
            "[data-recuerdo]",
            ".foto-card",
            ".btn-ver-foto",
            ".ver-recuerdo"
        ].join(",")

    );


/* =========================================================
   78. OBTENER ÍNDICE DE UNA TARJETA
========================================================= */

function obtenerIndiceRecuerdo(
    elemento,
    indiceAutomatico
) {

    /*
        Primero comprobamos data-recuerdo.
    */

    const dataRecuerdo =
        elemento.getAttribute(
            "data-recuerdo"
        );


    if (
        dataRecuerdo !== null &&
        dataRecuerdo !== ""
    ) {

        const numero =
            Number(
                dataRecuerdo
            );


        if (
            Number.isFinite(
                numero
            )
        ) {

            /*
                Admitimos tanto:
                0,1,2,3
                como:
                1,2,3,4
            */

            if (
                numero >= 1 &&
                numero <= recuerdos.length
            ) {

                return numero - 1;

            }


            if (
                numero >= 0 &&
                numero < recuerdos.length
            ) {

                return numero;

            }

        }

    }


    /*
        Comprobamos data-index.
    */

    const dataIndex =
        elemento.getAttribute(
            "data-index"
        );


    if (
        dataIndex !== null &&
        dataIndex !== ""
    ) {

        const numero =
            Number(
                dataIndex
            );


        if (
            Number.isFinite(
                numero
            )
        ) {

            return normalizarIndiceRecuerdo(
                numero
            );

        }

    }


    /*
        Si no tiene ningún atributo,
        usamos el orden de la tarjeta.
    */

    return normalizarIndiceRecuerdo(
        indiceAutomatico
    );

}


/* =========================================================
   79. ACTIVAR TARJETAS DE FOTOS
========================================================= */

botonesRecuerdos.forEach(

    (
        elemento,
        indice
    ) => {

        elemento.addEventListener(

            "click",

            (evento) => {

                /*
                    Evitamos interferir con enlaces
                    externos si existieran.
                */

                const enlace =
                    evento.target.closest(
                        "a"
                    );


                if (
                    enlace &&
                    enlace.getAttribute(
                        "href"
                    ) &&
                    !enlace.getAttribute(
                        "href"
                    ).startsWith(
                        "#"
                    )
                ) {

                    return;

                }


                const indiceRecuerdo =
                    obtenerIndiceRecuerdo(
                        elemento,
                        indice
                    );


                abrirVisor(
                    indiceRecuerdo
                );

            }

        );

    }

);


/* =========================================================
   80. BOTÓN CERRAR
========================================================= */

if (cerrarVisor) {

    cerrarVisor.addEventListener(

        "click",

        (evento) => {

            evento.stopPropagation();


            cerrarElVisor();

        }

    );

}


/* =========================================================
   81. BOTÓN ANTERIOR
========================================================= */

if (botonAnterior) {

    botonAnterior.addEventListener(

        "click",

        (evento) => {

            evento.stopPropagation();


            recuerdoAnterior();

        }

    );

}


/* =========================================================
   82. BOTÓN SIGUIENTE
========================================================= */

if (botonSiguiente) {

    botonSiguiente.addEventListener(

        "click",

        (evento) => {

            evento.stopPropagation();


            recuerdoSiguiente();

        }

    );

}


/* =========================================================
   83. CERRAR AL PULSAR EL FONDO
========================================================= */

if (visor) {

    visor.addEventListener(

        "click",

        (evento) => {

            /*
                Solo cerramos cuando se pulsa
                directamente el fondo oscuro.
            */

            if (
                evento.target === visor
            ) {

                cerrarElVisor();

            }

        }

    );

}


/* =========================================================
   84. CONTROLES DEL TECLADO
========================================================= */

document.addEventListener(

    "keydown",

    (evento) => {

        if (!visorAbierto) {

            return;

        }


        /*
            ESC
        */

        if (
            evento.key ===
            "Escape"
        ) {

            cerrarElVisor();

            return;

        }


        /*
            FLECHA IZQUIERDA
        */

        if (
            evento.key ===
            "ArrowLeft"
        ) {

            recuerdoAnterior();

            return;

        }


        /*
            FLECHA DERECHA
        */

        if (
            evento.key ===
            "ArrowRight"
        ) {

            recuerdoSiguiente();

        }

    }

);


/* =========================================================
   85. SOPORTE PARA DESLIZAR EN CELULAR
========================================================= */

let inicioTactilX = null;

let inicioTactilY = null;


if (visor) {

    visor.addEventListener(

        "touchstart",

        (evento) => {

            if (
                evento.touches.length !== 1
            ) {

                return;

            }


            inicioTactilX =
                evento.touches[0].clientX;


            inicioTactilY =
                evento.touches[0].clientY;

        },

        {
            passive: true
        }

    );


    visor.addEventListener(

        "touchend",

        (evento) => {

            if (
                inicioTactilX === null ||
                inicioTactilY === null ||
                evento.changedTouches.length !== 1
            ) {

                return;

            }


            const finalX =
                evento.changedTouches[0].clientX;


            const finalY =
                evento.changedTouches[0].clientY;


            const diferenciaX =
                finalX -
                inicioTactilX;


            const diferenciaY =
                finalY -
                inicioTactilY;


            /*
                Reiniciamos los valores.
            */

            inicioTactilX = null;

            inicioTactilY = null;


            /*
                Ignoramos movimientos pequeños.
            */

            if (
                Math.abs(
                    diferenciaX
                ) < 50
            ) {

                return;

            }


            /*
                Evitamos interpretar un movimiento
                vertical como cambio de fotografía.
            */

            if (
                Math.abs(
                    diferenciaY
                ) >
                Math.abs(
                    diferenciaX
                )
            ) {

                return;

            }


            /*
                Deslizar hacia la izquierda:
                siguiente fotografía.
            */

            if (
                diferenciaX < 0
            ) {

                recuerdoSiguiente();

            }


            /*
                Deslizar hacia la derecha:
                fotografía anterior.
            */

            else {

                recuerdoAnterior();

            }

        },

        {
            passive: true
        }

    );

}


/* =========================================================
   86. PRE-CARGAR LAS 4 FOTOGRAFÍAS
========================================================= */

function precargarRecuerdos() {

    recuerdos.forEach(

        (recuerdo) => {

            const imagen =
                new Image();


            imagen.src =
                recuerdo.imagen;

        }

    );

}


/*
    Iniciamos la precarga.
*/

precargarRecuerdos();


/* =========================================================
   87. ESTADO INICIAL DEL VISOR
========================================================= */

if (visor) {

    visor.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================================
   FIN PARTE 5
========================================================= */


/* =========================================================
   =========================================================
   PARTE 6
   ANIMACIONES DE NUESTRA HISTORIA
   =========================================================
   ========================================================= */


/* =========================================================
   88. SECCIÓN HISTORIA
========================================================= */

const seccionHistoria =
    document.getElementById(
        "historia"
    );


/* =========================================================
   89. ELEMENTOS ANIMADOS DE HISTORIA
========================================================= */

const elementosHistoria =
    document.querySelectorAll(

        [
            "#historia .section-header",
            "#historia .historia-visual",
            "#historia .historia-texto",
            "#historia .historia-marco",
            "#historia .historia-foto",
            "#historia .historia-contenido",
            "#historia .historia-detalle",
            "#historia .historia-fecha"
        ].join(",")

    );


/* =========================================================
   90. PREPARAR ELEMENTOS DE HISTORIA
========================================================= */

function prepararHistoria() {

    elementosHistoria.forEach(

        (
            elemento,
            indice
        ) => {

            /*
                Agregamos una clase especial
                para identificar los elementos
                de esta sección.
            */

            elemento.classList.add(
                "historia-animada-js"
            );


            /*
                Guardamos un pequeño retraso
                diferente para cada elemento.
            */

            elemento.style.setProperty(
                "--historia-delay",
                `${indice * 90}ms`
            );

        }

    );

}


/* =========================================================
   91. MOSTRAR ELEMENTO DE HISTORIA
========================================================= */

function mostrarElementoHistoria(
    elemento
) {

    if (!elemento) {

        return;

    }


    elemento.classList.add(
        "historia-visible-js"
    );


    /*
        También mantenemos la clase
        "visible" para compatibilidad
        con el CSS general.
    */

    elemento.classList.add(
        "visible"
    );

}


/* =========================================================
   92. OBSERVADOR DE LA HISTORIA
========================================================= */

function iniciarObservadorHistoria() {

    if (
        elementosHistoria.length === 0
    ) {

        return;

    }


    /*
        Navegadores modernos.
    */

    if (
        "IntersectionObserver" in window
    ) {

        const observadorHistoria =
            new IntersectionObserver(

                (entradas) => {

                    entradas.forEach(

                        (entrada) => {

                            if (
                                !entrada.isIntersecting
                            ) {

                                return;

                            }


                            mostrarElementoHistoria(
                                entrada.target
                            );


                            observadorHistoria.unobserve(
                                entrada.target
                            );

                        }

                    );

                },

                {

                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -40px 0px"

                }

            );


        elementosHistoria.forEach(

            (elemento) => {

                observadorHistoria.observe(
                    elemento
                );

            }

        );

    }


    /*
        Compatibilidad con navegadores
        sin IntersectionObserver.
    */

    else {

        elementosHistoria.forEach(

            (elemento) => {

                mostrarElementoHistoria(
                    elemento
                );

            }

        );

    }

}


/* =========================================================
   93. ESTILOS DE ANIMACIÓN PARA HISTORIA
========================================================= */

function crearEstilosHistoria() {

    /*
        Evitamos duplicar estilos.
    */

    if (
        document.getElementById(
            "estilos-historia-js"
        )
    ) {

        return;

    }


    const estilo =
        document.createElement(
            "style"
        );


    estilo.id =
        "estilos-historia-js";


    estilo.textContent = `

        /* ================================================
           ANIMACIONES DE NUESTRA HISTORIA
        ================================================= */

        .historia-animada-js {

            transition:

                opacity
                0.8s
                cubic-bezier(
                    0.22,
                    1,
                    0.36,
                    1
                ),

                transform
                0.8s
                cubic-bezier(
                    0.22,
                    1,
                    0.36,
                    1
                );

            transition-delay:
                var(
                    --historia-delay,
                    0ms
                );

        }


        /*
            La animación solo se aplica
            mientras JavaScript está activo.
        */

        .js-animaciones-activas
        .historia-animada-js {

            opacity: 0;

            transform:
                translateY(28px);

        }


        .js-animaciones-activas
        .historia-animada-js.historia-visible-js {

            opacity: 1;

            transform:
                translateY(0);

        }


        /*
            Imagen principal.
        */

        .js-animaciones-activas
        #historia
        .historia-visual.historia-animada-js {

            transform:
                translateX(-25px)
                translateY(10px);

        }


        .js-animaciones-activas
        #historia
        .historia-visual.historia-visible-js {

            transform:
                translateX(0)
                translateY(0);

        }


        /*
            Texto.
        */

        .js-animaciones-activas
        #historia
        .historia-texto.historia-animada-js {

            transform:
                translateX(25px)
                translateY(10px);

        }


        .js-animaciones-activas
        #historia
        .historia-texto.historia-visible-js {

            transform:
                translateX(0)
                translateY(0);

        }


        /*
            Movimiento reducido.
        */

        @media
        (prefers-reduced-motion: reduce) {

            .historia-animada-js {

                opacity:
                    1 !important;

                transform:
                    none !important;

                transition:
                    none !important;

            }

        }

    `;


    document.head.appendChild(
        estilo
    );

}


/* =========================================================
   94. MARCAR JAVASCRIPT DE ANIMACIONES
========================================================= */

document.documentElement.classList.add(
    "js-animaciones-activas"
);


/* =========================================================
   95. INICIAR ANIMACIONES DE HISTORIA
========================================================= */

crearEstilosHistoria();

prepararHistoria();

iniciarObservadorHistoria();


/* =========================================================
   96. EFECTO SUAVE EN LA FOTO DE HISTORIA
========================================================= */

const imagenHistoria =
    document.querySelector(
        "#historia img"
    );


if (imagenHistoria) {

    /*
        Cuando la fotografía termina
        de cargar, añadimos una clase.
    */

    if (
        imagenHistoria.complete
    ) {

        imagenHistoria.classList.add(
            "historia-imagen-cargada"
        );

    } else {

        imagenHistoria.addEventListener(

            "load",

            () => {

                imagenHistoria.classList.add(
                    "historia-imagen-cargada"
                );

            },

            {
                once: true
            }

        );

    }

}


/* =========================================================
   97. BOTÓN HACIA HISTORIA DESDE UN ENLACE INTERNO
========================================================= */

const enlacesHistoria =
    document.querySelectorAll(
        'a[href="#historia"]'
    );


enlacesHistoria.forEach(

    (enlace) => {

        enlace.addEventListener(

            "click",

            () => {

                /*
                    Cerramos el menú móvil
                    si estuviera abierto.
                */

                cerrarMenu();

            }

        );

    }

);


/* =========================================================
   98. ACTUALIZAR AL CAMBIAR EL TAMAÑO
========================================================= */

let temporizadorResizeHistoria = null;


window.addEventListener(

    "resize",

    () => {

        clearTimeout(
            temporizadorResizeHistoria
        );


        temporizadorResizeHistoria =
            setTimeout(

                () => {

                    /*
                        No cambiamos la estructura.
                        Solamente aseguramos que los
                        elementos visibles permanezcan
                        correctamente mostrados.
                    */

                    elementosHistoria.forEach(

                        (elemento) => {

                            if (
                                elemento.classList.contains(
                                    "historia-visible-js"
                                )
                            ) {

                                elemento.classList.add(
                                    "visible"
                                );

                            }

                        }

                    );

                },

                150

            );

    }

);


/* =========================================================
   FIN PARTE 6
========================================================= */


/* =========================================================
   =========================================================
   PARTE 7
   ANIMACIONES DE MOMENTOS
   =========================================================
   ========================================================= */


/* =========================================================
   99. SECCIÓN MOMENTOS
========================================================= */

const seccionMomentos =
    document.getElementById(
        "momentos"
    );


/* =========================================================
   100. ELEMENTOS DE LA LÍNEA DE TIEMPO
========================================================= */

const itemsMomentos =
    document.querySelectorAll(
        "#momentos .timeline-item"
    );


const tarjetasMomentos =
    document.querySelectorAll(
        "#momentos .timeline-card"
    );


const puntosMomentos =
    document.querySelectorAll(
        "#momentos .timeline-punto"
    );


const lineaMomentos =
    document.querySelector(
        "#momentos .timeline-linea"
    );


/* =========================================================
   101. PREPARAR MOMENTOS
========================================================= */

function prepararMomentos() {

    /*
        Preparamos cada elemento de la
        línea de tiempo.

        IMPORTANTE:
        aquí NO modificamos width,
        display, flex ni position.
        Eso queda completamente en CSS.
    */

    itemsMomentos.forEach(

        (
            item,
            indice
        ) => {

            item.classList.add(
                "momento-animado-js"
            );


            /*
                Guardamos el índice.
            */

            item.dataset.momentoIndice =
                String(
                    indice
                );


            /*
                Pequeño retraso para que
                no aparezcan todos juntos.
            */

            item.style.setProperty(
                "--momento-delay",
                `${indice * 100}ms`
            );

        }

    );


    /*
        Preparamos las tarjetas.
    */

    tarjetasMomentos.forEach(

        (
            tarjeta,
            indice
        ) => {

            tarjeta.classList.add(
                "momento-card-js"
            );


            tarjeta.style.setProperty(
                "--momento-card-delay",
                `${indice * 100}ms`
            );

        }

    );


    /*
        Preparamos los puntos.
    */

    puntosMomentos.forEach(

        (
            punto,
            indice
        ) => {

            punto.classList.add(
                "momento-punto-js"
            );


            punto.style.setProperty(
                "--momento-punto-delay",
                `${indice * 100 + 180}ms`
            );

        }

    );

}


/* =========================================================
   102. MOSTRAR UN MOMENTO
========================================================= */

function mostrarMomento(
    item
) {

    if (!item) {

        return;

    }


    /*
        Activamos el item.
    */

    item.classList.add(
        "momento-visible-js"
    );


    item.classList.add(
        "visible"
    );


    /*
        Buscamos su tarjeta.
    */

    const tarjeta =
        item.querySelector(
            ".timeline-card"
        );


    if (tarjeta) {

        tarjeta.classList.add(
            "momento-visible-js"
        );


        tarjeta.classList.add(
            "visible"
        );

    }


    /*
        Buscamos su punto central.
    */

    const punto =
        item.querySelector(
            ".timeline-punto"
        );


    if (punto) {

        punto.classList.add(
            "momento-visible-js"
        );


        punto.classList.add(
            "visible"
        );

    }

}


/* =========================================================
   103. OBSERVADOR DE MOMENTOS
========================================================= */

function iniciarObservadorMomentos() {

    if (
        itemsMomentos.length === 0
    ) {

        return;

    }


    if (
        "IntersectionObserver" in window
    ) {

        const observadorMomentos =
            new IntersectionObserver(

                (entradas) => {

                    entradas.forEach(

                        (entrada) => {

                            if (
                                !entrada.isIntersecting
                            ) {

                                return;

                            }


                            mostrarMomento(
                                entrada.target
                            );


                            observadorMomentos.unobserve(
                                entrada.target
                            );

                        }

                    );

                },

                {

                    threshold: 0.15,

                    rootMargin:
                        "0px 0px -50px 0px"

                }

            );


        itemsMomentos.forEach(

            (item) => {

                observadorMomentos.observe(
                    item
                );

            }

        );

    }


    /*
        Compatibilidad.
    */

    else {

        itemsMomentos.forEach(

            (item) => {

                mostrarMomento(
                    item
                );

            }

        );

    }

}


/* =========================================================
   104. ANIMACIÓN DE LA LÍNEA CENTRAL
========================================================= */

function activarLineaMomentos() {

    if (!lineaMomentos) {

        return;

    }


    lineaMomentos.classList.add(
        "timeline-linea-js"
    );


    /*
        Si IntersectionObserver está
        disponible, esperamos hasta que
        Momentos aparezca en pantalla.
    */

    if (
        "IntersectionObserver" in window &&
        seccionMomentos
    ) {

        const observadorLinea =
            new IntersectionObserver(

                (entradas) => {

                    entradas.forEach(

                        (entrada) => {

                            if (
                                !entrada.isIntersecting
                            ) {

                                return;

                            }


                            lineaMomentos.classList.add(
                                "timeline-linea-visible-js"
                            );


                            observadorLinea.disconnect();

                        }

                    );

                },

                {
                    threshold: 0.08
                }

            );


        observadorLinea.observe(
            seccionMomentos
        );

    }

    else {

        lineaMomentos.classList.add(
            "timeline-linea-visible-js"
        );

    }

}


/* =========================================================
   105. ESTILOS DE ANIMACIÓN
========================================================= */

function crearEstilosMomentos() {

    /*
        Evitamos crear los estilos
        más de una vez.
    */

    if (
        document.getElementById(
            "estilos-momentos-js"
        )
    ) {

        return;

    }


    const estilo =
        document.createElement(
            "style"
        );


    estilo.id =
        "estilos-momentos-js";


    estilo.textContent = `

        /* ================================================
           MOMENTOS
        ================================================= */


        /*
            Las animaciones solamente afectan
            opacity y transform.

            No tocamos:
            width
            height
            flex
            display
            position
        */


        .momento-card-js {

            transition:

                opacity
                0.75s
                cubic-bezier(
                    0.22,
                    1,
                    0.36,
                    1
                ),

                transform
                0.75s
                cubic-bezier(
                    0.22,
                    1,
                    0.36,
                    1
                ),

                box-shadow
                0.35s ease;

            transition-delay:
                var(
                    --momento-card-delay,
                    0ms
                );

        }


        /*
            Estado inicial.
        */

        .js-animaciones-activas
        .momento-card-js {

            opacity: 0;

            transform:
                translateY(25px)
                scale(0.97);

        }


        /*
            Estado visible.
        */

        .js-animaciones-activas
        .momento-card-js.momento-visible-js {

            opacity: 1;

            transform:
                translateY(0)
                scale(1);

        }


        /*
            Animación de los puntos.
        */

        .momento-punto-js {

            transition:

                opacity
                0.5s ease,

                box-shadow
                0.5s ease;

            transition-delay:
                var(
                    --momento-punto-delay,
                    0ms
                );

        }


        .js-animaciones-activas
        .momento-punto-js {

            opacity: 0;

        }


        .js-animaciones-activas
        .momento-punto-js.momento-visible-js {

            opacity: 1;

        }


        /*
            Efecto suave al pasar el mouse
            por una tarjeta.

            NO usamos transform aquí para
            evitar interferir con la animación
            de entrada.
        */

        @media (hover: hover) {

            #momentos
            .timeline-card:hover {

                box-shadow:
                    0 24px 60px
                    rgba(
                        139,
                        75,
                        88,
                        0.14
                    );

            }

        }


        /*
            Movimiento reducido.
        */

        @media
        (prefers-reduced-motion: reduce) {

            .momento-card-js,
            .momento-punto-js {

                opacity:
                    1 !important;

                transform:
                    none !important;

                transition:
                    none !important;

            }

        }

    `;


    document.head.appendChild(
        estilo
    );

}


/* =========================================================
   106. EFECTO EN LOS PUNTOS
========================================================= */

puntosMomentos.forEach(

    (punto) => {

        punto.addEventListener(

            "mouseenter",

            () => {

                punto.classList.add(
                    "punto-activo-js"
                );

            }

        );


        punto.addEventListener(

            "mouseleave",

            () => {

                punto.classList.remove(
                    "punto-activo-js"
                );

            }

        );

    }

);


/* =========================================================
   107. ACTIVAR TARJETA AL PASAR POR EL PUNTO
========================================================= */

puntosMomentos.forEach(

    (
        punto,
        indice
    ) => {

        punto.addEventListener(

            "mouseenter",

            () => {

                const tarjeta =
                    tarjetasMomentos[
                        indice
                    ];


                if (tarjeta) {

                    tarjeta.classList.add(
                        "timeline-card-activa-js"
                    );

                }

            }

        );


        punto.addEventListener(

            "mouseleave",

            () => {

                const tarjeta =
                    tarjetasMomentos[
                        indice
                    ];


                if (tarjeta) {

                    tarjeta.classList.remove(
                        "timeline-card-activa-js"
                    );

                }

            }

        );

    }

);


/* =========================================================
   108. ACTUALIZACIÓN AL CAMBIAR DE TAMAÑO
========================================================= */

let temporizadorResizeMomentos =
    null;


window.addEventListener(

    "resize",

    () => {

        clearTimeout(
            temporizadorResizeMomentos
        );


        temporizadorResizeMomentos =
            setTimeout(

                () => {

                    /*
                        No recalculamos anchos.

                        El responsive de Momentos
                        pertenece exclusivamente
                        al style.css.
                    */

                    itemsMomentos.forEach(

                        (item) => {

                            if (
                                item.classList.contains(
                                    "momento-visible-js"
                                )
                            ) {

                                mostrarMomento(
                                    item
                                );

                            }

                        }

                    );

                },

                160

            );

    }

);


/* =========================================================
   109. PROTECCIÓN DE LAS TARJETAS
========================================================= */

/*
    No aplicamos estilos inline de tamaño.

    Esto es intencional.

    Antes las tarjetas de Momentos quedaron
    demasiado angostas porque varias reglas
    estaban compitiendo por sus dimensiones.

    A partir de ahora:

    JavaScript = comportamiento y animaciones.

    CSS = tamaño, posición y responsive.
*/


/* =========================================================
   110. INICIAR MOMENTOS
========================================================= */

crearEstilosMomentos();

prepararMomentos();

activarLineaMomentos();

iniciarObservadorMomentos();


/* =========================================================
   FIN PARTE 7
========================================================= */


/* =========================================================
   =========================================================
   PARTE 8
   ANIMACIONES DE RAZONES
   =========================================================
   ========================================================= */


/* =========================================================
   111. SECCIÓN RAZONES
========================================================= */

const seccionRazones =
    document.getElementById(
        "razones"
    );


/* =========================================================
   112. TARJETAS DE RAZONES
========================================================= */

const razonesCards =
    document.querySelectorAll(
        "#razones .razon-card"
    );


/* =========================================================
   113. PREPARAR TARJETAS
========================================================= */

function prepararRazones() {

    if (
        razonesCards.length === 0
    ) {

        return;

    }


    razonesCards.forEach(

        (
            tarjeta,
            indice
        ) => {

            /*
                Clase que identifica las tarjetas
                controladas por JavaScript.
            */

            tarjeta.classList.add(
                "razon-animada-js"
            );


            /*
                Guardamos su posición.
            */

            tarjeta.dataset.razonIndice =
                String(
                    indice
                );


            /*
                Cada tarjeta tendrá un pequeño
                retraso para crear una entrada
                progresiva.
            */

            tarjeta.style.setProperty(
                "--razon-delay",
                `${indice * 90}ms`
            );

        }

    );

}


/* =========================================================
   114. MOSTRAR UNA RAZÓN
========================================================= */

function mostrarRazon(
    tarjeta
) {

    if (!tarjeta) {

        return;

    }


    tarjeta.classList.add(
        "razon-visible-js"
    );


    /*
        Conservamos también la clase
        general utilizada anteriormente.
    */

    tarjeta.classList.add(
        "visible"
    );

}


/* =========================================================
   115. OBSERVADOR DE RAZONES
========================================================= */

function iniciarObservadorRazones() {

    if (
        razonesCards.length === 0
    ) {

        return;

    }


    /*
        Navegadores modernos.
    */

    if (
        "IntersectionObserver" in window
    ) {

        const observadorRazones =
            new IntersectionObserver(

                (entradas) => {

                    entradas.forEach(

                        (entrada) => {

                            if (
                                !entrada.isIntersecting
                            ) {

                                return;

                            }


                            mostrarRazon(
                                entrada.target
                            );


                            /*
                                Una vez mostrada,
                                ya no necesitamos
                                seguir observándola.
                            */

                            observadorRazones.unobserve(
                                entrada.target
                            );

                        }

                    );

                },

                {

                    threshold: 0.15,

                    rootMargin:
                        "0px 0px -45px 0px"

                }

            );


        razonesCards.forEach(

            (tarjeta) => {

                observadorRazones.observe(
                    tarjeta
                );

            }

        );

    }


    /*
        Compatibilidad con navegadores
        antiguos.
    */

    else {

        razonesCards.forEach(

            (tarjeta) => {

                mostrarRazon(
                    tarjeta
                );

            }

        );

    }

}


/* =========================================================
   116. ESTILOS DE ANIMACIÓN DE RAZONES
========================================================= */

function crearEstilosRazones() {

    /*
        Evitamos duplicar estilos.
    */

    if (
        document.getElementById(
            "estilos-razones-js"
        )
    ) {

        return;

    }


    const estilo =
        document.createElement(
            "style"
        );


    estilo.id =
        "estilos-razones-js";


    estilo.textContent = `

        /* ================================================
           RAZONES
        ================================================= */


        .razon-animada-js {

            transition:

                opacity
                0.75s
                cubic-bezier(
                    0.22,
                    1,
                    0.36,
                    1
                ),

                transform
                0.75s
                cubic-bezier(
                    0.22,
                    1,
                    0.36,
                    1
                ),

                box-shadow
                0.35s ease,

                border-color
                0.35s ease;

            transition-delay:
                var(
                    --razon-delay,
                    0ms
                );

        }


        /*
            Estado inicial.
        */

        .js-animaciones-activas
        .razon-animada-js {

            opacity: 0;

            transform:
                translateY(30px)
                scale(0.97);

        }


        /*
            Estado visible.
        */

        .js-animaciones-activas
        .razon-animada-js.razon-visible-js {

            opacity: 1;

            transform:
                translateY(0)
                scale(1);

        }


        /*
            Efecto al pasar el mouse.

            Aquí evitamos utilizar transform
            para que no compita con otras
            animaciones del sitio.
        */

        @media (hover: hover) {

            #razones
            .razon-card.razon-visible-js:hover {

                box-shadow:
                    0 24px 55px
                    rgba(
                        139,
                        75,
                        88,
                        0.13
                    );

                border-color:
                    rgba(
                        232,
                        93,
                        117,
                        0.30
                    );

            }

        }


        /*
            Efecto especial para el corazón
            o icono interior de la tarjeta.
        */

        #razones
        .razon-card
        .razon-icono,

        #razones
        .razon-card
        .razon-numero {

            transition:

                transform
                0.35s
                cubic-bezier(
                    0.22,
                    1,
                    0.36,
                    1
                ),

                opacity
                0.35s ease;

        }


        @media (hover: hover) {

            #razones
            .razon-card:hover
            .razon-icono,

            #razones
            .razon-card:hover
            .razon-numero {

                transform:
                    scale(1.08);

            }

        }


        /*
            Movimiento reducido.
        */

        @media
        (prefers-reduced-motion: reduce) {

            .razon-animada-js {

                opacity:
                    1 !important;

                transform:
                    none !important;

                transition:
                    none !important;

            }


            #razones
            .razon-card
            .razon-icono,

            #razones
            .razon-card
            .razon-numero {

                transition:
                    none !important;

            }

        }

    `;


    document.head.appendChild(
        estilo
    );

}


/* =========================================================
   117. EFECTO DE INTERACCIÓN
========================================================= */

razonesCards.forEach(

    (tarjeta) => {

        tarjeta.addEventListener(

            "mouseenter",

            () => {

                tarjeta.classList.add(
                    "razon-activa-js"
                );

            }

        );


        tarjeta.addEventListener(

            "mouseleave",

            () => {

                tarjeta.classList.remove(
                    "razon-activa-js"
                );

            }

        );

    }

);


/* =========================================================
   118. EFECTO TÁCTIL PARA CELULAR
========================================================= */

razonesCards.forEach(

    (tarjeta) => {

        tarjeta.addEventListener(

            "touchstart",

            () => {

                tarjeta.classList.add(
                    "razon-tocada-js"
                );

            },

            {
                passive: true
            }

        );


        tarjeta.addEventListener(

            "touchend",

            () => {

                setTimeout(

                    () => {

                        tarjeta.classList.remove(
                            "razon-tocada-js"
                        );

                    },

                    250

                );

            },

            {
                passive: true
            }

        );

    }

);


/* =========================================================
   119. MOSTRAR TODAS SI LA SECCIÓN YA ESTÁ VISIBLE
========================================================= */

function comprobarRazonesIniciales() {

    if (
        !seccionRazones ||
        razonesCards.length === 0
    ) {

        return;

    }


    const rect =
        seccionRazones.getBoundingClientRect();


    /*
        Si al cargar la página la sección
        ya está dentro de la pantalla,
        dejamos que el observador actúe.

        Si el navegador no dispone del
        observador, las mostramos directamente.
    */

    if (
        !(
            "IntersectionObserver" in window
        ) &&
        rect.top < window.innerHeight
    ) {

        razonesCards.forEach(

            (tarjeta) => {

                mostrarRazon(
                    tarjeta
                );

            }

        );

    }

}


/* =========================================================
   120. PROTECCIÓN AL CAMBIAR TAMAÑO
========================================================= */

let temporizadorResizeRazones =
    null;


window.addEventListener(

    "resize",

    () => {

        clearTimeout(
            temporizadorResizeRazones
        );


        temporizadorResizeRazones =
            setTimeout(

                () => {

                    /*
                        No cambiamos columnas,
                        anchos ni alturas.

                        Todo el responsive
                        permanece en style.css.
                    */

                    razonesCards.forEach(

                        (tarjeta) => {

                            if (
                                tarjeta.classList.contains(
                                    "razon-visible-js"
                                )
                            ) {

                                tarjeta.classList.add(
                                    "visible"
                                );

                            }

                        }

                    );

                },

                160

            );

    }

);


/* =========================================================
   121. PROTECCIÓN DE ESTRUCTURA
========================================================= */

/*
    Igual que hicimos con Momentos:

    JavaScript:
        - animaciones
        - interacción
        - comportamiento

    CSS:
        - ancho
        - alto
        - columnas
        - responsive
        - posición

    De esta manera evitamos que las
    tarjetas se desordenen.
*/


/* =========================================================
   122. INICIAR RAZONES
========================================================= */

crearEstilosRazones();

prepararRazones();

iniciarObservadorRazones();

comprobarRazonesIniciales();


/* =========================================================
   FIN PARTE 8
========================================================= */


/* =========================================================
   =========================================================
   PARTE 9
   PORTADA DE BIENVENIDA
   =========================================================
   ========================================================= */


/* =========================================================
   123. ELEMENTOS DE LA PORTADA
========================================================= */

const portadaBienvenida =
    document.getElementById(
        "portada-bienvenida"
    );


const btnAbrirPortada =
    document.getElementById(
        "btn-abrir-portada"
    );


/* =========================================================
   124. ESTADO DE LA PORTADA
========================================================= */

let portadaAbierta =
    Boolean(
        portadaBienvenida
    );


let portadaEnTransicion =
    false;


/* =========================================================
   125. PREPARAR PORTADA
========================================================= */

function prepararPortada() {

    /*
        Si la portada no existe,
        no hacemos nada.
    */

    if (!portadaBienvenida) {

        return;

    }


    /*
        Bloqueamos el desplazamiento
        de la página mientras la portada
        está visible.
    */

    document.body.classList.add(
        "portada-activa"
    );


    /*
        Accesibilidad.
    */

    portadaBienvenida.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
        Marcamos el botón como disponible.
    */

    if (btnAbrirPortada) {

        btnAbrirPortada.disabled =
            false;


        btnAbrirPortada.setAttribute(
            "aria-label",
            "Abrir nuestra historia"
        );

    }

}


/* =========================================================
   126. INICIAR MÚSICA DESDE LA PORTADA
========================================================= */

function iniciarMusicaDesdePortada() {

    /*
        Esta función se ejecuta directamente
        desde el clic del usuario.

        De esta manera el navegador permite
        iniciar el audio.
    */

    if (!musica) {

        return;

    }


    /*
        Si ya está reproduciéndose,
        no hacemos nada.
    */

    if (!musica.paused) {

        actualizarBotonMusica();

        return;

    }


    /*
        Detenemos cualquier transición
        anterior de volumen.
    */

    detenerSubidaVolumen();


    /*
        Comenzamos en silencio para
        realizar una entrada suave.
    */

    musica.volume = 0;


    /*
        IMPORTANTE:
        llamamos play() directamente dentro
        de la interacción del usuario.
    */

    const promesaReproduccion =
        musica.play();


    /*
        Algunos navegadores devuelven
        una promesa y otros pueden
        comportarse de manera diferente.
    */

    if (
        promesaReproduccion &&
        typeof promesaReproduccion.then ===
        "function"
    ) {

        promesaReproduccion

            .then(

                () => {

                    musicaIniciada =
                        true;


                    subirVolumenSuavemente();


                    actualizarBotonMusica();

                }

            )

            .catch(

                (error) => {

                    /*
                        Si el navegador bloquea
                        el audio, la página puede
                        seguir funcionando.
                    */

                    console.warn(
                        "No se pudo iniciar la música desde la portada.",
                        error
                    );


                    musica.volume =
                        CONFIG.volumenMusica;


                    actualizarBotonMusica();

                }

            );

    }

}


/* =========================================================
   127. CERRAR PORTADA
========================================================= */

function cerrarPortada() {

    /*
        Evitamos ejecutar el proceso
        más de una vez.
    */

    if (
        !portadaBienvenida ||
        portadaEnTransicion
    ) {

        return;

    }


    portadaEnTransicion =
        true;


    /*
        Deshabilitamos temporalmente
        el botón.
    */

    if (btnAbrirPortada) {

        btnAbrirPortada.disabled =
            true;

    }


    /*
        Iniciamos la música.
    */

    iniciarMusicaDesdePortada();


    /*
        AQUÍ usamos exactamente la misma
        clase definida en style.css.
    */

    portadaBienvenida.classList.add(
        "portada-saliendo"
    );


    /*
        Permitimos nuevamente el scroll.
    */

    document.body.classList.remove(
        "portada-activa"
    );


    /*
        Esperamos a que termine
        la transición CSS.
    */

    window.setTimeout(

        () => {

            portadaAbierta =
                false;


            portadaEnTransicion =
                false;


            /*
                Ocultamos la portada.
            */

            portadaBienvenida.setAttribute(
                "aria-hidden",
                "true"
            );


            /*
                La eliminamos del documento
                para que no interfiera con
                botones o navegación.
            */

            portadaBienvenida.remove();


            /*
                Dejamos la página en Inicio.
            */

            const inicio =
                document.getElementById(
                    "inicio"
                );


            if (inicio) {

                inicio.scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "start"

                });

            }


            /*
                Actualizamos navegación.
            */

            actualizarNavegacion();

        },

        850

    );

}


/* =========================================================
   128. BOTÓN "ABRIR NUESTRA HISTORIA"
========================================================= */

if (btnAbrirPortada) {

    btnAbrirPortada.addEventListener(

        "click",

        () => {

            cerrarPortada();

        }

    );

}


/* =========================================================
   129. TECLA ENTER
========================================================= */

/*
    Como usamos un elemento <button>,
    Enter ya funciona automáticamente.

    Este bloque solo evita comportamientos
    inesperados mientras la portada
    está en transición.
*/

if (btnAbrirPortada) {

    btnAbrirPortada.addEventListener(

        "keydown",

        (evento) => {

            if (
                portadaEnTransicion
            ) {

                evento.preventDefault();

            }

        }

    );

}


/* =========================================================
   130. EVITAR SCROLL CON TECLADO
========================================================= */

document.addEventListener(

    "keydown",

    (evento) => {

        if (
            !portadaAbierta ||
            !portadaBienvenida
        ) {

            return;

        }


        /*
            Permitimos Tab para
            accesibilidad.
        */

        if (
            evento.key === "Tab"
        ) {

            return;

        }


        /*
            Permitimos Enter y Espacio
            cuando el foco está en el botón.
        */

        if (
            document.activeElement ===
            btnAbrirPortada &&
            (
                evento.key === "Enter" ||
                evento.key === " "
            )
        ) {

            return;

        }


        /*
            Evitamos que las teclas de
            navegación muevan la página
            que está detrás.
        */

        const teclasBloqueadas = [

            "ArrowUp",

            "ArrowDown",

            "PageUp",

            "PageDown",

            "Home",

            "End",

            " "

        ];


        if (
            teclasBloqueadas.includes(
                evento.key
            )
        ) {

            evento.preventDefault();

        }

    }

);


/* =========================================================
   131. FOCO INICIAL
========================================================= */

function enfocarBotonPortada() {

    if (
        !btnAbrirPortada ||
        !portadaBienvenida
    ) {

        return;

    }


    /*
        Esperamos un poco para permitir
        que termine la animación inicial.
    */

    window.setTimeout(

        () => {

            if (
                portadaAbierta &&
                btnAbrirPortada
            ) {

                btnAbrirPortada.focus({

                    preventScroll:
                        true

                });

            }

        },

        500

    );

}


/* =========================================================
   132. PROTECCIÓN SI NO EXISTE LA PORTADA
========================================================= */

if (!portadaBienvenida) {

    /*
        Si por cualquier motivo el HTML
        no contiene la portada, nos
        aseguramos de que el sitio
        siga teniendo scroll.
    */

    document.body.classList.remove(
        "portada-activa"
    );

}


/* =========================================================
   133. INICIAR PORTADA
========================================================= */

if (portadaBienvenida) {

    prepararPortada();

    enfocarBotonPortada();

}


/* =========================================================
   FIN PARTE 9
========================================================= */


/* =========================================================
   =========================================================
   PARTE 10
   CIERRE Y COMPROBACIONES FINALES
   =========================================================
   ========================================================= */


/* =========================================================
   134. ESTADO GENERAL DEL SITIO
========================================================= */

let sitioInicializado = false;


/* =========================================================
   135. COMPROBAR ELEMENTOS PRINCIPALES
========================================================= */

function comprobarElementosPrincipales() {

    const comprobaciones = {

        header:
            Boolean(
                header
            ),

        navegacion:
            navLinks.length > 0,

        musica:
            Boolean(
                musica
            ),

        historia:
            Boolean(
                document.getElementById(
                    "historia"
                )
            ),

        fotos:
            Boolean(
                document.getElementById(
                    "fotos"
                )
            ),

        momentos:
            Boolean(
                document.getElementById(
                    "momentos"
                )
            ),

        razones:
            Boolean(
                document.getElementById(
                    "razones"
                )
            ),

        carta:
            Boolean(
                document.getElementById(
                    "carta"
                )
            ),

        sorpresa:
            Boolean(
                document.getElementById(
                    "sorpresa"
                )
            )

    };


    return comprobaciones;

}


/* =========================================================
   136. CORREGIR BLOQUEOS DE SCROLL
========================================================= */

function comprobarBloqueoScroll() {

    /*
        PORTADA

        Si la portada todavía existe
        y sigue abierta, mantenemos
        bloqueado el scroll.
    */

    if (
        portadaBienvenida &&
        portadaAbierta &&
        !portadaEnTransicion
    ) {

        document.body.classList.add(
            "portada-activa"
        );

        return;

    }


    /*
        VISOR

        Si el visor está abierto,
        mantenemos su bloqueo.
    */

    if (
        visorAbierto
    ) {

        document.body.classList.add(
            "visor-abierto"
        );


        document.body.classList.add(
            "sin-scroll"
        );

        return;

    }


    /*
        Si no existe ningún elemento
        que necesite bloquear la página,
        eliminamos las clases.
    */

    document.body.classList.remove(
        "portada-activa"
    );


    document.body.classList.remove(
        "visor-abierto"
    );


    document.body.classList.remove(
        "sin-scroll"
    );

}


/* =========================================================
   137. COMPROBAR IMÁGENES DE LA GALERÍA
========================================================= */

function comprobarImagenesGaleria() {

    const imagenes =
        document.querySelectorAll(
            "#fotos img"
        );


    imagenes.forEach(

        (imagen) => {

            /*
                Evitamos arrastrar accidentalmente
                las fotografías.
            */

            imagen.setAttribute(
                "draggable",
                "false"
            );


            /*
                Si una imagen falla, dejamos una
                clase para poder identificarla.
            */

            imagen.addEventListener(

                "error",

                () => {

                    imagen.classList.add(
                        "imagen-error"
                    );


                    console.warn(
                        `No se pudo cargar la imagen: ${imagen.src}`
                    );

                },

                {
                    once: true
                }

            );

        }

    );

}


/* =========================================================
   138. COMPROBAR AUDIO
========================================================= */

function comprobarAudioFinal() {

    if (!musica) {

        console.warn(
            "No se encontró el elemento de audio."
        );

        return;

    }


    /*
        Dejamos activado el loop.
    */

    musica.loop =
        true;


    /*
        Protección del volumen.
    */

    if (
        musica.volume >
        CONFIG.volumenMusica
    ) {

        musica.volume =
            CONFIG.volumenMusica;

    }


    /*
        Sincronizamos el botón.
    */

    actualizarBotonMusica();

}


/* =========================================================
   139. CORREGIR HASH DE LA URL
========================================================= */

function comprobarHashInicial() {

    /*
        Si la portada está visible,
        no desplazamos la página todavía.
    */

    if (
        portadaBienvenida &&
        portadaAbierta
    ) {

        return;

    }


    const hash =
        window.location.hash;


    if (
        !hash ||
        hash === "#"
    ) {

        return;

    }


    /*
        Buscamos la sección indicada.
    */

    const destino =
        document.querySelector(
            hash
        );


    if (!destino) {

        return;

    }


    /*
        Esperamos a que el navegador
        termine de calcular el diseño.
    */

    window.setTimeout(

        () => {

            destino.scrollIntoView({

                behavior:
                    "auto",

                block:
                    "start"

            });

        },

        100

    );

}


/* =========================================================
   140. ACTUALIZAR AL CAMBIAR EL HASH
========================================================= */

window.addEventListener(

    "hashchange",

    () => {

        /*
            Si la portada está abierta,
            no movemos la página que está
            detrás de ella.
        */

        if (
            portadaAbierta
        ) {

            return;

        }


        actualizarNavegacion();

    }

);


/* =========================================================
   141. PROTECCIÓN DE ENLACES INTERNOS
========================================================= */

const enlacesInternos =
    document.querySelectorAll(
        'a[href^="#"]'
    );


enlacesInternos.forEach(

    (enlace) => {

        enlace.addEventListener(

            "click",

            (evento) => {

                const destinoId =
                    enlace.getAttribute(
                        "href"
                    );


                if (
                    !destinoId ||
                    destinoId === "#"
                ) {

                    return;

                }


                const destino =
                    document.querySelector(
                        destinoId
                    );


                if (!destino) {

                    return;

                }


                /*
                    Evitamos el salto brusco
                    predeterminado.
                */

                evento.preventDefault();


                /*
                    Cerramos el menú móvil.
                */

                cerrarMenu();


                /*
                    Desplazamiento suave.
                */

                destino.scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "start"

                });


                /*
                    Actualizamos la URL sin
                    recargar la página.
                */

                try {

                    history.replaceState(
                        null,
                        "",
                        destinoId
                    );

                }

                catch (error) {

                    /*
                        Si el navegador no permite
                        modificar el historial,
                        simplemente continuamos.
                    */

                }

            }

        );

    }

);


/* =========================================================
   142. COMPROBAR RESIZE GENERAL
========================================================= */

let temporizadorResizeGeneral =
    null;


window.addEventListener(

    "resize",

    () => {

        clearTimeout(
            temporizadorResizeGeneral
        );


        temporizadorResizeGeneral =
            window.setTimeout(

                () => {

                    /*
                        Actualizamos navegación.
                    */

                    actualizarNavegacion();


                    /*
                        Revisamos bloqueos.
                    */

                    comprobarBloqueoScroll();


                    /*
                        Si pasamos a escritorio,
                        cerramos el menú móvil.
                    */

                    if (
                        window.innerWidth >
                        850
                    ) {

                        cerrarMenu();

                    }

                },

                150

            );

    }

);


/* =========================================================
   143. COMPROBAR ORIENTACIÓN
========================================================= */

window.addEventListener(

    "orientationchange",

    () => {

        window.setTimeout(

            () => {

                actualizarNavegacion();

                comprobarBloqueoScroll();

            },

            250

        );

    }

);


/* =========================================================
   144. PROTECCIÓN PARA LA PORTADA
========================================================= */

function comprobarPortadaFinal() {

    /*
        Si no existe portada,
        aseguramos que no quede
        bloqueado el sitio.
    */

    if (!portadaBienvenida) {

        document.body.classList.remove(
            "portada-activa"
        );

        return;

    }


    /*
        Si todavía está abierta,
        mantenemos su estado.
    */

    if (
        portadaAbierta
    ) {

        document.body.classList.add(
            "portada-activa"
        );

    }

}


/* =========================================================
   145. PROTECCIÓN PARA EL VISOR
========================================================= */

function comprobarVisorFinal() {

    if (!visor) {

        return;

    }


    /*
        Si está cerrado, dejamos
        aria-hidden en true.
    */

    if (!visorAbierto) {

        visor.setAttribute(
            "aria-hidden",
            "true"
        );

    }

}


/* =========================================================
   146. ESTADO DE CARGA DE LA PÁGINA
========================================================= */

function marcarPaginaCargada() {

    document.documentElement.classList.add(
        "pagina-cargada"
    );


    document.body.classList.add(
        "pagina-lista"
    );

}


/* =========================================================
   147. INICIALIZACIÓN FINAL
========================================================= */

function inicializarSitio() {

    /*
        Evitamos ejecutar la inicialización
        más de una vez.
    */

    if (
        sitioInicializado
    ) {

        return;

    }


    sitioInicializado =
        true;


    /*
        Comprobamos los elementos.
    */

    const estado =
        comprobarElementosPrincipales();


    /*
        Las comprobaciones quedan disponibles
        en consola para detectar rápidamente
        cualquier elemento faltante.
    */

    console.log(
        "Daría ♥ Jhonatan — Estado del sitio:",
        estado
    );


    /*
        Imágenes.
    */

    comprobarImagenesGaleria();


    /*
        Audio.
    */

    comprobarAudioFinal();


    /*
        Portada.
    */

    comprobarPortadaFinal();


    /*
        Visor.
    */

    comprobarVisorFinal();


    /*
        Header.
    */

    controlarHeader();


    /*
        Navegación.
    */

    actualizarNavegacion();


    /*
        Bloqueos.
    */

    comprobarBloqueoScroll();


    /*
        Marcamos la página lista.
    */

    marcarPaginaCargada();


    /*
        Comprobamos el hash después
        de terminar la carga inicial.
    */

    comprobarHashInicial();

}


/* =========================================================
   148. EJECUTAR INICIALIZACIÓN
========================================================= */

/*
    Como script.js está colocado al final
    del index.html, normalmente el DOM ya
    estará disponible.

    De todos modos dejamos esta protección.
*/

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(

        "DOMContentLoaded",

        inicializarSitio,

        {
            once: true
        }

    );

}

else {

    inicializarSitio();

}


/* =========================================================
   149. CUANDO TODOS LOS RECURSOS TERMINEN DE CARGAR
========================================================= */

window.addEventListener(

    "load",

    () => {

        /*
            Volvemos a sincronizar solamente
            los elementos que pueden depender
            de imágenes, fuentes o audio.
        */

        controlarHeader();

        actualizarNavegacion();

        comprobarBloqueoScroll();


        /*
            Si no existe la portada,
            respetamos el hash de la URL.
        */

        if (
            !portadaAbierta
        ) {

            comprobarHashInicial();

        }

    },

    {
        once: true
    }

);


/* =========================================================
   150. MENSAJE FINAL DE DESARROLLO
========================================================= */

console.log(
    "💗 Daría + Jhonatan | 04 · 01 · 2026"
);
   
