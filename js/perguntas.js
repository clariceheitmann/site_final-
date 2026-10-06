/* ================================================= */
/* DESAFIO - INDÚSTRIA 4.0 */
/* ================================================= */


/* ================================================= */
/* QUESTÕES */
/* ================================================= */

const perguntas = [

    {
        tema: "AVA Robô",

        titulo: "Robótica industrial e automação",

        situacao:
            "Em uma indústria, um sistema automatizado precisa executar tarefas de produção de forma precisa e repetitiva. Para isso, são utilizados robôs programáveis capazes de realizar atividades que podem ser pesadas, repetitivas ou perigosas para os trabalhadores.",

        gatilho:
            "Considerando as informações apresentadas no site, qual alternativa melhor caracteriza a função da robótica industrial?",

        alternativas: [

            {
                letra: "A",
                texto:
                    "Utilizar robôs exclusivamente para substituir computadores utilizados na indústria.",
                correta: false,
                explicacao:
                    "A robótica industrial não tem como função substituir computadores. Os robôs fazem parte de sistemas automatizados e podem ser controlados por sistemas computacionais."
            },

            {
                letra: "B",
                texto:
                    "Utilizar robôs automatizados e programáveis para realizar tarefas com precisão, velocidade e repetição.",
                correta: true,
                explicacao:
                    "Essa é a alternativa correta. A robótica industrial utiliza robôs automatizados e programáveis para executar tarefas com precisão, velocidade e repetição, inclusive atividades pesadas, repetitivas ou perigosas."
            },

            {
                letra: "C",
                texto:
                    "Utilizar sensores apenas para realizar medições de temperatura.",
                correta: false,
                explicacao:
                    "Sensores podem realizar diversos tipos de medições e fazem parte de diferentes sistemas de automação. Essa alternativa não caracteriza a função da robótica industrial."
            },

            {
                letra: "D",
                texto:
                    "Utilizar redes de internet somente para comunicação entre funcionários.",
                correta: false,
                explicacao:
                    "Redes podem fazer parte de sistemas industriais conectados, mas a robótica industrial não se resume à comunicação entre funcionários."
            }

        ]
    },


    {
        tema: "Sensores",

        titulo: "Temperatura e umidade",

        situacao:
            "Uma equipe está desenvolvendo um sistema de monitoramento ambiental. O projeto precisa medir temperatura e umidade do ambiente e enviar essas informações para o Monitor Serial do Arduino.",

        gatilho:
            "Considerando os sensores apresentados no site, qual deles é adequado para realizar essas duas medições?",

        alternativas: [

            {
                letra: "A",
                texto: "HC-SR04",
                correta: false,
                explicacao:
                    "O HC-SR04 é um sensor ultrassônico utilizado para determinar distância."
            },

            {
                letra: "B",
                texto: "LM35",
                correta: false,
                explicacao:
                    "O LM35 é utilizado para medição de temperatura, mas não realiza a medição de umidade como o DHT11."
            },

            {
                letra: "C",
                texto: "DHT11",
                correta: true,
                explicacao:
                    "O DHT11 é um sensor digital utilizado para medir temperatura e umidade."
            },

            {
                letra: "D",
                texto: "ACS712",
                correta: false,
                explicacao:
                    "O ACS712 é utilizado para realizar medições de corrente elétrica."
            }

        ]
    },


    {
        tema: "Sensores",

        titulo: "Medição de distância",

        situacao:
            "Em um sistema de estacionamento automatizado, é necessário detectar a distância entre um veículo e determinado ponto de referência. O sistema utiliza um Arduino para emitir um sinal e depois calcular a distância a partir do tempo que o sinal leva para retornar.",

        gatilho:
            "Qual dispositivo é mais adequado para essa aplicação?",

        alternativas: [

            {
                letra: "A",
                texto: "DHT11",
                correta: false,
                explicacao:
                    "O DHT11 é utilizado para medir temperatura e umidade."
            },

            {
                letra: "B",
                texto: "HC-SR04",
                correta: true,
                explicacao:
                    "O HC-SR04 utiliza ondas ultrassônicas para determinar a distância entre o sensor e um objeto."
            },

            {
                letra: "C",
                texto: "KY-037",
                correta: false,
                explicacao:
                    "O KY-037 é utilizado para detectar variações sonoras."
            },

            {
                letra: "D",
                texto: "MQ-2",
                correta: false,
                explicacao:
                    "O MQ-2 é utilizado na detecção de gases e fumaça."
            }

        ]
    },


    {
        tema: "Multímetro",

        titulo: "Teste de continuidade",

        situacao:
            "Durante a montagem de um circuito, um estudante percebe que um componente não está funcionando corretamente. Antes de substituí-lo, ele decide verificar se existe continuidade no caminho elétrico.",

        gatilho:
            "Qual procedimento é adequado para realizar um teste de continuidade com o multímetro?",

        alternativas: [

            {
                letra: "A",
                texto:
                    "Selecionar a função de continuidade e verificar se o circuito possui um caminho elétrico fechado.",
                correta: true,
                explicacao:
                    "O teste de continuidade verifica se existe um caminho elétrico completo entre dois pontos. Em multímetros com aviso sonoro, um circuito com continuidade normalmente produz um sinal sonoro."
            },

            {
                letra: "B",
                texto:
                    "Selecionar a função de corrente e colocar as pontas de prova em paralelo com o circuito.",
                correta: false,
                explicacao:
                    "A medição de corrente possui outra configuração de ligação. Ela não corresponde ao teste de continuidade."
            },

            {
                letra: "C",
                texto:
                    "Selecionar a função de resistência e manter o circuito energizado durante a medição.",
                correta: false,
                explicacao:
                    "Medições de resistência e testes de continuidade devem ser realizados com o circuito desenergizado."
            },

            {
                letra: "D",
                texto:
                    "Selecionar a função de tensão e encostar as duas pontas de prova em qualquer ponto do circuito.",
                correta: false,
                explicacao:
                    "A função de tensão serve para medir diferença de potencial, e não para verificar se existe continuidade em um caminho elétrico."
            }

        ]
    },


    {
        tema: "Arduino",

        titulo: "Função do Arduino",

        situacao:
            "Um estudante está desenvolvendo um projeto com Arduino que precisa receber informações de sensores, processar os dados e posteriormente controlar dispositivos de saída.",

        gatilho:
            "Qual alternativa apresenta corretamente essas funções do Arduino?",

        alternativas: [

            {
                letra: "A",
                texto:
                    "Armazenar arquivos, acessar redes sociais e editar imagens.",
                correta: false,
                explicacao:
                    "Essas não são as funções apresentadas para o Arduino no conteúdo do site."
            },

            {
                letra: "B",
                texto:
                    "Ler sensores, processar dados e controlar atuadores.",
                correta: true,
                explicacao:
                    "O Arduino pode receber informações de sensores, processar essas informações e controlar dispositivos de saída ou atuadores."
            },

            {
                letra: "C",
                texto:
                    "Medir somente tensão elétrica, produzir energia e controlar a internet.",
                correta: false,
                explicacao:
                    "O Arduino possui aplicações muito mais amplas e não é apresentado como um equipamento destinado exclusivamente a essas funções."
            },

            {
                letra: "D",
                texto:
                    "Substituir sensores, motores e computadores em qualquer sistema.",
                correta: false,
                explicacao:
                    "O Arduino pode interagir com sensores e atuadores, mas não substitui todos esses dispositivos."
            }

        ]
    },


    {
        tema: "Arduino",

        titulo: "Conversão de sinais",

        situacao:
            "Durante a montagem de um projeto, um estudante conecta um sensor analógico ao Arduino. Ele precisa transformar o sinal recebido pelo sensor em um valor que possa ser processado pelo programa.",

        gatilho:
            "Qual componente do Arduino realiza essa função?",

        alternativas: [

            {
                letra: "A",
                texto: "GPIO",
                correta: false,
                explicacao:
                    "Os GPIOs são pinos de entrada e saída utilizados para a interação com outros componentes."
            },

            {
                letra: "B",
                texto: "ADC",
                correta: true,
                explicacao:
                    "ADC significa Conversor Analógico-Digital. Ele converte sinais analógicos em valores digitais que podem ser processados pelo microcontrolador."
            },

            {
                letra: "C",
                texto: "UART",
                correta: false,
                explicacao:
                    "UART está relacionada à comunicação serial, não à conversão de sinais analógicos."
            },

            {
                letra: "D",
                texto: "USB",
                correta: false,
                explicacao:
                    "A USB pode ser utilizada para programação e comunicação, mas não é responsável pela conversão analógico-digital."
            }

        ]
    },


    {
        tema: "ESP",

        titulo: "Conectividade do ESP32",

        situacao:
            "Uma empresa deseja desenvolver um sistema de automação residencial no qual um dispositivo possa trocar informações com outros equipamentos por meio de uma rede sem fio. A equipe procura um microcontrolador adequado para projetos de Internet das Coisas.",

        gatilho:
            "Qual característica do ESP32 torna-o especialmente adequado para esse tipo de aplicação?",

        alternativas: [

            {
                letra: "A",
                texto:
                    "Possuir Wi-Fi e Bluetooth integrados.",
                correta: true,
                explicacao:
                    "O ESP32 possui Wi-Fi e Bluetooth integrados, características que o tornam adequado para aplicações de Internet das Coisas, automação e comunicação sem fio."
            },

            {
                letra: "B",
                texto:
                    "Funcionar exclusivamente como sensor de temperatura.",
                correta: false,
                explicacao:
                    "O ESP32 não é um sensor de temperatura. Ele é um microcontrolador que pode receber e processar informações de sensores."
            },

            {
                letra: "C",
                texto:
                    "Possuir apenas entradas digitais, sem recursos analógicos.",
                correta: false,
                explicacao:
                    "O ESP32 possui recursos analógicos, incluindo ADC para leitura de sinais analógicos."
            },

            {
                letra: "D",
                texto:
                    "Necessitar obrigatoriamente de um módulo externo para realizar qualquer comunicação sem fio.",
                correta: false,
                explicacao:
                    "O ESP32 já possui recursos de Wi-Fi e Bluetooth integrados."
            }

        ]
    },


    {
        tema: "Código",

        titulo: "Controle do LED",

        situacao:
            "Em um sistema de estacionamento inteligente, o programa compara a distância medida por um sensor com um limite configurável.",

        codigo: `if (distancia > limite) {
    digitalWrite(led, LOW);

} else if (distancia > limite / 2) {
    digitalWrite(led, HIGH);
    delay(300);
    digitalWrite(led, LOW);
    delay(300);

} else {
    digitalWrite(led, HIGH);
}`,

        gatilho:
            "Quando a distância medida for maior que o limite configurado, o que acontecerá com o LED?",

        alternativas: [

            {
                letra: "A",
                texto: "O LED permanecerá ligado.",
                correta: false,
                explicacao:
                    "Quando a distância é maior que o limite, a primeira condição é verdadeira e o código executa digitalWrite(led, LOW), desligando o LED."
            },

            {
                letra: "B",
                texto: "O LED ficará piscando a cada 300 segundos.",
                correta: false,
                explicacao:
                    "O intervalo utilizado pelo código é de 300 milissegundos e essa parte só é executada na condição intermediária."
            },

            {
                letra: "C",
                texto: "O LED será desligado.",
                correta: true,
                explicacao:
                    "A condição distancia > limite executa digitalWrite(led, LOW). No Arduino, LOW nesse comando faz o LED ser desligado."
            },

            {
                letra: "D",
                texto: "O Arduino deixará de realizar a leitura da distância.",
                correta: false,
                explicacao:
                    "A condição apenas determina o estado do LED. Ela não interrompe a leitura da distância."
            }

        ]
    },


    {
        tema: "Código",

        titulo: "Função do map()",

        situacao:
            "Em um projeto, o Arduino precisa determinar um limite de distância a partir da posição de um potenciômetro.",

        codigo: `valorPot = analogRead(pot);

limite = map(valorPot, 0, 1023, 10, 150);`,

        gatilho:
            "Qual é a função da instrução map() nesse trecho?",

        alternativas: [

            {
                letra: "A",
                texto:
                    "Transformar o valor lido do potenciômetro, originalmente entre 0 e 1023, para um limite entre 10 e 150.",
                correta: true,
                explicacao:
                    "A função map() relaciona uma faixa de valores com outra. Nesse caso, transforma a faixa 0–1023 em uma nova faixa de 10–150."
            },

            {
                letra: "B",
                texto:
                    "Transformar automaticamente uma distância em temperatura.",
                correta: false,
                explicacao:
                    "O código não está convertendo temperatura. Ele está trabalhando com o valor do potenciômetro para definir um limite."
            },

            {
                letra: "C",
                texto:
                    "Ligar o LED quando o potenciômetro atingir 150.",
                correta: false,
                explicacao:
                    "A função map() apenas calcula o valor de limite. Ela não controla diretamente o LED."
            },

            {
                letra: "D",
                texto:
                    "Fazer o Arduino reiniciar sempre que o valor chegar a 1023.",
                correta: false,
                explicacao:
                    "Não existe nenhum comando de reinicialização nesse trecho."
            }

        ]
    },


    {
        tema: "Código",

        titulo: "Condições de temperatura e umidade",

        situacao:
            "Um sistema de monitoramento utiliza três LEDs para representar as condições do ambiente. O programa verifica a temperatura e a umidade.",

        codigo: `bool temperaturaRuim =
    temperatura > 30 || temperatura < -10;

bool umidadeBaixa =
    umidade < 50;

if (temperaturaRuim) {
    digitalWrite(vermelho, HIGH);
}

if (umidadeBaixa) {
    digitalWrite(amarelo, HIGH);
}

if (!temperaturaRuim && !umidadeBaixa) {
    digitalWrite(verde, HIGH);
}`,

        gatilho:
            "Se a temperatura estiver dentro da faixa considerada adequada pelo programa e a umidade NÃO estiver baixa, qual LED será acionado?",

        alternativas: [

            {
                letra: "A",
                texto: "Vermelho.",
                correta: false,
                explicacao:
                    "O vermelho é acionado quando temperaturaRuim é verdadeira, ou seja, quando a temperatura é maior que 30 ou menor que -10."
            },

            {
                letra: "B",
                texto: "Amarelo.",
                correta: false,
                explicacao:
                    "O amarelo é acionado quando umidadeBaixa é verdadeira, ou seja, quando a umidade é menor que 50."
            },

            {
                letra: "C",
                texto: "Vermelho e amarelo simultaneamente.",
                correta: false,
                explicacao:
                    "Para isso, as condições de temperatura ruim e umidade baixa precisariam ser verdadeiras. Na situação apresentada, nenhuma das duas é verdadeira."
            },

            {
                letra: "D",
                texto: "Verde.",
                correta: true,
                explicacao:
                    "Quando a temperatura não é ruim e a umidade não está baixa, a condição !temperaturaRuim && !umidadeBaixa é verdadeira e o programa aciona o LED verde."
            }

        ]
    }

];


