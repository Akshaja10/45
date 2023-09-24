var fruit;
var knife; 
var apple, appleCut;
var orange, orangeCut;
var banana, bananaCut;
var watermelon, watermelonCut;
function preload(){
  watermelon = loadImage("watermelon.png");
  watermelonCut = loadImage("watermeloncut.png");
  apple = loadImage("apple.jpg");
  appleCut = loadImage("applecut.png");
  orange = loadImage("orange.jpg");
  orangeCut = loadImage("orangecut.jpg")
  banana = loadImage("banana.png");
  bananaCut = loadImage("bananacut.jpg")

  knifeImg = loadImage("knife.png");
  gameOver = loadImage("gameover.png");
}

function setup(){
  canvas = createCanvas(600,600)

  knife = createSprite(40,200,20,20)
  knife.addImage(knifeImg)

  score = 0;
  fruitGroup = createGroup();
  
  fruit = createSprite(300,300,20,20)
  fruit.x = 0
  fruit.y = Math.random(300,200)
  fruit.addImage(apple)
  fruit.velocityX = 5
  fruit.scale = 0.15

}

function draw(){
  background("white")
  

 // fruits()

  knife.y = World.mouseY
  knife.x = World.mouseX

  drawSprites();
}

function fruits(){
  fruit = createSprite(300,300,20,20)
  fruit.addImage(apple)
  //fruit.velocityX = 1
  fruit.scale = 0.15
}