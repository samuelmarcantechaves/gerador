
const comidas = [
    {
        id: 1,
        nome: "Pizza de Calabresa",
        icone: "🍕",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "30-60",
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
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
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
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "10-30",
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
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
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
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "30-60",
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
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
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
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "30-60",
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
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
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
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
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
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "ate10",
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
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "acima60",
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
        nome: "Churros",
        icone: "🍩",
        tipo: "doce",
        refeicao: "lanche",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "30-60",
        tempoTexto: "40 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Churros crocantes finalizados com açúcar e canela.",
        ingredientes: [
            "1 xícara de água",
            "1 xícara de farinha",
            "1 colher de manteiga",
            "Açúcar",
            "Canela",
            "Doce de leite"
        ],
        preparo: [
            "Ferva a água com a manteiga.",
            "Adicione a farinha e mexa até formar uma massa.",
            "Coloque a massa em um saco de confeitar.",
            "Modele os churros.",
            "Frite até dourar.",
            "Passe no açúcar e canela e sirva com doce de leite."
        ]
    },

    {
        id: 13,
        nome: "Coxinha de Frango",
        icone: "🍗",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "30-60",
        tempoTexto: "50 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Coxinha crocante recheada com frango temperado.",
        ingredientes: ["2 xícaras de farinha", "2 xícaras de caldo de frango", "300 g de frango desfiado", "Farinha de rosca", "Sal", "Óleo"],
        preparo: ["Prepare a massa com o caldo e a farinha.", "Cozinhe até desgrudar da panela.", "Recheie com frango.", "Modele as coxinhas.", "Empane.", "Frite até dourar."]
    },

    {
        id: 14,
        nome: "Pastel de Carne",
        icone: "🥟",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "10-30",
        tempoTexto: "25 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Pastel crocante recheado com carne moída.",
        ingredientes: ["Massa para pastel", "200 g de carne moída", "Tomate", "Cebola", "Sal", "Óleo"],
        preparo: ["Prepare a carne com os temperos.", "Coloque o recheio na massa.", "Feche bem as bordas.", "Frite em óleo quente.", "Escorra e sirva."]
    },

    {
        id: 15,
        nome: "Escondidinho de Carne",
        icone: "🥘",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "30-60",
        tempoTexto: "50 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Purê cremoso com recheio de carne e queijo gratinado.",
        ingredientes: ["500 g de mandioca", "300 g de carne moída", "100 g de queijo", "Leite", "Manteiga", "Sal"],
        preparo: ["Cozinhe a mandioca.", "Amasse e prepare o purê.", "Refogue a carne.", "Monte uma camada de purê, carne e outra de purê.", "Cubra com queijo.", "Gratine no forno."]
    },

    {
        id: 16,
        nome: "Escondidinho de Frango",
        icone: "🍗",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "50 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Escondidinho cremoso de mandioca com frango desfiado.",
        ingredientes: ["500 g de mandioca", "300 g de frango", "100 g de queijo", "Leite", "Manteiga", "Sal"],
        preparo: ["Cozinhe a mandioca.", "Prepare o purê.", "Cozinhe e desfie o frango.", "Monte o escondidinho.", "Cubra com queijo.", "Leve ao forno para gratinar."]
    },

    {
        id: 17,
        nome: "Arroz Carreteiro",
        icone: "🍚",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "40 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Arroz bem temperado preparado com carne.",
        ingredientes: ["2 xícaras de arroz", "300 g de carne seca", "Tomate", "Cebola", "Alho", "Sal"],
        preparo: ["Dessalgue e cozinhe a carne.", "Refogue os temperos.", "Adicione a carne.", "Junte o arroz.", "Acrescente água.", "Cozinhe até o arroz ficar macio."]
    },

    {
        id: 18,
        nome: "Frango com Quiabo",
        icone: "🍗",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "50 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Frango dourado acompanhado de quiabo temperado.",
        ingredientes: ["500 g de frango", "300 g de quiabo", "Tomate", "Alho", "Cebola", "Sal"],
        preparo: ["Tempere o frango.", "Doure os pedaços.", "Prepare o quiabo.", "Junte o quiabo ao frango.", "Adicione os temperos.", "Cozinhe até ficar macio."]
    },

    {
        id: 19,
        nome: "Galinhada",
        icone: "🍗",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "50 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Arroz cozido junto com frango e temperos.",
        ingredientes: ["500 g de frango", "2 xícaras de arroz", "Tomate", "Cebola", "Alho", "Sal"],
        preparo: ["Doure o frango.", "Adicione os temperos.", "Coloque o arroz.", "Cubra com água.", "Cozinhe até o arroz ficar macio.", "Sirva quente."]
    },

    {
        id: 20,
        nome: "Moqueca de Peixe",
        icone: "🐟",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "30-60",
        tempoTexto: "45 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Peixe cozido com tomate, pimentões e leite de coco.",
        ingredientes: ["500 g de peixe", "Tomate", "Pimentão", "Cebola", "200 ml de leite de coco", "Sal"],
        preparo: ["Tempere o peixe.", "Monte camadas de tomate, cebola e pimentão.", "Coloque o peixe.", "Adicione o leite de coco.", "Cozinhe em fogo baixo.", "Sirva com arroz."]
    },

    {
        id: 21,
        nome: "Bobó de Camarão",
        icone: "🍤",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "acima50",
        precoTexto: "Acima de R$ 50",
        tempo: "30-60",
        tempoTexto: "50 min",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "brasileira",
        descricao: "Creme de mandioca com camarões e temperos.",
        ingredientes: ["500 g de camarão", "500 g de mandioca", "Leite de coco", "Tomate", "Cebola", "Azeite de dendê"],
        preparo: ["Cozinhe a mandioca.", "Bata até formar um creme.", "Refogue os camarões.", "Adicione os temperos.", "Misture o creme de mandioca.", "Finalize com leite de coco e dendê."]
    },

    {
        id: 22,
        nome: "Baião de Dois",
        icone: "🍛",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "45 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Mistura tradicional de arroz, feijão e queijo.",
        ingredientes: ["1 xícara de arroz", "1 xícara de feijão", "100 g de queijo coalho", "Cebola", "Alho", "Sal"],
        preparo: ["Cozinhe o arroz.", "Prepare o feijão.", "Refogue os temperos.", "Misture arroz e feijão.", "Adicione o queijo.", "Cozinhe até incorporar."]
    },

    {
        id: 23,
        nome: "Virado à Paulista",
        icone: "🍽️",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "30-60",
        tempoTexto: "50 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Prato tradicional com feijão, farinha, carne e acompanhamentos.",
        ingredientes: ["Feijão", "Farinha de mandioca", "Bife", "Ovo", "Banana", "Couve"],
        preparo: ["Prepare o feijão.", "Misture com farinha para fazer o virado.", "Grelhe o bife.", "Frite o ovo.", "Prepare a banana.", "Monte todos os acompanhamentos."]
    },

    {
        id: 24,
        nome: "Carne de Panela",
        icone: "🥩",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "acima60",
        tempoTexto: "1h30",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Carne macia cozida lentamente com legumes e temperos.",
        ingredientes: ["700 g de carne", "Batata", "Cenoura", "Tomate", "Cebola", "Sal"],
        preparo: ["Sele a carne.", "Adicione os temperos.", "Cubra com água.", "Cozinhe até ficar macia.", "Adicione batata e cenoura.", "Finalize o cozimento."]
    },

    {
        id: 25,
        nome: "Bife Acebolado",
        icone: "🥩",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Bife grelhado servido com cebolas douradas.",
        ingredientes: ["2 bifes", "1 cebola", "Sal", "Pimenta", "Óleo"],
        preparo: ["Tempere os bifes.", "Aqueça a frigideira.", "Grelhe os bifes.", "Retire e reserve.", "Doure as cebolas.", "Sirva junto com os bifes."]
    },

    {
        id: 26,
        nome: "Frango à Parmegiana",
        icone: "🍗",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "30-60",
        tempoTexto: "50 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Filé de frango empanado com molho e queijo gratinado.",
        ingredientes: ["2 filés de frango", "Farinha de rosca", "Molho de tomate", "Queijo", "Ovo", "Sal"],
        preparo: ["Tempere o frango.", "Passe no ovo e na farinha.", "Doure os filés.", "Cubra com molho.", "Adicione queijo.", "Leve ao forno para gratinar."]
    },

    {
        id: 27,
        nome: "Arroz de Forno",
        icone: "🍚",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "40 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Arroz cremoso gratinado com queijo.",
        ingredientes: ["3 xícaras de arroz cozido", "Presunto", "Queijo", "Milho", "Molho de tomate", "Orégano"],
        preparo: ["Misture o arroz com os ingredientes.", "Coloque em uma travessa.", "Cubra com queijo.", "Polvilhe orégano.", "Leve ao forno.", "Asse até gratinar."]
    },

    {
        id: 28,
        nome: "Mandioca com Carne Seca",
        icone: "🥔",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "30-60",
        tempoTexto: "45 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Mandioca dourada acompanhada de carne seca desfiada.",
        ingredientes: ["500 g de mandioca", "300 g de carne seca", "Cebola", "Cheiro-verde", "Sal", "Óleo"],
        preparo: ["Cozinhe a mandioca.", "Corte em pedaços.", "Doure a mandioca.", "Dessalgue e desfie a carne.", "Refogue a carne.", "Sirva junto."]
    },

    {
        id: 29,
        nome: "Tapioca Recheada",
        icone: "🫓",
        tipo: "salgado",
        refeicao: "cafe",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "ate10",
        tempoTexto: "5 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Tapioca rápida e versátil com recheio cremoso.",
        ingredientes: ["100 g de goma de tapioca", "Queijo", "Presunto", "Tomate", "Orégano"],
        preparo: ["Aqueça uma frigideira.", "Espalhe a goma.", "Deixe firmar.", "Adicione o recheio.", "Dobre a tapioca.", "Sirva quente."]
    },

    {
        id: 30,
        nome: "Cuscuz Nordestino",
        icone: "🌽",
        tipo: "salgado",
        refeicao: "cafe",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "10-30",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Cuscuz de milho simples e tradicional.",
        ingredientes: ["2 xícaras de flocão de milho", "Água", "Sal", "Manteiga"],
        preparo: ["Misture o flocão com água e sal.", "Deixe hidratar.", "Coloque na cuscuzeira.", "Cozinhe no vapor.", "Finalize com manteiga.", "Sirva."]
    },

    {
        id: 31,
        nome: "Vaca Atolada",
        icone: "🍖",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "acima60",
        tempoTexto: "1h30",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Costela bovina cozida com mandioca.",
        ingredientes: ["700 g de costela", "500 g de mandioca", "Tomate", "Cebola", "Alho", "Sal"],
        preparo: ["Doure a costela.", "Adicione os temperos.", "Cozinhe até a carne amaciar.", "Acrescente a mandioca.", "Cozinhe até engrossar.", "Sirva quente."]
    },

    {
        id: 32,
        nome: "Quindim",
        icone: "🍮",
        tipo: "doce",
        refeicao: "lanche",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "45 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Doce brasileiro brilhante e cremoso feito com coco e ovos.",
        ingredientes: ["6 gemas", "1 xícara de açúcar", "100 g de coco ralado", "1 colher de manteiga"],
        preparo: ["Misture as gemas com açúcar.", "Adicione coco e manteiga.", "Coloque em forminhas.", "Asse em banho-maria.", "Deixe esfriar.", "Desenforme."]
    },


    // ========================================================
    // ITALIANAS
    // ========================================================

    {
        id: 33,
        nome: "Lasanha à Bolonhesa",
        icone: "🍝",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "acima60",
        tempoTexto: "1h20",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Lasanha em camadas com carne, molho e queijo.",
        ingredientes: ["Massa de lasanha", "500 g de carne moída", "Molho de tomate", "500 g de queijo", "Molho branco"],
        preparo: ["Prepare o molho de carne.", "Monte camadas de massa, molho e queijo.", "Repita as camadas.", "Finalize com queijo.", "Asse até gratinar."]
    },

    {
        id: 34,
        nome: "Nhoque ao Molho de Tomate",
        icone: "🥔",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "50 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Nhoque macio servido com molho de tomate.",
        ingredientes: ["500 g de batata", "1 xícara de farinha", "1 ovo", "Molho de tomate", "Sal"],
        preparo: ["Cozinhe as batatas.", "Amasse.", "Misture com farinha e ovo.", "Modele os nhoques.", "Cozinhe em água fervente.", "Sirva com molho."]
    },

    {
        id: 35,
        nome: "Risoto de Frango",
        icone: "🍚",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "45 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Risoto cremoso preparado com frango.",
        ingredientes: ["2 xícaras de arroz arbóreo", "300 g de frango", "Caldo", "Parmesão", "Manteiga"],
        preparo: ["Doure o frango.", "Refogue o arroz.", "Adicione caldo aos poucos.", "Mexa até ficar cremoso.", "Misture o frango.", "Finalize com manteiga e parmesão."]
    },

    {
        id: 36,
        nome: "Risoto de Cogumelos",
        icone: "🍄",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "30-60",
        tempoTexto: "45 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Risoto cremoso com cogumelos salteados.",
        ingredientes: ["2 xícaras de arroz arbóreo", "200 g de cogumelos", "Caldo", "Parmesão", "Manteiga"],
        preparo: ["Refogue os cogumelos.", "Refogue o arroz.", "Adicione caldo aos poucos.", "Mexa constantemente.", "Junte os cogumelos.", "Finalize com parmesão."]
    },

    {
        id: 37,
        nome: "Ravioli de Queijo",
        icone: "🍝",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "30-60",
        tempoTexto: "40 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Massa recheada com queijo e servida com molho.",
        ingredientes: ["Ravioli de queijo", "Molho de tomate", "Parmesão", "Manjericão"],
        preparo: ["Ferva água com sal.", "Cozinhe os raviolis.", "Aqueça o molho.", "Misture a massa ao molho.", "Finalize com parmesão."]
    },

    {
        id: 38,
        nome: "Fettuccine Alfredo",
        icone: "🍝",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
        tempoTexto: "25 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "italiana",
        descricao: "Massa cremosa com queijo parmesão.",
        ingredientes: ["250 g de fettuccine", "200 ml de creme de leite", "100 g de parmesão", "Manteiga", "Sal"],
        preparo: ["Cozinhe a massa.", "Derreta a manteiga.", "Adicione o creme.", "Misture o parmesão.", "Junte a massa.", "Sirva imediatamente."]
    },

    {
        id: 39,
        nome: "Penne ao Molho Branco",
        icone: "🍝",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
        tempoTexto: "25 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "italiana",
        descricao: "Penne envolvido em molho branco cremoso.",
        ingredientes: ["250 g de penne", "200 ml de leite", "1 colher de farinha", "Manteiga", "Parmesão"],
        preparo: ["Cozinhe o penne.", "Prepare o molho com manteiga e farinha.", "Adicione leite.", "Mexa até engrossar.", "Misture o queijo.", "Junte a massa."]
    },

    {
        id: 40,
        nome: "Espaguete à Carbonara",
        icone: "🍝",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
        tempoTexto: "25 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Espaguete cremoso com ovos, queijo e bacon.",
        ingredientes: ["250 g de espaguete", "2 ovos", "100 g de bacon", "50 g de parmesão", "Pimenta"],
        preparo: ["Cozinhe a massa.", "Frite o bacon.", "Misture ovos e queijo.", "Junte a massa quente.", "Adicione o bacon.", "Misture rapidamente para formar o creme."]
    },

    {
        id: 41,
        nome: "Bruschetta",
        icone: "🥖",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "ate10",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "italiana",
        descricao: "Pão tostado com tomate, azeite e ervas.",
        ingredientes: ["Fatias de pão", "2 tomates", "Azeite", "Manjericão", "Sal"],
        preparo: ["Toste o pão.", "Pique os tomates.", "Tempere com sal e azeite.", "Coloque sobre o pão.", "Finalize com manjericão."]
    },

    {
        id: 42,
        nome: "Tiramisù",
        icone: "🍰",
        tipo: "doce",
        refeicao: "lanche",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "acima60",
        tempoTexto: "2h",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "italiana",
        descricao: "Sobremesa italiana cremosa com café e cacau.",
        ingredientes: ["Biscoito champanhe", "Café", "Mascarpone", "Açúcar", "Cacau em pó"],
        preparo: ["Prepare o café.", "Misture mascarpone e açúcar.", "Molhe os biscoitos no café.", "Monte camadas.", "Finalize com cacau.", "Leve à geladeira antes de servir."]
    },


    // ========================================================
    // JAPONESAS
    // ========================================================

    {
        id: 43,
        nome: "Yakisoba",
        icone: "🍜",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "40 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Macarrão oriental salteado com carne e vegetais.",
        ingredientes: ["250 g de macarrão", "200 g de frango", "Cenoura", "Repolho", "Molho de soja"],
        preparo: ["Cozinhe o macarrão.", "Doure o frango.", "Adicione os vegetais.", "Junte o macarrão.", "Acrescente o molho.", "Misture e sirva."]
    },

    {
        id: 44,
        nome: "Temaki",
        icone: "🍣",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "10-30",
        tempoTexto: "20 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Cone de alga recheado com arroz e ingredientes.",
        ingredientes: ["Nori", "Arroz japonês", "Pepino", "Cenoura", "Recheio de sua preferência"],
        preparo: ["Prepare o arroz.", "Corte a nori.", "Coloque arroz sobre a alga.", "Adicione o recheio.", "Enrole em formato de cone.", "Sirva imediatamente."]
    },

    {
        id: 45,
        nome: "Hot Roll",
        icone: "🍣",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "30-60",
        tempoTexto: "45 min",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "japonesa",
        descricao: "Sushi empanado e frito, servido crocante.",
        ingredientes: ["Nori", "Arroz japonês", "Cream cheese", "Recheio", "Farinha", "Óleo"],
        preparo: ["Monte o sushi.", "Enrole firmemente.", "Empane.", "Frite rapidamente até dourar.", "Corte em pedaços.", "Sirva."]
    },

    {
        id: 46,
        nome: "Guioza",
        icone: "🥟",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "40 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Pastéis japoneses recheados e dourados na frigideira.",
        ingredientes: ["Massa para guioza", "200 g de carne suína", "Repolho", "Cebolinha", "Molho de soja"],
        preparo: ["Misture o recheio.", "Coloque nas massas.", "Feche as bordas.", "Doure na frigideira.", "Adicione um pouco de água.", "Tampe até cozinhar."]
    },

    {
        id: 47,
        nome: "Lámen",
        icone: "🍜",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "30-60",
        tempoTexto: "50 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Macarrão servido em caldo quente com acompanhamentos.",
        ingredientes: ["Macarrão para lámen", "Caldo", "Ovo", "Cebolinha", "Carne"],
        preparo: ["Prepare o caldo.", "Cozinhe o macarrão.", "Prepare o ovo.", "Coloque o macarrão no caldo.", "Adicione carne e ovo.", "Finalize com cebolinha."]
    },

    {
        id: 48,
        nome: "Udon",
        icone: "🍜",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "30-60",
        tempoTexto: "35 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Macarrão japonês grosso servido em caldo.",
        ingredientes: ["Macarrão udon", "Caldo", "Molho de soja", "Cebolinha", "Cogumelos"],
        preparo: ["Prepare o caldo.", "Cozinhe o udon.", "Adicione o molho de soja.", "Coloque os cogumelos.", "Junte o macarrão.", "Finalize com cebolinha."]
    },

    {
        id: 49,
        nome: "Donburi de Frango",
        icone: "🍚",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "35 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "japonesa",
        descricao: "Tigela japonesa com arroz, frango e molho.",
        ingredientes: ["Arroz japonês", "300 g de frango", "Molho de soja", "Cebola", "Ovo"],
        preparo: ["Cozinhe o arroz.", "Prepare o frango.", "Adicione o molho.", "Junte a cebola.", "Coloque ovo por cima.", "Sirva sobre o arroz."]
    },

    {
        id: 50,
        nome: "Kare Raisu",
        icone: "🍛",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "45 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "japonesa",
        descricao: "Arroz japonês acompanhado de curry cremoso.",
        ingredientes: ["Arroz", "Frango", "Batata", "Cenoura", "Curry", "Cebola"],
        preparo: ["Cozinhe o arroz.", "Doure o frango.", "Adicione batata e cenoura.", "Cubra com água.", "Acrescente o curry.", "Cozinhe até engrossar."]
    },

    {
        id: 51,
        nome: "Onigiri",
        icone: "🍙",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "10-30",
        tempoTexto: "20 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Bolinho japonês de arroz com recheio.",
        ingredientes: ["Arroz japonês", "Nori", "Recheio de frango", "Sal"],
        preparo: ["Cozinhe o arroz.", "Deixe esfriar um pouco.", "Coloque o recheio no centro.", "Modele em formato triangular.", "Envolva com nori.", "Sirva."]
    },

    {
        id: 52,
        nome: "Tempurá de Legumes",
        icone: "🥕",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "35 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Legumes empanados em uma massa leve e crocante.",
        ingredientes: ["Cenoura", "Abobrinha", "Farinha", "Água gelada", "Óleo"],
        preparo: ["Corte os legumes.", "Prepare uma massa leve.", "Passe os legumes na massa.", "Frite rapidamente.", "Escorra.", "Sirva crocante."]
    },


    // ========================================================
    // MEXICANAS
    // ========================================================

    {
        id: 53,
        nome: "Burrito de Carne",
        icone: "🌯",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
        tempoTexto: "25 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "mexicana",
        descricao: "Tortilla recheada com carne e acompanhamentos.",
        ingredientes: ["Tortilla", "250 g de carne", "Queijo", "Tomate", "Alface"],
        preparo: ["Prepare a carne.", "Aqueça a tortilla.", "Coloque a carne no centro.", "Adicione queijo e vegetais.", "Dobre as laterais.", "Enrole e sirva."]
    },

    {
        id: 54,
        nome: "Burrito de Frango",
        icone: "🌯",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
        tempoTexto: "25 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "mexicana",
        descricao: "Burrito recheado com frango temperado.",
        ingredientes: ["Tortilla", "250 g de frango", "Queijo", "Tomate", "Alface"],
        preparo: ["Cozinhe e desfie o frango.", "Aqueça a tortilla.", "Adicione o frango.", "Coloque os acompanhamentos.", "Enrole.", "Sirva."]
    },

    {
        id: 55,
        nome: "Nachos com Queijo",
        icone: "🧀",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
        tempoTexto: "15 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "mexicana",
        descricao: "Nachos crocantes cobertos com queijo derretido.",
        ingredientes: ["Nachos", "200 g de queijo", "Tomate", "Jalapeño", "Molho"],
        preparo: ["Coloque os nachos em uma assadeira.", "Cubra com queijo.", "Leve ao forno até derreter.", "Adicione tomate e jalapeño.", "Sirva com molho."]
    },

    {
        id: 56,
        nome: "Quesadilla",
        icone: "🫓",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "ate10",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "mexicana",
        descricao: "Tortilla crocante recheada com queijo derretido.",
        ingredientes: ["Tortilla", "Queijo", "Frango desfiado", "Tomate"],
        preparo: ["Coloque queijo sobre a tortilla.", "Adicione frango.", "Dobre ao meio.", "Doure na frigideira.", "Vire.", "Sirva."]
    },

    {
        id: 57,
        nome: "Enchiladas",
        icone: "🌯",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "30-60",
        tempoTexto: "45 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "mexicana",
        descricao: "Tortillas enroladas com recheio e molho picante.",
        ingredientes: ["Tortillas", "Frango desfiado", "Molho de tomate", "Queijo", "Pimenta"],
        preparo: ["Prepare o frango.", "Recheie as tortillas.", "Enrole.", "Coloque em uma travessa.", "Cubra com molho e queijo.", "Asse até gratinar."]
    },

    {
        id: 58,
        nome: "Guacamole com Nachos",
        icone: "🥑",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "ate10",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "mexicana",
        descricao: "Creme de abacate servido com nachos crocantes.",
        ingredientes: ["2 abacates", "Tomate", "Limão", "Cebola", "Sal", "Nachos"],
        preparo: ["Amasse o abacate.", "Adicione tomate e cebola.", "Tempere com limão e sal.", "Misture.", "Sirva com nachos."]
    },

    {
        id: 59,
        nome: "Chili com Carne",
        icone: "🌶️",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "40 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "mexicana",
        descricao: "Carne moída cozida com feijão e temperos.",
        ingredientes: ["400 g de carne moída", "Feijão", "Tomate", "Pimentão", "Pimenta"],
        preparo: ["Doure a carne.", "Adicione tomate e pimentão.", "Junte o feijão.", "Tempere.", "Cozinhe até engrossar.", "Sirva quente."]
    },

    {
        id: 60,
        nome: "Fajitas de Frango",
        icone: "🌮",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
        tempoTexto: "25 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "mexicana",
        descricao: "Tiras de frango com pimentões e temperos.",
        ingredientes: ["300 g de frango", "Pimentão", "Cebola", "Tortillas", "Limão"],
        preparo: ["Corte o frango em tiras.", "Tempere.", "Grelhe o frango.", "Adicione pimentão e cebola.", "Sirva nas tortillas."]
    },


    // ========================================================
    // AMERICANAS
    // ========================================================

    {
        id: 61,
        nome: "Hot Dog Americano",
        icone: "🌭",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "10-30",
        tempoTexto: "15 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Cachorro-quente simples com salsicha e molhos.",
        ingredientes: ["Pão", "Salsicha", "Ketchup", "Mostarda", "Queijo"],
        preparo: ["Cozinhe a salsicha.", "Aqueça o pão.", "Coloque a salsicha.", "Adicione queijo e molhos.", "Sirva."]
    },

    {
        id: 62,
        nome: "Cheeseburger",
        icone: "🍔",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Hambúrguer clássico com queijo derretido.",
        ingredientes: ["Carne moída", "Pão", "Queijo", "Alface", "Tomate", "Molho"],
        preparo: ["Modele a carne.", "Grelhe dos dois lados.", "Adicione queijo.", "Aqueça o pão.", "Monte com os vegetais.", "Sirva."]
    },

    {
        id: 63,
        nome: "Chicken Wings",
        icone: "🍗",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "45 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "americana",
        descricao: "Asinhas de frango crocantes e temperadas.",
        ingredientes: ["500 g de asas de frango", "Páprica", "Alho", "Sal", "Molho barbecue"],
        preparo: ["Tempere as asas.", "Deixe marinar.", "Asse ou prepare na air fryer.", "Doure bem.", "Passe no molho barbecue.", "Sirva."]
    },

    {
        id: 64,
        nome: "Mac and Cheese",
        icone: "🧀",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "35 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Macarrão cremoso com bastante queijo.",
        ingredientes: ["250 g de macarrão", "200 g de queijo", "Leite", "Manteiga", "Farinha"],
        preparo: ["Cozinhe o macarrão.", "Prepare o molho branco.", "Adicione os queijos.", "Misture o macarrão.", "Leve ao forno se desejar gratinar."]
    },

    {
        id: 65,
        nome: "Pancakes Americanas",
        icone: "🥞",
        tipo: "doce",
        refeicao: "cafe",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "10-30",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Panquecas grossas e fofinhas para o café da manhã.",
        ingredientes: ["Farinha", "Leite", "Ovo", "Açúcar", "Fermento", "Manteiga"],
        preparo: ["Misture os ingredientes.", "Aqueça uma frigideira.", "Coloque porções da massa.", "Doure dos dois lados.", "Sirva com mel ou frutas."]
    },

    {
        id: 66,
        nome: "Waffle",
        icone: "🧇",
        tipo: "doce",
        refeicao: "cafe",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Waffle crocante por fora e macio por dentro.",
        ingredientes: ["Farinha", "Leite", "Ovos", "Açúcar", "Manteiga", "Fermento"],
        preparo: ["Misture os ingredientes.", "Preaqueça a máquina.", "Coloque a massa.", "Feche e cozinhe.", "Retire quando dourar.", "Sirva com frutas."]
    },

    {
        id: 67,
        nome: "Apple Pie",
        icone: "🥧",
        tipo: "doce",
        refeicao: "lanche",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "acima60",
        tempoTexto: "1h10",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "americana",
        descricao: "Torta americana de maçã com canela.",
        ingredientes: ["Maçãs", "Farinha", "Manteiga", "Açúcar", "Canela"],
        preparo: ["Prepare a massa.", "Corte as maçãs.", "Misture com açúcar e canela.", "Monte a torta.", "Cubra com massa.", "Asse até dourar."]
    },

    {
        id: 68,
        nome: "Cookies com Chocolate",
        icone: "🍪",
        tipo: "doce",
        refeicao: "lanche",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "30-60",
        tempoTexto: "30 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Cookies crocantes por fora com chocolate.",
        ingredientes: ["Farinha", "Manteiga", "Açúcar", "Ovo", "Chocolate"],
        preparo: ["Misture manteiga e açúcar.", "Adicione ovo.", "Junte farinha.", "Misture chocolate.", "Modele os cookies.", "Asse até dourar."]
    },


    // ========================================================
    // LANCHES
    // ========================================================

    {
        id: 69,
        nome: "Misto-Quente",
        icone: "🥪",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "ate10",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Sanduíche quente de presunto e queijo.",
        ingredientes: ["2 fatias de pão", "Presunto", "Queijo", "Manteiga"],
        preparo: ["Monte o sanduíche.", "Passe manteiga por fora.", "Leve à frigideira ou sanduicheira.", "Doure os dois lados.", "Sirva quente."]
    },

    {
        id: 70,
        nome: "Sanduíche Natural de Frango",
        icone: "🥪",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "10-30",
        tempoTexto: "15 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Sanduíche leve recheado com frango desfiado.",
        ingredientes: ["Pão de forma", "Frango desfiado", "Maionese", "Cenoura", "Alface"],
        preparo: ["Misture o frango com maionese.", "Adicione cenoura.", "Monte no pão.", "Coloque alface.", "Feche e sirva."]
    },

    {
        id: 71,
        nome: "Cachorro-Quente Brasileiro",
        icone: "🌭",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "10-30",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Hot dog brasileiro com molho e batata palha.",
        ingredientes: ["Pão", "Salsicha", "Molho de tomate", "Milho", "Batata palha"],
        preparo: ["Prepare o molho.", "Cozinhe as salsichas.", "Coloque no pão.", "Adicione milho.", "Finalize com batata palha."]
    },

    {
        id: 72,
        nome: "X-Salada",
        icone: "🍔",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Hambúrguer brasileiro com queijo e salada.",
        ingredientes: ["Pão", "Hambúrguer", "Queijo", "Alface", "Tomate", "Molho"],
        preparo: ["Grelhe o hambúrguer.", "Derreta o queijo.", "Monte no pão.", "Adicione alface e tomate.", "Finalize com molho."]
    },

    {
        id: 73,
        nome: "X-Bacon",
        icone: "🥓",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Hambúrguer com queijo e bacon crocante.",
        ingredientes: ["Pão", "Hambúrguer", "Bacon", "Queijo", "Molho"],
        preparo: ["Frite o bacon.", "Grelhe o hambúrguer.", "Adicione queijo.", "Monte no pão.", "Coloque bacon e molho."]
    },

    {
        id: 74,
        nome: "Crepioca Recheada",
        icone: "🥞",
        tipo: "salgado",
        refeicao: "cafe",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "ate10",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Massa rápida feita com tapioca e ovo.",
        ingredientes: ["2 ovos", "2 colheres de tapioca", "Queijo", "Sal"],
        preparo: ["Misture os ovos e a tapioca.", "Tempere.", "Coloque em uma frigideira.", "Doure dos dois lados.", "Adicione queijo.", "Dobre e sirva."]
    },

    {
        id: 75,
        nome: "Omelete Recheado",
        icone: "🍳",
        tipo: "salgado",
        refeicao: "cafe",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "ate10",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Omelete rápido com queijo e vegetais.",
        ingredientes: ["3 ovos", "Queijo", "Tomate", "Orégano", "Sal"],
        preparo: ["Bata os ovos.", "Tempere.", "Coloque na frigideira.", "Adicione o recheio.", "Dobre.", "Cozinhe até firmar."]
    },

    {
        id: 76,
        nome: "Pão na Chapa com Ovo",
        icone: "🍳",
        tipo: "salgado",
        refeicao: "cafe",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "ate10",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Café da manhã simples com pão tostado e ovo.",
        ingredientes: ["Pão", "2 ovos", "Manteiga", "Sal"],
        preparo: ["Passe manteiga no pão.", "Toste na frigideira.", "Frite os ovos.", "Tempere.", "Sirva junto."]
    },

    {
        id: 77,
        nome: "Wrap de Frango",
        icone: "🌯",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Wrap recheado com frango e vegetais.",
        ingredientes: ["Tortilla", "Frango", "Alface", "Tomate", "Queijo"],
        preparo: ["Prepare o frango.", "Aqueça a tortilla.", "Adicione os ingredientes.", "Dobre as laterais.", "Enrole.", "Sirva."]
    },

    {
        id: 78,
        nome: "Batata Recheada",
        icone: "🥔",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "50 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Batata assada recheada com queijo e bacon.",
        ingredientes: ["2 batatas grandes", "Queijo", "Bacon", "Requeijão", "Cebolinha"],
        preparo: ["Asse as batatas.", "Corte ao meio.", "Retire parte do interior.", "Misture com o recheio.", "Volte para a casca.", "Gratine no forno."]
    },


    // ========================================================
    // DOCES
    // ========================================================

    {
        id: 79,
        nome: "Pudim de Leite",
        icone: "🍮",
        tipo: "doce",
        refeicao: "lanche",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "acima60",
        tempoTexto: "1h20",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Pudim cremoso com calda de caramelo.",
        ingredientes: ["1 lata de leite condensado", "2 medidas de leite", "3 ovos", "1 xícara de açúcar"],
        preparo: ["Prepare a calda de açúcar.", "Bata os demais ingredientes.", "Coloque na forma.", "Asse em banho-maria.", "Deixe esfriar.", "Leve à geladeira e desenforme."]
    },

    {
        id: 80,
        nome: "Mousse de Maracujá",
        icone: "🥭",
        tipo: "doce",
        refeicao: "lanche",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
        tempoTexto: "10 min + geladeira",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Sobremesa cremosa e refrescante de maracujá.",
        ingredientes: ["1 lata de leite condensado", "1 caixa de creme de leite", "Suco concentrado de maracujá"],
        preparo: ["Coloque todos os ingredientes no liquidificador.", "Bata até ficar cremoso.", "Distribua em potes.", "Leve à geladeira.", "Sirva gelado."]
    },

    {
        id: 81,
        nome: "Mousse de Chocolate",
        icone: "🍫",
        tipo: "doce",
        refeicao: "lanche",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "10-30",
        tempoTexto: "15 min + geladeira",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "francesa",
        descricao: "Mousse cremosa e intensa de chocolate.",
        ingredientes: ["200 g de chocolate", "1 caixa de creme de leite", "3 claras", "2 colheres de açúcar"],
        preparo: ["Derreta o chocolate.", "Misture com creme de leite.", "Bata as claras com açúcar.", "Incorpore delicadamente.", "Leve à geladeira."]
    },

    {
        id: 82,
        nome: "Cheesecake de Morango",
        icone: "🍓",
        tipo: "doce",
        refeicao: "lanche",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "acima60",
        tempoTexto: "2h",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "americana",
        descricao: "Cheesecake cremoso coberto com morangos.",
        ingredientes: ["Biscoito", "Manteiga", "Cream cheese", "Açúcar", "Morangos"],
        preparo: ["Triture os biscoitos.", "Misture com manteiga.", "Monte a base.", "Prepare o creme.", "Coloque sobre a base.", "Leve à geladeira e finalize com morangos."]
    },

    {
        id: 83,
        nome: "Torta de Limão",
        icone: "🍋",
        tipo: "doce",
        refeicao: "lanche",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "45 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Torta doce e cremosa com cobertura de limão.",
        ingredientes: ["Biscoito", "Manteiga", "Leite condensado", "Creme de leite", "Limão"],
        preparo: ["Faça a base com biscoito e manteiga.", "Misture os ingredientes do creme.", "Coloque sobre a base.", "Leve à geladeira.", "Finalize com raspas de limão."]
    },

    {
        id: 84,
        nome: "Bolo de Cenoura com Chocolate",
        icone: "🥕",
        tipo: "doce",
        refeicao: "lanche",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "50 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Bolo fofinho de cenoura com cobertura de chocolate.",
        ingredientes: ["3 cenouras", "3 ovos", "2 xícaras de farinha", "Açúcar", "Óleo", "Chocolate"],
        preparo: ["Bata cenoura, ovos e óleo.", "Misture com farinha e açúcar.", "Coloque em forma.", "Asse até dourar.", "Prepare a cobertura.", "Cubra o bolo."]
    },

    {
        id: 85,
        nome: "Bolo de Chocolate",
        icone: "🍰",
        tipo: "doce",
        refeicao: "lanche",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "30-60",
        tempoTexto: "50 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Bolo fofinho de chocolate.",
        ingredientes: ["2 xícaras de farinha", "1 xícara de chocolate em pó", "2 ovos", "Açúcar", "Leite", "Óleo"],
        preparo: ["Misture os ingredientes secos.", "Adicione os líquidos.", "Misture até ficar homogêneo.", "Coloque em forma.", "Asse a 180 °C.", "Deixe esfriar antes de servir."]
    },

    {
        id: 86,
        nome: "Beijinho",
        icone: "🥥",
        tipo: "doce",
        refeicao: "lanche",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "10-30",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Doce de coco tradicional para festas.",
        ingredientes: ["1 lata de leite condensado", "100 g de coco ralado", "1 colher de manteiga", "Açúcar"],
        preparo: ["Misture leite condensado, coco e manteiga.", "Cozinhe mexendo.", "Espere desgrudar da panela.", "Deixe esfriar.", "Modele e passe no açúcar."]
    },

    {
        id: 87,
        nome: "Cajuzinho",
        icone: "🥜",
        tipo: "doce",
        refeicao: "lanche",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "10-30",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Doce brasileiro feito com amendoim e chocolate.",
        ingredientes: ["200 g de amendoim", "Chocolate em pó", "Leite condensado", "Açúcar"],
        preparo: ["Triture o amendoim.", "Misture com chocolate.", "Adicione leite condensado aos poucos.", "Modele os cajuzinhos.", "Passe no açúcar."]
    },

    {
        id: 88,
        nome: "Palha Italiana",
        icone: "🍫",
        tipo: "doce",
        refeicao: "lanche",
        preco: "ate10",
        precoTexto: "Até R$ 10",
        tempo: "10-30",
        tempoTexto: "25 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Brigadeiro cremoso com pedaços de biscoito.",
        ingredientes: ["Leite condensado", "Chocolate em pó", "Manteiga", "Biscoito maisena", "Açúcar"],
        preparo: ["Prepare o brigadeiro.", "Quebre os biscoitos.", "Misture os biscoitos ao brigadeiro.", "Espalhe em uma forma.", "Leve à geladeira.", "Corte em quadrados."]
    },

    {
        id: 89,
        nome: "Banoffee",
        icone: "🍌",
        tipo: "doce",
        refeicao: "lanche",
        preco: "25-50",
        precoTexto: "R$ 25–50",
        tempo: "30-60",
        tempoTexto: "45 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "inglesa",
        descricao: "Sobremesa com banana, doce de leite e chantilly.",
        ingredientes: ["Biscoito", "Manteiga", "Doce de leite", "Bananas", "Chantilly", "Canela"],
        preparo: ["Prepare a base de biscoito.", "Espalhe o doce de leite.", "Adicione as bananas.", "Cubra com chantilly.", "Finalize com canela.", "Leve à geladeira."]
    },

    {
        id: 90,
        nome: "Sorvete com Frutas",
        icone: "🍨",
        tipo: "doce",
        refeicao: "lanche",
        preco: "10-25",
        precoTexto: "R$ 10–25",
        tempo: "ate10",
        tempoTexto: "5 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Sorvete servido com frutas e cobertura.",
        ingredientes: ["2 bolas de sorvete", "Banana", "Morangos", "Calda de chocolate", "Granulado"],
        preparo: ["Coloque o sorvete em uma taça.", "Corte as frutas.", "Adicione as frutas.", "Coloque a calda.", "Finalize com granulado.", "Sirva imediatamente."]
    }
];