/* ================================================= */
/* ELEMENTOS DA PÁGINA */
/* ================================================= */

const iniciarQuiz = document.getElementById("iniciarQuiz");

const areaQuiz = document.getElementById("areaQuiz");

const questao = document.getElementById("questao");

const corrigirQuestao =
    document.getElementById("corrigirQuestao");

const correcao =
    document.getElementById("correcao");

const proximaQuestao =
    document.getElementById("proximaQuestao");

const resultadoFinal =
    document.getElementById("resultadoFinal");

const refazerQuiz =
    document.getElementById("refazerQuiz");

const barraProgresso =
    document.getElementById("barraProgresso");

const numeroQuestao =
    document.getElementById("numeroQuestao");

const porcentagem =
    document.getElementById("porcentagem");

const pontuacao =
    document.getElementById("pontuacao");

const porcentagemFinal =
    document.getElementById("porcentagemFinal");

const acertos =
    document.getElementById("acertos");

const erros =
    document.getElementById("erros");

const mensagemFinal =
    document.getElementById("mensagemFinal");


/* ================================================= */
/* VARIÁVEIS */
/* ================================================= */

let questaoAtual = 0;

let respostaSelecionada = null;

let totalAcertos = 0;


/* ================================================= */
/* INICIAR QUIZ */
/* ================================================= */

