'use strict';

// Configurando o objeto moeda:
const coinRoll = (max, min) => {
    let roll = Math.floor(Math.random() * (max - min + 1) + min);
    return roll;
};

const coin = {
  state: 0,

  flip: function () {
    this.state = coinRoll(1, 0);
  },

  toString: function () {
    if (coinRoll(1,0) === 0) {
        return "Heads";
    }
    return "Tails";
  },

  toHTML: function () {
    if (coinRoll(1,0) === 0) {
        const image = document.createElement("img");
        image.src = "./assets/img/heads.png";
        image.alt = "Heads";
    } else {
        const image = document.createElement("img");
        image.src = "./assets/img/tails.png";
        image.alt = "Tails";
    }

    return image;
  },
};

//  Preparando o descampado:
const rodaDaFortuna = window.document.querySelector('body');
const jogo = window.document.createElement('main');

const titulus = window.document.createElement('h1');
titulus.innerText = "Objeto moeda";
jogo.appendChild(titulus);

rodaDaFortuna.appendChild(jogo);

// Hora de jogar a moeda:
const display20Flips = () => {
    let results = [];
    for (let i = 0; i < 20; i++) {
        let texts = coin.toString();
        console.log(texts)
        results.push(texts);
    }
    const jogo = window.document.querySelector('main');
    const areaDeNomes = window.document.createElement('div');
    areaDeNomes.innerText = results;
    jogo.appendChild(areaDeNomes);
    
    return results;
};
display20Flips();

function display20Images() {
    const results = [];
    for (let i = 0; i < 20; i++) {
        let images = coin.toHTML();
        console.log(images)
        results.push(images);
    }
    
    const jogo = window.document.querySelector('main');
    const areaDeImagens = window.document.createElement('div');
    areaDeImagens.innerHTML = results;
    jogo.appendChild(areaDeImagens);
}
// Dicas
// Observe que você precisará fazer o download ou criar as imagens para exibir os lados da moeda para o método toHTML. 
// Crie uma pasta chamada images em seu repositório para armazená-las.

// Observe também que, por convenção, o método toString() de um objeto deve sempre retornar uma string que representa o objeto. 
// Este valor de retorno pode então ser usado em qualquer output de depuração de erros que você possa precisar fazer. 
// Mais para frente, isso será uma convenção útil para se seguir. Entretanto, um método toString() não deve produzir diretamente 
// qualquer output visual por si só; ou seja, ele não deve realizar um console.log() por conta própria, por exemplo: 
// ele deve apenas retornar a string.
