$(".fadeContainer").on("mouseover", function () {
        $(".text", this).css("opacity", "1.0");
        $(".image", this).css({
            "opacity": "0.1",
            "border": "4px solid rgba(255,255,255, 1)",
            "border-radius": "50%"
        });
        //        $("img", this).css("filter", "brightness(50%)");

    })
    .mouseleave(function () {
        $(".text", this).css("opacity", "0.01");
        $(".image", this).css({
            "opacity": "1.0",
            "border": "4px solid rgba(255,255,255, 0.01)",
            "border-radius": "50%"

        });
    });




//$("#nav-trigger span").on("click", function () {
//    if (window.matchMedia('(max-width: 768px)').matches) {
//        $("#nav-trigger").addClass("active");
//
//        let wrapperDisplay = $(".nav-wrapper").css("display");
//        console.log(wrapperDisplay);
//        //if the nav wrappers display is set to none = padding is 90px 0 0
//        //if the nav wrappers display is set to block = padding is 0
//        if (wrapperDisplay == "block") {
//            $(".sidebar").css("padding", "0");
//        } else {
//            $(".sidebar").css("padding", "90px 0 0");
//        }
//    };
//});
//
//$('#nav-trigger').click(function () {
//    $(this).toggleClass('active');
//    $('#nav-wrapper').slideToggle()
//});


//open nav
$("#nav-trigger").on("click", function () {

    //    if (window.matchMedia('(max-width: 768px)').matches) {
    //        $("#nav-trigger").addClass("active");
    //    };
    //    $(this).toggleClass("active");
    //    $("#nav-wrapper").slideToggle();

    //    $("body").css({
    //        "margin-left": "200px",
    //        "overflow-x": "scroll",
    //        "transition": "left 2s ease-in-out"
    //    });
    if (window.matchMedia('(max-width: 769px)').matches) {
        $("body").css({
            "margin-left": "0px",
            //            "transition": "height 1s"
        });
    } else if (window.matchMedia('(max-width: 1024px)').matches) {
        $("body").css({
            "margin-left": "200px",
            "overflow-x": "scroll",
            //            "transition": "left 2s ease-in-out"
        });
    } else {
        $("body").css({
            "margin-left": "160px",
            "overflow-x": "visible",
            //            "transition": "left 2s ease-in-out"
        });
    };


    $("main").css({
        "margin-left": "auto",
        "margin-right": "auto",
        "width": "100%"
    });



    //    $("section").css("margin-left", "auto");
    if (window.matchMedia('(max-width: 768px)').matches) {
        $("section").css("margin-left", "auto");
    } else if (window.matchMedia('(max-width: 1024px)').matches) {
        $("section").css("margin-left", "50px");
    } else {
        $("section").css("margin-left", "70px");
    };


    //    if (window.matchMedia('(max-width: 768px)').matches) {
    //        $(".sidebar").css("padding", "0");
    //    };

    //    $(".nav ul").css({
    //        "margin-left": "10px",
    //        "transition": "margin-left .2s",
    //        "transition-timing-function": "ease-in"
    //    });
    if (window.matchMedia('(max-width: 768px)').matches) {
        $(".nav ul").css({
            "margin-left": "auto",
            //            "transition": "all .7s ease-in",
            //            "border-top": "1px solid dimgray",
            "display": "block"
        });
    } else {
        $(".nav ul").css(
            "margin-left", "10px"
            //            "transition": "margin-left .2s",
            //            "transition-timing-function": "ease-in"
        );
    };


    if (window.matchMedia('(max-width: 768px)').matches) {
        $(".nav li").css("border-bottom", "1px solid dimgray");
        $(".nav li:last-child").css("border-bottom", "none");
    };



    if (window.matchMedia('(max-width: 768px)').matches) {
        //            $("#nav-trigger span").addClass("active");
        //            let wrapperDisplay = $("#nav-wrapper").css("display");

        //        $("#nav-trigger span").addClass("active");

        //            if ($("span").hasClass("active")) {
        //                $("#sidebar").css("padding-top", "0px");
        //            } else {
        //                $("#sidebar").css("padding-top", "90px");
        //            };




        //if the nav wrappers display is set to none = padding is 90px 0 0
        //if the nav wrappers display is set to block = padding is 0
        //        $("#nav-trigger").on("load change", function () {
        if ($("#nav-trigger").hasClass("active")) {
            $(".sidebar").css({
                "height": "90px",
                //                "border-bottom": "1px solid dimgray"
            });
            //            console.log("its active!")
            //            $(".container").css("height", "90px");
        } else {
            $(".sidebar").css({
                "height": "333px",
                //                "border-bottom": "0px solid dimgray"
            });
            //            console.log("its not active!")
            //            $(".container").css("height", "0px");
        };
        //        });
    };



    if (window.matchMedia('(max-width: 480px)').matches) {
        console.log("hello");
        $(".sidenav").css({
            "width": "100%",
            "height": "130px",
            "overflow": "hidden",
            //            "transition": "all 0.5s"

        });
    } else if (window.matchMedia('(max-width: 768px)').matches) {
        //        console.log("hello");
        $(".sidenav").css({
            "width": "100%",
            //            "height": "343px",
            "overflow": "hidden",
            "transition": ".7s ease-in-out",
            "border-bottom": "none",
            "display": "block"

        });
    } else if (window.matchMedia('(max-width: 1200px)').matches) {
        console.log("hello");
        $(".sidenav").css({
            "width": "220px",
            "height": "100%",
            "overflow": "hidden",
            //            "transition": "left 0.2s ease-in-out"
            //            "transition": "all 1s"

        });
    } else if (window.matchMedia('(max-width: 1499px)').matches) {
        console.log('hello');
        $(".sidenav").css({
            'width': '250px',
            'height': '100%',
            'overflow': 'hidden',
            //            "transition": "left 0.2s ease-in-out"
            //            "transition": "all 1s"

        });
    }
    //    } else if (window.matchMedia('(min-width: 1500px)').matches)
    else {
        console.log('hello');
        $(".sidenav").css({
            'width': '280px',
            'height': '100%',
            'overflow': 'hidden',
            //            "transition": "left 0.2s ease-in-out"
            //            "transition": "all 1s"

        });
    }

});




