filterSelection("all");

// start of main function
function filterSelection(c) {
    var i, x;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";

    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}
// end of main function

// start of remove function
function removeClass(element, prop) {
    var i;
    var arr1 = element.className.split(" ");
    var arr2 = prop.split(" ");

    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
// end of remove function

// start of add function
function addClass(element, prop) {
    var i;
    var arr1 = element.className.split(" ");
    var arr2 = prop.split(" ");

    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}
// end of add function

// start of highlighting button
var containerBtn = document.getElementById("myBtnContainer");
var btn = containerBtn.getElementsByClassName("btn");

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
// end of highlighting button