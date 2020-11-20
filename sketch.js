const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var box1,ground,box2,box3,box4,box5,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,hexagon,g,polygon;
var engine, world;

function preload() {

}

function setup(){
createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,380,20,20);
    box2 = new Box(620,380,20,20);
    box3 = new Box(640,380,20,20);
    box4 = new Box(660,380,20,20);
    box5 = new Box(680,380,20,20);
    box6 = new Box(700,380,20,20);
    box7 = new Box(720,380,20,20);
    box8 = new Box(660,340,20,20);
    box10 = new Box(660,320,20,20);
    box11 = new Box(620,360,20,20);
    box12 = new Box(640,360,20,20);
    box13 = new Box(660,360,20,20);
    box14 = new Box(680,360,20,20);
    box15 = new Box(640,340,20,20);
    box16 = new Box(680,360,20,20);
    box17 = new Box(700,360,20,20);
    polygon = new Polygon(200,200,30,30);

    g = new Hexagon(polygon.body,{x:200, y:200});
    ground = new Ground(500,390,1000,15); 



}

function draw(){
    background("pink");
    Engine.update(engine); 
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box10.display();
    box15.display();
    box16.display();
    box17.display();
    g.display();
    polygon.display();
    ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased() {
  g.fly(); 
}  
function keyPressed(){
    if(keyCode===32){
     g.attach(polygon.body);   
    }
}