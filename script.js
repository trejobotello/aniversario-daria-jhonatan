/* =========================================================
   DARÍA ❤️ JHONATAN
   SCRIPT.JS
   Funciones:
   - Contador
   - Menú móvil
   - Navegación
   - Música
   - Carta
   - Sorpresa
   - Corazones
   - Animaciones
========================================================= */

"use strict";


/* =========================================================
   1. CONFIGURACIÓN PRINCIPAL
========================================================= */

const CONFIG = {

    persona1: "Daría",

    persona2: "Jhonatan",

    // 04 de enero de 2026
    fechaInicio: new Date(2026, 0, 4, 0, 0, 0),

    volumenMusica: 0.45,

    corazonesActivos: true

};



/* =========================================================
   2. ELEMENTOS DEL HTML
========================================================= */

const header =
    document.getElementById("header");

const menuToggle =
    document.getElementById("menu-toggle");

const navMenu =
    document.getElementById("nav-menu");

const navLinks =
    document.querySelectorAll(".nav-link");


/* Música */

const musica =
    document.getElementById("musica");

const btnMusica =
    document.getElementById("btn-musica");

const btnHistoria =
    document.getElementById("btn-historia");

const iconoMusica =
    document.getElementById("icono-musica");

const textoMusica =
    document.getElementById("texto-musica");


/* Carta */

const sobre =
    document.getElementById("sobre");

const abrirCarta =
    document.getElementById("abrir-carta");

const papelCarta =
    document.getElementById("papel-carta");


/* Sorpresa */

const btnSorpresa =
    document.getElementById("btn-sorpresa");

const sorpresaOculta =
    document.getElementById("sorpresa-oculta");


/* Corazones */

const contenedorCorazones =
    document.getElementById("corazones-flotantes");


/* Contador */

const elementoAnios =
    document.getElementById("anios");

const elementoMeses =
    document.getElementById("meses");

const elementoDias =
    document.getElementById("dias");

const elementoHoras =
    document.getElementById("horas");

const elementoMinutos =
    document.getElementById("minutos");

const elementoSegundos =
    document.getElementById("segundos");



/* =========================================================
   3. FUNCIÓN AUXILIAR
========================================================= */

function dosDigitos(numero) {

    return String(numero).padStart(2, "0");

}



/* =========================================================
   4. CALCULAR TIEMPO JUNTOS
========================================================= */

function calcularTiempo(inicio, ahora) {

    /*
        Primero calculamos años y meses completos.
        Después calculamos los días y horas restantes.
    */

    let anios =
        ahora.getFullYear() - inicio.getFullYear();

    let meses =
        ahora.getMonth() - inicio.getMonth();


    if (
        ahora.getDate() < inicio.getDate()
    ) {

        meses--;

    }


    if (meses < 0) {

        anios--;

        meses += 12;

    }


    /*
        Creamos una fecha base sumando
        los años y meses completos.
    */

    const fechaBase =
        new Date(
            inicio.getFullYear() + anios,
            inicio.getMonth() + meses,
            inicio.getDate(),
            inicio.getHours(),
            inicio.getMinutes(),
            inicio.getSeconds()
        );


    let diferencia =
        ahora.getTime() - fechaBase.getTime();


    if (diferencia < 0) {

        diferencia = 0;

    }


    const segundosTotales =
        Math.floor(diferencia / 1000);


    const dias =
        Math.floor(
            segundosTotales / 86400
        );


    const horas =
        Math.floor(
            (segundosTotales % 86400) / 3600
        );


    const minutos =
        Math.floor(
            (segundosTotales % 3600) / 60
        );


    const segundos =
        segundosTotales % 60;


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
   5. ACTUALIZAR CONTADOR
========================================================= */

function actualizarContador() {

    const ahora =
        new Date();


    /*
        Si todavía no llegó la fecha
        de inicio mostramos 00.
    */

    if (ahora < CONFIG.fechaInicio) {

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


    const tiempo =
        calcularTiempo(
            CONFIG.fechaInicio,
            ahora
        );


    elementoAnios.textContent =
        dosDigitos(tiempo.anios);

    elementoMeses.textContent =
        dosDigitos(tiempo.meses);

    elementoDias.textContent =
        dosDigitos(tiempo.dias);

    elementoHoras.textContent =
        dosDigitos(tiempo.horas);

    elementoMinutos.textContent =
        dosDigitos(tiempo.minutos);

    elementoSegundos.textContent =
        dosDigitos(tiempo.segundos);

}



/* Iniciar contador */

actualizarContador();


setInterval(
    actualizarContador,
    1000
);



/* =========================================================
   6. HEADER AL HACER SCROLL
========================================================= */

function controlarHeader() {

    if (window.scrollY > 30) {

        header.classList.add(
            "scrolled"
        );

    } else {

        header.classList.remove(
            "scrolled"
        );

    }

}


controlarHeader();


window.addEventListener(
    "scroll",
    controlarHeader,
    {
        passive: true
    }
);



/* =========================================================
   7. MENÚ PARA CELULAR
========================================================= */

function abrirMenu() {

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


function cerrarMenu() {

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


function alternarMenu() {

    const abierto =
        navMenu.classList.contains(
            "abierto"
        );


    if (abierto) {

        cerrarMenu();

    } else {

        abrirMenu();

    }

}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        alternarMenu
    );

}



/* Cerrar menú al pulsar enlace */

navLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            cerrarMenu
        );

    }
);



