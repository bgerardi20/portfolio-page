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



$(document).ready(function () {
    $("#toggle").hide();
    $(".headerSection").show();
    $(".aboutMe").show();
    $(".skills").show();
    $(".projects").show();
    $(".contact").show();
    $(".footerInfo").show();
    $(".close").hide();
});
//
//$(document).on("click", ".subIcons", function () {
//    event.preventDefault();
//
//    $("#toggle").toggle("slide");
//
//
//        let firstImage = $(".subIcons").css('background-image');
//        $(".subIcons").css({
//            'background-image': 'url(../public/website-images/close-icon.png) center center no-repeat',
//            'background-size': '4rem',
//            'background-color': 'red'
//        });
//
//});

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
