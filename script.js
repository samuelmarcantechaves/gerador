/* =====================================================
   BANCO DE RECEITAS
===================================================== */

const comidas = [

    {
        id: 1,

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

        descricao:
            "Uma pizza clássica de calabresa, queijo e molho de tomate.",

        ingredientes: [
            "1 disco de massa para pizza",
            "100 g de molho de tomate",
            "150 g de queijo muçarela",
            "100 g de calabresa fatiada",
            "1/2 cebola fatiada",
            "Orégano a gosto",
            "Azeite a gosto"
        ],

        preparo: [
            "Preaqueça o forno a 220 °C.",
            "Coloque a massa em uma forma e espalhe o molho de tomate.",
            "Cubra com a muçarela e distribua as fatias de calabresa.",
            "Adicione a cebola e o orégano.",
            "Leve ao forno por aproximadamente 20 a 25 minutos.",
            "Retire quando a massa estiver dourada e o queijo derretido."
        ]
    },


    {
        id: 2,

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

        descricao:
            "Hambúrguer suculento com queijo, pão e acompanhamentos.",

        ingredientes: [
            "150 g de carne moída",
            "1 pão de hambúrguer",
            "1 fatia de queijo",
            "2 folhas de alface",
            "2 rodelas de tomate",
            "1 colher de sopa de maionese",
            "Sal e pimenta a gosto"
        ],

        preparo: [
            "Modele a carne moída formando um hambúrguer.",
            "Tempere os dois lados com sal e pimenta.",
            "Aqueça uma frigideira e grelhe o hambúrguer dos dois lados.",
            "Coloque o queijo sobre a carne no final do preparo.",
            "Toste levemente o pão.",
            "Monte o hambúrguer com maionese, alface, tomate e carne."
        ]
    },


    {
        id: 3,

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

        descricao:
            "Um dos doces brasileiros mais clássicos e fáceis de preparar.",

        ingredientes: [
            "1 lata de leite condensado",
            "1 colher de sopa de manteiga",
            "3 colheres de sopa de chocolate em pó",
            "Granulado de chocolate"
        ],

        preparo: [
            "Coloque o leite condensado, a manteiga e o chocolate em uma panela.",
            "Misture tudo antes de ligar o fogo.",
            "Cozinhe em fogo baixo mexendo sem parar.",
            "Continue mexendo até a mistura desgrudar do fundo da panela.",
            "Deixe esfriar.",
            "Faça pequenas bolinhas e passe no granulado."
        ]
    },


    {
        id: 4,

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

        descricao:
            "Brownie macio por dentro e cheio de chocolate.",

        ingredientes: [
            "100 g de chocolate meio amargo",
            "80 g de manteiga",
            "2 ovos",
            "1/2 xícara de açúcar",
            "1/2 xícara de farinha de trigo",
            "2 colheres de sopa de chocolate em pó",
            "1 pitada de sal"
        ],

        preparo: [
            "Derreta o chocolate junto com a manteiga.",
            "Misture os ovos e o açúcar em uma tigela.",
            "Adicione o chocolate derretido.",
            "Acrescente a farinha, o chocolate em pó e o sal.",
            "Misture até formar uma massa homogênea.",
            "Coloque em uma forma untada.",
            "Asse a 180 °C por aproximadamente 20 a 25 minutos.",
            "Espere esfriar antes de cortar."
        ]
    },


    {
        id: 5,

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

        descricao:
            "Uma opção japonesa sofisticada e cheia de sabores.",

        ingredientes: [
            "2 xícaras de arroz japonês",
            "2 folhas de nori",
            "100 g de salmão fresco próprio para consumo cru",
            "1/2 pepino",
            "1 colher de sopa de vinagre de arroz",
            "1 colher de chá de açúcar",
            "Sal a gosto"
        ],

        preparo: [
            "Lave o arroz até a água ficar quase transparente.",
            "Cozinhe o arroz e deixe esfriar.",
            "Misture o vinagre, açúcar e uma pitada de sal.",
            "Misture esse tempero ao arroz.",
            "Coloque uma folha de nori sobre uma esteira de sushi.",
            "Espalhe uma camada fina de arroz.",
            "Adicione o salmão e o pepino.",
            "Enrole firmemente e corte em pedaços."
        ]
    },


    {
        id: 6,

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

        descricao:
            "Tacos crocantes recheados com carne e vegetais.",

        ingredientes: [
            "4 tortillas de milho",
            "250 g de carne moída",
            "1 tomate picado",
            "1/2 cebola picada",
            "Queijo ralado",
            "Alface picada",
            "Páprica a gosto",
            "Sal e pimenta"
        ],

        preparo: [
            "Refogue a cebola em uma frigideira.",
            "Adicione a carne moída.",
            "Tempere com sal, pimenta e páprica.",
            "Cozinhe até a carne ficar bem dourada.",
            "Aqueça as tortillas.",
            "Recheie com carne, tomate, alface e queijo.",
            "Sirva imediatamente."
        ]
    },


    {
        id: 7,

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

        descricao:
            "Pequeno, quentinho e perfeito para o café da manhã.",

        ingredientes: [
            "250 g de polvilho doce",
            "100 ml de leite",
            "50 ml de óleo",
            "1 ovo",
            "100 g de queijo ralado",
            "1 pitada de sal"
        ],

        preparo: [
            "Aqueça o leite e o óleo.",
            "Despeje sobre o polvilho e misture.",
            "Adicione o ovo e o queijo.",
            "Misture até formar uma massa uniforme.",
            "Modele pequenas bolinhas.",
            "Asse a 200 °C por aproximadamente 20 minutos."
        ]
    },


    {
        id: 8,

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

        descricao:
            "Panquecas fofinhas acompanhadas de morangos frescos.",

        ingredientes: [
            "1 xícara de farinha de trigo",
            "1 colher de sopa de açúcar",
            "1 ovo",
            "3/4 de xícara de leite",
            "1 colher de chá de fermento",
            "Morangos a gosto",
            "Mel ou chocolate a gosto"
        ],

        preparo: [
            "Misture a farinha, açúcar e fermento.",
            "Adicione o ovo e o leite.",
            "Misture até obter uma massa homogênea.",
            "Aqueça uma frigideira antiaderente.",
            "Coloque pequenas porções da massa.",
            "Doure dos dois lados.",
            "Sirva com morangos e mel ou chocolate."
        ]
    },


    {
        id: 9,

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

        descricao:
            "Macarrão com molho de tomate e carne moída.",

        ingredientes: [
            "250 g de macarrão",
            "250 g de carne moída",
            "1 lata de molho de tomate",
            "1/2 cebola",
            "1 dente de alho",
            "Sal a gosto",
            "Pimenta a gosto",
            "Queijo ralado"
        ],

        preparo: [
            "Cozinhe o macarrão em água com sal.",
            "Refogue a cebola e o alho.",
            "Adicione a carne moída.",
            "Cozinhe até dourar.",
            "Adicione o molho de tomate.",
            "Cozinhe por aproximadamente 10 minutos.",
            "Misture o molho ao macarrão.",
            "Finalize com queijo ralado."
        ]
    },


    {
        id: 10,

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

        descricao:
            "Açaí gelado acompanhado de frutas e complementos.",

        ingredientes: [
            "300 g de polpa de açaí",
            "1 banana",
            "Morangos a gosto",
            "Granola a gosto",
            "Leite condensado a gosto",
            "Mel a gosto"
        ],

        preparo: [
            "Coloque a polpa de açaí em uma tigela.",
            "Corte a banana e os morangos.",
            "Adicione as frutas sobre o açaí.",
            "Acrescente granola.",
            "Finalize com mel ou leite condensado.",
            "Sirva imediatamente."
        ]
    },


    {
        id: 11,

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

        descricao:
            "Um dos pratos mais tradicionais da culinária brasileira.",

        ingredientes: [
            "500 g de feijão preto",
            "300 g de carne seca dessalgada",
            "200 g de linguiça calabresa",
            "150 g de bacon",
            "1 cebola",
            "2 dentes de alho",
            "Folhas de louro",
            "Sal a gosto"
        ],

        preparo: [
            "Deixe o feijão de molho por algumas horas.",
            "Cozinhe o feijão até começar a ficar macio.",
            "Em outra panela, doure o bacon e a linguiça.",
            "Adicione a carne seca.",
            "Misture as carnes ao feijão.",
            "Adicione cebola, alho e louro.",
            "Cozinhe em fogo baixo até o caldo engrossar.",
            "Ajuste o sal e sirva quente."
        ]
    },


    {
        id: 12,

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

        descricao:
            "Massa crocante por fora com recheio doce.",

        ingredientes: [
            "1 xícara de água",
            "1 xícara de farinha de trigo",
            "1 colher de sopa de manteiga",
            "1 colher de sopa de açúcar",
            "1 pitada de sal",
            "Açúcar e canela",
            "Doce de leite para rechear"
        ],

        preparo: [
            "Ferva a água com manteiga, açúcar e sal.",
            "Adicione a farinha de uma vez.",
            "Mexa até formar uma massa uniforme.",
            "Coloque a massa em um saco de confeitar.",
            "Modele os churros.",
            "Frite cuidadosamente até dourar.",
            "Passe no açúcar com canela.",
            "Recheie com doce de leite."
        ]
    }

];