/* Cerrar con ESC */

document.addEventListener(
    "keydown",
    (evento) => {

        if (
            evento.key === "Escape"
        ) {

            cerrarMenu();

        }

    }
);



/* =========================================================
   8. NAVEGACIÓN ACTIVA
========================================================= */

const secciones =
    document.querySelectorAll(
        "main section[id]"
    );


function actualizarNavegacion() {

    let seccionActual =
        "inicio";


    secciones.forEach(
        (seccion) => {

            const posicion =
                seccion.offsetTop - 150;


            if (
                window.scrollY >= posicion
            ) {

                seccionActual =
                    seccion.id;

            }

        }
    );


    navLinks.forEach(
        (link) => {

            link.classList.remove(
                "activo"
            );


            if (
                link.getAttribute("href") ===
                `#${seccionActual}`
            ) {

                link.classList.add(
                    "activo"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    actualizarNavegacion,
    {
        passive: true
    }
);


actualizarNavegacion();



/* =========================================================
   9. MÚSICA
========================================================= */

/*
    Esta es la única parte del proyecto
    que controla la música.
*/

let musicaReproduciendo =
    false;

let intervaloVolumen =
    null;


/*
    Actualizar visualmente el botón.
*/

function actualizarBotonMusica() {

    if (!btnMusica) {

        return;

    }


    if (musicaReproduciendo) {

        btnMusica.classList.add(
            "reproduciendo"
        );

        iconoMusica.textContent =
            "❚❚";

        textoMusica.textContent =
            "Pausar música";

    } else {

        btnMusica.classList.remove(
            "reproduciendo"
        );

        iconoMusica.textContent =
            "♪";

        textoMusica.textContent =
            "Reproducir música";

    }

}



/* =========================================================
   10. SUBIR VOLUMEN SUAVEMENTE
========================================================= */

function aumentarVolumenSuavemente() {

    /*
        Cancelamos cualquier transición
        anterior de volumen.
    */

    if (intervaloVolumen) {

        clearInterval(
            intervaloVolumen
        );

    }


    musica.volume =
        0.05;


    intervaloVolumen =
        setInterval(
            () => {

                let nuevoVolumen =
                    musica.volume + 0.03;


                if (
                    nuevoVolumen >=
                    CONFIG.volumenMusica
                ) {

                    nuevoVolumen =
                        CONFIG.volumenMusica;

                    clearInterval(
                        intervaloVolumen
                    );

                    intervaloVolumen =
                        null;

                }


                musica.volume =
                    Math.min(
                        nuevoVolumen,
                        1
                    );

            },
            120
        );

}



/* =========================================================
   11. REPRODUCIR MÚSICA
========================================================= */

async function reproducirMusica() {

    if (!musica) {

        console.error(
            "No se encontró el elemento de audio."
        );

        return false;

    }


    try {

        /*
            Empezamos bajito.
        */

        musica.volume =
            0.05;


        /*
            play() ocurre directamente
            después de la interacción
            del usuario.
        */

        await musica.play();


        musicaReproduciendo =
            true;


        actualizarBotonMusica();


        aumentarVolumenSuavemente();


        console.log(
            "🎵 Música reproduciéndose correctamente."
        );


        return true;

    }

    catch (error) {

        musicaReproduciendo =
            false;


        actualizarBotonMusica();


        console.error(
            "❌ No se pudo reproducir la música:",
            error
        );


        /*
            Mostramos temporalmente
            un mensaje en el botón.
        */

        if (textoMusica) {

            textoMusica.textContent =
                "No se pudo reproducir";

            setTimeout(
                actualizarBotonMusica,
                2500
            );

        }


        return false;

    }

}



/* =========================================================
   12. PAUSAR MÚSICA
========================================================= */

function pausarMusica() {

    if (!musica) {

        return;

    }


    musica.pause();


    musicaReproduciendo =
        false;


    if (intervaloVolumen) {

        clearInterval(
            intervaloVolumen
        );

        intervaloVolumen =
            null;

    }


    actualizarBotonMusica();

}



/* =========================================================
   13. BOTÓN DE MÚSICA
========================================================= */

if (btnMusica) {

    btnMusica.addEventListener(
        "click",
        async () => {

            if (
                musica.paused
            ) {

                await reproducirMusica();

            } else {

                pausarMusica();

            }

        }
    );

}



/* =========================================================
   14. BOTÓN "NUESTRA HISTORIA"
========================================================= */

if (btnHistoria) {

    btnHistoria.addEventListener(
        "click",
        async () => {

            /*
                Al hacer clic en
                "Nuestra historia",
                iniciamos la música.
            */

            if (
                musica &&
                musica.paused
            ) {

                await reproducirMusica();

            }

        }
    );

}



/* =========================================================
   15. DETECTAR SI LA MÚSICA TERMINA O SE PAUSA
========================================================= */

if (musica) {

    musica.addEventListener(
        "pause",
        () => {

            musicaReproduciendo =
                false;

            actualizarBotonMusica();

        }
    );


    musica.addEventListener(
        "play",
        () => {

            musicaReproduciendo =
                true;

            actualizarBotonMusica();

        }
    );


    /*
        Nos ayuda a detectar problemas
        con el archivo MP3.
    */

    musica.addEventListener(
        "error",
        () => {

            console.error(
                "❌ Error cargando music/cancion.mp3"
            );


            if (textoMusica) {

                textoMusica.textContent =
                    "Error en la canción";

            }

        }
    );


    musica.addEventListener(
        "loadeddata",
        () => {

            console.log(
                "✅ cancion.mp3 cargada correctamente."
            );

        }
    );

}



/* =========================================================
   16. ABRIR CARTA
========================================================= */

let cartaAbierta =
    false;


if (
    abrirCarta &&
    sobre &&
    papelCarta
) {

    abrirCarta.addEventListener(
        "click",
        () => {

            cartaAbierta =
                !cartaAbierta;


            if (cartaAbierta) {

                sobre.classList.add(
                    "abierto"
                );


                abrirCarta.innerHTML =
                    "<span>♡</span> Cerrar carta";


                setTimeout(
                    () => {

                        papelCarta.classList.add(
                            "visible"
                        );


                        crearExplosionCorazones(
                            window.innerWidth / 2,
                            window.innerHeight / 2,
                            10
                        );

                    },
                    450
                );

            } else {

                papelCarta.classList.remove(
                    "visible"
                );


                sobre.classList.remove(
                    "abierto"
                );


                abrirCarta.innerHTML =
                    "<span>♡</span> Abrir carta";

            }

        }
    );

}



/* =========================================================
   17. SORPRESA FINAL
========================================================= */

let sorpresaVisible =
    false;


if (
    btnSorpresa &&
    sorpresaOculta
) {

    btnSorpresa.addEventListener(
        "click",
        () => {

            sorpresaVisible =
                !sorpresaVisible;


            if (sorpresaVisible) {

                sorpresaOculta.classList.add(
                    "visible"
                );


                btnSorpresa.innerHTML =
                    "<span>♥</span> Ocultar sorpresa";


                const rect =
                    btnSorpresa.getBoundingClientRect();


                crearExplosionCorazones(
                    rect.left +
                    rect.width / 2,

                    rect.top +
                    rect.height / 2,

                    20
                );


                setTimeout(
                    () => {

                        sorpresaOculta.scrollIntoView(
                            {
                                behavior:
                                    "smooth",

                                block:
                                    "center"
                            }
                        );

                    },
                    400
                );

            } else {

                sorpresaOculta.classList.remove(
                    "visible"
                );


                btnSorpresa.innerHTML =
                    "<span>♥</span> Descubrir sorpresa";

            }

        }
    );

}



/* =========================================================
   18. CREAR CORAZÓN FLOTANTE
========================================================= */

function crearCorazonFlotante() {

    if (
        !CONFIG.corazonesActivos ||
        !contenedorCorazones
    ) {

        return;

    }


    const corazon =
        document.createElement(
            "span"
        );


    corazon.className =
        "corazon-flotante";


    const corazones = [
        "♥",
        "♡",
        "♥"
    ];


    corazon.textContent =
        corazones[
            Math.floor(
                Math.random() *
                corazones.length
            )
        ];


    corazon.style.left =
        `${Math.random() * 100}%`;


    corazon.style.fontSize =
        `${12 + Math.random() * 15}px`;


    corazon.style.animationDuration =
        `${6 + Math.random() * 5}s`;


    corazon.style.opacity =
        `${0.25 + Math.random() * 0.45}`;


    contenedorCorazones.appendChild(
        corazon
    );


    setTimeout(
        () => {

            corazon.remove();

        },
        12000
    );

}



/* Crear corazones lentamente */

setInterval(
    crearCorazonFlotante,
    1400
);



/* =========================================================
   19. EXPLOSIÓN DE CORAZONES
========================================================= */

function crearExplosionCorazones(
    x,
    y,
    cantidad = 12
) {

    if (!contenedorCorazones) {

        return;

    }


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const corazon =
            document.createElement(
                "span"
            );


        corazon.textContent =
            Math.random() > 0.5
                ? "♥"
                : "♡";


        corazon.style.position =
            "fixed";

        corazon.style.left =
            `${x}px`;

        corazon.style.top =
            `${y}px`;

        corazon.style.color =
            "#e85d75";

        corazon.style.fontSize =
            `${12 + Math.random() * 15}px`;

        corazon.style.pointerEvents =
            "none";

        corazon.style.zIndex =
            "9999";


        const movimientoX =
            (Math.random() - 0.5) *
            220;


        const movimientoY =
            -50 -
            Math.random() * 170;


        const rotacion =
            (Math.random() - 0.5) *
            180;


        const animacion =
            corazon.animate(

                [

                    {
                        transform:
                            "translate(0, 0) scale(0.5)",

                        opacity:
                            1
                    },

                    {
                        transform:
                            `translate(
                                ${movimientoX}px,
                                ${movimientoY}px
                            )
                            rotate(${rotacion}deg)
                            scale(1.3)`,

                        opacity:
                            0
                    }

                ],

                {

                    duration:
                        900 +
                        Math.random() *
                        700,

                    easing:
                        "ease-out"

                }

            );


        contenedorCorazones.appendChild(
            corazon
        );


        animacion.onfinish =
            () => {

                corazon.remove();

            };

    }

}



/* =========================================================
   20. ANIMACIONES AL HACER SCROLL
========================================================= */

const elementosAnimados =
    document.querySelectorAll(
        `
        .titulo-seccion,
        .historia-imagen,
        .historia-texto,
        .foto-card,
        .timeline-card,
        .razon-card,
        .carta-contenedor
        `
    );


elementosAnimados.forEach(
    (elemento, indice) => {

        elemento.classList.add(
            "revelar"
        );


        /*
            Pequeña diferencia de tiempo
            entre elementos.
        */

        elemento.style.transitionDelay =
            `${(indice % 4) * 0.08}s`;

    }
);



/* =========================================================
   21. INTERSECTION OBSERVER
========================================================= */

if (
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(

            (entradas) => {

                entradas.forEach(
                    (entrada) => {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entrada.target
                            );

                        }

                    }
                );

            },

            {

                threshold:
                    0.12

            }

        );


    elementosAnimados.forEach(
        (elemento) => {

            observer.observe(
                elemento
            );

        }
    );

} else {

    /*
        Navegadores antiguos:
        mostramos todo.
    */

    elementosAnimados.forEach(
        (elemento) => {

            elemento.classList.add(
                "visible"
            );

        }
    );

}



/* =========================================================
   22. CORAZÓN AL HACER DOBLE CLICK
========================================================= */

document.addEventListener(
    "dblclick",
    (evento) => {

        crearExplosionCorazones(
            evento.clientX,
            evento.clientY,
            8
        );

    }
);



/* =========================================================
   23. AJUSTAR MENÚ AL CAMBIAR TAMAÑO
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 850
        ) {

            cerrarMenu();

        }

    }
);



/* =========================================================
   24. COMPROBACIÓN INICIAL DEL AUDIO
========================================================= */

window.addEventListener(
    "load",
    () => {

        console.log(
            "💗 Página de Daría y Jhonatan cargada."
        );


        if (!musica) {

            console.error(
                "❌ No existe el elemento #musica."
            );

            return;

        }


        /*
            Mostramos la ruta que el navegador
            está intentando cargar.
        */

        console.log(
            "🎵 Archivo de música:",
            musica.currentSrc ||
            "music/cancion.mp3"
        );


        /*
            Dejamos el volumen preparado.
        */

        musica.volume =
            CONFIG.volumenMusica;

    }
);
/* =========================================================
   25. VISOR DE RECUERDOS
   DARÍA ❤️ JHONATAN
========================================================= */


/* =========================================================
   INFORMACIÓN DE LOS 4 RECUERDOS
========================================================= */

const recuerdos = [

    {
        etiqueta: "UN RECUERDO ESPECIAL",

        titulo:
            "Nuestro comienzo",

        descripcion:
            "Donde comenzó una historia que todavía seguimos escribiendo.",

        imagen:
            "foto1.jpg.jpeg"
    },

    {
        etiqueta:
            "PARA RECORDAR",

        titulo:
            "Un día especial",

        descripcion:
            "Uno de esos días que merece quedarse guardado.",

        imagen:
            "foto2.jpg.jpeg"
    },

    {
        etiqueta:
            "PEQUEÑOS MOMENTOS",

        titulo:
            "Una sonrisa para recordar",

        descripcion:
            "Porque algunas sonrisas dicen mucho sin decir nada.",

        imagen:
            "foto3.jpg.jpeg"
    },

    {
        etiqueta:
            "NUESTRA HISTORIA",

        titulo:
            "Nuestro recuerdo favorito",

        descripcion:
            "Un momento que siempre tendrá un lugar especial.",

        imagen:
            "foto4.jpg.jpeg"
    }

];


/* =========================================================
   ELEMENTOS DEL VISOR
========================================================= */

const visorRecuerdos =
    document.getElementById(
        "visor-recuerdos"
    );


const visorFondo =
    document.getElementById(
        "visor-fondo"
    );


const cerrarVisor =
    document.getElementById(
        "cerrar-visor"
    );


const recuerdoAnterior =
    document.getElementById(
        "recuerdo-anterior"
    );


const recuerdoSiguiente =
    document.getElementById(
        "recuerdo-siguiente"
    );


const visorContador =
    document.getElementById(
        "visor-contador"
    );


const visorEtiqueta =
    document.getElementById(
        "visor-etiqueta"
    );


const visorTitulo =
    document.getElementById(
        "visor-titulo"
    );


const visorDescripcion =
    document.getElementById(
        "visor-descripcion"
    );


const visorImagen =
    document.querySelector(
        ".visor-imagen"
    );


const botonesRecuerdo =
    document.querySelectorAll(
        ".btn-ver-recuerdo"
    );


/* =========================================================
   VARIABLES DEL VISOR
========================================================= */

let recuerdoActual = 0;

let ultimoBotonRecuerdo = null;


/* =========================================================
   CREAR PLACEHOLDER
========================================================= */

function crearPlaceholderVisor() {

    if (!visorImagen) {
        return;
    }


    visorImagen.innerHTML = `

        <div class="visor-placeholder">

            <span>
                ♡
            </span>

            <p>
                Nuestra fotografía
            </p>

            <small>
                Aquí aparecerá este recuerdo
            </small>

        </div>

    `;

}


/* =========================================================
   COMPROBAR SI EXISTE UNA FOTO
========================================================= */

function cargarImagenRecuerdo(
    ruta,
    titulo
) {

    if (!visorImagen) {
        return;
    }


    /*
        Primero mostramos el placeholder.

        De esta forma la galería funciona
        incluso aunque todavía no tengamos
        las fotografías.
    */

    crearPlaceholderVisor();


    const imagen =
        new Image();


    imagen.alt =
        titulo;


    imagen.onload =
        () => {

            /*
                Solamente mostramos la imagen
                cuando comprobamos que existe.
            */

            visorImagen.innerHTML = "";

            visorImagen.appendChild(
                imagen
            );

        };


    imagen.onerror =
        () => {

            /*
                Si foto1.jpg, foto2.jpg, etc.
                todavía no existen, dejamos
                el placeholder.
            */

            crearPlaceholderVisor();

        };


    imagen.src =
        ruta;

}


/* =========================================================
   ACTUALIZAR EL RECUERDO MOSTRADO
========================================================= */

function mostrarRecuerdo(
    indice
) {

    if (
        !recuerdos.length ||
        !visorRecuerdos
    ) {

        return;

    }


    /*
        Si llegamos después del último,
        regresamos al primero.
    */

    if (
        indice >= recuerdos.length
    ) {

        indice = 0;

    }


    /*
        Si retrocedemos desde el primero,
        vamos al último.
    */

    if (
        indice < 0
    ) {

        indice =
            recuerdos.length - 1;

    }


    recuerdoActual =
        indice;


    const recuerdo =
        recuerdos[
            recuerdoActual
        ];


    /* CONTADOR */

    if (visorContador) {

        visorContador.textContent =
            `${recuerdoActual + 1} / ${recuerdos.length}`;

    }


    /* ETIQUETA */

    if (visorEtiqueta) {

        visorEtiqueta.textContent =
            recuerdo.etiqueta;

    }


    /* TÍTULO */

    if (visorTitulo) {

        visorTitulo.textContent =
            recuerdo.titulo;

    }


    /* DESCRIPCIÓN */

    if (visorDescripcion) {

        visorDescripcion.textContent =
            recuerdo.descripcion;

    }


    /* FOTOGRAFÍA */

    cargarImagenRecuerdo(
        recuerdo.imagen,
        recuerdo.titulo
    );

}


/* =========================================================
   ABRIR VISOR
========================================================= */

function abrirVisorRecuerdo(
    indice,
    boton = null
) {

    if (!visorRecuerdos) {
        return;
    }


    ultimoBotonRecuerdo =
        boton;


    mostrarRecuerdo(
        indice
    );


    visorRecuerdos.classList.add(
        "visible"
    );


    visorRecuerdos.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "visor-abierto"
    );


    /*
        Después de abrir,
        enviamos el foco al botón cerrar.

        Esto ayuda en accesibilidad
        y también en navegación con teclado.
    */

    setTimeout(
        () => {

            if (cerrarVisor) {

                cerrarVisor.focus();

            }

        },
        100
    );

}


