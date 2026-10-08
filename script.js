// ========================================================
// BANCO DE DADOS DE COMIDAS (90 Opções)
// ========================================================
const comidas = [
    // --- Salgados / Brasileira ---
    {
        id: 1,
        nome: "Feijoada Completa",
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
        descricao: "Tradicional feijoada brasileira com feijão preto e carnes suínas.",
        ingredientes: ["500g feijão preto", "Carne seca", "Costelinha de porco", "Linguiça calabresa", "Alho e cebola"],
        preparo: ["Deixe as carnes e o feijão de molho.", "Cozinhe o feijão com as carnes.", "Refogue o alho e a cebola.", "Junte tudo e apure até engrossar."]
    },
    {
        id: 2,
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
        descricao: "Clássico pão de queijo mineiro quentinho e crocante.",
        ingredientes: ["500g polvilho azedo", "250ml leite", "100ml óleo", "2 ovos", "200g queijo meia cura"],
        preparo: ["Escalde o polvilho com o leite e óleo quentes.", "Adicione os ovos e o queijo.", "Modele as bolinhas.", "Asse a 180°C por 30 minutos."]
    },
    {
        id: 3,
        nome: "Moqueca Baiana",
        icone: "🥘",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "premium",
        precoTexto: "Acima de R\$ 50",
        tempo: "demorado",
        tempoTexto: "50 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Especialidade baiana com peixe, leite de coco e azeite de dendê.",
        ingredientes: ["800g postas de peixe", "Leite de coco", "Azeite de dendê", "Pimentões coloridos", "Coentro e tomate"],
        preparo: ["Marine o peixe.", "Monte camadas de peixe e vegetais na panela.", "Adicione o leite de coco e dendê.", "Cozinhe em fogo brando por 25 minutos."]
    },
    {
        id: 4,
        nome: "Coxinha de Frango",
        icone: "🍗",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "demorado",
        tempoTexto: "50 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Salgado clássico de festa recheado com frango desfocado.",
        ingredientes: ["2 xícaras caldo de frango", "2 xícaras farinha de trigo", "300g frango desfiado", "Requeijão", "Farinha de rosca"],
        preparo: ["Faça a massa no fogo mexendo o caldo com a farinha.", "Modele recheando com frango e requeijão.", "Passe no ovo e farinha de rosca.", "Frite em óleo quente."]
    },
    {
        id: 5,
        nome: "Strogonoff de Frango",
        icone: "🥘",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "medio",
        tempoTexto: "30 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Cube de frango ao molho cremoso com creme de leite e batata palha.",
        ingredientes: ["500g peito de frango", "1 caixa de creme de leite", "2 colheres ketchup", "1 colher mostarda", "Cogumelos"],
        preparo: ["Dore o frango temperado na frigideira.", "Adicione ketchup, mostarda e cogumelos.", "Desligue o fogo e misture o creme de leite.", "Sirva com batata palha."]
    },
    {
        id: 6,
        nome: "Escondidinho de Carne Seca",
        icone: "🥧",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "medio",
        precoTexto: "R\$ 25–50",
        tempo: "demorado",
        tempoTexto: "45 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Purê de mandioca cremoso com recheio de carne seca dessalgada.",
        ingredientes: ["500g mandioca cozida", "400g carne seca desfiada", "1/2 xícara leite", "Queijo coalho ralado", "Manteiga de garrafa"],
        preparo: ["Amasse a mandioca com leite e manteiga para fazer o purê.", "Refogue a carne seca.", "Monte em uma travessa com camadas de purê e carne.", "Gratine com queijo."]
    },
    {
        id: 7,
        nome: "Vatapá",
        icone: "🍲",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "medio",
        precoTexto: "R\$ 25–50",
        tempo: "demorado",
        tempoTexto: "50 min",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "brasileira",
        descricao: "Creme aveludado de pão, camarão seco, amendoim e dendê.",
        ingredientes: ["200g pão dormido", "Leite de coco", "Camarão seco", "Amendoim e castanha moídos", "Azeite de dendê"],
        preparo: ["Amoleça o pão no leite de coco.", "Bata no liquidificador com amendoim e castanha.", "Cozinhe mexendo sempre.", "Adicione camarões e finalize com dendê."]
    },
    {
        id: 8,
        nome: "Tapioca Recheada",
        icone: "🌮",
        tipo: "salgado",
        refeicao: "cafe",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "rapido",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Massa leve de goma de mandioca tostada na frigideira com queijo e presunto.",
        ingredientes: ["100g goma de tapioca hidratada", "2 fatias de queijo", "2 fatias de presunto", "Orégano a gosto"],
        preparo: ["Peneire a goma direto na frigideira bem quente.", "Espalhe formando um disco.", "Adicione o recheio assim que firmar.", "Dobre ao meio e sirva."]
    },
    {
        id: 9,
        nome: "Farofa de Banana",
        icone: "🥗",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "rapido",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Acompanhamento crocante e agridoce perfeito para grelhados.",
        ingredientes: ["2 bananas da terra", "1 xícara farinha de mandioca", "2 colheres manteiga", "1/2 cebola picada", "Sal e cheiro-verde"],
        preparo: ["Derreta a manteiga e doure a cebola com a banana.", "Acrescente a farinha aos poucos.", "Mexa bem até dourar.", "Tempere com sal e cheiro-verde."]
    },
    {
        id: 10,
        nome: "Baião de Dois",
        icone: "🍚",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "demorado",
        tempoTexto: "40 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Combinação clássica nordestina de arroz, feijão de corda e queijo coalho.",
        ingredientes: ["2 xícaras arroz", "2 xícaras feijão de corda", "150g queijo coalho em cubos", "Bacon picado", "Coentro"],
        preparo: ["Frite o bacon e doure os temperos.", "Misture o feijão cozido e o arroz.", "Adicione a água do feijão para cozinhar o arroz.", "Finalize misturando os cubos de queijo."]
    },

    // --- Salgados / Italiana ---
    {
        id: 11,
        nome: "Pizza de Calabresa",
        icone: "🍕",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "medio",
        precoTexto: "R\$ 25–50",
        tempo: "medio",
        tempoTexto: "30 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Pizza tradicional com massa crocante, calabresa fatiada e cebola.",
        ingredientes: ["Massa para pizza", "150g muçarela", "1 linguiça calabresa fatiada", "1/2 cebola fatiada", "Molho de tomate e orégano"],
        preparo: ["Abra a massa e passe o molho de tomate.", "Cubra com muçarela, calabresa e cebola.", "Salpique orégano.", "Asse a 220°C por 15 a 20 minutos."]
    },
    {
        id: 12,
        nome: "Lasanha à Bolonhesa",
        icone: "🍝",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "medio",
        precoTexto: "R\$ 25–50",
        tempo: "longo",
        tempoTexto: "1h",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Camadas intercaladas de massa, molho à bolonhesa, molho branco e queijo.",
        ingredientes: ["Massa para lasanha", "400g carne moída", "Molho de tomate", "Molho branco", "300g queijo muçarela"],
        preparo: ["Prepare o molho de carne moída.", "Em um refratário, intercale molho, massa, presunto e queijo.", "Finalize com bastante queijo por cima.", "Asse por 35 minutos."]
    },
    {
        id: 13,
        nome: "Macarrão Carbonara",
        icone: "🍝",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "medio",
        tempoTexto: "20 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Receita clássica romana com ovos, queijo parmesão e guanciale/pancetta.",
        ingredientes: ["200g espaguete", "2 gemas e 1 ovo inteiro", "100g bacon ou guanciale", "50g queijo parmesão ralado", "Pimenta-do-reino"],
        preparo: ["Cozinhe o espaguete.", "Frite o bacon até ficar crocante.", "Misture os ovos com o queijo.", "Adicione a massa quente fora do fogo e misture a emulsão."]
    },
    {
        id: 14,
        nome: "Risoto de Cogumelos",
        icone: "🍲",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "caro",
        precoTexto: "R\$ 25–50",
        tempo: "medio",
        tempoTexto: "30 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Arroz arbóreo cremoso feito com caldo de legumes e cogumelos frescos.",
        ingredientes: ["200g arroz arbóreo", "150g cogumelos paris", "Caldo de legumes", "1/2 xícara vinho branco", "Manteiga e parmesão"],
        preparo: ["Refogue os cogumelos na manteiga.", "Refogue o arroz e adicione o vinho.", "Vá adicionando o caldo quente aos poucos mexendo sempre.", "Finalize com manteiga e parmesão."]
    },
    {
        id: 15,
        nome: "Gnocchi ao Pesto",
        icone: "🧆",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "medio",
        precoTexto: "R\$ 25–50",
        tempo: "demorado",
        tempoTexto: "45 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Nhoque macio de batata envolvido em molho fresco de manjericão e nozes.",
        ingredientes: ["500g batata cozida", "1 xícara farinha de trigo", "1 maço manjericão", "Azeite de oliva", "Nozes e parmesão"],
        preparo: ["Amasse a batata e faça a massa com farinha.", "Modele e corte os nhoques.", "Cozinhe em água fervente até subirem.", "Misture ao molho pesto batido no liquidificador."]
    },
    {
        id: 16,
        nome: "Focaccia de Alecrim",
        icone: "🍞",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "longo",
        tempoTexto: "1h 30min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Pão artesanal macio por dentro e crocante por fora com azeite e alecrim.",
        ingredientes: ["500g farinha de trigo", "10g fermento biológico", "Azeite extra virgem", "Alecrim fresco", "Sal grosso"],
        preparo: ["Sove a massa com bastante azeite e deixe fermentar.", "Espalhe na assadeira criando cavidades com os dedos.", "Regue com azeite, alecrim e sal grosso.", "Asse a 200°C."]
    },
    {
        id: 17,
        nome: "Polenta Cremosa",
        icone: "🍲",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "medio",
        tempoTexto: "30 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "italiana",
        descricao: "Polenta cremosa de fubá com ragu de carne de panela.",
        ingredientes: ["1 xícara fubá pré-cozido", "4 xícaras caldo de galinha", "1 colher manteiga", "Carne desfiada ao molho", "Parmesão"],
        preparo: ["Cozinhe o fubá no caldo mexendo sem parar até engrossar.", "Incorpore manteiga e parmesão.", "Sirva quente cobrindo com o ragu de carne."]
    },
    {
        id: 18,
        nome: "Ravioli de Queijo",
        icone: "🥟",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "caro",
        precoTexto: "R\$ 25–50",
        tempo: "demorado",
        tempoTexto: "50 min",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "italiana",
        descricao: "Massa fresca recheada com ricota e ervas ao molho de tomate caseiro.",
        ingredientes: ["200g farinha de trigo", "2 ovos", "200g ricota", "Molho de tomate fresco", "Noz-moscada e sal"],
        preparo: ["Estique a massa bem fina.", "Disponha porções de ricota temperada.", "Dobre, sele e corte os raviolis.", "Cozinhe em água fervente por 3 minutos."]
    },
    {
        id: 19,
        nome: "Bruschetta Tradicional",
        icone: "🥖",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "rapido",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "italiana",
        descricao: "Fatias de pão italiano tostado com alho, tomates picados e manjericão.",
        ingredientes: ["Pão italiano fatiado", "2 tomates maduros picados", "1 dente de alho", "Azeite de oliva", "Manjericão fresco"],
        preparo: ["Toste as fatias de pão e esfregue o dente de alho sobre elas.", "Misture o tomate picado com azeite e manjericão.", "Coloque a mistura sobre o pão e sirva."]
    },
    {
        id: 20,
        nome: "Calzone de Presunto e Queijo",
        icone: "🥟",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "demorado",
        tempoTexto: "40 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Pizza dobrada em formato de pastel grande e assada no forno.",
        ingredientes: ["Massa de pizza", "150g presunto fatiado", "200g muçarela", "Molho de tomate", "Orégano"],
        preparo: ["Abra a massa em disco.", "Recheie metade com molho, presunto e queijo.", "Dobre ao meio e sele bem as bordas.", "Asse no forno até dourar."]
    },

    // --- Salgados / Japonesa ---
    {
        id: 21,
        nome: "Sushi Combo (Hot Roll e Uramaki)",
        icone: "🍣",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "premium",
        precoTexto: "Acima de R\$ 50",
        tempo: "demorado",
        tempoTexto: "50 min",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "japonesa",
        descricao: "Combinação clássica de rolinhos de arroz com salmão e alga nori.",
        ingredientes: ["Arroz para sushi (Shari)", "Folhas de Nori", "Salmão fresco", "Cream cheese", "Molho Shoyu"],
        preparo: ["Prepare o arroz temperado com vinagre.", "Espalhe sobre a nori e adicione o recheio.", "Enrole com a esteira de bambu (sudare).", "Corte em fatias e sirva com shoyu."]
    },
    {
        id: 22,
        nome: "Ramen Tradicional",
        icone: "🍜",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "caro",
        precoTexto: "R\$ 25–50",
        tempo: "longo",
        tempoTexto: "1h",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Sopa nutritiva de macarrão japonês em caldo rico de carnes com ovo marinado.",
        ingredientes: ["Macarrão para ramen", "Caldo temperado (shoyu ou misso)", "Barriga de porco (chashu)", "Ovo cozido marinado", "Cebolinha"],
        preparo: ["Aqueça o caldo e cozinhe o macarrão.", "Coloque a massa na tigela com o caldo quente.", "Decore com fatias de porco, ovo cortado e cebolinha."]
    },
    {
        id: 23,
        nome: "Yakisoba de Carne e Legumes",
        icone: "🍱",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "medio",
        precoTexto: "R\$ 25–50",
        tempo: "medio",
        tempoTexto: "30 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "japonesa",
        descricao: "Macarrão frito salteado com legumes frescos e tiras de carne ao molho shoyu.",
        ingredientes: ["300g macarrão para yakisoba", "200g alcatra em tiras", "Brócolis, cenoura e acelga", "Molho de yakisoba", "Óleo de gergelim"],
        preparo: ["Cozinhe o macarrão.", "Frite a carne e adicione os legumes picados.", "Junte o macarrão e despeje o molho.", "Misture em fogo alto até encorpar."]
    },
    {
        id: 24,
        nome: "Temaki de Salmão",
        icone: "🍙",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "caro",
        precoTexto: "R\$ 25–50",
        tempo: "rapido",
        tempoTexto: "15 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Cone de alga nori recheado com arroz, salmão em cubos e cebolinha.",
        ingredientes: ["1/2 folha de Nori", "Arroz de sushi", "100g salmão em cubos", "Cream cheese", "Cebolinha picada"],
        preparo: ["Coloque o arroz no canto esquerdo da nori.", "Adicione o salmão com cream cheese e cebolinha.", "Enrole em formato de cone e sirva imediatamente."]
    },
    {
        id: 25,
        nome: "Gyosa de Porco",
        icone: "🥟",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "demorado",
        tempoTexto: "40 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Pastéis japoneses grelhados por baixo e cozidos no vapor por cima.",
        ingredientes: ["Massa para gyosa", "200g carne de porco moída", "Acelga picada", "Gengibre e alho", "Shoyu e óleo de gergelim"],
        preparo: ["Misture o recheio e recheie os discos de massa.", "Pregue as bordas.", "Dore o fundo na frigideira com óleo, adicione um pouco de água e tampe para cozinhar no vapor."]
    },
    {
        id: 26,
        nome: "Chicken Katsu Curry",
        icone: "🍛",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "caro",
        precoTexto: "R\$ 25–50",
        tempo: "demorado",
        tempoTexto: "45 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Frango empanado crocante servido com molho curry japonês e arroz.",
        ingredientes: ["Peito de frango empanado na farinha panko", "Tablete de curry japonês", "Batata e cenoura em cubos", "Arroz branco"],
        preparo: ["Frite o frango até dourar.", "Cozinhe a batata e cenoura e dissolva o tablete de curry na água.", "Sirva o frango fatiado ao lado do arroz com o molho curry."]
    },
    {
        id: 27,
        nome: "Takoyaki (Bolinho de Polvo)",
        icone: "🐙",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 25–50",
        tempo: "medio",
        tempoTexto: "30 min",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "japonesa",
        descricao: "Bolinhos redondos recheados com polvo e finalizados com molho tonkatsu.",
        ingredientes: ["Massa fluida de dashi e farinha", "Polvo cozido em cubos", "Molho Takoyaki", "Maionese japonesa", "Katsuobushi (flocos de bonito)"],
        preparo: ["Despeje a massa na chapa especial redonda.", "Adicione os pedaços de polvo.", "Gire os bolinhos rapidamente com palitos até ficarem redondos e assados.", "Finalize com os molhos."]
    },
    {
        id: 28,
        nome: "Sashimi de Salmão",
        icone: "🐟",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "premium",
        precoTexto: "Acima de R\$ 50",
        tempo: "rapido",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "japonesa",
        descricao: "Fatias puras de salmão fresco servidas com gergelim e raiz-forte.",
        ingredientes: ["300g lombo de salmão para sashimi", "Molho Shoyu", "Wasabi", "Gengibre em conserva"],
        preparo: ["Com uma faca bem afiada, corte o salmão em fatias uniformes.", "Disponha em um prato com molho shoyu e wasabi ao lado."]
    },
    {
        id: 29,
        nome: "Misoshiru",
        icone: "🥣",
        tipo: "salgado",
        refeicao: "cafe",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "rapido",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "japonesa",
        descricao: "Sopa leve tradicional à base de pasta de soja (misso) e tofu.",
        ingredientes: ["2 colheres pasta de Misso", "500ml caldo dashi", "100g tofu em cubos", "Cebolinha picada"],
        preparo: ["Aqueça o dashi sem deixar ferver.", "Dissolva o misso com uma peneira no caldo.", "Adicione o tofu em cubos e desligue o fogo.", "Sirva com cebolinha."]
    },
    {
        id: 30,
        nome: "Okonomiyaki",
        icone: "🥞",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "medio",
        tempoTexto: "25 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Panqueca japonesa salgada feita com repolho, bacon e molho agridoce.",
        ingredientes: ["Repolho picado fino", "1 xícara massa de farinha e dashi", "Fatias de bacon", "Molho okonomiyaki", "Maionese"],
        preparo: ["Misture o repolho na massa e coloque na frigideira.", "Coloque fatias de bacon por cima e vire para grelhar.", "Pincele o molho agridoce e finalize com maionese."]
    },

    // --- Salgados / Mexicana ---
    {
        id: 31,
        nome: "Tacos de Carne Moída",
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
        descricao: "Tortillas crocantes recheadas com carne bem temperada, alface e queijo.",
        ingredientes: ["Tortillas de milho crocantes", "300g carne moída temperada com cominho", "Alface americana fatiada", "Queijo cheddar ralado", "Tomate picado"],
        preparo: ["Refogue a carne com temperos mexicanos.", "Aqueça as tortillas.", "Monte os tacos com carne, alface, tomate e queijo."]
    },
    {
        id: 32,
        nome: "Burrito de Frango",
        icone: "🌯",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "medio",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "mexicana",
        descricao: "Tortilla de trigo enrolada recheada com frango, feijão preto e arroz.",
        ingredientes: ["Tortillas grandes de trigo", "Frango grelhado desfiado", "Feijão preto cozido sem caldo", "Arroz temperado", "Sour cream (creme azedo)"],
        preparo: ["Aqueça a tortilla para amolecer.", "Disponha o arroz, feijão, frango e creme azedo no centro.", "Dobre as bordas e enrole bem apertado."]
    },
    {
        id: 33,
        nome: "Guacamole com Nachos",
        icone: "🥑",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "rapido",
        tempoTexto: "15 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "mexicana",
        descricao: "Pasta cremosa de abacate temperada acompanhada de tortilhas de milho.",
        ingredientes: ["2 abacates maduros (ou avocados)", "1 tomate sem semente picado", "1/2 cebola roxa picada", "Suco de 1 limão", "Tortilhas de milho (nachos)"],
        preparo: ["Amasse o abacate com um garfo.", "Misture a cebola, tomate, suco de limão, coentro e sal.", "Sirva gelado acompanhado dos nachos."]
    },
    {
        id: 34,
        nome: "Quesadilla de Queijo e Pimentão",
        icone: "🧀",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "rapido",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "mexicana",
        descricao: "Tortillas recheadas com queijo derretido e pimentões salteados.",
        ingredientes: ["2 tortillas de trigo", "150g queijo muçarela ou cheddar", "Pimentão fatiado", "Manteiga para dourar"],
        preparo: ["Coloque o queijo e o pimentão entre as duas tortillas.", "Dore na frigideira com um pouco de manteiga dos dois lados até o queijo derreter.", "Corte em 4 partes."]
    },
    {
        id: 35,
        nome: "Nachos Supremos",
        icone: "🧀",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "caro",
        precoTexto: "R\$ 25–50",
        tempo: "medio",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "mexicana",
        descricao: "Travessa de tortilhas cobertas por queijo derretido, pimentas e carne.",
        ingredientes: ["1 pacote de tortilhas de milho", "200g carne moída ou chilli", "200g molho de queijo cheddar", "Jalapeños fatiados", "Guacamole"],
        preparo: ["Espalhe as tortilhas em uma travessa.", "Cubra com a carne e o queijo quente.", "Decore com pimentas jalapeño e colheradas de guacamole."]
    },
    {
        id: 36,
        nome: "Enchiladas de Carne",
        icone: "🥘",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "caro",
        precoTexto: "R\$ 25–50",
        tempo: "demorado",
        tempoTexto: "40 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "mexicana",
        descricao: "Tortillas recheadas cobertas com molho picante de pimenta e gratinadas.",
        ingredientes: ["6 tortillas de trigo", "300g carne desfiada", "Molho picante para enchilada", "Queijo para gratinar"],
        preparo: ["Enrole a carne nas tortillas.", "Disponha em um refratário lado a lado.", "Banje com o molho picante e cubra com queijo.", "Asse até derreter o queijo."]
    },
    {
        id: 37,
        nome: "Fajitas de Mignon",
        icone: "🥩",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "premium",
        precoTexto: "Acima de R\$ 50",
        tempo: "medio",
        tempoTexto: "25 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "mexicana",
        descricao: "Tiras de carne com pimentões servidas fumegantes em chapa de ferro.",
        ingredientes: ["400g filé mignon em tiras", "Pimentões vermelho, amarelo e verde", "1 cebola em tiras", "Tortillas macias"],
        preparo: ["Grelhe a carne em fogo alto.", "Salteie os pimentões e a cebola.", "Sirva tudo na chapa bem quente com tortillas ao lado."]
    },
    {
        id: 38,
        nome: "Chilli com Carne",
        icone: "🫘",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "demorado",
        tempoTexto: "45 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "mexicana",
        descricao: "Guisado encorpado de feijão vermelho com carne moída e pimenta.",
        ingredientes: ["250g feijão vermelho cozido", "300g carne moída", "Molho de tomate", "Pimenta chilli em pó", "Cominho"],
        preparo: ["Refogue a carne moída.", "Adicione o molho de tomate, o feijão e os temperos.", "Cozinhe em fogo baixo até o caldo ficar bem denso."]
    },
    {
        id: 39,
        nome: "Sopa de Tortilla",
        icone: "🥣",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "medio",
        tempoTexto: "30 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "mexicana",
        descricao: "Sopa de tomate aromática com tiras de tortilla frita por cima.",
        ingredientes: ["Caldo de galinha com tomates batidos", "Tiras de tortilla fritas", "Abacate em cubos", "Queijo fatiado", "Coentro"],
        preparo: ["Cozinhe o caldo de tomate temperado.", "Sirva o caldo quente nas tigelas.", "Adicione as tiras crocantes de tortilla, queijo e abacate no momento de servir."]
    },
    {
        id: 40,
        nome: "Chimichanga",
        icone: "🌯",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "medio",
        precoTexto: "R\$ 25–50",
        tempo: "medio",
        tempoTexto: "30 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "mexicana",
        descricao: "Burrito frito até ficar dourado e crocante por fora.",
        ingredientes: ["Tortilla grande de trigo", "Recheio de carne ou frango com feijão", "Óleo para fritar"],
        preparo: ["Monte o burrito fechandos bem os lados.", "Frite em óleo bem quente até ficar totalmente dourado e crocante.", "Sirva com creme azedo."]
    },

    // --- Salgados / Americana ---
    {
        id: 41,
        nome: "Hambúrguer Artesanal",
        icone: "🍔",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "medio",
        tempoTexto: "25 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Blend de carne suculento com queijo cheddar no pão brioche.",
        ingredientes: ["180g blend de carne moída", "Pão brioche", "2 fatias queijo cheddar", "Bacon frito", "Maionese da casa"],
        preparo: ["Molde o hambúrguer e sele na chapa bem quente.", "Vire, coloque o queijo e abafe para derreter.", "Selar o pão na manteiga e montar o lanche."]
    },
    {
        id: 42,
        nome: "Hot Dog Americano",
        icone: "🌭",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "rapido",
        tempoTexto: "15 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Cachorro-quente clássico com salsicha, mostarda e relish de pepino.",
        ingredientes: ["Pão de cachorro-quente", "1 salsicha aferventada", "Mostarda amarela", "Ketchup", "Relish de pepino"],
        preparo: ["Aqueça o pão no vapor.", "Coloque a salsicha bem quente.", "Cubra com mostarda, ketchup e relish."]
    },
    {
        id: 43,
        nome: "Mac and Cheese",
        icone: "🧀",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "medio",
        tempoTexto: "25 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Macarrão caracol envolto em molho cremoso de queijo cheddar.",
        ingredientes: ["250g macarrão caracol", "200g queijo cheddar ralado", "1 colher manteiga", "1 colher farinha", "300ml leite"],
        preparo: ["Cozinhe o macarrão.", "Faça um molho branco com manteiga, farinha e leite.", "Derreta o cheddar no molho cremoso.", "Misture o macarrão e sirva."]
    },
    {
        id: 44,
        nome: "Costelinha ao Barbecue",
        icone: "🍖",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "caro",
        precoTexto: "R\$ 25–50",
        tempo: "longo",
        tempoTexto: "1h 30min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "americana",
        descricao: "Costela suína assada bem devagar com molho barbecue defumado.",
        ingredientes: ["1kg costelinha suína", "1 xícara molho barbecue", "Dry rub (tempero seco com pimenta e açúcar mascavo)"],
        preparo: ["Passe o tempero seco na carne.", "Embale em papel alumínio e asse por 1 hora.", "Retire o alumínio, pincele bastante barbecue e volte ao forno para caramelizar."]
    },
    {
        id: 45,
        nome: "Asinhas de Frango Buffalo (Buffalo Wings)",
        icone: "🍗",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "demorado",
        tempoTexto: "40 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "americana",
        descricao: "Asas de frango crocantes fritos lambuzadas em molho picante com manteiga.",
        ingredientes: ["500g coxinha da asa e meio da asa", "Molho de pimenta tradicional", "2 colheres manteiga derretida", "Molho gorgonzola"],
        preparo: ["Frite as asas até ficarem super crocantes.", "Em uma tigela, misture a manteiga com o molho de pimenta.", "Jogue as asas quentes na tigela e sacuda para empanar no molho."]
    },
    {
        id: 46,
        nome: "Clube Sandwich",
        icone: "🥪",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "rapido",
        tempoTexto: "15 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Sanduíche duplo no pão de fôrma com peito de peru, bacon e salada.",
        ingredientes: ["3 fatias de pão de fôrma tostado", "Peito de peru e queijo", "Bacon crocante", "Alface, tomate e maionese"],
        preparo: ["Toste os pães.", "Monte a primeira camada com maionese, peru e queijo.", "Adicione a segunda fatia de pão e coloque alface, tomate e bacon.", "Corte em triângulos."]
    },
    {
        id: 47,
        nome: "Sopa de Clam Chowder",
        icone: "🥣",
        tipo: "salgado",
        refeicao: "jantar",
        preco: "caro",
        precoTexto: "R\$ 25–50",
        tempo: "demorado",
        tempoTexto: "40 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "americana",
        descricao: "Sopa cremosa e consistente de mariscos com batata e bacon.",
        ingredientes: ["Mariscos/vongole picados", "Batata em cubos", "Bacon em cubos", "Creme de leite fresco", "Caldo de peixe"],
        preparo: ["Frite o bacon na panela.", "Adicione a batata e o caldo para cozinhar.", "Coloque os mariscos e engrosse com creme de leite fresco."]
    },
    {
        id: 48,
        nome: "Sloppy Joe",
        icone: "🍔",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "medio",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Sanduíche recheado com carne moída ao molho de tomate agridoce.",
        ingredientes: ["Pão de hambúrguer", "250g carne moída", "Molho de tomate, ketchup e mostarda", "Pimentão e cebola picados"],
        preparo: ["Refogue a carne com vegetais.", "Adicione os molhos e cozinhe até ficar consistente.", "Sirva generosamente dentro do pão sem prensar."]
    },
    {
        id: 49,
        nome: "Philly Cheesesteak",
        icone: "🥖",
        tipo: "salgado",
        refeicao: "almoco",
        preco: "medio",
        precoTexto: "R\$ 25–50",
        tempo: "medio",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Sanduíche de pão baguete recheado com tiras finas de carne e queijo derretido.",
        ingredientes: ["Pão baguete", "200g contrafilé fatiado bem fino", "1 cebola fatiada", "Queijo provolone ou cheddar derretido"],
        preparo: ["Salteie a carne e a cebola na chapa rápida.", "Misture o queijo até derreter tudo junto.", "Coloque todo o recheio dentro do pão."]
    },
    {
        id: 50,
        nome: "Corn Dog (Salsicha no Espeto)",
        icone: "🌭",
        tipo: "salgado",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "medio",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Salsicha no espeto empanada em massa espessa de milho e frita.",
        ingredientes: ["Salsichas no espeto de churrasco", "1 xícara farinha de milho", "1 xícara farinha de trigo", "1 ovo e leite"],
        preparo: ["Misture as farinhas com ovo e leite criando uma massa bem densa.", "Passe a salsicha no copo com massa.", "Frite imerso em óleo bem quente."]
    },

    // --- Doces / Brasileira ---
    {
        id: 51,
        nome: "Brigadeiro Gourmet",
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
        descricao: "O maior clássico brasileiro feito com cacau em pó e granulado macio.",
        ingredientes: ["1 lata de leite condensado", "1 colher de manteiga", "3 colheres de cacau em pó 50%", "Granulado de chocolate"],
        preparo: ["Misture tudo na panela.", "Cozinhe em fogo baixo mexendo sempre até soltar do fundo.", "Deixe esfriar, enrole as bolinhas e passe no granulado."]
    },
    {
        id: 52,
        nome: "Pudim de Leite Condensado",
        icone: "🍮",
        tipo: "doce",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "longo",
        tempoTexto: "1h 20min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Pudim super cremoso cozido em banho-maria com calda de caramelo.",
        ingredientes: ["1 lata leite condensado", "1 medida da lata de leite integral", "3 ovos", "1 xícara de açúcar para a calda"],
        preparo: ["Derreta o açúcar na forma fazendo o caramelo.", "Bata os outros ingredientes no liquidificador.", "Despeje na forma e asse em banho-maria por 1 hora."]
    },
    {
        id: 53,
        nome: "Beijinho de Coco",
        icone: "🥥",
        tipo: "doce",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "medio",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Docinho tradicional de leite condensado com coco ralado e cravo.",
        ingredientes: ["1 lata leite condensado", "100g coco ralado seco", "1 colher manteiga", "Cravos-da-índia para decorar"],
        preparo: ["Cozinhe o leite condensado, coco e manteiga até dar ponto de enrolar.", "Esfrie, enrole, passe no coco ralado e espete um cravo."]
    },
    {
        id: 54,
        nome: "Cocada Cremosa",
        icone: "🥥",
        tipo: "doce",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "medio",
        tempoTexto: "25 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Sobremesa reconfortante feita com coco fresco e açúcar.",
        ingredientes: ["200g coco ralado fresco", "1 xícara açúcar", "1/2 xícara água", "1/2 lata leite condensado"],
        preparo: ["Faça uma calda com água e açúcar.", "Acrescente o coco e mexa.", "Adicione o leite condensado e cozinhe até ficar cremoso."]
    },
    {
        id: 55,
        nome: "Bolo de Rolo Pernambucano",
        icone: "🍰",
        tipo: "doce",
        refeicao: "cafe",
        preco: "medio",
        precoTexto: "R\$ 25–50",
        tempo: "longo",
        tempoTexto: "1h",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "brasileira",
        descricao: "Camadas finíssimas de massa de bolo recheadas com goiabada derretida.",
        ingredientes: ["200g manteiga", "200g açúcar", "200g farinha de trigo", "4 ovos", "300g goiabada derretida em água"],
        preparo: ["Bata a massa e espalhe fatias ultra finas em assadeiras.", "Asse por apenas 3 minutos.", "Pincele goiabada quente e enrole camada sobre camada."]
    },
    {
        id: 56,
        nome: "Açaí na Tigela com Frutas",
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
        descricao: "Creme de açaí congelado batido servido com banana, morango e granola.",
        ingredientes: ["300g polpa congelada de açaí", "1 banana", "Morangos fatiados", "Granola crocante", "Leite condensado"],
        preparo: ["Bata o açaí com meia banana.", "Coloque na tigela.", "Decore por cima com morangos, o resto da banana e granola."]
    },
    {
        id: 57,
        nome: "Romeu e Julieta de Colher",
        icone: "🧀",
        tipo: "doce",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "rapido",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Combinação irresistível de creme de queijo minas com goiabada cascão.",
        ingredientes: ["200g goiabada derretida", "200g cream cheese ou requeijão cremoso", "1/2 caixa creme de leite"],
        preparo: ["Misture o cream cheese com creme de leite.", "Em uma taça, coloque uma camada do creme de queijo e outra de goiabada derretida."]
    },
    {
        id: 58,
        nome: "Quindim",
        icone: "🧁",
        tipo: "doce",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "demorado",
        tempoTexto: "50 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "brasileira",
        descricao: "Doce amarelo brilhante à base de gemas de ovo, açúcar e coco ralado.",
        ingredientes: ["10 gemas peneiradas", "200g açúcar", "100g coco ralado", "1 colher manteiga derretida"],
        preparo: ["Misture todos os ingredientes suavemente.", "Despeje em forminhas untadas com manteiga e açúcar.", "Asse em banho-maria por 40 minutos."]
    },
    {
        id: 59,
        nome: "Cartola",
        icone: "🍌",
        tipo: "doce",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "rapido",
        tempoTexto: "10 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Sobremesa pernambucana de banana frita com queijo coalho e canela.",
        ingredientes: ["2 bananas prata", "100g queijo coalho", "Açúcar e canela em pó", "Manteiga para fritar"],
        preparo: ["Frite as bananas cortadas ao meio na manteiga.", "Derreta o queijo na mesma frigideira.", "Coloque o queijo por cima da banana e polvilhe açúcar e canela."]
    },
    {
        id: 60,
        nome: "Cuscuz Doce de Tapioca",
        icone: "🍰",
        tipo: "doce",
        refeicao: "cafe",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "demorado",
        tempoTexto: "40 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "brasileira",
        descricao: "Bolo gelado de tapioca granulada com coco e leite de coco.",
        ingredientes: ["250g tapioca granulada", "500ml leite quente", "1/2 garrafa leite de coco", "1/2 xícara açúcar", "Coco ralado"],
        preparo: ["Misture a tapioca com o açúcar e coco.", "Despeje o leite e o leite de coco quentes.", "Misture até hidratar e espere gelar na forma."]
    },

    // --- Doces / Italiana ---
    {
        id: 61,
        nome: "Tiramisù",
        icone: "🍰",
        tipo: "doce",
        refeicao: "lanche",
        preco: "caro",
        precoTexto: "R\$ 25–50",
        tempo: "medio",
        tempoTexto: "30 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Sobremesa gelada em camadas de biscoito champagne banhado em café e creme mascarpone.",
        ingredientes: ["200g queijo mascarpone", "200g biscoito champagne", "1 xícara café forte sem açúcar", "3 gemas e açúcar", "Cacau em pó para polvilhar"],
        preparo: ["Bata as gemas com açúcar e incorpore o mascarpone.", "Molhe os biscoitos no café rápido.", "Intercale camadas de biscoito e creme.", "Polvilhe cacau por cima e gele."]
    },
    {
        id: 62,
        nome: "Cannoli Siciliano",
        icone: "🥐",
        tipo: "doce",
        refeicao: "lanche",
        preco: "caro",
        precoTexto: "R\$ 25–50",
        tempo: "longo",
        tempoTexto: "1h",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "italiana",
        descricao: "Massa crocante frita em formato de tubo recheada com creme de ricota e gotas de chocolate.",
        ingredientes: ["Tubos de massa para cannoli fritos", "300g ricota fresca peneirada", "100g açúcar de confeiteiro", "Gotas de chocolate", "Frutas cristalizadas"],
        preparo: ["Bata a ricota com açúcar até virar um creme suave.", "Incorpore as gotas de chocolate.", "Recheie os tubos crocantes apenas na hora de servir."]
    },
    {
        id: 63,
        nome: "Panna Cotta de Frutas Vermelhas",
        icone: "🍮",
        tipo: "doce",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "demorado",
        tempoTexto: "40 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "italiana",
        descricao: "Creme cozido leve aromatizado com baunilha e coberto com calda de frutas vermelhas.",
        ingredientes: ["300ml creme de leite fresco", "100ml leite", "1/2 xícara açúcar", "1 folha de gelatina sem sabor", "Calda de morango e amora"],
        preparo: ["Aqueça o creme de leite, leite e açúcar sem ferver.", "Hydrate e dissolva a gelatina na mistura.", "Despeje em taças, gele até firmar e sirva com a calda."]
    },
    {
        id: 64,
        nome: "Gelato de Pistache",
        icone: "🍨",
        tipo: "doce",
        refeicao: "lanche",
        preco: "caro",
        precoTexto: "R\$ 25–50",
        tempo: "longo",
        tempoTexto: "2h+",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Sorvete denso artesanal italiano com pasta pura de pistache.",
        ingredientes: ["250ml leite integral", "150ml creme de leite", "3 colheres pasta pura de pistache", "1/2 xícara açúcar", "Pistaches picados"],
        preparo: ["Misture o leite, creme, açúcar e pasta de pistache.", "Bata na sorveteira ou congele batendo a cada 30 minutos.", "Sirva com pistaches por cima."]
    },
    {
        id: 65,
        nome: "Sfogliatella",
        icone: "🥐",
        tipo: "doce",
        refeicao: "cafe",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "longo",
        tempoTexto: "1h 30min",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "italiana",
        descricao: "Folhado napolitano crocante recheado com creme de sêmola e ricota aromatizada.",
        ingredientes: ["Massa folhada finíssima", "Creme de sêmola de trigo cozida", "Ricota", "Casca de laranja cristalizada picada"],
        preparo: ["Enrole a massa folhada bem apertada e corte fatias em concha.", "Recheie o centro com o creme de ricota.", "Asse até dourar e ficar super crocante."]
    },
    {
        id: 66,
        nome: "Crostata de Morango",
        icone: "🥧",
        tipo: "doce",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "demorado",
        tempoTexto: "50 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Torta de massa podre recheada com geleia ou morangos frescos.",
        ingredientes: ["200g farinha de trigo", "100g manteiga", "1 ovo", "1 xícara geleia de morango"],
        preparo: ["Prepare a massa sablée e forre a forma de torta.", "Espalhe a geleia no centro.", "Faça tiras de massa por cima cruzadas.", "Asse a 180°C por 35 minutos."]
    },
    {
        id: 67,
        nome: "Biscotti (Cantucci) de Amêndoas",
        icone: "🍪",
        tipo: "doce",
        refeicao: "cafe",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "demorado",
        tempoTexto: "45 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "italiana",
        descricao: "Biscoitos secos crocantes tradicionais de amêndoas, perfeitos para molhar no café.",
        ingredientes: ["250g farinha de trigo", "150g açúcar", "2 ovos", "100g amêndoas inteiras com pele"],
        preparo: ["Faça rolos de massa com as amêndoas e asse por 20 min.", "Corte em fatias diagonais.", "Volte ao forno por 10 min para torrar e secar."]
    },
    {
        id: 68,
        nome: "Affogato al Caffè",
        icone: "☕",
        tipo: "doce",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "rapido",
        tempoTexto: "5 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "italiana",
        descricao: "Uma bola de gelato de baunilha 'afogada' em um café expresso bem quente.",
        ingredientes: ["1 bola generosa de sorvete de baunilha", "1 dose de café expresso bem quente", "Raspas de chocolate"],
        preparo: ["Coloque o sorvete em uma taça gelada.", "Tire o café quente na hora e despeje por cima do sorvete.", "Sirva imediatamente com raspas de chocolate."]
    },
    {
        id: 69,
        nome: "Torrone Italiano",
        icone: "🍬",
        tipo: "doce",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 25–50",
        tempo: "longo",
        tempoTexto: "1h",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "italiana",
        descricao: "Doce denso de mel, claras em neve, amêndoas e avelãs torradas.",
        ingredientes: ["200g mel", "200g açúcar", "2 claras em neve", "200g amêndoas e avelãs torradas"],
        preparo: ["Cozinhe o mel e açúcar até ponto de bala dura.", "Incorpore nas claras em neve sem parar de bater.", "Misture as castanhas, descanse na forma e corte em barrinhas."]
    },
    {
        id: 70,
        nome: "Zabaione",
        icone: "🍨",
        tipo: "doce",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "rapido",
        tempoTexto: "15 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "italiana",
        descricao: "Creme aveludado aerado feito no banho-maria com gemas e vinho Marsala.",
        ingredientes: ["4 gemas", "4 colheres açúcar", "4 colheres vinho doce Marsala"],
        preparo: ["Misture tudo em uma tigela em banho-maria.", "Bata com batedor de arame até dobrar de volume e virar um creme espumoso quente."]
    },

    // --- Doces / Japonesa ---
    {
        id: 71,
        nome: "Mochi de Morango (Daifuku)",
        icone: "🍡",
        tipo: "doce",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "demorado",
        tempoTexto: "30 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Bolinho macio e elástico de arroz recheado com morango e anko (feijão doce).",
        ingredientes: ["1 xícara farinha de arroz glutinoso (Mochiko)", "1/2 xícara água", "Morangos frescos", "Pasta doce de feijão azuki (Anko)"],
        preparo: ["Cozinhe a massa no micro-ondas até ficar elástica.", "Envolva o morango com a pasta anko.", "Cubra tudo com a massa de mochi polvilhada com amido."]
    },
    {
        id: 72,
        nome: "Dorayaki",
        icone: "🥞",
        tipo: "doce",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "medio",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "japonesa",
        descricao: "Duas panquecas fofinhas recheadas com doce de feijão azuki ou Nutella.",
        ingredientes: ["2 ovos", "1/2 xícara açúcar", "1 colher mel", "1 xícara farinha", "Recheio de anko ou creme de avelã"],
        preparo: ["Misture a massa fofinha.", "Faça panquecas pequenas redondas.", "Junte duas panquecas colando com recheio generoso no meio."]
    },
    {
        id: 73,
        nome: "Matcha Cheesecake",
        icone: "🍰",
        tipo: "doce",
        refeicao: "lanche",
        preco: "caro",
        precoTexto: "R\$ 25–50",
        tempo: "longo",
        tempoTexto: "1h",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Torta cremosa de queijo aromatizada com chá verde em pó (Matcha).",
        ingredientes: ["300g cream cheese", "2 colheres pó de Matcha", "3 ovos", "200ml creme de leite fresco", "Açúcar"],
        preparo: ["Bata o cream cheese com o açúcar e o pó de matcha.", "Adicione os ovos e creme de leite.", "Asse em banho-maria até firmar."]
    },
    {
        id: 74,
        nome: "Taiyaki",
        icone: "🐟",
        tipo: "doce",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "medio",
        tempoTexto: "20 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Bolo crocante em formato de peixe recheado com creme ou chocolate.",
        ingredientes: ["Massa de waffle macia", "Creme de confeiteiro ou recheio de chocolate", "Forma especial em formato de peixe"],
        preparo: ["Coloque a massa na forma quente.", "Adicione o recheio no centro e cubra com mais massa.", "Feche a forma e vire até dourar os dois lados."]
    },
    {
        id: 75,
        nome: "Sorvete de Matcha",
        icone: "🍨",
        tipo: "doce",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "longo",
        tempoTexto: "2h+",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "japonesa",
        descricao: "Sorvete refrescante com sabor característico e herbáceo do chá verde matcha.",
        ingredientes: ["2 colheres chá verde matcha", "200ml leite condensado", "300ml creme de leite fresco batido"],
        preparo: ["Dissolva o matcha no leite condensado.", "Misture delicadamente ao creme de leite batido em chantilly.", "Congele por pelo menos 4 horas."]
    },
    {
        id: 76,
        nome: "Bolo de Esponja Japonês (Japanese Cheesecake)",
        icone: "🎂",
        tipo: "doce",
        refeicao: "cafe",
        preco: "medio",
        precoTexto: "R\$ 25–50",
        tempo: "longo",
        tempoTexto: "1h 10min",
        dificuldade: "dificil",
        dificuldadeTexto: "Difícil",
        culinaria: "japonesa",
        descricao: "Bolo de queijo ultra fofinho que 'balança' de tão leve.",
        ingredientes: ["250g cream cheese", "6 ovos (claras em neve)", "60g manteiga", "100ml leite", "Açúcar e farinha de trigo"],
        preparo: ["Derreta o cream cheese com manteiga e leite.", "Incorpore as gemas e a farinha.", "Misture suavemente as claras em neve.", "Asse em banho-maria bem lento."]
    },
    {
        id: 77,
        nome: "Dango (Mitarashi Dango)",
        icone: "🍡",
        tipo: "doce",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "medio",
        tempoTexto: "20 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "japonesa",
        descricao: "Espetinho de bolinhos de massa de arroz cobertos por calda caramelizada de shoyu.",
        ingredientes: ["Farinha de arroz e água para os bolinhos", "Calda: Shoyu, açúcar, amido de milho e água"],
        preparo: ["Modele as bolinhas e cozinhe em água fervente.", "Espete 3 a 4 bolinhas no palito e doure na frigideira.", "Cubra com a calda espessa e doce."]
    },
    {
        id: 78,
        nome: "Purin (Pudim Japonês)",
        icone: "🍮",
        tipo: "doce",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "demorado",
        tempoTexto: "45 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "japonesa",
        descricao: "Versão japonesa do pudim de leite, firme, sedoso e com caramelo límpido.",
        ingredientes: ["2 ovos inteiros + 1 gema", "300ml leite", "5 colheres açúcar", "Caramelo de açúcar e água"],
        preparo: ["Faça o caramelo no fundo dos copinhos.", "Misture o leite morno com ovos e açúcar e peneire 3 vezes.", "Asse no banho-maria delicadamente."]
    },
    {
        id: 79,
        nome: "Anmitsu",
        icone: "🍨",
        tipo: "doce",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "medio",
        tempoTexto: "30 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Tigela de sobremesa com cubos de gelatina agar-agar, frutas, anko e xarope preto.",
        ingredientes: ["Cubos de gelatina Agar-agar transparente", "Pasta de feijão azuki", "Morangos e pêssegos em calda", "Kuromitsu (xarope de açúcar mascavo)"],
        preparo: ["Coloque os cubos de agar-agar na tigela.", "Adicione porções de frutas e a pasta doce.", "Regue tudo com o xarope negro bem doce."]
    },
    {
        id: 80,
        nome: "Bolo Castella",
        icone: "🍞",
        tipo: "doce",
        refeicao: "cafe",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "longo",
        tempoTexto: "1h",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "japonesa",
        descricao: "Pão de ló japonês denso, úmido e levemente adocicado com mel.",
        ingredientes: ["4 ovos grandes", "100g açúcar", "3 colheres de mel", "100g farinha de trigo pão"],
        preparo: ["Bata os ovos com açúcar e mel por 10 min até virar um creme volumoso.", "Incorpore a farinha delicadamente.", "Asse em forma forrada por 45 minutos."]
    },

    // --- Doces / Americana ---
    {
        id: 81,
        nome: "Brownie de Chocolate com Nozes",
        icone: "🍫",
        tipo: "doce",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "demorado",
        tempoTexto: "40 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Bolo denso de chocolate denso e denso por dentro com casquinha crocante por fora.",
        ingredientes: ["200g chocolate meio amargo", "150g manteiga", "1 xícara açúcar", "3 ovos", "1/2 xícara farinha", "Nozes picadas"],
        preparo: ["Derreta o chocolate com a manteiga.", "Misture o açúcar e os ovos.", "Adicione a farinha e as nozes.", "Asse a 180°C por 25 min."]
    },
    {
        id: 82,
        nome: "Panquecas Americanas com Maple Syrup",
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
        descricao: "Disco alto e fofinho servido empilhado com manteiga e xarope de bordo.",
        ingredientes: ["1 xícara farinha de trigo", "1 colher fermento em pó", "1 ovo", "3/4 xícara leite", "Manteiga e Maple Syrup"],
        preparo: ["Misture os ingredientes secos e líquidos.", "Coloque conchas de massa na frigideira untada.", "Vire quando fizer bolhas.", "Sirva com manteiga e maple."]
    },
    {
        id: 83,
        nome: "Torta de Maçã (Apple Pie)",
        icone: "🥧",
        tipo: "doce",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 25–50",
        tempo: "longo",
        tempoTexto: "1h 10min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "americana",
        descricao: "Torta folhada recheada com maçãs fatiadas temperadas com canela e noz-moscada.",
        ingredientes: ["Massa crocante para torta", "4 maçãs fatiadas", "1/2 xícara açúcar mascavo", "1 colher canela em pó", "Suco de limão"],
        preparo: ["Misture as maçãs com açúcar e canela.", "Forre a forma com metade da massa e coloque o recheio.", "Cubra com o restante da massa e asse por 45 minutos."]
    },
    {
        id: 84,
        nome: "Cookies com Gotas de Chocolate",
        icone: "🍪",
        tipo: "doce",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "medio",
        tempoTexto: "25 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Biscoitos macios no centro e crocantes nas bordas cheios de gotas de chocolate.",
        ingredientes: ["100g manteiga amolecida", "1/2 xícara açúcar mascavo", "1 ovo", "1 e 1/2 xícara farinha", "150g gotas de chocolate"],
        preparo: ["Misture a manteiga com açúcares e ovo.", "Adicione a farinha e as gotas de chocolate.", "Faça bolinhas e asse por 12 minutos."]
    },
    {
        id: 85,
        nome: "Cheesecake de Frutas Vermelhas (NY Style)",
        icone: "🍰",
        tipo: "doce",
        refeicao: "lanche",
        preco: "caro",
        precoTexto: "R\$ 25–50",
        tempo: "longo",
        tempoTexto: "1h 30min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "americana",
        descricao: "Torta cremosa de cream cheese assada sobre base de biscoito triturado.",
        ingredientes: ["200g biscoito maizena triturado com manteiga", "400g cream cheese", "1 xícara açúcar", "2 ovos", "Geleia de frutas vermelhas"],
        preparo: ["Forre o fundo da forma com a massa de biscoito.", "Bata o cream cheese, açúcar e ovos e despeje por cima.", "Asse em fogo baixo e cubra com a geleia."]
    },
    {
        id: 86,
        nome: "Donuts Confeitados",
        icone: "🍩",
        tipo: "doce",
        refeicao: "lanche",
        preco: "barato",
        precoTexto: "Até R\$ 10",
        tempo: "longo",
        tempoTexto: "1h",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "americana",
        descricao: "Rosquinhas fofinhas fritas com cobertura rosa e granulado colorido.",
        ingredientes: ["300g farinha de trigo", "15g fermento biológico", "1/2 xícara leite morno", "Açúcar de confeiteiro e corante rosa"],
        preparo: ["Sove a massa e deixe crescer.", "Corte em formato de rosquinha.", "Frite em óleo brando e passe na glaze rosa."]
    },
    {
        id: 87,
        nome: "Cinnamon Roll (Caracol de Canela)",
        icone: "🥮",
        tipo: "doce",
        refeicao: "cafe",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "longo",
        tempoTexto: "1h 15min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "americana",
        descricao: "Pão doce macio enrolado com recheio abundante de manteiga, açúcar e canela.",
        ingredientes: ["Massa de pão doce macia", "Recheio: Manteiga, açúcar mascavo e canela", "Cobertura: Cream cheese batido com açúcar de confeiteiro"],
        preparo: ["Abra a massa, recheie e enrole como rocambole.", "Corte as fatias e coloque na assadeira.", "Asse e cubra quente com a glaze de cream cheese."]
    },
    {
        id: 88,
        nome: "Milkshake de Chocolate",
        icone: "🥤",
        tipo: "doce",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "rapido",
        tempoTexto: "5 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Bebida ultra cremosa de sorvete de chocolate batido com leite e chantilly.",
        ingredientes: ["3 bolas de sorvete de chocolate", "100ml leite gelado", "Calda de chocolate", "Chantilly em spray"],
        preparo: ["Bata o sorvete com o leite no liquidificador por 30 segundos.", "Decore o copo com calda.", "Despeje o milkshake e finalize com chantilly."]
    },
    {
        id: 89,
        nome: "Red Velvet Cupcake",
        icone: "🧁",
        tipo: "doce",
        refeicao: "lanche",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "demorado",
        tempoTexto: "40 min",
        dificuldade: "medio",
        dificuldadeTexto: "Médio",
        culinaria: "americana",
        descricao: "Bolinho aveludado vermelho com toque de cacau e cobertura de cream cheese.",
        ingredientes: ["1 e 1/2 xícara farinha", "Corante vermelho em gel", "1 colher cacau em pó", "Cobertura de cream cheese com manteiga e açúcar"],
        preparo: ["Faça a massa do bolo tingindo de vermelho bem vivo.", "Asse em forminhas de papel.", "Confeite o topo com o creme branco de queijo."]
    },
    {
        id: 90,
        nome: "Waffles com Morango e Chantilly",
        icone: "🧇",
        tipo: "doce",
        refeicao: "cafe",
        preco: "medio",
        precoTexto: "R\$ 10–25",
        tempo: "medio",
        tempoTexto: "15 min",
        dificuldade: "facil",
        dificuldadeTexto: "Fácil",
        culinaria: "americana",
        descricao: "Massa crocante por fora e macia por dentro assada em prensa de quadradinhos.",
        ingredientes: ["1 xícara farinha", "1 ovo", "1/2 xícara leite", "2 colheres manteiga derretida", "Morangos e chantilly"],
        preparo: ["Misture a massa e despeje na máquina de waffle quente.", "Asse até ficar dourado e crocante.", "Sirva com morangos fatiados e chantilly."]
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
