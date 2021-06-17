//Create variables here
var dog, happyDog,foods,database,foodStock,dog1;
function preload(){
  	dog1=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(200,200,20,20)
dog.addImage(dog1)
dog.scale=0.1
database=firebase.database();
foodStock=database.ref('Food');
foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
    writeStock(foods)
    dog.addImage(happyDog)
}
  drawSprites();
  textSize(20)
  text("food remaning :"+foods,170,200);
  text("Press up-arrow key to feed the pet !",50,70);
  //add styles here

}
function readStock(data){
  foods=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x 
  })
}