/* =========================================================
   CERRAR VISOR
========================================================= */

function cerrarVisorRecuerdo() {

    if (!visorRecuerdos) {
        return;
    }


    visorRecuerdos.classList.remove(
        "visible"
    );


    visorRecuerdos.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "visor-abierto"
    );


    /*
        Devolvemos el foco al botón
        que abrió el recuerdo.
    */

    if (ultimoBotonRecuerdo) {

        ultimoBotonRecuerdo.focus();

    }

}


/* =========================================================
   ABRIR AL PRESIONAR "VER RECUERDO"
========================================================= */

botonesRecuerdo.forEach(

    (boton) => {

        boton.addEventListener(

            "click",

            (evento) => {

                /*
                    Evitamos que otros clics
                    de la tarjeta interfieran.
                */

                evento.stopPropagation();


                const indice =
                    Number(
                        boton.dataset.recuerdo
                    );


                abrirVisorRecuerdo(
                    indice,
                    boton
                );

            }

        );

    }

);


/* =========================================================
   TAMBIÉN ABRIR AL TOCAR LA TARJETA
========================================================= */

const tarjetasRecuerdo =
    document.querySelectorAll(
        ".recuerdo-card"
    );


tarjetasRecuerdo.forEach(

    (tarjeta) => {

        tarjeta.addEventListener(

            "click",

            (evento) => {

                /*
                    Si se pulsó directamente
                    el botón, dejamos que el
                    evento anterior se encargue.
                */

                if (
                    evento.target.closest(
                        ".btn-ver-recuerdo"
                    )
                ) {

                    return;

                }


                const indice =
                    Number(
                        tarjeta.dataset.recuerdo
                    );


                const boton =
                    tarjeta.querySelector(
                        ".btn-ver-recuerdo"
                    );


                abrirVisorRecuerdo(
                    indice,
                    boton
                );

            }

        );

    }

);


