var randomResult;
var loss;
var win;

randomResult = Math.floor(Math.random() * 69) + 30;
console.log(randomResult);

$("#result").html("Random Result: ");

for(var i= 0; i < 4; i++){

    var randomCrystalNumber = Math.florr(Math.random() * 11) + 1;
    console.log(randomCrystalNumber);

    var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "dataRandom": random
        });
    $(".crystals").append(crystal);
}

$(".crystal").on("click", function() {

    var num = parsInt($(this).attr("dataRandom"));
});

//  4 crystals and randomResult
// each crystal have random number from 1-12
// new random number generated every win/loss for each crystal
// any crystal clicked, add prev result
// until = randomResult
// if total is greater than randomResult, increment LOSS counter ++
// if = increment WIN counter ++