function spawnStand(){
    if (frameCount % 80 === 0) {
stand=createSprite(1300,300,140,15)
stand.y = Math.round(random(440, 440))
stand.velocityX=-8
stand.shapeColor="orange"
standGroup.add(stand)
    }
    if (frameCount % 150 === 0) {
        stand1=createSprite(10,300,140,15)
        stand1.y = Math.round(random(400, 400))
        stand1.velocityX=4
        stand1.shapeColor="turquoise"
        stand1Group.add(stand1)
            }
    
}