/* =====================================================
   VARIÁVEL DA RECEITA ATUAL
===================================================== */

let comidaAtual = null;


/* =====================================================
   GERAR COMIDA
===================================================== */

function gerarComida() {

    const tipo =
        document.getElementById("tipo").value;

    const refeicao =
        document.getElementById("refeicao").value;

    const preco =
        document.getElementById("preco").value;

    const tempo =
        document.getElementById("tempo").value;

    const dificuldade =
        document.getElementById("dificuldade").value;

    const culinaria =
        document.getElementById("culinaria").value;


    let resultados = comidas.filter(comida => {

        return (

            (tipo === "qualquer" ||
                comida.tipo === tipo)

            &&

            (refeicao === "qualquer" ||
                comida.refeicao === refeicao)

            &&

            (preco === "qualquer" ||
                comida.preco === preco)

            &&

            (tempo === "qualquer" ||
                comida.tempo === tempo)

            &&

            (dificuldade === "qualquer" ||
                comida.dificuldade === dificuldade)

            &&

            (culinaria === "qualquer" ||
                comida.culinaria === culinaria)

        );

    });


    /*
       Se a combinação for muito específica
       e não existir, usa pelo menos o tipo.
    */

    if (resultados.length === 0) {

        resultados = comidas.filter(comida => {

            return tipo === "qualquer" ||
                comida.tipo === tipo;

        });

    }


    if (resultados.length === 0) {

        resultados = comidas;

    }


    const comida =
        resultados[
            Math.floor(
                Math.random() * resultados.length
            )
        ];


    mostrarResultado(comida);

}