iniciarQuiz.addEventListener("click", function () {

    iniciarQuiz.hidden = true;

    document.querySelector(".quiz-intro").style.display = "none";

    areaQuiz.hidden = false;

    questaoAtual = 0;

    totalAcertos = 0;

    carregarQuestao();

});


/* ================================================= */
/* CARREGAR QUESTÃO */
/* ================================================= */

function carregarQuestao() {

    const pergunta = perguntas[questaoAtual];

    respostaSelecionada = null;

    corrigirQuestao.disabled = true;

    corrigirQuestao.hidden = false;

    correcao.hidden = true;

    proximaQuestao.hidden = true;

    numeroQuestao.textContent =
        `Questão ${questaoAtual + 1} de ${perguntas.length}`;

    const porcentagemAtual =
        Math.round(
            (questaoAtual / perguntas.length) * 100
        );

    porcentagem.textContent =
        `${porcentagemAtual}%`;

    barraProgresso.style.width =
        `${porcentagemAtual}%`;


    let html = `

        <span class="questao-tema">
            ${pergunta.tema}
        </span>

        <h3>
            ${pergunta.titulo}
        </h3>

        <div class="situacao">

            <strong>
                Situação-problema
            </strong>

            <p>
                ${pergunta.situacao}
            </p>

        </div>
    `;


    if (pergunta.codigo) {

        html += `

            <pre class="codigo-questao"><code>${pergunta.codigo}</code></pre>

        `;

    }


    html += `

        <p class="gatilho">
            ${pergunta.gatilho}
        </p>

        <div class="alternativas">
    `;


    pergunta.alternativas.forEach(function (alternativa, indice) {

        html += `

            <button
                class="alternativa"
                data-indice="${indice}"
                type="button">

                <strong>
                    ${alternativa.letra})
                </strong>

                ${alternativa.texto}

            </button>

        `;

    });


    html += `

        </div>

    `;


    questao.innerHTML = html;


    adicionarEventosAlternativas();

}


