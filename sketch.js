const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ball_options={
        restitution: 1.0
    }

   ball=Bodies.rectangle(200,200,20,20,ball_options)
   World.add(world,ball);

    var object_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,ground);

   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,200,20);
    fill("blue")
    rect(ball.position.x,ball.position.y,20,20);
}