/* =====================================================
   MOSTRAR RESULTADO
===================================================== */

function mostrarResultado(comida) {

    comidaAtual = comida;


    document
        .getElementById("resultado")
        .classList.remove("hidden");


    document.getElementById("foodIcon")
        .textContent = comida.icone;


    document.getElementById("foodName")
        .textContent = comida.nome;


    document.getElementById("foodDescription")
        .textContent = comida.descricao;


    document.getElementById("foodType")
        .textContent =
        comida.tipo === "doce"
            ? "Doce"
            : "Salgado";


    document.getElementById("foodTypeBadge")
        .textContent =
        comida.tipo === "doce"
            ? "🍬 DOCE"
            : "🧂 SALGADO";


    document.getElementById("foodPrice")
        .textContent = comida.precoTexto;


    document.getElementById("foodTime")
        .textContent = comida.tempoTexto;


    document.getElementById("foodDifficulty")
        .textContent =
        comida.dificuldadeTexto;


    /* INGREDIENTES */

    const ingredientsList =
        document.getElementById("ingredientsList");


    ingredientsList.innerHTML = "";


    comida.ingredientes.forEach(ingrediente => {

        const li =
            document.createElement("li");

        li.textContent = ingrediente;

        ingredientsList.appendChild(li);

    });


    /* PREPARO */

    const stepsList =
        document.getElementById("stepsList");


    stepsList.innerHTML = "";


    comida.preparo.forEach(passo => {

        const li =
            document.createElement("li");

        li.textContent = passo;

        stepsList.appendChild(li);

    });


    /*
       Atualiza a URL para a receita atual.
       O link passa a representar exatamente
       essa receita.
    */

    atualizarURL(comida.id);


    document
        .getElementById("resultado")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


/* =====================================================
   LINK DA RECEITA
===================================================== */

function criarLinkReceita(comida) {

    const url =
        new URL(
            window.location.href
        );


    url.search = "";


    url.searchParams.set(
        "receita",
        comida.id
    );


    return url.toString();

}


/* =====================================================
   ATUALIZAR URL
===================================================== */

function atualizarURL(id) {

    const url =
        new URL(
            window.location.href
        );


    url.search = "";


    url.searchParams.set(
        "receita",
        id
    );


    /*
       replaceState altera a URL sem
       recarregar a página.
    */

    window.history.replaceState(
        {
            receita: id
        },
        "",
        url
    );

}


/* =====================================================
   COMPARTILHAR
===================================================== */

async function compartilhar() {

    if (!comidaAtual) {

        mostrarToast(
            "Gere uma comida primeiro!"
        );

        return;

    }


    const link =
        criarLinkReceita(comidaAtual);


    /*
       Mostra a caixa do link
    */

    const shareBox =
        document.getElementById(
            "shareBox"
        );


    const shareInput =
        document.getElementById(
            "shareLink"
        );


    shareInput.value = link;

    shareBox.classList.remove(
        "hidden"
    );


    /*
       Compartilhamento nativo do celular
    */

    if (
        navigator.share &&
        typeof navigator.share === "function"
    ) {

        try {

            await navigator.share({

                title:
                    `FoodGen — ${comidaAtual.nome}`,

                text:
                    `🍴 Olha essa receita que encontrei no FoodGen: ${comidaAtual.nome}!`,

                url: link

            });

            return;

        }

        catch (erro) {

            /*
               O usuário pode simplesmente
               ter fechado a janela de compartilhamento.
            */

        }

    }


    /*
       Caso o navegador não tenha Web Share,
       copia o link automaticamente.
    */

    await copiarTexto(link);

    mostrarToast(
        "Link copiado! 🔗"
    );

}


/* =====================================================
   COPIAR LINK
===================================================== */

async function copiarLink() {

    const input =
        document.getElementById(
            "shareLink"
        );


    try {

        await copiarTexto(
            input.value
        );

        mostrarToast(
            "Link copiado! 🔗"
        );

    }

    catch (erro) {

        input.select();

        document.execCommand(
            "copy"
        );

        mostrarToast(
            "Link copiado! 🔗"
        );

    }

}


/* =====================================================
   COPIAR TEXTO
===================================================== */

async function copiarTexto(texto) {

    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        await navigator.clipboard.writeText(
            texto
        );

        return;

    }


    const textarea =
        document.createElement("textarea");


    textarea.value = texto;


    textarea.style.position =
        "fixed";

    textarea.style.opacity = "0";


    document.body.appendChild(
        textarea
    );


    textarea.focus();

    textarea.select();


    document.execCommand(
        "copy"
    );


    document.body.removeChild(
        textarea
    );

}


