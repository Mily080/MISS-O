const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o período da piracema?",
        alternativas: [
{
    texto:"novembro a março",
    afirmação: "Resposta correta",
    pontos:1
},
{
    texto:"maio a outubro",
    afirmação:"resposta errada",
    pontos:0
}
        ]
    },
        {
        enunciado: "A pesca do dourado está proibida até",
        alternativas: [
{
    texto:"2027",
    afirmação: "Resposta correta",
    pontos:1
},
{
    texto:"2026",
    afirmação:"resposta errada",
    pontos:0
}
        ]
    },
        {
        enunciado: "Qual peixe é considerado o REI DO RIO?",
        alternativas: [
{
    texto:"Dourado",
    afirmação: "Resposta correta",
    pontos:1
},
{
    texto:"Cachara",
    afirmação:"resposta errada",
    pontos:0
}
        ]
    },
        {
        enunciado: "A pesca esportiva é determinada por...",
        alternativas: [
{
    texto:"soltura do peixe",
    afirmação: "Resposta correta",
    pontos:1
},
{
    texto:"apreensão para comércio",
    afirmação:"resposta errada",
    pontos:0
}
        ]
    },
        {
        enunciado: "peixe mortal que respira ar atmosférico",
        alternativas: [
{
    texto:"Pirarucu",
    afirmação: "Resposta correta",
    pontos:1
},
{
    texto:"Jaú",
    afirmação:"resposta errada",
    pontos:0
}
        ]
    },
]

let atual = 0; 
let perguntaAtual; 
let historiaFinal = ""; 
let pontos = 0;  

function mostraPergunta(){ 
    perguntaAtual = perguntas[atual]; 
    caixaPerguntas.textContent = perguntaAtual.enunciado; 
    caixaAlternativas.textContent = ""; 
    mostraAlternativas(); 
}

function mostraAlternativas(){ 
    for(const alternativa of perguntaAtual.alternativas){ 
        const botaoAlternativas = document.createElement("button"); 
        botaoAlternativas.textContent = alternativa.texto; 
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); 
        caixaAlternativas.appendChild(botaoAlternativas); 
    }
}

function respostaSelecionada(alternativa) { 
    const afirmacao = alternativa.afirmacao; 
    historiaFinal = afirmacao; 
    pontos += alternativa.pontos;  
    atual++; 

    if (atual < perguntas.length) { 
        mostraPergunta();  
    } else {
        exibeResultado();  
    }
}

function exibeResultado() { 
    caixaPerguntas.textContent = "Fim do Quiz!"; 
    caixaAlternativas.textContent = "";  
    textoResultado.textContent = `Sua pontuação final é: ${pontos} pontos.`; 

    if (pontos === perguntas.length) { 
        textoResultado.textContent += " Parabéns! Você acertou todas as questões!"; 
    } else if (pontos > perguntas.length / 2) { 
        textoResultado.textContent += " Bom trabalho, você teve um desempenho legal!"; 
    } else { 
        textoResultado.textContent += " Você pode melhorar! Tente novamente!"; 
    }
}

mostraPergunta();