function restart2() {
    robot.visible = true
    //cave.visible = false
    gameState = PLAY2
    mode = "LEVEL2"
   
invisibleGround2=createSprite(200,200,100,20)
invisibleGround2.shapeColor="orange"
robot.x=200
robot.y=100
    //caveMan1.changeAnimation("run", caveMan1Img)
    background2.velocityX = -3
   
    level2Score = 0
    if (background2.x < 380) {
      background2.x = width / 2;
    }
  
  }