/* =========================================================
   BOTÓN CERRAR
========================================================= */

if (cerrarVisor) {

    cerrarVisor.addEventListener(

        "click",

        cerrarVisorRecuerdo

    );

}


/* =========================================================
   CERRAR AL TOCAR EL FONDO
========================================================= */

if (visorFondo) {

    visorFondo.addEventListener(

        "click",

        cerrarVisorRecuerdo

    );

}


/* =========================================================
   RECUERDO ANTERIOR
========================================================= */

function irRecuerdoAnterior() {

    mostrarRecuerdo(
        recuerdoActual - 1
    );

}


if (recuerdoAnterior) {

    recuerdoAnterior.addEventListener(

        "click",

        irRecuerdoAnterior

    );

}


/* =========================================================
   SIGUIENTE RECUERDO
========================================================= */

function irRecuerdoSiguiente() {

    mostrarRecuerdo(
        recuerdoActual + 1
    );

}


if (recuerdoSiguiente) {

    recuerdoSiguiente.addEventListener(

        "click",

        irRecuerdoSiguiente

    );

}


/* =========================================================
   CONTROLES DEL TECLADO
========================================================= */

document.addEventListener(

    "keydown",

    (evento) => {

        /*
            Si el visor no está abierto,
            no hacemos nada.
        */

        if (
            !visorRecuerdos ||
            !visorRecuerdos.classList.contains(
                "visible"
            )
        ) {

            return;

        }


        /* ESC = CERRAR */

        if (
            evento.key ===
            "Escape"
        ) {

            cerrarVisorRecuerdo();

        }


        /* FLECHA IZQUIERDA */

        if (
            evento.key ===
            "ArrowLeft"
        ) {

            irRecuerdoAnterior();

        }


        /* FLECHA DERECHA */

        if (
            evento.key ===
            "ArrowRight"
        ) {

            irRecuerdoSiguiente();

        }

    }

);


