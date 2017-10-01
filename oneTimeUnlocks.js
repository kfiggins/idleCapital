// one time function unlocks

function unlockDroneBuild(){
    if(gems >= 50 && carbon >= 20 && plastics >= 20 && electronics >= 10){
        $("#buildDrone").show();
        $("#droneBuildProgress").show();
        $("#numberOfDrones").show();
    }
}