// ============================================================
// VARIÁVEIS
// ============================================================

let comidaAtual = null;


// ============================================================
// GERAR COMIDA
// ============================================================

function gerarComida() {

    const tipo = document.getElementById("tipo")?.value || "qualquer";
    const refeicao = document.getElementById("refeicao")?.value || "qualquer";
    const preco = document.getElementById("preco")?.value || "qualquer";
    const tempo = document.getElementById("tempo")?.value || "qualquer";
    const dificuldade = document.getElementById("dificuldade")?.value || "qualquer";
    const culinaria = document.getElementById("culinaria")?.value || "qualquer";

    let resultados = comidas.filter(comida => {

        const combinaTipo =
            tipo === "qualquer" ||
            tipo === "" ||
            comida.tipo === tipo;

        const combinaRefeicao =
            refeicao === "qualquer" ||
            refeicao === "" ||
            comida.refeicao === refeicao;

        const combinaPreco =
            preco === "qualquer" ||
            preco === "" ||
            comida.preco === preco;

        const combinaTempo =
            tempo === "qualquer" ||
            tempo === "" ||
            comida.tempo === tempo;

        const combinaDificuldade =
            dificuldade === "qualquer" ||
            dificuldade === "" ||
            comida.dificuldade === dificuldade;

        const combinaCulinaria =
            culinaria === "qualquer" ||
            culinaria === "" ||
            comida.culinaria === culinaria;

        return (
            combinaTipo &&
            combinaRefeicao &&
            combinaPreco &&
            combinaTempo &&
            combinaDificuldade &&
            combinaCulinaria
        );
    });


    // --------------------------------------------------------
    // Se não encontrar exatamente, tenta pelo tipo
    // --------------------------------------------------------

    if (resultados.length === 0) {

        resultados = comidas.filter(comida => {

            const combinaTipo =
                tipo === "qualquer" ||
                tipo === "" ||
                comida.tipo === tipo;

            return combinaTipo;
        });
    }


    // --------------------------------------------------------
    // Se ainda não houver resultado, usa todas
    // --------------------------------------------------------

    if (resultados.length === 0) {
        resultados = comidas;
    }


    // --------------------------------------------------------
    // Escolha aleatória
    // --------------------------------------------------------

    const comida =
        resultados[Math.floor(Math.random() * resultados.length)];

    mostrarResultado(comida);
}