/* =========================================================
   DESLIZAR CON EL DEDO EN CELULAR
========================================================= */

let inicioToqueX = 0;

let finalToqueX = 0;


if (visorRecuerdos) {

    visorRecuerdos.addEventListener(

        "touchstart",

        (evento) => {

            if (
                evento.touches.length !== 1
            ) {

                return;

            }


            inicioToqueX =
                evento.touches[0].clientX;

        },

        {
            passive: true
        }

    );


    visorRecuerdos.addEventListener(

        "touchend",

        (evento) => {

            if (
                evento.changedTouches.length !== 1
            ) {

                return;

            }


            finalToqueX =
                evento.changedTouches[0]
                    .clientX;


            const diferencia =
                finalToqueX -
                inicioToqueX;


            /*
                Exigimos un movimiento mínimo
                para evitar cambios accidentales.
            */

            if (
                Math.abs(diferencia) < 65
            ) {

                return;

            }


            /*
                Deslizar hacia la izquierda:
                siguiente recuerdo.
            */

            if (
                diferencia < 0
            ) {

                irRecuerdoSiguiente();

            }


            /*
                Deslizar hacia la derecha:
                recuerdo anterior.
            */

            else {

                irRecuerdoAnterior();

            }

        },

        {
            passive: true
        }

    );

}