/* =====================================================
   FAVORITAR
===================================================== */

function favoritar() {

    const botao =
        document.querySelector(
            ".favorite"
        );


    botao.classList.toggle(
        "active"
    );


    if (
        botao.classList.contains(
            "active"
        )
    ) {

        botao.textContent = "♥";

    }

    else {

        botao.textContent = "♡";

    }

}


/* =====================================================
   TOAST
===================================================== */

function mostrarToast(mensagem) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        mensagem;


    toast.classList.add(
        "show"
    );


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 2500);

}


/* =====================================================
   CARREGAR RECEITA PELO LINK
===================================================== */

function carregarReceitaDoLink() {

    const url =
        new URL(
            window.location.href
        );


    const id =
        url.searchParams.get(
            "receita"
        );


    if (!id) {

        return;

    }


    const comida =
        comidas.find(
            item =>
                item.id === Number(id)
        );


    if (!comida) {

        return;

    }


    mostrarResultadoSemAlterarURL(
        comida
    );

}


/* =====================================================
   MOSTRAR RECEITA DO LINK
===================================================== */

function mostrarResultadoSemAlterarURL(
    comida
) {

    comidaAtual = comida;


    document
        .getElementById("resultado")
        .classList.remove("hidden");


    document.getElementById("foodIcon")
        .textContent = comida.icone;


    document.getElementById("foodName")
        .textContent = comida.nome;


    document.getElementById("foodDescription")
        .textContent = comida.descricao;


    document.getElementById("foodType")
        .textContent =
        comida.tipo === "doce"
            ? "Doce"
            : "Salgado";


    document.getElementById("foodTypeBadge")
        .textContent =
        comida.tipo === "doce"
            ? "🍬 DOCE"
            : "🧂 SALGADO";


    document.getElementById("foodPrice")
        .textContent = comida.precoTexto;


    document.getElementById("foodTime")
        .textContent = comida.tempoTexto;


    document.getElementById("foodDifficulty")
        .textContent =
        comida.dificuldadeTexto;


    const ingredientsList =
        document.getElementById(
            "ingredientsList"
        );


    ingredientsList.innerHTML = "";


    comida.ingredientes.forEach(
        ingrediente => {

            const li =
                document.createElement("li");

            li.textContent =
                ingrediente;

            ingredientsList.appendChild(
                li
            );

        }
    );


    const stepsList =
        document.getElementById(
            "stepsList"
        );


    stepsList.innerHTML = "";


    comida.preparo.forEach(
        passo => {

            const li =
                document.createElement("li");

            li.textContent =
                passo;

            stepsList.appendChild(
                li
            );

        }
    );

}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        carregarReceitaDoLink();

    }
);