// ============================================================
// MOSTRAR RESULTADO
// ============================================================

function mostrarResultado(comida) {

    comidaAtual = comida;

    const resultado = document.getElementById("resultado");

    if (resultado) {
        resultado.hidden = false;
    }


    // Nome
    const nome = document.getElementById("foodName");
    if (nome) nome.textContent = comida.nome;


    // Ícone
    const icone = document.getElementById("foodIcon");
    if (icone) icone.textContent = comida.icone;


    // Descrição
    const descricao = document.getElementById("foodDescription");
    if (descricao) descricao.textContent = comida.descricao;


    // Tipo
    const tipo = document.getElementById("foodType");
    if (tipo) {
        tipo.textContent =
            comida.tipo === "doce"
                ? "Doce"
                : "Salgado";
    }


    // Badge
    const badge = document.getElementById("foodTypeBadge");

    if (badge) {
        badge.textContent =
            comida.tipo === "doce"
                ? "🍰 DOCE"
                : "🍽️ SALGADO";
    }


    // Preço
    const preco = document.getElementById("foodPrice");
    if (preco) preco.textContent = comida.precoTexto;


    // Tempo
    const tempo = document.getElementById("foodTime");
    if (tempo) tempo.textContent = comida.tempoTexto;


    // Dificuldade
    const dificuldade = document.getElementById("foodDifficulty");
    if (dificuldade) dificuldade.textContent = comida.dificuldadeTexto;


    // Ingredientes
    const ingredientsList =
        document.getElementById("ingredientsList");

    if (ingredientsList) {

        ingredientsList.innerHTML = "";

        comida.ingredientes.forEach(ingrediente => {

            const li = document.createElement("li");

            li.textContent = ingrediente;

            ingredientsList.appendChild(li);
        });
    }


    // Preparo
    const stepsList =
        document.getElementById("stepsList");

    if (stepsList) {

        stepsList.innerHTML = "";

        comida.preparo.forEach(passo => {

            const li = document.createElement("li");

            li.textContent = passo;

            stepsList.appendChild(li);
        });
    }


    // Atualiza URL
    atualizarURL(comida.id);


    // Scroll
    setTimeout(() => {

        if (resultado) {

            resultado.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }, 100);
}


// ============================================================
// URL DA RECEITA
// ============================================================

function criarLinkReceita(comida) {

    const url =
        new URL(window.location.href);

    url.search = "";

    url.searchParams.set(
        "receita",
        comida.id
    );

    return url.toString();
}


function atualizarURL(id) {

    const url =
        new URL(window.location.href);

    url.searchParams.set(
        "receita",
        id
    );

    window.history.replaceState(
        {},
        "",
        url
    );
}


// ============================================================
// COMPARTILHAR
// ============================================================

async function compartilhar() {

    if (!comidaAtual) {
        mostrarToast("Gere uma comida primeiro!");
        return;
    }


    const link =
        criarLinkReceita(comidaAtual);


    const shareBox =
        document.getElementById("shareBox");

    const shareLink =
        document.getElementById("shareLink");


    if (shareBox) {
        shareBox.hidden = false;
    }


    if (shareLink) {
        shareLink.value = link;
    }


    // Compartilhamento nativo do celular
    if (navigator.share) {

        try {

            await navigator.share({

                title:
                    `FoodGen - ${comidaAtual.nome}`,

                text:
                    `Olha essa receita que encontrei no FoodGen: ${comidaAtual.nome}`,

                url: link

            });

            return;

        } catch (erro) {

            // Usuário cancelou o compartilhamento
            if (erro.name === "AbortError") {
                return;
            }
        }
    }


    // Caso não tenha navigator.share
    const copiou =
        await copiarTexto(link);


    if (copiou) {

        mostrarToast(
            "🔗 Link da receita copiado!"
        );

    } else {

        mostrarToast(
            "Copie o link da caixa de compartilhamento."
        );
    }
}


// ============================================================
// COPIAR LINK
// ============================================================

async function copiarLink() {

    const input =
        document.getElementById("shareLink");

    if (!input) return;


    const sucesso =
        await copiarTexto(input.value);


    if (sucesso) {

        mostrarToast(
            "✅ Link copiado!"
        );

    } else {

        input.select();

        mostrarToast(
            "Selecione e copie o link manualmente."
        );
    }
}


// ============================================================
// FUNÇÃO DE CÓPIA
// ============================================================

async function copiarTexto(texto) {

    try {

        if (
            navigator.clipboard &&
            window.isSecureContext
        ) {

            await navigator.clipboard.writeText(texto);

            return true;
        }

    } catch (erro) {

        console.log(
            "Clipboard API indisponível:",
            erro
        );
    }


    // Fallback para navegadores antigos
    try {

        const textarea =
            document.createElement("textarea");

        textarea.value = texto;

        textarea.style.position = "fixed";
        textarea.style.opacity = "0";

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        const sucesso =
            document.execCommand("copy");

        document.body.removeChild(textarea);

        return sucesso;

    } catch (erro) {

        console.error(
            "Não foi possível copiar:",
            erro
        );

        return false;
    }
}


// ============================================================
// FAVORITAR
// ============================================================

function favoritar() {

    const botao =
        document.querySelector(".favorite-btn");

    if (!botao) return;


    const estaFavoritado =
        botao.classList.toggle("favoritado");


    const icone =
        botao.querySelector("span");


    if (icone) {

        icone.textContent =
            estaFavoritado
                ? "❤️"
                : "🤍";
    }


    mostrarToast(
        estaFavoritado
            ? "❤️ Receita adicionada aos favoritos!"
            : "Receita removida dos favoritos."
    );
}


// ============================================================
// TOAST
// ============================================================

function mostrarToast(mensagem) {

    const toast =
        document.getElementById("toast");

    if (!toast) return;


    toast.textContent = mensagem;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}


// ============================================================
// CARREGAR RECEITA PELO LINK
// ============================================================

function carregarReceitaDoLink() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        parseInt(
            params.get("receita")
        );


    if (!id) return;


    const comida =
        comidas.find(
            item => item.id === id
        );


    if (!comida) return;


    mostrarResultadoSemAlterarURL(
        comida
    );
}


