//variáveis das imagens
let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//variáveis do som
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemEstrada = loadImage("foto/estrada.png");
  imagemAtor = loadImage("foto/porc.png");
  imagemCarro = loadImage("foto/carro1.png");
  imagemCarro2 = loadImage("foto/carro2.png");
  imagemCarro3 = loadImage("foto/carro3.png");
  
 imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro];


  //somDaTrilha = loadSound("sons/trilha.mp3");
  //somDaColisao = loadSound("sons/colidiu.mp3");
  //somDoPonto = loadSound("sons/pontos.wav");
}