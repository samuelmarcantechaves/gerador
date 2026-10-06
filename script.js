const comidas = [

    {
        nome: "Pizza de Calabresa",
        icone: "🍕",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "medio",
        precoTexto: "R$ 15–25",
        tempo: "demorado",
        tempoTexto: "40 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Uma pizza clássica e saborosa para matar a fome."
    },

    {
        nome: "Hambúrguer Artesanal",
        icone: "🍔",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "medio",
        precoTexto: "R$ 18–30",
        tempo: "medio",
        tempoTexto: "25 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "americana",
        descricao: "Hambúrguer suculento com queijo e acompanhamentos."
    },

    {
        nome: "Brigadeiro",
        icone: "🍫",
        tipo: "doce",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "R$ 5–10",
        tempo: "rapido",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Um dos doces brasileiros mais clássicos e deliciosos."
    },

    {
        nome: "Brownie de Chocolate",
        icone: "🍫",
        tipo: "doce",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "R$ 8–15",
        tempo: "medio",
        tempoTexto: "30 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Brownie macio por dentro e com bastante chocolate."
    },

    {
        nome: "Sushi",
        icone: "🍣",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "caro",
        precoTexto: "R$ 30–50",
        tempo: "longo",
        tempoTexto: "1 hora",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "japonesa",
        descricao: "Uma opção japonesa sofisticada e cheia de sabores."
    },

    {
        nome: "Tacos Mexicanos",
        icone: "🌮",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "medio",
        precoTexto: "R$ 15–25",
        tempo: "medio",
        tempoTexto: "25 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "mexicana",
        descricao: "Tacos crocantes com recheio temperado e saboroso."
    },

    {
        nome: "Pão de Queijo",
        icone: "🧀",
        tipo: "salgado",
        refeicao: "cafe",
        preco: "barato",
        precoTexto: "R$ 5–10",
        tempo: "rapido",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Pequeno, quentinho e perfeito para o café da manhã."
    },

    {
        nome: "Panqueca com Morango",
        icone: "🥞",
        tipo: "doce",
        refeicao: "cafe",
        preco: "medio",
        precoTexto: "R$ 10–20",
        tempo: "medio",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Panquecas fofinhas acompanhadas de morangos frescos."
    },

    {
        nome: "Macarrão à Bolonhesa",
        icone: "🍝",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "barato",
        precoTexto: "R$ 8–15",
        tempo: "medio",
        tempoTexto: "30 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "italiana",
        descricao: "Macarrão com molho de tomate e carne moída."
    },

    {
        nome: "Açaí com Frutas",
        icone: "🍓",
        tipo: "doce",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R$ 12–25",
        tempo: "rapido",
        tempoTexto: "5 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Açaí gelado acompanhado de frutas e complementos."
    },

    {
        nome: "Feijoada",
        icone: "🍲",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "medio",
        precoTexto: "R$ 20–35",
        tempo: "longo",
        tempoTexto: "2 horas",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "brasileira",
        descricao: "Um dos pratos mais tradicionais da culinária brasileira."
    },

    {
        nome: "Churros",
        icone: "🥨",
        tipo: "doce",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "R$ 5–10",
        tempo: "medio",
        tempoTexto: "20 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "mexicana",
        descricao: "Massa crocante por fora com recheio doce."
    }

];


function gerarComida() {

    const tipo = document.getElementById("tipo").value;
    const refeicao = document.getElementById("refeicao").value;
    const preco = document.getElementById("preco").value;
    const tempo = document.getElementById("tempo").value;
    const dificuldade = document.getElementById("dificuldade").value;
    const culinaria = document.getElementById("culinaria").value;


    let resultados = comidas.filter(comida => {

        return (
            (tipo === "qualquer" || comida.tipo === tipo) &&
            (refeicao === "qualquer" || comida.refeicao === refeicao) &&
            (preco === "qualquer" || comida.preco === preco) &&
            (tempo === "qualquer" || comida.tempo === tempo) &&
            (dificuldade === "qualquer" || comida.dificuldade === dificuldade) &&
            (culinaria === "qualquer" || comida.culinaria === culinaria)
        );

    });


    /*
       Caso não exista nenhuma comida com
       todos os filtros escolhidos, procura
       apenas pelo tipo.
    */

    if (resultados.length === 0) {

        resultados = comidas.filter(comida => {

            return tipo === "qualquer" || comida.tipo === tipo;

        });

    }


    if (resultados.length === 0) {

        resultados = comidas;

    }


    const comida =
        resultados[Math.floor(Math.random() * resultados.length)];


    mostrarResultado(comida);

}


function mostrarResultado(comida) {

    document.getElementById("resultado").classList.remove("hidden");


    document.getElementById("foodIcon").textContent =
        comida.icone;

    document.getElementById("foodName").textContent =
        comida.nome;

    document.getElementById("foodDescription").textContent =
        comida.descricao;

    document.getElementById("foodType").textContent =
        comida.tipo === "doce" ? "Doce" : "Salgado";

    document.getElementById("foodPrice").textContent =
        comida.precoTexto;

    document.getElementById("foodTime").textContent =
        comida.tempoTexto;

    document.getElementById("foodDifficulty").textContent =
        comida.dificuldadeTexto;


    document.getElementById("resultado")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


function favoritar() {

    const botao = document.querySelector(".favorite");

    botao.classList.toggle("active");

    if (botao.classList.contains("active")) {

        botao.textContent = "♥";

    } else {

        botao.textContent = "♡";

    }

}


function compartilhar() {

    const nome =
        document.getElementById("foodName").textContent;

    const texto =
        `🍔 O FoodGen sugeriu: ${nome}!`;

    if (navigator.share) {

        navigator.share({
            title: "FoodGen",
            text: texto
        });

    } else {

        navigator.clipboard.writeText(texto);

        alert("Resultado copiado para a área de transferência!");

    }

}
