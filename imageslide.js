setInterval(slide, 3800);
function slide() {
    var slider = document.getElementsByClassName("rightimgslide")[0].querySelector("a");
    slider.style.marginLeft = "-160px";
    setTimeout(function() {
        document.getElementsByClassName("rightimgslide")[0].appendChild(slider);
        slider.style.marginLeft = 0;
    }, 500);
}