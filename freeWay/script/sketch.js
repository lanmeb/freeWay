




function setup() {
  createCanvas(500, 400);
  //largura x altura
  //somDaTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarro();
  verificaColisao();
  //colidiu();
  //passouTodaTela();
  //voltaAtorPosicaoInicial();
  incluiPontos();
  marcaPonto();
  //pontosMaiorZero();
  //podeSeMover();
  fimJogo();

  
}