const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies

var engine,world; 
var particless = [];
var plinkos=[];
var rows=[];
var ground;
var rows;
var score =0;
var count = 0;
var gameState ="start";


var rowsHeight = 200;
var bcgImage;

function preload (){
  bcgImage = loadImage("bcg.jpg");
}

function setup() {
  
  createCanvas(730,600);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,590,1700,20);

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }
  for(var k = 0; k <=width; k = k+80){
    rows.push(new Rows(k, height-rowsHeight/2, 10, rowsHeight));
  }
}

function draw() {
  background(bcgImage);
  textSize(35)
  fill("white");
  text("Score : "+score,20,40);
  fill("yellow");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }
  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
if(particles=null)
    {
       particles.display();
        
 if (particles.body.position.y>760)
        {
 if (particles.body.position.x < 300) 
{ 
   score=score+500;      
particles=null;
 if ( count>= 5) gameState ="end";                          
   }


  else if (particles.body.position.x < 600 && particles.body.position.x > 301 ) 
{  score = score + 100;
 particles=null
   if ( count>= 4) gameState ="end";

 }
  else if (particles.body.position.x < 900 && particles.body.position.x > 601 )
              {
   score = score + 200;
   particles=null;
   if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < rows.length; k++) 
   {
     rows[k].display();
   }
 
}


function mousePressed()
{
  if(gameState ==="end")
  {
      count++;
     particles=new Particle(mouseX, 10, 10, 10); 
  }   
}