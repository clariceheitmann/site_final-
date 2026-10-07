/* =========================================================
   ARDUINO — INTERAÇÕES
========================================================= */


/* =========================================================
   BOTÃO VOLTAR AO TOPO
========================================================= */

const botaoTopo = document.getElementById("voltarTopo");

if (botaoTopo) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            botaoTopo.classList.add("visivel");

        } else {

            botaoTopo.classList.remove("visivel");

        }

    });


    botaoTopo.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   ANIMAÇÃO DOS CARDS AO ENTRAREM NA TELA
========================================================= */

const elementosAnimados =
    document.querySelectorAll(
        ".arduino-card"
    );


if (elementosAnimados.length > 0) {

    const observador =
        new IntersectionObserver(
            (elementos) => {

                elementos.forEach((elemento) => {

                    if (elemento.isIntersecting) {

                        elemento.target.classList.add(
                            "arduino-visivel"
                        );

                        observador.unobserve(
                            elemento.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    elementosAnimados.forEach((elemento) => {

        elemento.classList.add(
            "arduino-animar"
        );

        observador.observe(
            elemento
        );

    });

}