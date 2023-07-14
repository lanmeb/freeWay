// variáveis do ator
let xAtor = 50;
let yAtor = 360;//altura , qto maior, mais embaixo
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 40, 40);
  //comprimento posicao do ator na calçada 40, tamanho da foto 50x50
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
}

function verificaColisao(){
//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 25);// tamanhoator
    if(colisao){
      voltaAtorPosicaoInicial();
      //somDaColisao.play();
        if (pontosMaiorZero()){
          meusPontos -= 1;
        }
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 360;
  
}


/*function colidiu(){
  yAtor = 360;
}*/

function incluiPontos(){
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 20, 60))
  text(meusPontos, width / 14, 49);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    //somDoPonto.play();
    print("Atravessei!! Ronc!! Ronc!!");
    voltaAtorPosicaoInicial();
  }
}
  function  pontosMaiorZero(){
    return meusPontos > 0;
  }

function podeSeMover(){
  return yAtor < 366;
}

function fimJogo(){
  if (meusPontos >= 10){
    line(0, 50, width, 50);
    textAlign(CENTER, BASELINE);
    text('YOU WIN', 0, 90, width);
    
   }
}