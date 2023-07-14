
//variáveis do carro
//carro 1
let xCarros = [450, 450, 450, 450];
let yCarros = [60, 140, 220, 300 ];
let velocidadeCarros = [1, 2.5, 3.0, 2];
let comprimentoCarro = 50;
let alturaCarro = 30;



function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  //lista imagemCarros em imagens.js na function preload
}
}
function movimentaCarro(){
  for(let i=0; i < imagemCarros.length; i++)
  xCarros[i] -= velocidadeCarros[i];
  
}

function voltaPosicaoInicialCarro(){
  for (let i=0; i < imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 450;
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < - 50;
}

