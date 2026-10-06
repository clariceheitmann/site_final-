/* =========================================================
   BOTÃO VOLTAR AO TOPO
========================================================= */

const voltarTopo = document.getElementById("voltarTopo");


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        voltarTopo.classList.add("visivel");

    } else {

        voltarTopo.classList.remove("visivel");

    }

});


voltarTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   ANIMAÇÕES AO ROLAR
========================================================= */

const elementosReveal = document.querySelectorAll(".reveal");


const observador = new IntersectionObserver(
    (elementos) => {

        elementos.forEach((elemento) => {

            if (elemento.isIntersecting) {

                elemento.target.classList.add("aparecer");

                observador.unobserve(elemento.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementosReveal.forEach((elemento) => {

    observador.observe(elemento);

});