if (window.matchMedia('(min-width: 481px)').matches) {
    $(".headerTitle").css('margin-right', 'auto');
} else if (window.matchMedia('(min-width: 480px)').matches) {
    $(".headerTitle").css('margin-right', 'auto');
} else if (window.matchMedia('(min-width: 1px)').matches) {
    $(".headerTitle").css('margin-right', 'auto');
} else {
    $(".headerTitle").css({
        'margin-right': '165px',
        'transition': "all 1s"
    });
};



//close nav
$("#nav-trigger.active span").on("click", function () {
    //    $("body").css({
    //        "margin-left": "0px",
    //        "overflow-x": "hidden",
    //        "transition": "left 2s ease-in-out"
    //    });
    if (window.matchMedia('(min-width: 1025px)').matches) {
        $("body").css({
            "margin-left": "0px",
            "overflow-x": "visible",
            //            "transition": "left 2s ease-in-out"
        });
    } else if (window.matchMedia('(max-width: 1024px)').matches) {
        $("body").css({
            "margin-left": "0px",
            "overflow-x": "hidden",
            //            "transition": "left 2s ease-in-out"
        });
    }



    $("main").css({
        "margin-left": "auto",
        "margin-right": "auto"
        //        "transition": "all 1s"
    });



    //    $("section").css("width", "90%");
    if (window.matchMedia('(max-width: 768px)').matches) {
        $("section").css('margin-left', 'auto');
    } else if (window.matchMedia('(max-width: 1024px)').matches) {
        $("section").css('margin-left', '80px');
    } else {
        $("section").css('margin-left', '25px');
    };

    if (window.matchMedia('(max-width: 768px)').matches) {
        $(".sidebar").css("padding-top", "90px 0 0");
    };


    if (window.matchMedia('(max-width: 768px)').matches) {
        $(".nav ul").css({
            //            "border-top": "none"
            "transition": "all .7s ease-out",
            //            "display": "none"
        });
    } else {
        $(".nav ul").css({
            "margin-left": "2.5px",
            //            "transition": "margin-left .2s",
            //            "transition-timing-function": "ease-in"
        });
    };



    if (window.matchMedia('(max-width: 769px)').matches) {
        //        $(".nav li").css("border-bottom", "none");
    };
    //
    //    if (window.matchMedia('(max-width: 769px)').matches) {
    //        $(".hiddenNav").css("display", "block");
    //    };

    //    $("..nav li").css("border-bottom", "none");



    //
    //    $(".sidenav").css({
    //        "height": "100%",
    //        "width": "70px",
    //        "transition": "right 0.2s ease-in-out"
    //    });
    if (window.matchMedia('(max-width: 480px)').matches) {
        $(".sidenav").css({
            'width': '100%',
            'height': '80px',
            //            "transition": "none"
        });
    } else if (window.matchMedia('(max-width: 768px)').matches) {
        $(".sidenav").css({
            "width": "100%",
            "height": "90px",
            //            "overflow": "hidden",
            "transition": ".7s ease-in-out",
            //            "border-bottom": "none",
            //            "display": "none"

        });
    } else {
        $(".sidenav").css({
            "height": "100%",
            "width": "70px",
            //            "transition": "right 0.2s ease-in-out"
        });
    };

    //            'width': '100%',
    //            'height': '90px',
    //                        "transition": ".7s ease-in",
    //            "border-bottom": "4px solid black"



    $(".headerTitle").css({
        'margin-right': 'auto',
        //        'transition': "margin-right 3s"
    });


    if (window.matchMedia('(max-width: 769px)').matches) {
        $(".nameContainer").css({
            //            "display": "none",
            "top": "-110px",
            "transition": "top .5s ease-out"
        });
    }

    if (window.matchMedia('(max-width: 769px)').matches) {
        $(".navContact").css({
            //            "display": "none",
            "top": "-110px",
            "transition": "top .5s ease-out"
        });
    }


    //
    //    $(".nameContainer").hide();
    //    $(".navContact").hide();

});

