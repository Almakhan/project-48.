function spawnspaceShip(){
    if (frameCount%170===0){
      spaceShip=createSprite(1300,10,20,20)
     spaceShip.y = Math.round(random(50, 400))
      spaceShip.addImage(spaceShipImg)
      spaceShip.scale=0.2
      spaceShip.velocityX=-9
spaceShipGroup.add(spaceShip)
  }
  if (robot.isTouching(spaceShipGroup)) {
    for(var k=0;k<spaceShipGroup.length;k++){
    if(spaceShipGroup.contains(spaceShipGroup.get(k))){
    if(robot.isTouching(spaceShipGroup.get(k))){
    spaceShipGroup.get(k).destroy();
   // robot.destroy()
   // gameState=END
    level2Score=level2Score+1
  }}}}
}