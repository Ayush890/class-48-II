//S1 = Stage1;
var gameState = "S1";
var SpaceCraft , SpaceCraftImg;
var shield,shieldImg;
var space , spaceImg , Earth , EarthImg;
var Star , StarImg;
var meteors ,meteorImg;
var StarGroup , meteorGroup;
var button , buttonImg;




function preload(){

  spaceImg = loadImage("Images/space.jpg");
  SpaceCraftImg = loadImage("Images/Rocket.png");
  EarthImg = loadImage("Images/earth.jpg");
  shieldImg = loadImage("Images/shield.png");
  meteorImg = loadImage("Images/Metrorite.png");
  starImg = loadImage("Images/star.png");
  EarthImg = loadImage("Images/earth.jpg");
  buttonImg = loadImage("Images/button.png");

}

function setup(){

  createCanvas(1200,800);
  space = createSprite(600 , 400);
  space.addImage(spaceImg);
  
  
  

  SpaceCraft = createSprite(600,600);
  SpaceCraft.addImage(SpaceCraftImg);
  SpaceCraft.scale = 0.6;
  SpaceCraft.setCollider("circle",0,0,150);
  SpaceCraft.debug = true;



  shield = createSprite(600,400);
  shield.addImage(shieldImg);
  shield.scale = 0.5;

 
 
    
  StarGroup = new Group();
  meteorGroup = new Group();


}

function draw(){
  
  background(0);
  
  spawnStars();
  spawnMeteors();



  if(gameState === "S1"){

  

    shield.visible = false;
    SpaceCraft.visible = false;
    space.visible = false;


    
    stroke("red");
    strokeWeight(5);
    fill("yellow");
    textSize(60);
    text("MISSION PLUTO!",350,200);
    
    stroke("white");
    fill("blue");
    textSize(30);
    text("This is the Story about a Boy name Ayush who is having much interest in space",80,300); 
    text("One day he think about the planet pluto that where did planet gone",100,330);
    text(" now you have given a shield to protect Ayush from many stars  and meteors." ,100,360 );

    fill("red");
    textSize(40);
    text("Best Of Luck !",400,500);

    button = createSprite(500,600,20,20);
    button.addImage(buttonImg);
    button.scale = 0.5;
    button.debug = false;

 if(keyDown("space")){

 
  gameState = "S2"

  console.log(gameState)

  }
  
  
  if(gameState === "S2"){


    shield.visible = true;
    SpaceCraft.visible = true;
    space.visible = true;



    space.velocityY = 6;
  
    if(space.y > 600){
  
      space.y = 100;
  
  
    }
  
    if(meteorGroup.isTouching(shield)){
  
      meteorGroup.bounceOff(shield);
     
      
   }
  
   if(meteorGroup.isTouching(StarGroup)){
  
    meteorGroup.bounce(StarGroup);
  
  
   }
  
   if(StarGroup.isTouching(meteorGroup)){
  
    StarGroup.bounce(meteorGroup);
  
  }
  
  if(meteorGroup.isTouching(meteorGroup)){
  
    meteorGroup.bounce(meteorGroup);
  
  }
  
  if(StarGroup.isTouching(StarGroup)){
  
    StarGroup.bounce(StarGroup);
  
  }
  
    shield.x = mouseX;
    shield.y = mouseY;
  
   
  
   if(StarGroup.isTouching(shield)){
  
    StarGroup.bounceOff(shield);
  
  
   }
  
   if(shield.isTouching(SpaceCraft)){
    
    shield.x  =600;
    shield.y  =600;
    shield.visible = false;
  
   }else{
  
    shield.visible = true;
  
   }
  
    }
  

  
  
  


 drawSprites();

}
}

function spawnStars(){

  if(frameCount % 60 ===0 && gameState === "S2" ){

    star = createSprite(1200,0);
    star.addImage(starImg);
    star.scale = 0.5;    
    star.setCollider("circle",0,0,50);
    star.debug = false;
    star.velocityX = -8;
    star.velocityY = 8;
    star.x = Math.round(random(400,1000));
    StarGroup.add(star);
    
   

  }



}


function spawnMeteors(){

  if(frameCount % 80 === 0 && gameState === "S2"){

    meteors = createSprite(0,0);
    meteors.addImage(meteorImg);
    meteors.velocityX = 5;
    meteors.velocityY = 6;
    meteors.scale = 0.9;
    meteors.setCollider("circle",0,0,80);
    meteors.debug = false;
    meteors.x = Math.round(random(0,800));
    meteorGroup.add(meteors);



  }


}


  
