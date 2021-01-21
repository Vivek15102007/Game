var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var x = 200;
var y = 200;
var database;
var position;

var form, player, game;

var cars, person1,person2, person3, person4;

var track, person1_img,person2_img, person3_img, person4_img;

function preload(){
  backgroundImage = loadImage("../images/background.jpg");
  person1_img = loadAnimation("../images/running person-0.png",
   "../images/running person-1.png","../images/running person-2.png",
   "../images/running person-3.png", "../images/running person-4.png",
   "../images/running person-5.png", "../images/running person-6.png");
 person2_img = loadAnimation("../images/running person-0.png",
 "../images/running person-1.png","../images/running person-2.png",
 "../images/running person-3.png", "../images/running person-4.png",
 "../images/running person-5.png", "../images/running person-6.png");
  person3_img = loadAnimation("../images/running person-0.png",
  "../images/running person-1.png","../images/running person-2.png",
  "../images/running person-3.png", "../images/running person-4.png",
  "../images/running person-5.png", "../images/running person-6.png");
  person4_img = loadAnimation("../images/running person-0.png",
  "../images/running person-1.png","../images/running person-2.png",
  "../images/running person-3.png", "../images/running person-4.png",
  "../images/running person-5.png", "../images/running person-6.png");
 
}

function setup(){
  canvas = createCanvas(2000,2000);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
