//level1
var background1, background1Img
var fox, foxImg
var caveman1, caveman1Img
var caveman2, caveman2Img
var orange, orangeImg
var banana, bananaImg
var cave, caveImg
var congratulationSound
var level1Score = 0
var level1Death = 0

var END = 0
var PLAY = 1
var WIN = 2
var END2 = 3
var PLAY2 = 4
var WIN2 = 5

var mode = "LEVEL1";
var gameState = PLAY;

level1Score = 0;
level1Death = 0;

//LEVEL 2
var instruction
var background2, background2Img
var robot, robotImg, robot2Img, robot3Img
var spaceShip, spaceShipImg

var mars, marsImg
var invisibleGround2
var stand, stand1
var line
var level2Score = 0

level2Score = 0;


var phase = "PHASE1"



function preload() {

  background1Img = loadImage("LEVEL1Img/background1.png")
  foxImg = loadAnimation("LEVEL1Img/fox7.png", "LEVEL1Img/fox1.png", "LEVEL1Img/fox6.png",
    "LEVEL1Img/fox4.png", "LEVEL1Img/fox5.png", "LEVEL1Img/fox3.png", "LEVEL1Img/fox2.png")
  caveMan1Img = loadAnimation("LEVEL1Img/boy1.png", "LEVEL1Img/boy2.png", "LEVEL1Img/boy3.png")
  caveMan2Img = loadImage("LEVEL1Img/boy6.png")
  caveMan3Img = loadImage("LEVEL1Img/boy1.png")
  orangeImg = loadImage("LEVEL1Img/orange.png")
  bananaImg = loadImage("LEVEL1Img/banana.png")
  caveImg = loadImage("LEVEL1Img/cave 1.png")
  //congratulationSound = loadSound("congratulations-mp3cut (1).mp3")


  //LEVEL 2
  background2Img = loadImage("LEVEL2Img/space2.jpg")
  marsImg = loadImage("LEVEL2Img/mars.png")
  spaceShipImg = loadImage("LEVEL2Img/spaceShip.png")
  robotImg = loadAnimation("LEVEL2Img/robot1.png", "LEVEL2Img/robot2.png", "LEVEL2Img/robot3.png",
    "LEVEL2Img/robot4.png", "LEVEL2Img/robot5.png", "LEVEL2Img/robot6.png", "LEVEL2Img/robot7.png",
    "LEVEL2Img/robot8.png")
  robot2Img = loadImage("LEVEL2Img/robot6.png")
  robot3Img = loadImage("LEVEL2Img/robot1.png")



}

function setup() {
  createCanvas(1300, 550)

  background1 = createSprite(200, 200, 20, 20)
  background1.addImage(background1Img)

  caveMan1 = createSprite(200, 200, 20, 20)
  caveMan1.addAnimation("run", caveMan1Img)
  caveMan1.addAnimation("jump", caveMan2Img)
  caveMan1.addAnimation("enterCave", caveMan3Img)
  caveMan1.scale = 0.5

  invisibleGround = createSprite(200, 350, 1000, 10)
  invisibleGround.visible = false;

  cave = createSprite(1000, 200, 20, 20)
  cave.setCollider("rectangle", 60, 0, 10, 200)
  cave.debug = true
  cave.addImage(caveImg)
  cave.visible = false;

  fruitGroup = new Group()
  foxGroup = new Group()



  background2 = createSprite(650, 270, 20, 20)
  background2.addImage(background2Img)
  background2.scale = 1.5
  background2.visible = false

  robot = createSprite(200, 100, 20, 20)
  robot.addAnimation("stand", robot2Img)
  robot.addAnimation("walk", robotImg)
  robot.addAnimation("jump", robot3Img)
  robot.scale = 0.4
  robot.visible = false

  invisibleGround2 = createSprite(200, 250, 100, 20)
  invisibleGround2.shapeColor = "orange"
  invisibleGround2.visible=false

  line = createSprite(650, 530, 1300, 20)
  line.shapeColor = "red"
  line.visible=false

  standGroup = new Group()
  stand1Group = new Group()
  spaceShipGroup = new Group()

  marsGroup = new Group()
}

