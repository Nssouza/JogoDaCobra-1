const tamanho = 10;
let cobrinha;

function setup() {
  createCanvas(400,400);
  cobrinha = new cobra();
  frameRate(15);
  
}
function draw() {
  background(51);
  cobrinha.show();
  cobrinha.update();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    cobrinha.dir(0,-1);
  }else if(keyCode === DOWN_ARROW){
    cobrinha.dir(0,1);
  }else if(keyCode === RIGHT_ARROW){
    cobrinha.dir(1,0);
  }else if(keyCode === LEFT_ARROW){
    cobrinha.dir(-1,0);
  }

}