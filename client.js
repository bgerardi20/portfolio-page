//drop down buttons in nav container
//$(function () {
//
//    var dropDown = document.getElementsByClassName("dropDownBtn");
//    var i;
//
//    for (i = 0; i < dropDown.length; i++) {
//        dropDown[i].addEventListener("click", function () {
//            this.classList.toggle("active");
//            var dropDownContent = this.nextElementSibling;
//            if (dropDownContent.style.display === "block") {
//                dropDownContent.style.display = "none";
//            } else {
//                dropDownContent.style.display = "block";
//            }
//        });
//    }
//})

$(".fadeContainer").on("mouseover", function () {
        $(".text", this).css("opacity", "1.0");
        $(".image", this).css({
            "border": "4px solid rgba(255,255,255, 1.0)",
            "border-radius": "50% 50%",
            "opacity": "0.1"
        });
        //        $("img", this).css("filter", "brightness(50%)");

    })
    .mouseleave(function () {
        $(".text", this).css("opacity", "0.01");
        $(".image", this).css({
            "opacity": "1.0",
            "border": "4px solid rgba(255,255,255, 0.01)",
            "border-radius": "50% 50%"

        });
    })

//open nav
$(".subIcons").on("click", function () {
    $("body").css("margin-left", "220px");
    $("main").css({
        "margin-left": "auto",
        "margin-right": "auto",
        "width": "100%"
    });
    $("section").css("width", "auto");
    $(".sidenav").css("width", "220px");
    $(".headerTitle").css('margin-right', '165px');
    $(".close").show();
});

//close nav
$(".close").on("click", function () {
    $("body").css({
        "margin-left": "0px",
        "width": "100%"
    });
    $("main").css({
        "margin-left": "auto",
        "margin-right": "auto",
        "width": "100%"
    });
    $("section").css("width", "90%");
    $(".sidenav").css("width", "60px");
    $(".headerTitle").css('margin-right', 'auto');

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
    //    $("#toggle").hide();
    //    $(".close").hide();
    $(".welcomeHeader").hide();
    $(".headerSection").show();
    $(".aboutMe").show();
    $(".tools").show();
    $(".projects").show();
    $(".contact").show();
    $(".footerInfo").show();
    $(".toolsInnerSection").hide();
    $(".navLink").hide();
});

//menu icon to open sidenav
$(document).on("click", ".subIcons", function () {
    event.preventDefault();
    //    $("#toggle").toggle("slide");
    $(".subIcons").hide();
    $(".close").show();
    $(".nameContainer").show();
    $(".navContact").show();
    $(".navLink").show();

    $('header, section').scrollLeft(1000);
});

//close menu icon to close sidenav
$(document).on("click", ".close", function (event) {
    event.preventDefault();
    //    $("#toggle").toggle("slide");
    $(".close").hide();
    $(".subIcons").show();
    $(".nameContainer").hide();
    $(".navContact").hide();
    $(".navLink").hide();
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
