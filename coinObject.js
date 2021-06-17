'use strict';

// Configurando o objeto moeda:
const coin = {
  state: 0, //por padrão, precisa de um default 

  flip: function () {
    this.state = Math.floor(Math.random() * (1 - 0 + 1) + 0);
  },

  toString: function () {
    if (this.state === 0) {
      return "Heads";
    }
    return "Tails";
  },

  toHTML: function () {
    const image = document.createElement("img");
    if (this.state === 0) {
      image.src = "./assets/img/heads.png";
      image.alt = "Heads";
    } else {
      image.src = "./assets/img/tails.png";
      image.alt = "Tails";
    }
    return image;
  }
};

//  Preparando o descampado:
const rodaDaFortuna = window.document.querySelector('body');

const titulus = window.document.createElement('h1');
titulus.innerText = "Objeto moeda";
rodaDaFortuna.appendChild(titulus);

const jogo = window.document.createElement('main');
jogo.id = jogo;

rodaDaFortuna.appendChild(jogo);

// Hora de jogar a moeda:
const display20Flips = () => {
  let results = [];
  for (let x = 0; x < 20; x++) {
    coin.flip();
    let texts = coin.toString();
    results.push(' ' + texts);
  }
  const jogo = window.document.querySelector('main');
  const areaDeNomes = window.document.createElement('div');
  areaDeNomes.id = 'nomes';
  areaDeNomes.innerText = results;
  jogo.appendChild(areaDeNomes);
  
  return results;
};
display20Flips();

function display20Images() {
  const results = [];
  const jogo = window.document.querySelector('main');
  const areaDeImagens = window.document.createElement('div');
  areaDeImagens.id = 'dindin';
  for (let y = 0; y < 20; y++) {
    coin.flip();
    let images = coin.toHTML();
    results.push(images);
  }
  for (let z = 0; z < results.length; z++) {
    areaDeImagens.appendChild(results[z]);
    jogo.appendChild(areaDeImagens);
  }
}
display20Images();