/* =========================================================
   COMPROBACIÓN
========================================================= */

console.log(
    "📸 Visor de recuerdos preparado correctamente."
);
/* =========================================================
   26. ANIMACIONES - NUESTRA HISTORIA
   DARÍA ❤️ JHONATAN
========================================================= */

const seccionHistoria =
    document.getElementById(
        "historia"
    );


/* =========================================================
   PREPARAR ELEMENTOS
========================================================= */

function prepararAnimacionesHistoria() {

    if (!seccionHistoria) {
        return;
    }


    const historiaVisual =
        seccionHistoria.querySelector(
            ".historia-visual"
        );


    const historiaEtiqueta =
        seccionHistoria.querySelector(
            ".historia-mini-etiqueta"
        );


    const historiaTitulo =
        seccionHistoria.querySelector(
            ".historia-texto-mejorado h3"
        );


    const historiaParrafos =
        seccionHistoria.querySelectorAll(
            ".historia-texto-mejorado > p"
        );


    const historiaFecha =
        seccionHistoria.querySelector(
            ".historia-fecha-grande"
        );


    const historiaRecorrido =
        seccionHistoria.querySelector(
            ".historia-recorrido"
        );


    const historiaFrase =
        seccionHistoria.querySelector(
            ".historia-frase-final"
        );


    /* FOTO */

    if (historiaVisual) {

        historiaVisual.classList.add(
            "historia-animar",
            "historia-animar-izquierda"
        );

    }


    /* ETIQUETA */

    if (historiaEtiqueta) {

        historiaEtiqueta.classList.add(
            "historia-animar",
            "historia-animar-derecha",
            "historia-delay-1"
        );

    }


    /* TÍTULO */

    if (historiaTitulo) {

        historiaTitulo.classList.add(
            "historia-animar",
            "historia-animar-derecha",
            "historia-delay-2"
        );

    }


    /* PÁRRAFOS */

    historiaParrafos.forEach(

        (parrafo, indice) => {

            parrafo.classList.add(
                "historia-animar",
                "historia-animar-arriba"
            );


            if (indice === 0) {

                parrafo.classList.add(
                    "historia-delay-2"
                );

            }


            if (indice === 1) {

                parrafo.classList.add(
                    "historia-delay-3"
                );

            }

        }

    );


    /* FECHA */

    if (historiaFecha) {

        historiaFecha.classList.add(
            "historia-animar",
            "historia-delay-3"
        );

    }


    /* RECORRIDO */

    if (historiaRecorrido) {

        historiaRecorrido.classList.add(
            "historia-animar",
            "historia-animar-arriba",
            "historia-delay-4"
        );

    }


    /* FRASE */

    if (historiaFrase) {

        historiaFrase.classList.add(
            "historia-animar",
            "historia-animar-arriba",
            "historia-delay-5"
        );

    }

}


