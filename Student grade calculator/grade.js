function cal() {
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("phy").value);
    var sub3 = parseInt(document.getElementById("chem").value);
    var sub4 = parseInt(document.getElementById("maths").value);
    var sub5 = parseInt(document.getElementById("info").value);

    if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
        alert("Invalid input! Enter a value less than 100");
    } else if (sub1 < 0 || sub2 < 0 || sub3 < 0 || sub4 < 0 || sub5 < 0) {
        alert("Enter a positive number");
    }
    // if (sub1 == NaN || sub2 == "" || sub3 == "" || sub4 == "" || sub5 == "") {
    //     alert("Cannot be left blank");
    // }
    else {
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var percent = total / 5;
        if (percent >= 90) {
            document.getElementById("Output").innerHTML =
                "Congratulations, your grade is A and percentage is " + percent;
        } else if (percent >= 80 && percent <= 90) {
            document.getElementById("Output").innerHTML =
                "Congratulations, your grade is B and percentage is " + percent;
        } else if (percent >= 70 && percent <= 80) {
            document.getElementById("Output").innerHTML =
                "Congratulations, your grade is C and percentage is " + percent;
        } else if (percent >= 60 && percent <= 70) {
            document.getElementById("Output").innerHTML =
                "Congratulations, your grade is D and percentage is " + percent;
        } else if (percent >= 50 && percent <= 60) {
            document.getElementById("Output").innerHTML =
                "Congratulations, your grade is E and percentage is " + percent;
        } else if (percent >= 0 && percent <= 50) {
            document.getElementById("Output").innerHTML = "Try harder next time :/";
        }
    }
}

function del() {
    document.getElementById("Output").innerHTML = "";
    document.getElementById("eng").value = "";
    document.getElementById("phy").value = "";
    document.getElementById("chem").value = "";
    document.getElementById("maths").value = "";
    document.getElementById("info").value = "";

}