// ============================================================
// MOSTRAR RECEITA SEM ALTERAR URL
// ============================================================

function mostrarResultadoSemAlterarURL(comida) {

    comidaAtual = comida;


    const resultado =
        document.getElementById("resultado");

    if (resultado) {
        resultado.hidden = false;
    }


    const nome =
        document.getElementById("foodName");

    if (nome) {
        nome.textContent =
            comida.nome;
    }


    const icone =
        document.getElementById("foodIcon");

    if (icone) {
        icone.textContent =
            comida.icone;
    }


    const descricao =
        document.getElementById("foodDescription");

    if (descricao) {
        descricao.textContent =
            comida.descricao;
    }


    const tipo =
        document.getElementById("foodType");

    if (tipo) {
        tipo.textContent =
            comida.tipo === "doce"
                ? "Doce"
                : "Salgado";
    }


    const badge =
        document.getElementById("foodTypeBadge");

    if (badge) {
        badge.textContent =
            comida.tipo === "doce"
                ? "🍰 DOCE"
                : "🍽️ SALGADO";
    }


    const preco =
        document.getElementById("foodPrice");

    if (preco) {
        preco.textContent =
            comida.precoTexto;
    }


    const tempo =
        document.getElementById("foodTime");

    if (tempo) {
        tempo.textContent =
            comida.tempoTexto;
    }


    const dificuldade =
        document.getElementById("foodDifficulty");

    if (dificuldade) {
        dificuldade.textContent =
            comida.dificuldadeTexto;
    }


    const ingredientsList =
        document.getElementById("ingredientsList");


    if (ingredientsList) {

        ingredientsList.innerHTML = "";

        comida.ingredientes.forEach(
            ingrediente => {

                const li =
                    document.createElement("li");

                li.textContent =
                    ingrediente;

                ingredientsList.appendChild(li);
            }
        );
    }


    const stepsList =
        document.getElementById("stepsList");


    if (stepsList) {

        stepsList.innerHTML = "";

        comida.preparo.forEach(
            passo => {

                const li =
                    document.createElement("li");

                li.textContent =
                    passo;

                stepsList.appendChild(li);
            }
        );
    }


    // Pequeno atraso para garantir que o DOM carregou
    setTimeout(() => {

        if (resultado) {

            resultado.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }, 300);
}


// ============================================================
// INICIALIZAÇÃO
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        carregarReceitaDoLink();

    }
);