//return home
$('#logo').on('click', function (event) {
    $('html, body').animate({
        scrollTop: 0,
    }, 'fast')
})
//about me nav trigger
$('#jsAboutNav').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.aboutMe").offset().top
    });
});
//tools nav trigger
$('#jsToolNav').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.tools").offset().top
    });
});
//projects nav trigger
$('#jsProjectNav').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.projects").offset().top
    });
});
//contact nav trigger
$('#jsContactNav').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.contact").offset().top
    });
});

//hover for project images, and showing code/demo buttons
$("div.codeButton").mouseenter(function (event) {
        event.preventDefault();
        $(".code", this).css("display", "inline-block");
        $(".demo", this).css("display", "inline-block");
        $("img", this).css({
            "opacity": "0.1",
            "border": "2px solid white",
            "-webkit-transform": "scale(1.1)",
            "-moz-transform": "scale(1.1)",
            "-ms-transform": "scale(1.1)",
            "-o-transform": "scale(1.1)",
            "transform": "scale(1.1)"
        });
    })
    .mouseleave(function (event) {
        event.preventDefault();
        $(".code").css("display", "none");
        $(".demo").css("display", "none");
        $("img", this).css({
            "opacity": "0.9",
            "border": "none",
            "-webkit-transform": "scale(1)",
            "-moz-transform": "scale(1)",
            "-ms-transform": "scale(1)",
            "-o-transform": "scale(1)",
            "transform": "scale(1)"
        });
    })



