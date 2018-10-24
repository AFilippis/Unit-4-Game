var randomResult;
var loss = 0;
var win = 0;
var workingResult = 0;

randomResult = Math.floor(Math.random() * 69) + 30;
console.log(randomResult);

$("#result").html("Random Result: " + randomResult);

for(var i = 0; i < 4; i++){

    var randomCrystalNumber = Math.floor(Math.random() * 11) + 1;
    console.log(randomCrystalNumber);

    var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "dataRandom": randomCrystalNumber
        });
    $(".crystals").append(crystal);
};

$(".crystal").on("click", function() {

    var num = parsInt($(this).attr("dataRandom"));

    workingResult += num;
    if(workingResult > randomResult){
        loss++;
        $("#loss").html(loss);
    }
    else if(workingResult === randomResult){
        win++;
        $("#win").html(win);
    }
    
    console.log(workingResult);

});

//  4 crystals and randomResult
// each crystal have random number from 1-12
// new random number generated every win/loss for each crystal
// any crystal clicked, add prev result
// until = randomResult
// if total is greater than randomResult, increment LOSS counter ++
// if = increment WIN counter ++