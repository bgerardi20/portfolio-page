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

$(function () {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
})




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




$("div.codeButton").mouseover(function (event) {
        event.preventDefault();
        $(".code", this).css("display", "inline-block");
        $(".demo", this).css("display", "inline-block");
        $("img", this).css("opacity", "0.3");
    })
    .mouseleave(function (event) {
        event.preventDefault();
        $(".code").css("display", "none");
        $(".demo").css("display", "none");
        $("img", this).css("opacity", "0.7");
    });




//triggers for skill buttons
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
});

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
});

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
});

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
});

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
});

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
});

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
});
