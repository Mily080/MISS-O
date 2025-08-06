const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
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
    texto:"maio a outubro";
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
    texto:"2026";
    afirmação:"resposta errada",
    pontos:0
}
        ]
    },
        {
        enunciado: "Qual peixe é considerado o "REI DO RIO"?",
        alternativas: [
{
    texto:"Dourado",
    afirmação: "Resposta correta",
    pontos:1
},
{
    texto:"Cachara";
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
    texto:"apreensão para comércio";
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
    texto:"Jaú";
    afirmação:"resposta errada",
    pontos:0
}
        ]
    },
]