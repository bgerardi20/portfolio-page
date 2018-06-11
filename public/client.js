$(function () {

    //* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */

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
