/* O link da explicação do vídeo no YouTube é:

*/
// Declaração das variáveis
var num
num = 0
var nivel=1
var total
var x, y;
var score = 0;
const radius = 100;
var r, g, b;
var x, y;
var xrect=80
var yrect=100
var opcao=1
var tela=0
var seq=1, reg=1
var arect =350, brect=340
var xrect_desafio=260,yrect_desafio=180
//Variável das imagens de fundo e minha (do programador) 
let bg;
let I = 0
let imgPedro
// função para carregar a imagem do programador
function preload(){
  imgPedro=loadImage('assets/AJFI4349.JPG')
  }
//função que cria as condições inicias do jogo, como por exemplo a declaração da tela de fundo do jogo
function setup() {
  bg = loadImage('assets/imgEspaco.png')
  mode=0
  createCanvas(500,500)
  createCanvas(windowWidth, windowHeight);
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}
// Funções que são utilizadas no Menu do jogo:
//1-) Para moventar as setas entre as opções do menu
   function keyPressed(){
     if(key=="ArrowUp"&&yrect>130){
  yrect=yrect-100
    opcao=opcao-1
    
  }
  if(key==="ArrowDown"&&yrect<300){
    yrect=yrect+100
    opcao=opcao+1
//2-)Para entar em uma opção
  }
     if(key=="ArrowLeft"&&xrect_desafio>200){
  xrect_desafio=xrect_desafio-70
    opcao=opcao-1
    
  }
  if(key==="ArrowRight"&&xrect_desafio<300){
    xrect_desafio=xrect_desafio+70
    opcao=opcao+1
  
  }
  if(key=="Enter"){
    mode=opcao
  }
// Para retornar ao início
  if(key=="Escape"){
    mode=0
  }
    
}

//Agora é a função que executa o código do jogo em si
function draw() {
  clear()
  background(bg)
//Nesse primeiro caso, a tela que irá aparecer será a do menu
  if(mode==0){
   
  fill("#ffd32a")
  rect(xrect, yrect,170,45)
  textSize(40)
  fill("#f53b57")
  text('Primos',250,50)
  textSize(32)
  text('Jogar',90,130)
  text('Instruções',90,230)
  text('Créditos',90,330)
    
 
    
  }
// Nesse segundo caso, será a tela do jogo que irá aparecer( com todas as informações necessárias para rodar o jogo)  
  if(mode==1){
   
  background(bg);
  // Desenha o círculo
  noStroke();
  fill(r, g, b);
  ellipse(x, y, radius*2, radius*2);
  fill(" ")
  textSize(40)
  text(num,x,y)
  textSize(24)
  text("Score: " + score, 10, 30);
  text("Nível: "+ nivel, 170, 30)
    let s = second();
text('Tempo: \n' + s, 350, 30)
  if( score==5 ){
        mode=4;
    }
}
//Controle dos níveis do jogo
if(score==5){

  nivel++

 score=0

 total+=2

  }
    

  if(mode==2){
// Nessa opção a tela selecionada irá apresentar as informações das intruções do jogo  
  textSize(32)
  text('Instruções',90,130)
  text('Instruções:-',90,130)
  text('Ano: 6° do fundamental',90,180)
  text('Matéria:classificar números naturais',90,210)
  text('em primos',90,240)
  text('Habilidade da BNCC: EF06MA05',90,270)
  text('Resumo do jogo:',90,300)
  text('A princípio, a meta desse jogo é',90,330)
  text('fazer com que o aluno identifique',90,360)
  text('números primos ao clicar em ',90,390)
  text('círculos específicos.',90,420)
}
//Por fim, a tela dos créditos (que contém dados do programador e do educador - a ser definido)
  if(mode==3){
  textSize(32)
  text('Créditos',50,50)
  text('Pedro da Mota Candido: programador ',50,290)
  text('Matrícula - 20180030139',50,320)
  text('Educador: Prof. Aquiles Burlamaqui ',50,420)
  image(imgPedro,50,60,220,200)
}
if(mode==4){
        // MENSAGEM
        

  textSize(40)
  fill("#0be881")
  text("GAME OVER", 180, 50)
  fill("#0be881")
  textSize(30)
  text("O NÚMERO PAR E  ", 110, 110)
  text("MAIOR QUE ZERO É ??",110,150)
    
        //RESPOSTA
  
  fill("#fed330")
 // rect(190,180,60,40) 
  rect(xrect_desafio,yrect_desafio,60,40)
//  rect(330,180,60,40)
   
   
  textSize(30)
  fill("#0be881")
  text(seq -reg,200,210)
  text(seq +reg,270,210)
  text(seq -2,340,210)
  
    
        // BOTÃO PLAY AGAING
  
  function keyPressed(){
     
     if(key=="ArrowLeft"&&xrect_desafio>200){
  xrect_desafio=xrect_desafio-70
    opcao=opcao-1
    
  }
  if(key==="ArrowRight"&&xrect_desafio<300){
    xrect_desafio=xrect_desafio+70
    opcao=opcao+1
  
  }
  }
  if(mouseX > arect && mouseX < arect + 240 && mouseY > brect && mouseY < brect +     50){
  fill("#0fb9b1")
  rect(arect,brect,240,50)
  if(mouseIsPressed){
  mode=1
  } } 
  textSize(30)
  fill("#f6b93b")
  text("PLAY AGAIN", 385, 375)
  
  }
}
//Nessa parte do programa,o código do jogo será executado:-
// Quando o usuário clica no mouse:
function mousePressed() {
  // Verifique se o mouse está dentro do círculo
  var d = dist(mouseX, mouseY, x, y);
//Se a distancia do mouse for menor que a do raio do círculo, irá aparecer um novo círculo e o jogo irá pontuar  
  if (d < radius) {
    newCircle();
    score++;
    num++
  }
}
// Esta parte do jogo se caracteriza por criar um novo cículo e no intervalo de tempo desejado pelo programador
function newCircle() {
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

setInterval(newCircle, 1000);