$(document).ready(function () {
    $(".welcomeHeader").hide();
    $(".headerSection").show();
    $(".aboutMe").show();
    $(".tools").show();
    $(".projects").show();
    $(".contact").show();
    $(".footerInfo").show();
    $(".toolsInnerSection").hide();
    //    $(".navLink").hide();
    //    $(".navIcon").hide();
    //    $(".nameContainer").hide();
    //    $(".navContact").hide();
    //    if (window.matchMedia('(max-width: 768px)').matches) {
    //        $(".sidenav ul").hide();
    //    };
    //    $('#nav-trigger').click(function () {
    //        $(this).toggleClass('active');
    //        $('#nav-wrapper').slideToggle();
    //    });
    $("#nav-trigger").click(function () {
        $(this).toggleClass("active");
        $("#nav-wrapper").slideToggle();
    });


    //    $("#nav-trigger").on("click", function () {
    //        if (window.matchMedia('(max-width: 768px)').matches) {
    //            //            $("#nav-trigger span").addClass("active");
    //            //            let wrapperDisplay = $("#nav-wrapper").css("display");
    //
    //            $("#nav-trigger span").addClass("active");
    //
    //            //            if ($("span").hasClass("active")) {
    //            //                $("#sidebar").css("padding-top", "0px");
    //            //            } else {
    //            //                $("#sidebar").css("padding-top", "90px");
    //            //            };
    //
    //
    //
    //
    //            //if the nav wrappers display is set to none = padding is 90px 0 0
    //            //if the nav wrappers display is set to block = padding is 0
    //            $("#nav-trigger").on("click", function () {
    //                if ($("#nav-trigger div").hasClass("active")) {
    //                    //                    $("#sidebar").css("padding-top", "0px");
    //                    console.log("its active!")
    //                } else {
    //                    //                    $("#sidebar").css("padding-top", "90px");
    //                    console.log("its not active!")
    //                };
    //            });
    //        }
    //    });

    if (window.matchMedia('(min-width: 769px)').matches) {
        $("nav").addClass("sidenav");
    }

});

//menu icon to open sidenav
$(document).on("click", ".subIcons", function () {
    event.preventDefault();
    //    $("#toggle").toggle("slide");
    $(".subIcons").hide();
    $(".close").show();
    //    $(".nameContainer").show();
    //    $(".navContact").show();
    //    $(".navLink").show();
    //    $(".navIcon").show();

    $('header, section').scrollLeft(1000);


    if (window.matchMedia('(max-width: 480px)').matches) {
        $(".sidenav ul").show();
        //        $(".sidenav ul").css('width': '100%');
    }
});

//close menu icon to close sidenav
$(document).on("click", ".close", function (event) {
    event.preventDefault();
    //    $("#toggle").toggle("slide");
    $(".close").hide();
    $(".subIcons").show();
    //    $(".nameContainer").hide();
    //    $(".navContact").hide();
    //    $(".navLink").hide();
    //    $(".navIcon").hide();

    if (window.matchMedia('(max-width: 480px)').matches) {
        $(".sidenav ul").hide();
    }
});

//trigger for tool icon buttons
$(document).on("click", "#languages", function () {
    event.preventDefault();
    $(".languages").show();
    $(".front").hide();
    $(".back").hide();
    $(".dataB").hide();
    $(".testing").hide();
    $(".development").hide();
    $(".miscellaneous").hide();
});
//trigger for tool icon buttons
$(document).on("click", "#frontend", function () {
    event.preventDefault();
    $(".languages").hide();
    $(".front").show();
    $(".back").hide();
    $(".dataB").hide();
    $(".testing").hide();
    $(".development").hide();
    $(".miscellaneous").hide();
});
//trigger for tool icon buttons
$(document).on("click", "#backend", function () {
    event.preventDefault();
    $(".languages").hide();
    $(".front").hide();
    $(".back").show();
    $(".dataB").hide();
    $(".testing").hide();
    $(".development").hide();
    $(".miscellaneous").hide();
});
//trigger for tool icon buttons
$(document).on("click", "#database", function () {
    event.preventDefault();
    $(".languages").hide();
    $(".front").hide();
    $(".back").hide();
    $(".dataB").show();
    $(".testing").hide();
    $(".development").hide();
    $(".miscellaneous").hide();
});
//trigger for tool icon buttons
$(document).on("click", "#testing", function () {
    event.preventDefault();
    $(".languages").hide();
    $(".front").hide();
    $(".back").hide();
    $(".dataB").hide();
    $(".testing").show();
    $(".development").hide();
    $(".miscellaneous").hide();
});
//trigger for tool icon buttons
$(document).on("click", "#development", function () {
    event.preventDefault();
    $(".languages").hide();
    $(".front").hide();
    $(".back").hide();
    $(".dataB").hide();
    $(".testing").hide();
    $(".development").show();
    $(".miscellaneous").hide();
});
//trigger for tool icon buttons
$(document).on("click", "#miscellaneous", function () {
    event.preventDefault();
    $(".languages").hide();
    $(".front").hide();
    $(".back").hide();
    $(".dataB").hide();
    $(".testing").hide();
    $(".development").hide();
    $(".miscellaneous").show();
});
