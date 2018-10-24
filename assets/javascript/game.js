$(document).ready(function () {
    //  4 crystals and randomResult
    // each crystal have random number from 1-12
    // new random number generated every win/loss for each crystal
    // any crystal clicked, add prev result
    // until = randomResult
    // if total is greater than randomResult, increment LOSS counter ++
    // if = increment WIN counter ++
    var randomResult;
    var loss = 0;
    var win = 0;
    var workingResult = 0;

    var resetAndStart = function () {

        $(".crystals").empty();

        var images = [
            "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642",
            "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/e/e0/Crystal_legendary.png/revision/latest?cb=20151121235336",
            "https://vignette1.wikia.nocookie.net/marvel-contestofchampions/images/c/c3/Crystal_iso8.png/revision/latest?cb=20151121235324",
            "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/b/b4/Crystal_quest.png"]

        randomResult = Math.floor(Math.random() * 69) + 30;
        console.log(randomResult);

        $("#result").html("Random Result: " + randomResult);

        for (var i = 0; i < 4; i++) {

            var randomCrystalNumber = Math.floor(Math.random() * 12) + 1;
            console.log(randomCrystalNumber);

            var crystal = $("<div>");
            crystal.attr({
                "class": "crystal",
                "dataRandom": randomCrystalNumber
            });

            crystal.css({
                "background-image": "url('" + images[i] + "')",
                "background-size": "cover"
            });

            $(".crystals").append(crystal);
            
        }

        workingResult = 0;
        $("#workingResult").html("Current working result: " + workingResult);

    };

    resetAndStart();

    $(document).on("click", ".crystal", function () {

        var num = parseInt($(this).attr("dataRandom"));

        workingResult += num;

        $("#workingResult").html("Total score: " + workingResult);

        if (workingResult > randomResult) {
            loss++;
            $("#loss").html(loss);

            resetAndStart();
        }
        else if (workingResult === randomResult) {
            win++;
            $("#win").html(win);

            resetAndStart();
        }

        console.log(workingResult);

    });

});