function draw() {
  background(183,166,173)
  if (phase === "PHASE1") {
    if (gameState === PLAY && mode === "LEVEL1") {
      caveMan1.changeAnimation("run", caveMan1Img)
      caveMan1.visible = true
      if (background1.x < 430) {
        background1.x = width / 2;
      }
      background1.velocityX = -3

      if (keyDown(UP_ARROW) && caveMan1.y >= 100) {
        caveMan1.velocityY = -13;
        caveMan1.changeAnimation("jump", caveMan2Img)
      }
      caveMan1.velocityY = caveMan1.velocityY + 0.8
      caveMan1.collide(invisibleGround)

      if (level1Score === 20) {

        cave.visible = true;
        cave.velocityX = -7

        foxGroup.setVelocityXEach(0);
        foxGroup.destroyEach()

        fruitGroup.setVelocityXEach(0);
        fruitGroup.destroyEach()

        if (caveMan1.isTouching(cave)) {
          gameState = WIN
          mode = "LEVEL1"

        }
      }
      textSize(30);
      fill(0,100,0);
      text("INSTRUCTIONS:- ", 90, 430);
      textSize(20);
      fill(60,179,113);
      text("-you need to collect 20 fruit to go to your home ", 100, 460);
      textSize(20);
      fill(60,179,113);
      text("-press up arrow to jump ", 100, 490);
      textSize(20);
      fill(60,179,113);
      text("-you can just survive 3 times if the fox will touch you and after that you'll lose ", 100, 520);
    
      spawnFruitS()
      spawnFox()
      drawSprites()
      if (level1Death === 3) {
        gameState = END
        mode = "LEVEL1"
      }

    } else if (gameState === END && mode === "LEVEL1") {
      background1.velocityX = 0
      caveMan1.visible = false
      textSize(40);
      fill("RED");
      text("YOU LOST ", 450, 200);
      textSize(20);
      fill(128,128,0);
      text("_Press 'R' to restart", 100, 460)
      textSize(30);
      fill(0,100,0);
      text("INSTRUCTIONS:- ", 90, 430);
      if (keyDown("R")) {
        restart1();
      }

    } else if (gameState === WIN && mode === "LEVEL1") {
     // createCanvas(1300,540)
      caveMan1.visible = true
      background1.velocityX = 0
      drawSprites()
      textSize(40);
      fill("GREEN");
      text("YOU WIN ", 450, 100);
      textSize(20);
      fill(0,250,154);
      text("_press 'N' for next level ", 100, 460);
      //   congratulationSound. play();

      cave.depth = caveMan1.depth
      caveMan1.depth = caveMan1.depth + 1
      caveMan1.changeAnimation("enterCave", caveMan3Img)
      cave.velocityX = 0
      caveMan1.velocityX = 0
      caveMan1.velocityY = 0
      caveMan1.scale = 0.4
      //console.log(cave.depth)

      if (keyDown("N")) {
        gameState = PLAY2
        mode = "LEVEL2"
        phase = "PHASE2"
      }
      textSize(30);
    fill(0,100,0);
    text("INSTRUCTIONS:- ", 90, 430);
    }
    textSize(20);
    fill("BLUE");
    text("FRUIT: " + level1Score, 250, 30);

    textSize(20);
    fill("RED");
    text("DEATH: " + level1Death, 150, 30);
    


  }


  if (phase === "PHASE2") {
    edges= createEdgeSprites();
  robot.collide(edges);
    if (gameState === PLAY2 && mode === "LEVEL2") {
createCanvas(1300,750)
      background2.visible = true
      caveMan1.visible = false
      cave.visible = false
      robot.visible = true
      line.visible=true
      invisibleGround2.visible=true
      
    instruction=createSprite(650,650,1300,220)
     instruction.shapeColor="lavender"
      spawnStand()
      background2.velocityX = -7
      if (background2.x < 350) {
        background2.x = width / 2;
      }
      spawnspaceShip()
      robot.changeAnimation("walk", robotImg)
      robot.velocityX = 0
      if (keyDown(RIGHT_ARROW)) {
        robot.changeAnimation("walk", robotImg)
        invisibleGround2.destroy()
        robot.velocityX = 5
        
      }
      if (keyDown(LEFT_ARROW)) {
        robot.changeAnimation("walk", robotImg)
        invisibleGround2.destroy()
        robot.velocityX = -5
        
      }
      if (keyDown(UP_ARROW)) {
        robot.velocityY = -10;
        robot.changeAnimation("jump", robot3Img)
      }


      robot.velocityY = robot.velocityY + 1.0
      robot.collide(invisibleGround2)
      robot.collide(standGroup)
      robot.collide(stand1Group)

      if(level2Score===30){
        mars = createSprite(1000, 250, 20, 20)
        mars.addImage(marsImg)
        mars.scale = 0.05
        marsGroup.add(mars)
        robot.velocityX=6
        robot.y=250
        spaceShipGroup.destroyEach()
      }
      if (robot.isTouching(marsGroup)) {
        gameState = WIN2
        mode = "LEVEL2"
      }

    
      
      if (robot.isTouching(line)) {
        gameState = END2
        mode = "LEVEL2"
      }


      drawSprites()
      textSize(30);
      fill(0,255,255);
      text("INSTRUCTIONS:- ", 90, 580);
      textSize(20);
      fill(0,191,255);
      text("_press right or left arrow to start playing and for moving left or right", 90, 610);
      textSize(20);
      fill(0,206,209);
      text("_press up arrow to jump", 90, 640);
      textSize(20);
      fill(64,224,208);
      text("_you need to collect 30 spaceships to win this game", 90, 670);
      textSize(20);
      fill(135,206,250);
      text("_don't touch the red line at bottom ", 90, 700);
      textSize(20);
      fill(173,216,230);
      text("_you can stand on the blue and orange stands", 90, 730);

    } else if (gameState === END2 && mode === "LEVEL2") {

      background2.velocityX=0
      robot.visible = false
      textSize(40);
      fill(75,0,130);
      text("YOU LOST ", 450, 200);
      textSize(20);
      fill(255,99,71);
      text("Press 'R' to restart", 450, 610)
      textSize(30);
      fill(0,255,255);
      text("INSTRUCTIONS:- ", 90, 580);
      if(keyDown("R")){
          restart2();
      }

    } else if (gameState === WIN2 && mode === "LEVEL2") {

      robot.destroy()
      background2.velocityX = 0
      background(132,132,99)
   
      textSize(40);
      fill(100,149,237);
      text("CONGRATULATIONS", 550, 300);
      textSize(40);
      fill(65,105,225);
      text("YOU WIN ", 560, 400);
       

    }

    textSize(20);
    fill("GREEN");
    text("SPACESHIP: " + level2Score, 100, 30);

  }

}