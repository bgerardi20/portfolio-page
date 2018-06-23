//drop down buttons in nav container
$(function () {

    var dropDown = document.getElementsByClassName("dropDownBtn");
    var i;

    for (i = 0; i < dropDown.length; i++) {
        dropDown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropDownContent = this.nextElementSibling;
            if (dropDownContent.style.display === "block") {
                dropDownContent.style.display = "none";
            } else {
                dropDownContent.style.display = "block";
            }
        });
    }
})

//$(function () {
//    var coll = document.getElementsByClassName("collapsible");
//    var i;
//
//    for (i = 0; i < coll.length; i++) {
//        coll[i].addEventListener("click", function () {
//            this.classList.toggle("active");
//            var content = this.nextElementSibling;
//            if (content.style.maxHeight) {
//                content.style.maxHeight = null;
//            } else {
//                content.style.maxHeight = content.scrollHeight + "px";
//            }
//        });
//    }
//})

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementsByClassName("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByClassName("main").style.marginLeft = "0";
}




$(document).ready(function () {
    $("#toggle").hide();
    $(".close").hide();
    $(".welcomeHeader").hide();
    $(".headerSection").show();
    $(".aboutMe").show();
    $(".tools").show();
    $(".projects").show();
    $(".contact").show();
    $(".footerInfo").show();
    $(".toolsInnerSection").hide();
});

//
//$(".subIcons").on("mouseenter", function () {
//    $(".welcomeHeader").show();
//});
//$(".subIcons").on("mouseleave", function () {
//    $(".welcomeHeader").hide();
//});

//menu icon to open sidenav
$(document).on("click", ".subIcons", function () {
    event.preventDefault();
    $("#toggle").toggle("slide");
    $(".subIcons").hide();
    $(".close").show();
    $('header, section').scrollLeft(1000);
});

//close menu icon to close sidenav
$(document).on("click", ".close", function (event) {
    event.preventDefault();
    $("#toggle").toggle("slide");
    $(".close").hide();
    $(".subIcons").show();
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
    //    .mouseup(function (event) {
    //        event.preventDefault();
    //        $(".code", this).css("display", "inline-block");
    //        $(".demo", this).css("display", "inline-block");
    //        $("img", this).css({
    //            "opacity": "0.1",
    //            "border": "2px solid white",
    //            "-webkit-transform": "scale(1.1)",
    //            "-moz-transform": "scale(1.1)",
    //            "-ms-transform": "scale(1.1)",
    //            "-o-transform": "scale(1.1)",
    //            "transform": "scale(1.1)"
    //        });
    //    })
    .mouseleave(function (event) {
        event.preventDefault();
        $(".code").css("display", "none");
        $(".demo").css("display", "none");
        $("img", this).css({
            "opacity": "0.8",
            "border": "none",
            "-webkit-transform": "scale(1)",
            "-moz-transform": "scale(1)",
            "-ms-transform": "scale(1)",
            "-o-transform": "scale(1)",
            "transform": "scale(1)"
        });
    })


//triggers for tool icon buttons
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
//end of triggers for tool icon buttons



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