/* =========================================================
   ACTIVAR ANIMACIONES
========================================================= */

function iniciarAnimacionesHistoria() {

    if (!seccionHistoria) {
        return;
    }


    const elementosAnimados =
        seccionHistoria.querySelectorAll(
            ".historia-animar"
        );


    if (!elementosAnimados.length) {
        return;
    }


    /*
        Si el navegador tiene activada
        la opción de reducir movimiento,
        mostramos todo directamente.
    */

    const reducirMovimiento =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducirMovimiento) {

        elementosAnimados.forEach(

            (elemento) => {

                elemento.classList.add(
                    "historia-visible"
                );

            }

        );


        return;

    }


    /*
        IntersectionObserver detecta
        cuándo la sección entra
        en la pantalla.
    */

    const observadorHistoria =
        new IntersectionObserver(

            (entradas, observador) => {

                entradas.forEach(

                    (entrada) => {

                        if (
                            !entrada.isIntersecting
                        ) {

                            return;

                        }


                        entrada.target.classList.add(
                            "historia-visible"
                        );


                        /*
                            La animación ocurre una sola vez.
                        */

                        observador.unobserve(
                            entrada.target
                        );

                    }

                );

            },

            {

                threshold: 0.15,

                rootMargin:
                    "0px 0px -40px 0px"

            }

        );


    elementosAnimados.forEach(

        (elemento) => {

            observadorHistoria.observe(
                elemento
            );

        }

    );

}


/* =========================================================
   INICIAR
========================================================= */

prepararAnimacionesHistoria();

iniciarAnimacionesHistoria();
/* =========================================================
   27. ANIMACIONES - MOMENTOS ESPECIALES
   DARÍA ❤️ JHONATAN
========================================================= */

const seccionMomentos =
    document.getElementById(
        "momentos"
    );


function iniciarAnimacionesMomentos() {

    if (!seccionMomentos) {
        return;
    }


    const momentos =
        seccionMomentos.querySelectorAll(
            ".timeline-item"
        );


    if (!momentos.length) {
        return;
    }


    /* =====================================================
       RESPETAR REDUCCIÓN DE MOVIMIENTO
    ====================================================== */

    const reducirMovimiento =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducirMovimiento) {

        momentos.forEach(

            (momento) => {

                momento.classList.add(
                    "momento-visible"
                );

            }

        );


        return;
    }


    /* =====================================================
       OBSERVADOR
    ====================================================== */

    const observadorMomentos =
        new IntersectionObserver(

            (entradas, observador) => {

                entradas.forEach(

                    (entrada) => {

                        if (
                            !entrada.isIntersecting
                        ) {

                            return;
                        }


                        const elemento =
                            entrada.target;


                        /*
                            Obtenemos la posición
                            de la tarjeta.
                        */

                        const indice =
                            Array.from(
                                momentos
                            ).indexOf(
                                elemento
                            );


                        /*
                            Pequeño retraso progresivo.
                        */

                        setTimeout(

                            () => {

                                elemento.classList.add(
                                    "momento-visible"
                                );

                            },

                            indice * 140

                        );


                        /*
                            La animación solamente
                            ocurre una vez.
                        */

                        observador.unobserve(
                            elemento
                        );

                    }

                );

            },

            {

                threshold: 0.20,

                rootMargin:
                    "0px 0px -50px 0px"

            }

        );


    momentos.forEach(

        (momento) => {

            observadorMomentos.observe(
                momento
            );

        }

    );

}


