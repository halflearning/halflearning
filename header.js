$(document).ready(function() {
    $(".sbmt").click(function(e) {
        e.preventDefault();
    });
    $(".tutorial").click(function() {
        $("#Dropdown").slideToggle("slow");
    });
    $(".left a:first").addClass("active");

    $(".left a").removeClass("active");

    $(".fa-search-plus").click(function() {
        $(".gsc-control-cse").toggle();
    });
    $(window).resize(function() {
        var $win = $(this);
        if ($win.width() <= 224) {
            $("input[type='text']").hide();
            $("button[type='submit']").hide();
        }
    }).resize();
    var x = $(document).width();
    //$(document).scroll(function() {});
    $(window).resize(function() {
        var window_width = $(window).width();
        if (window_width <= 335) {
            $(".dropdown-content").hide();
        }
    });
});