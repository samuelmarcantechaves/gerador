// ========================================================
// BANCO DE DADOS DE COMIDAS
// ========================================================
const comidas = [
    {
        id: 1,
        nome: "Pizza de Calabresa",
        icone: "🍕",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "medio",
        precoTexto: "R\$ 25–50",
        tempo: "medio",
        tempoTexto: "45 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Uma pizza clássica de calabresa com queijo e molho de tomate.",
        ingredientes: [
            "1 massa de pizza",
            "150 g de calabresa fatiada",
            "150 g de queijo muçarela",
            "100 g de molho de tomate",
            "1/2 cebola fatiada",
            "Orégano a gosto"
        ],
        preparo: [
            "Espalhe o molho de tomate sobre a massa.",
            "Cubra com a muçarela e a calabresa.",
            "Adicione a cebola e o orégano.",
            "Asse em forno preaquecido a 220 °C por cerca de 15 a 20 minutos.",
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
        precoTexto: "R\$ 10–25",
        tempo: "medio",
        tempoTexto: "25 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "americana",
        descricao: "Hambúrguer caseiro suculento com queijo, pão e acompanhamentos.",
        ingredientes: [
            "150 g de carne moída",
            "1 pão de hambúrguer",
            "1 fatia de queijo",
            "1 folha de alface",
            "2 rodelas de tomate",
            "Sal e pimenta a gosto"
        ],
        preparo: [
            "Modele a carne em formato de hambúrguer.",
            "Tempere com sal e pimenta.",
            "Grelhe em uma frigideira quente por alguns minutos de cada lado.",
            "Coloque o queijo sobre a carne e espere derreter.",
            "Monte o hambúrguer com pão, alface e tomate."
        ]
    },
    {
        id: 3,
        nome: "Brigadeiro",
        icone: "🍫",
        tipo: "doce",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "medio",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "O clássico brigadeiro brasileiro, cremoso e cheio de chocolate.",
        ingredientes: [
            "1 lata de leite condensado",
            "2 colheres de sopa de chocolate em pó",
            "1 colher de sopa de manteiga",
            "Granulado para finalizar"
        ],
        preparo: [
            "Coloque o leite condensado, chocolate e manteiga em uma panela.",
            "Cozinhe em fogo baixo mexendo constantemente.",
            "Continue até desgrudar do fundo da panela.",
            "Deixe esfriar.",
            "Enrole e passe no granulado."
        ]
    },
    {
        id: 4,
        nome: "Brownie de Chocolate",
        icone: "🍫",
        tipo: "doce",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "demorado",
        tempoTexto: "40 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "americana",
        descricao: "Brownie macio por dentro e levemente crocante por fora.",
        ingredientes: [
            "200 g de chocolate",
            "100 g de manteiga",
            "3 ovos",
            "1 xícara de açúcar",
            "1 xícara de farinha de trigo",
            "1 colher de chá de essência de baunilha"
        ],
        preparo: [
            "Derreta o chocolate com a manteiga.",
            "Misture os ovos e o açúcar.",
            "Adicione o chocolate derretido.",
            "Acrescente a farinha e misture.",
            "Coloque em uma forma untada.",
            "Asse a 180 °C por aproximadamente 25 minutos."
        ]
    },
    {
        id: 5,
        nome: "Sushi",
        icone: "🍣",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "caro",
        precoTexto: "R\$ 25–50",
        tempo: "demorado",
        tempoTexto: "50 min",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "japonesa",
        descricao: "Sushi caseiro preparado com arroz japonês e recheios.",
        ingredientes: [
            "2 xícaras de arroz japonês",
            "Folhas de nori",
            "Pepino",
            "Cenoura",
            "Molho de soja",
            "Recheio de sua preferência"
        ],
        preparo: [
            "Cozinhe o arroz japonês e deixe esfriar.",
            "Coloque uma folha de nori sobre uma esteira.",
            "Espalhe uma camada fina de arroz.",
            "Adicione os recheios.",
            "Enrole cuidadosamente.",
            "Corte em pedaços e sirva."
        ]
    },
    {
        id: 6,
        nome: "Tacos Mexicanos",
        icone: "🌮",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "medio",
        tempoTexto: "25 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "mexicana",
        descricao: "Tacos crocantes recheados com carne, queijo e vegetais.",
        ingredientes: [
            "4 tortillas",
            "250 g de carne moída",
            "100 g de queijo",
            "Tomate picado",
            "Alface",
            "Temperos a gosto"
        ],
        preparo: [
            "Prepare a carne moída em uma frigideira.",
            "Tempere a gosto.",
            "Aqueça as tortillas.",
            "Coloque a carne dentro das tortillas.",
            "Adicione queijo, tomate e alface.",
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
        precoTexto: "Até R\$ 10",
        tempo: "demorado",
        tempoTexto: "40 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Pão de queijo brasileiro crocante por fora e macio por dentro.",
        ingredientes: [
            "500 g de polvilho",
            "250 ml de leite",
            "100 ml de óleo",
            "2 ovos",
            "200 g de queijo",
            "Sal a gosto"
        ],
        preparo: [
            "Aqueça o leite com o óleo.",
            "Despeje sobre o polvilho.",
            "Misture e deixe esfriar um pouco.",
            "Adicione os ovos e o queijo.",
            "Modele pequenas bolinhas.",
            "Asse a 180 °C até dourar."
        ]
    },
    {
        id: 8,
        nome: "Panqueca com Morango",
        icone: "🥞",
        tipo: "doce",
        refeicao: "cafe",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "medio",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Panquecas fofinhas acompanhadas de morangos e calda.",
        ingredientes: [
            "1 xícara de farinha",
            "1 ovo",
            "1 xícara de leite",
            "1 colher de açúcar",
            "1 colher de chá de fermento",
            "Morangos"
        ],
        preparo: [
            "Misture todos os ingredientes da massa.",
            "Aqueça uma frigideira.",
            "Coloque pequenas porções da massa.",
            "Doure dos dois lados.",
            "Sirva com morangos."
        ]
    },
    {
        id: 9,
        nome: "Macarrão à Bolonhesa",
        icone: "🍝",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "demorado",
        tempoTexto: "40 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "italiana",
        descricao: "Macarrão servido com molho de tomate e carne moída.",
        ingredientes: [
            "250 g de macarrão",
            "250 g de carne moída",
            "300 g de molho de tomate",
            "1 tomate",
            "Sal",
            "Queijo ralado"
        ],
        preparo: [
            "Cozinhe o macarrão em água com sal.",
            "Prepare a carne moída.",
            "Adicione o molho de tomate.",
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
        precoTexto: "R\$ 10–25",
        tempo: "rapido",
        tempoTexto: "5 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Açaí gelado acompanhado de frutas e complementos.",
        ingredientes: [
            "300 g de açaí",
            "1 banana",
            "Morangos",
            "Granola",
            "Leite condensado a gosto"
        ],
        preparo: [
            "Coloque o açaí em uma tigela.",
            "Corte as frutas.",
            "Adicione banana e morango.",
            "Finalize com granola e complementos."
        ]
    },
    {
        id: 11,
        nome: "Feijoada",
        icone: "🍲",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "caro",
        precoTexto: "R\$ 25–50",
        tempo: "longo",
        tempoTexto: "2h+",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "brasileira",
        descricao: "Prato tradicional brasileiro feito com feijão preto e carnes.",
        ingredientes: [
            "500 g de feijão preto",
            "Carnes suínas variadas",
            "Linguiça",
            "Alho",
            "Cebola",
            "Sal"
        ],
        preparo: [
            "Deixe o feijão de molho.",
            "Cozinhe o feijão.",
            "Prepare as carnes.",
            "Junte as carnes ao feijão.",
            "Cozinhe até o caldo engrossar.",
            "Sirva com arroz e acompanhamentos."
        ]
    },
    {
        id: 12,
        nome: "Yakisoba",
        icone: "🍜",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "medio",
        precoTexto: "R\$ 25–50",
        tempo: "demorado",
        tempoTexto: "35 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Macarrão frito com legumes, carne, frango e molho shoyu.",
        ingredientes: [
            "300 g de macarrão para yakisoba",
            "200 g de carne fatiada",
            "200 g de frango fatiado",
            "Couve-flor, brócolis e cenoura",
            "Molho shoyu e óleo de gergelim"
        ],
        preparo: [
            "Cozinhe o macarrão e reserve.",
            "Grelhe as carnes na frigideira ou wok.",
            "Adicione os legumes e refogue.",
            "Acrescente o macarrão e o molho shoyu.",
            "Misture bem até incorporar todos os sabores."
        ]
    }
];

// ========================================================
// ESTADO GLOBAL DA APLICAÇÃO
// ========================================================
let comidaAtual = null;
let favoritado = false;

// ========================================================
// LÓGICA PRINCIPAL - GERAR COMIDA
// ========================================================
function gerarComida() {
    const tipo = document.getElementById("tipo").value;
    const refeicao = document.getElementById("refeicao").value;
    const preco = document.getElementById("preco").value;
    const tempo = document.getElementById("tempo").value;
    const dificuldade = document.getElementById("dificuldade").value;
    const culinaria = document.getElementById("culinaria").value;

    const filtradas = comidas.filter(item => {
        return (tipo === "qualquer" || item.tipo === tipo) &&
               (refeicao === "qualquer" || item.refeicao === refeicao) &&
               (preco === "qualquer" || item.preco === preco) &&
               (tempo === "qualquer" || item.tempo === tempo) &&
               (dificuldade === "qualquer" || item.dificuldade === dificuldade) &&
               (culinaria === "qualquer" || item.culinaria === culinaria);
    });

    if (filtradas.length > 0) {
        const indice = Math.floor(Math.random() * filtradas.length);
        comidaAtual = filtradas[indice];
    } else {
        mostrarToast("Nenhuma comida idêntica encontrada. Sorteando uma opção próxima!");
        const indice = Math.floor(Math.random() * comidas.length);
        comidaAtual = comidas[indice];
    }

    favoritado = false;
    atualizarBotaoFavorito();

    const shareBox = document.getElementById("shareBox");
    if (shareBox) {
        shareBox.classList.add("hidden");
    }

    exibirResultado(comidaAtual);
}

// ========================================================
// MANIPULAÇÃO DO DOM - RENDERIZAÇÃO
// ========================================================
function exibirResultado(comida) {
    const painel = document.getElementById("resultado");

    document.getElementById("foodIcon").textContent = comida.icone;
    document.getElementById("foodTypeBadge").textContent = comida.tipo.toUpperCase();
    document.getElementById("foodName").textContent = comida.nome;
    document.getElementById("foodDescription").textContent = comida.descricao;

    document.getElementById("foodType").textContent = comida.tipo;
    document.getElementById("foodPrice").textContent = comida.precoTexto;
    document.getElementById("foodTime").textContent = comida.tempoTexto;
    document.getElementById("foodDifficulty").textContent = comida.dificuldadeTexto;

    const ul = document.getElementById("ingredientsList");
    ul.innerHTML = "";
    comida.ingredientes.forEach(ing => {
        const li = document.createElement("li");
        li.textContent = ing;
        ul.appendChild(li);
    });

    const ol = document.getElementById("stepsList");
    ol.innerHTML = "";
    comida.preparo.forEach(passo => {
        const li = document.createElement("li");
        li.textContent = passo;
        ol.appendChild(li);
    });

    painel.classList.remove("hidden");
    painel.scrollIntoView({ behavior: "smooth" });
}

// ========================================================
// RECURSOS INTERATIVOS - FAVORITOS E COMPARTILHAMENTO
// ========================================================
function favoritar() {
    favoritado = !favoritado;
    atualizarBotaoFavorito();

    if (favoritado) {
        mostrarToast("Receita adicionada aos favoritos! ❤️");
    } else {
        mostrarToast("Receita removida dos favoritos!");
    }
}

function atualizarBotaoFavorito() {
    const btn = document.querySelector(".favorite");
    if (!btn) return;
    if (favoritado) {
        btn.classList.add("active");
        btn.textContent = "♥";
    } else {
        btn.classList.remove("active");
        btn.textContent = "♡";
    }
}

function compartilhar() {
    if (!comidaAtual) return;

    const shareBox = document.getElementById("shareBox");
    const shareInput = document.getElementById("shareLink");

    const urlAtual = window.location.origin + window.location.pathname;
    const linkComida = `${urlAtual}?id=${comidaAtual.id}`;

    shareInput.value = linkComida;
    shareBox.classList.remove("hidden");
    shareInput.select();
}

function copiarLink() {
    const shareInput = document.getElementById("shareLink");

    navigator.clipboard.writeText(shareInput.value).then(() => {
        mostrarToast("Link copiado para a área de transferência! 🔗");
    }).catch(() => {
        shareInput.select();
        document.execCommand("copy");
        mostrarToast("Link copiado! 🔗");
    });
}

function mostrarToast(mensagem) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = mensagem;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// ========================================================
// EVENTO DE CARREGAMENTO - VERIFICA LINK COMPARTILHADO
// ========================================================
window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get("id");

    if (idParam) {
        const idProcurado = parseInt(idParam, 10);
        const comidaEncontrada = comidas.find(c => c.id === idProcurado);

        if (comidaEncontrada) {
            comidaAtual = comidaEncontrada;
            exibirResultado(comidaEncontrada);
        }
    }
});
