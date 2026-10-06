/* =========================================================
   ROBÓTICA INDUSTRIAL
   JAVASCRIPT ESPECÍFICO
========================================================= */


/* =========================================================
   BOTÃO VOLTAR AO TOPO
========================================================= */

const voltarTopo = document.getElementById("voltarTopo");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        voltarTopo.classList.add("mostrar");

    } else {

        voltarTopo.classList.remove("mostrar");

    }

});


voltarTopo.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================================
   ANIMAÇÃO DE ENTRADA DOS ELEMENTOS
========================================================= */

const elementosReveal = document.querySelectorAll(".reveal");


const observador = new IntersectionObserver(

    function (elementos) {

        elementos.forEach(function (elemento) {

            if (elemento.isIntersecting) {

                elemento.target.classList.add("visible");

                observador.unobserve(elemento.target);

            }

        });

    },

    {

        threshold: 0.12

    }

);


elementosReveal.forEach(function (elemento) {

    observador.observe(elemento);

});


/* =========================================================
   ROLAGEM SUAVE PARA LINKS INTERNOS
========================================================= */

const linksInternos = document.querySelectorAll(
    'a[href^="#"]'
);


linksInternos.forEach(function (link) {

    link.addEventListener("click", function (evento) {

        const destino = document.querySelector(
            this.getAttribute("href")
        );


        if (destino) {

            evento.preventDefault();


            destino.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});