/* =========================================================
   INICIAR
========================================================= */

iniciarAnimacionesMomentos();
/* =========================================================
   28. ANIMACIONES - RAZONES PARA RECORDAR
   DARÍA ❤️ JHONATAN
========================================================= */

const seccionRazones =
    document.getElementById(
        "razones"
    );


function iniciarAnimacionesRazones() {

    if (!seccionRazones) {
        return;
    }


    const tarjetasRazones =
        seccionRazones.querySelectorAll(
            ".razon-card"
        );


    if (!tarjetasRazones.length) {
        return;
    }


    /* =====================================================
       REDUCCIÓN DE MOVIMIENTO
    ====================================================== */

    const reducirMovimientoRazones =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducirMovimientoRazones) {

        tarjetasRazones.forEach(

            (tarjeta) => {

                tarjeta.classList.add(
                    "razon-visible"
                );

            }

        );


        return;
    }


    /* =====================================================
       OBSERVADOR
    ====================================================== */

    const observadorRazones =
        new IntersectionObserver(

            (entradas, observador) => {

                entradas.forEach(

                    (entrada) => {

                        if (
                            !entrada.isIntersecting
                        ) {

                            return;
                        }


                        const tarjeta =
                            entrada.target;


                        const indice =
                            Array.from(
                                tarjetasRazones
                            ).indexOf(
                                tarjeta
                            );


                        /*
                            Las tarjetas aparecen
                            una detrás de otra.
                        */

                        setTimeout(

                            () => {

                                tarjeta.classList.add(
                                    "razon-visible"
                                );

                            },

                            indice * 110

                        );


                        /*
                            Solo animamos una vez.
                        */

                        observador.unobserve(
                            tarjeta
                        );

                    }

                );

            },

            {

                threshold: 0.15,

                rootMargin:
                    "0px 0px -35px 0px"

            }

        );


    tarjetasRazones.forEach(

        (tarjeta) => {

            observadorRazones.observe(
                tarjeta
            );

        }

    );

}


/* =========================================================
   INICIAR
========================================================= */

iniciarAnimacionesRazones();


/* =========================================================
   29. PORTADA DE BIENVENIDA
   DARÍA ❤️ JHONATAN
========================================================= */

const portadaBienvenida =
    document.getElementById("portada-bienvenida");

const btnAbrirPortada =
    document.getElementById("btn-abrir-portada");


/* =========================================================
   PREPARAR PORTADA
========================================================= */

if (portadaBienvenida) {

    document.body.classList.add(
        "portada-activa"
    );

}


/* =========================================================
   ABRIR NUESTRA HISTORIA
========================================================= */

async function abrirNuestraHistoria() {

    if (
        !portadaBienvenida ||
        portadaBienvenida.classList.contains("portada-cerrando")
    ) {

        return;

    }


    /* =====================================================
       INICIAR MÚSICA
       El clic del usuario permite reproducir el audio.
    ===================================================== */

    if (
        musica &&
        musica.paused
    ) {

        await reproducirMusica();

    }


    /* =====================================================
       EXPLOSIÓN SUAVE DE CORAZONES
    ===================================================== */

    if (btnAbrirPortada) {

        const rect =
            btnAbrirPortada.getBoundingClientRect();


        crearExplosionCorazones(

            rect.left +
            rect.width / 2,

            rect.top +
            rect.height / 2,

            16

        );

    }


    /* =====================================================
       INICIAR TRANSICIÓN DE SALIDA
    ===================================================== */

    portadaBienvenida.classList.add(
        "portada-cerrando"
    );


    document.body.classList.remove(
        "portada-activa"
    );


    /* =====================================================
       QUITAR PORTADA DESPUÉS DE LA ANIMACIÓN
    ===================================================== */

    setTimeout(

        () => {

            portadaBienvenida.style.display =
                "none";


            /*
                Dejamos la página posicionada
                desde el inicio.
            */

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        },

        1050

    );

}


/* =========================================================
   EVENTO DEL BOTÓN
========================================================= */

if (btnAbrirPortada) {

    btnAbrirPortada.addEventListener(

        "click",

        abrirNuestraHistoria

    );

}


/* =========================================================
   TECLA ENTER / ESPACIO
========================================================= */

if (btnAbrirPortada) {

    btnAbrirPortada.addEventListener(

        "keydown",

        (evento) => {

            if (
                evento.key === "Enter" ||
                evento.key === " "
            ) {

                evento.preventDefault();

                abrirNuestraHistoria();

            }

        }

    );

}


/* =========================================================
   COMPROBACIÓN
========================================================= */

console.log(
    "💗 Portada de bienvenida preparada."
);
