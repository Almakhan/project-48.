function spawnFruitS(){

    if (frameCount % 100 === 0) {
      fruit=createSprite(1300,random(10,150),20,20)
      fruit.velocityX=-7
      fruit.scale=0.3
      var rand = Math.round(random(1,2));
      switch(rand) {
        case 1: fruit.addImage(orangeImg);
                break;
        case 2:fruit.addImage(bananaImg);
        fruit.scale=0.2
                break;
        default: break;
      }
      fruitGroup.add(fruit)
  }
  if (caveMan1.isTouching(fruitGroup)) {
    for(var k=0;k<fruitGroup.length;k++){
    if(fruitGroup.contains(fruitGroup.get(k))){
    if(caveMan1.isTouching(fruitGroup.get(k))){
    fruitGroup.get(k).destroy();
    level1Score=level1Score+1
      } } }}
}