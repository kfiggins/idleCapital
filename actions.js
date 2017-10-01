
function scavenge(){
    var rand = Math.random() * 100;
    if(rand < 40 ){
        gems++;
    } else if(rand >= 40 && rand < 70){
        carbon++;
    } else if(rand >= 70 && rand < 90){
        plastics++;
    } else if(rand >+ 90){
        electronics++;
    }

    draw();
}

function buildDrone(){
    if(gems > 0 && carbon > 1 && plastics > 1 && electronics > 0){
        gems--;
        carbon -= 2;
        plastics -= 2;
        electronics--;
        droneBuildProgress += 10;
        draw();
    }
}

function addWorker(){
    if(gems < 50){
        console.log("no");
        return;
    }
    workers++;
    gems = gems - 50;
    $("#money").text(gems);
}