class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    person1 = createSprite(-100,-200);
    person1.addAnimation("person1",person1_img);
    person1.scale=0.3;
    person2 = createSprite(-300,-200);
    person2.addAnimation("person2",person2_img);
    person2.scale=0.3;
    person3 = createSprite(-500,-200);
    person3.addAnimation("person3",person3_img);
    person3.scale=0.3;
    person4 = createSprite(-700,-200);
    person4.addAnimation("person4",person4_img);
    person4.scale=0.3;
    cars = [person1, person2, person3, person4];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    //player.getCarAtEnd();
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(backgroundImage, -1000,-1000,2000, 2000);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
    var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].y;
        x = displayWidth - allPlayers[plr].x;
        cars[index-1].x = x;
        cars[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
        //  stroke(10);
        //  fill("red");
        ////  ellipse(x,y,60,60);
        //  cars[index - 1].shapeColor = "red";
          camera.position.x = player.x;
          camera.position.y = player.y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].y, 120,display_position)
      }

    }
    if (player.index ===0 ){
     if(person1.isTouching(person2)) {
       console.log("person2 dead");
       person2.destroy();
       cars.splice(index, 1);
     }
     if(person1.isTouching(person3)) {
      console.log("person3 dead");
      person3.destroy();
      cars.splice(index, 2);
    }
    
    if(person1.isTouching(person4)) {
      console.log("person4 dead")
      person4.destroy();
      cars.splice(index, 3);
    }

      }
     
      
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.y +=10
      player.update();
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.x -=10
      player.update();
    }
//
   // if(player.y > 3860){
   //  // gameState = 2;
   //   player.rank+=1;
   ////   Player.updateCarsAtEnd(
     //   player.rank
    //  )
   // }

   
    drawSprites();
  }


  end(){
    console.log("Game Ended");
   // console.log(player.rank);
  }
}