/* ================================================= */
/* SELECIONAR ALTERNATIVA */
/* ================================================= */

function adicionarEventosAlternativas() {

    const alternativas =
        document.querySelectorAll(".alternativa");


    alternativas.forEach(function (alternativa) {

        alternativa.addEventListener("click", function () {

            if (correcao.hidden === false) {
                return;
            }


            alternativas.forEach(function (item) {

                item.classList.remove("selecionada");

            });


            alternativa.classList.add("selecionada");


            respostaSelecionada =
                Number(
                    alternativa.dataset.indice
                );


            corrigirQuestao.disabled = false;

        });

    });

}


/* ================================================= */
/* CORRIGIR QUESTÃO */
/* ================================================= */

corrigirQuestao.addEventListener("click", function () {

    if (respostaSelecionada === null) {
        return;
    }


    const pergunta =
        perguntas[questaoAtual];

    const alternativaEscolhida =
        pergunta.alternativas[respostaSelecionada];


    const respostaCorreta =
        pergunta.alternativas.findIndex(
            function (alternativa) {
                return alternativa.correta;
            }
        );


    const acertou =
        alternativaEscolhida.correta;


    if (acertou) {
        totalAcertos++;
    }


    mostrarResultadoQuestao(
        pergunta,
        respostaCorreta,
        respostaSelecionada,
        acertou
    );

});


