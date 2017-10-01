// NOTES - Idle Dronez
// 1. Gather ore, drones have carring capacity, battery, speed, finding etc for upgrades.
// 2. Electronics, Carbon, Plastics, Money element, etc.
// 3. Then you have to build your first drone.
// 4. Drones will collect those same things.
// 5. You can use money to buy workers that will build the drones for you.
// 

var gems = 49;
var workers = 0;
var electronics = 10;
var carbon = 20;
var plastics = 20;
var droneBuildProgress = 0;
var drones = 0;

function update(progress) {
    // Update the state of the world for the elapsed time since last render
    if(workers > 0){
        gems += workers;
    }

    if(drones > 0){
        for(i = 0;i < drones; i++){
            scavenge();
        }
        // drones.forEach(
        //     scavenge()
        // )
    }

    if(droneBuildProgress >= 100){
        droneBuildProgress = 0;
        drones++;
    }
  }
  
function draw() {
    $("#money").text(gems);
    $("#carbon").text(carbon);
    $("#plastics").text(plastics);
    $("#electronics").text(electronics);
    $("#droneBuildProgress").text(droneBuildProgress +"%");
    $("#numberOfDrones").text(drones + " drone(s).");
    unlockDroneBuild();
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