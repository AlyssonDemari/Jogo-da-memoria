const grid = document.querySelector('.grid');

//* personagens == characters
const personagens = [ //! Array com o nome de todos os personagens (nome das imagens)
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];


//? função responsável por criar a carta 
//* criarCarta == createdCard
const criarCarta = (personagem) => { //! função criarCarta recebe como parametro a variavel personagem 
    const card = document.createElement('div')  //! Cria uma div card
    const front = document.createElement('div')  //! Cria uma div front
    const back = document.createElement('div')   //! Cria uma div back

    card.className = 'card'  //! adicona a clas .card para a div card 
    front.className = 'face front'//! adiciona a class .face e .front para a div front
    back.className = 'face back' //! Adiciona a class .face e .back para a div back

    front.style.backgroundImage = `url('../images/${personagem}.png')`

    card.appendChild(front); //! Adiciona a div front como filho de card
    card.appendChild(back);  //! Adiciona a div back como filho de card

    return card;
}


//? função que da inicio ao jogo adicionando o número de cartas conforme os itens do array personagens
const loadGame = () =>{


    //* personagensDuplicados == diplicatesCharacters
    const personagensDuplicados = [ ...personagens, ...personagens ] //! 3 pontos espalha o array personagens dentro do array personagensDuplicados 2x
    
    const shuffledArray = personagensDuplicados.sort();
    

    personagensDuplicados.forEach((personagem) => { //? forEach == para cada item dentro do array personagensDuplicados faça...
        const card = criarCarta(personagem); //! adiciona a função criarCarte dentro de card
        grid.appendChild(card); //! adiciona card ao grid do HTML
    
    });
}

loadGame()