/* ================================================= */
/* MOSTRAR CORREÇÃO */
/* ================================================= */

function mostrarResultadoQuestao(
    pergunta,
    respostaCorreta,
    respostaEscolhida,
    acertou
) {

    const alternativas =
        document.querySelectorAll(".alternativa");


    alternativas.forEach(function (alternativa, indice) {

        alternativa.classList.add("bloqueada");


        if (indice === respostaCorreta) {

            alternativa.classList.add("certa");

        }


        if (
            indice === respostaEscolhida &&
            indice !== respostaCorreta
        ) {

            alternativa.classList.add("errada");

        }

    });


    const respostaCerta =
        pergunta.alternativas[respostaCorreta];


    let html = `

        <div class="resultado-correcao ${acertou ? "acertou" : "errou"}">

            <h4>
                ${acertou
                    ? "✓ Muito bem! Você acertou!"
                    : "✗ Dessa vez não!"}
            </h4>

            <p>
                <strong>
                    Sua resposta:
                </strong>

                ${pergunta.alternativas[respostaEscolhida].letra})
                ${pergunta.alternativas[respostaEscolhida].texto}
            </p>

            <p>
                <strong>
                    Resposta correta:
                </strong>

                ${respostaCerta.letra})
                ${respostaCerta.texto}
            </p>

        </div>


        <div class="explicacao-geral">

            <h4>
                Por que essa é a resposta correta?
            </h4>

            <p>
                ${respostaCerta.explicacao}
            </p>

        </div>


        <div class="explicacoes-alternativas">
    `;


    pergunta.alternativas.forEach(function (alternativa) {

        html += `

            <div class="explicacao-alternativa">

                <strong>
                    ${alternativa.letra})
                    ${alternativa.correta ? "✓ Correta" : "✗ Incorreta"}
                </strong>

                <p>
                    ${alternativa.explicacao}
                </p>

            </div>

        `;

    });


    html += `

        </div>

    `;


    correcao.innerHTML = html;

    correcao.hidden = false;

    corrigirQuestao.hidden = true;


    if (questaoAtual < perguntas.length - 1) {

        proximaQuestao.textContent =
            "Próxima questão →";

    } else {

        proximaQuestao.textContent =
            "Ver resultado final";

    }


    proximaQuestao.hidden = false;


    correcao.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* ================================================= */
/* PRÓXIMA QUESTÃO */
/* ================================================= */

proximaQuestao.addEventListener("click", function () {

    questaoAtual++;


    if (questaoAtual >= perguntas.length) {

        mostrarResultadoFinal();

        return;

    }


    carregarQuestao();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================================================= */
/* RESULTADO FINAL */
/* ================================================= */

function mostrarResultadoFinal() {

    areaQuiz.hidden = true;

    resultadoFinal.hidden = false;


    const total =
        perguntas.length;

    const quantidadeErros =
        total - totalAcertos;

    const porcentagemResultado =
        Math.round(
            (totalAcertos / total) * 100
        );


    pontuacao.textContent =
        `${totalAcertos}/${total}`;

    porcentagemFinal.textContent =
        `${porcentagemResultado}%`;

    acertos.textContent =
        totalAcertos;

    erros.textContent =
        quantidadeErros;


    if (porcentagemResultado === 100) {

        mensagemFinal.textContent =
            "Domínio total! Você acertou todas as questões.";

    } else if (porcentagemResultado >= 90) {

        mensagemFinal.textContent =
            "Quase perfeito! Você demonstrou um ótimo domínio dos conteúdos.";

    } else if (porcentagemResultado >= 70) {

        mensagemFinal.textContent =
            "Muito bom! Você já domina grande parte dos conteúdos.";

    } else if (porcentagemResultado >= 50) {

        mensagemFinal.textContent =
            "Você está no caminho certo! Que tal revisar alguns conteúdos do site?";

    } else {

        mensagemFinal.textContent =
            "Hora de voltar aos conteúdos e tentar novamente. Cada erro é uma chance de aprender algo novo!";

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================================================= */
/* REFAZER QUIZ */
/* ================================================= */

refazerQuiz.addEventListener("click", function () {

    questaoAtual = 0;

    totalAcertos = 0;

    respostaSelecionada = null;


    resultadoFinal.hidden = true;

    areaQuiz.hidden = false;


    carregarQuestao();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});