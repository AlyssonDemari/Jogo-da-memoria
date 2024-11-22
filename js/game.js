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

//? Define uma variavel para a primeira e segunda carta
let firstCard = ''
let secondCard = ''


const checarFinal() => {
    const cartasDescobertas = document.querySelectorAll('.disable-card')

    if(cartasDescobertas == 20){
        alert('Parabens, Você ganhou o jogo')
    }
}

//* checarCarta == checkCard
const checarCarta = () =>{
    const firstPersonagem = firstCard.getAttribute('data-personagem')  //! armazena o valor (nome do persongem) na variável firstPersonagem
    const secondPersonagem = secondCard.getAttribute('data-personagem')

    if (firstPersonagem == secondPersonagem){

        
        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')

        firstCard = ''
        secondCard = ''

        chegarFinal()
    }else {

        setTimeout(() => {
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')

            
            firstCard = ''
            secondCard = ''
        }, 500 );

    }
}

//? Função responsável por virar a carta clicada
const revealCard = ({target}) => {

    if(target.parentNode.className.includes('reveal-card')){ //! parentNode pega o elemento pai da classe que foi clicada (nesse caso target)
        return
    }

    if(firstCard == ''){ //! se a primeira carta estiver com o armazenamento vazio, ela recebe a classe .reveal.card e após isso recebe a carta clicada na variável firtCard
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode; 
    }else if(secondCard == ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode; 
    }
    
    checarCarta()
}


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

    card.addEventListener('click', revealCard)
    card.setAttribute('data-personagem', personagem)  //! cria um atributo e da a ele a identificação do nome do personagem que esta sendo passado

    return card;
}


//? função que da inicio ao jogo adicionando o número de cartas conforme os itens do array personagens
const loadGame = () =>{


    //* personagensDuplicados == diplicatesCharacters
    const personagensDuplicados = [ ...personagens, ...personagens ] //! 3 pontos espalha o array personagens dentro do array personagensDuplicados 2x
    
    const embaralhar = personagensDuplicados.sort( () => Math.random() - 0.5 ); //! sort ordena o array de determinados jeitos (padrão: ordem alfabetica). com o math.random ordenamos que deixe eleatorio
    

    embaralhar.forEach((personagem) => { //? forEach == para cada item dentro do array embaralhar faça...
        const card = criarCarta(personagem); //! adiciona a função criarCarte dentro de card
        grid.appendChild(card); //! adiciona card ao grid do HTML
    
    });
}

loadGame()