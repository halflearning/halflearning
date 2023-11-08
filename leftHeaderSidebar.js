var leftDiv = document.getElementById("leftPos");

window.addEventListener("scroll", function() {
    var nav = document.getElementById("nav");
    var navheight = window.getComputedStyle(document.getElementById("nav")).height;
    var posY = nav.getBoundingClientRect().y;
    if (window.scrollY <= 82) {
        var y = -window.scrollY;
        //console.log(y);
        x = 130 + y - 1;
        leftDiv.style.paddingTop = x + "px";


    }

    if (posY == 0) {
        leftDiv.style.paddingTop = "46px";
    }
});

/**
 * Display Hide and Show 
 */
var left
var leftSide = document.getElementById("left1");
var bar = document.getElementsByClassName("bars")[0];
bar.onclick = function() {
        var leftProp = window.getComputedStyle(leftSide).display;
        if (leftProp == "none") {
            leftDiv.style.display = "initial";
            leftSide.style.display = "block";

        } else {
            leftDiv.style.display = "none";
            leftSide.style.display = "none";

        }
    }
    /*
    bar.onblur = function() {
        var leftProp = window.getComputedStyle(leftSide).display;
        if (leftProp == "block") {
            leftSide.style.display = "none";
        }
    }
    */