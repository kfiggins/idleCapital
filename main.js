// NOTES - Idle Dronez
// 1. Gather ore, drones have carring capacity, battery, speed, finding etc for upgrades.
// 

var value = 0;
var workers = 0;
function addOne(){
    value++;
    $("#money").text(value);
}

function addWorker(){
    if(value < 50){
        console.log("no");
        return;
    }
    workers++;
    value = value - 50;
    $("#money").text(value);
}

function update(progress) {
    // Update the state of the world for the elapsed time since last render
    if(workers > 0){
        value += workers;
    }
    console.log(value);
  }
  
function draw() {
    $("#money").text(value);
  }

var framesPerSecond = 1;

function loop(timestamp) {
    var progress = timestamp - lastRender
  
    update(progress)
    draw()
  
    lastRender = timestamp
    setTimeout(function() {
        requestAnimationFrame(loop);
 
        // animating/drawing code goes here
 
 
    }, 1000 / framesPerSecond);
  }
var lastRender = 0
window.requestAnimationFrame(loop)