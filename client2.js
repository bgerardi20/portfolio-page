if (window.matchMedia('(max-width: 768px)').matches) {
    if ($("#nav-trigger").hasClass("active")) {
        $("body").css("margin-left", "0px");
        $(".sidebar").css("height", "70px");
        $(".nav ul").css({
            "margin-left": "auto",
            "display": "block"
        });
    } else {
        $(".sidebar").css("height", "313px");
    };
} else if (window.matchMedia('(max-width: 1024px)').matches) {
    if ($("#nav-trigger").hasClass("active")) {
        $(".sidebar").css({
            "width": "70px",
            "height": "100%",
            "overflow": "hidden"
        });
        $("body").css({
            "margin-left": "0px",
            "overflow-x": "scroll",
            //            "transition": "left 2s ease-in-out"
        });
        $(".nav-wrapper").css({
            "margin-left": "auto",
            "display": "inline-block"
        });
        $(".nameContainer").css({
            "display": "block",
            //            "transition": "top .5s ease-out"
        });
    } else {
        $(".sidebar").css({
            "width": "220px",
            "height": "100%",
            "overflow": "hidden"
        });
        $("body").css({
            "margin-left": "200px",
            "overflow-x": "scroll",
            //            "transition": "left 2s ease-in-out"
        });
        $(".nameContainer").css({
            "display": "none",
            //            "transition": "top .5s ease-out"
        });
    };
};
