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

//$(function () {
//    let ids = '';
//    let dropDown = $(".fadeContainer");
//    let i;
//    console.log(dropDown);
//
//    for (i = 0; i < dropDown.length; i++) {
//        console.log(this.dropDown);
//        dropDown[i].addEventListener("click", function () {
//            $(".skillsInnerSection").show();
//                        this.classList.toggle("active");
//                        let dropDownContent = this.lastElementChild;
//                        console.log(this.dropDownContent);
//                        if (dropDownContent.style.display === "block") {
//                            dropDownContent.style.display = "none";
//                        } else {
//                            dropDownContent.style.display = "block";
//                        }
//        });
//
//
//
//    };
//
//        });
//});


//    dropDown.on("mouseout", function () {
//        $(this).
//    });


//
//function myFunction() {
//    var x = document.getElementsByClassName("skillsInnerSection");
//    if (x.style.display === "none") {
//        x.style.display = "block";
//    } else {
//        x.style.display = "none";
//    };
//}




$(document).ready(function () {
    $("#toggle").hide();
    $(".close").hide();
    $(".welcomeHeader").hide();
    $(".headerSection").show();
    $(".aboutMe").show();
    $(".skills").show();
    $(".projects").show();
    $(".contact").show();
    $(".footerInfo").show();
    $(".skillsInnerSection").hide();
});


$(".subIcons").on("mouseenter", function () {
    $(".welcomeHeader").show();
});
$(".subIcons").on("mouseleave", function () {
    $(".welcomeHeader").hide();
});

$(document).on("click", ".subIcons", function () {
    event.preventDefault();
    $("#toggle").toggle("slide");
    $(".subIcons").hide();
    $(".close").show();
});


$(document).on("click", ".close", function (event) {
    event.preventDefault();
    $("#toggle").toggle("slide");
    $(".close").hide();
    $(".subIcons").show();
});


//hover for project images
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
    .mouseup(function (event) {
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
            "opacity": "0.8",
            "border": "none",
            "-webkit-transform": "scale(1)",
            "-moz-transform": "scale(1)",
            "-ms-transform": "scale(1)",
            "-o-transform": "scale(1)",
            "transform": "scale(1)"
        });
    })



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





//triggers for skill buttons
//$(document).ready(function () {
//    $("#toggle").hide();
//    $(".close").hide();
//    $(".welcomeHeader").hide();
//    $(".headerSection").show();
//    $(".aboutMe").show();
//    $(".skills").show();
//    $(".projects").show();
//    $(".contact").show();
//    $(".footerInfo").show();
//});
//
//$(document).ready(function () {
//    $("#toggle").hide();
//    $(".close").hide();
//    $(".welcomeHeader").hide();
//    $(".headerSection").show();
//    $(".aboutMe").show();
//    $(".skills").show();
//    $(".projects").show();
//    $(".contact").show();
//    $(".footerInfo").show();
//});
//
//$(document).ready(function () {
//    $("#toggle").hide();
//    $(".close").hide();
//    $(".welcomeHeader").hide();
//    $(".headerSection").show();
//    $(".aboutMe").show();
//    $(".skills").show();
//    $(".projects").show();
//    $(".contact").show();
//    $(".footerInfo").show();
//});
//
//$(document).ready(function () {
//    $("#toggle").hide();
//    $(".close").hide();
//    $(".welcomeHeader").hide();
//    $(".headerSection").show();
//    $(".aboutMe").show();
//    $(".skills").show();
//    $(".projects").show();
//    $(".contact").show();
//    $(".footerInfo").show();
//});
//
//$(document).ready(function () {
//    $("#toggle").hide();
//    $(".close").hide();
//    $(".welcomeHeader").hide();
//    $(".headerSection").show();
//    $(".aboutMe").show();
//    $(".skills").show();
//    $(".projects").show();
//    $(".contact").show();
//    $(".footerInfo").show();
//});
//
//$(document).ready(function () {
//    $("#toggle").hide();
//    $(".close").hide();
//    $(".welcomeHeader").hide();
//    $(".headerSection").show();
//    $(".aboutMe").show();
//    $(".skills").show();
//    $(".projects").show();
//    $(".contact").show();
//    $(".footerInfo").show();
//});
//
//$(document).ready(function () {
//    $("#toggle").hide();
//    $(".close").hide();
//    $(".welcomeHeader").hide();
//    $(".headerSection").show();
//    $(".aboutMe").show();
//    $(".skills").show();
//    $(".projects").show();
//    $(".contact").show();
//    $(".footerInfo").show();
//});
