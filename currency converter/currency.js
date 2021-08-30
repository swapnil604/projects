const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const convert = document.getElementById("convert");
const clear = document.getElementById("clear");
const firstCurr = document.getElementById("first-currency");
const secondCurr = document.getElementById("second-currency");


convert.onclick = () => {
    var first = firstCurr.value;
    var second = secondCurr.value;

    var x = input1.value;
    var y = parseFloat(x);

    invalid(x);
    check(first, second, y);
    // alert(second);
};

function invalid(a) {
    if (a == "" || isNaN(a) == true) {
        alert("Please Enter a Number.");
        clear();
    }
}

function check(a, b, c) {
    if (a == "dollar1") {
        if (b == "rupee2") {
            input2.innerHTML = (c * 73.25).toString();
        }
        if (b == "dollar2") {
            input2.innerHTML = c.toString();
        }
        if (b == "pound2") {
            input2.innerHTML = (c * 0.73).toString();
        }
        if (b == "euro2") {
            input2.innerHTML = (c * 0.85).toString();
        }
        if (b == "yuan2") {
            input2.innerHTML = (c * 6.47).toString();
        }
    }

    if (a == "rupee1") {
        if (b == "rupee2") {
            input2.innerHTML = c.toString();
        }
        if (b == "dollar2") {
            input2.innerHTML = (c * 0.014).toString();
        }
        if (b == "pound2") {
            input2.innerHTML = (c * 0.0099).toString();
        }
        if (b == "euro2") {
            input2.innerHTML = (c * 0.012).toString();
        }
        if (b == "yuan2") {
            input2.innerHTML = (c * 0.088).toString();
        }
    }

    if (a == "pound1") {
        if (b == "rupee2") {
            input2.innerHTML = (c * 100.72).toString();
        }
        if (b == "dollar2") {
            input2.innerHTML = (c * 1.37).toString();
        }
        if (b == "pound2") {
            input2.innerHTML = c.toString();
        }
        if (b == "euro2") {
            input2.innerHTML = (c * 1.17).toString();
        }
        if (b == "yuan2") {
            input2.innerHTML = (c * 8.89).toString();
        }
    }

    if (a == "euro1") {
        if (b == "rupee2") {
            input2.innerHTML = (c * 86.44).toString();
        }
        if (b == "dollar2") {
            input2.innerHTML = (c * 1.18).toString();
        }
        if (b == "pound2") {
            input2.innerHTML = (c * 0.86).toString();
        }
        if (b == "euro2") {
            input2.innerHTML = c.toString();
        }
        if (b == "yuan2") {
            input2.innerHTML = (c * 7.63).toString();
        }
    }

    if (a == "yuan1") {
        if (b == "rupee2") {
            input2.innerHTML = (c * 11.33).toString();
        }
        if (b == "dollar2") {
            input2.innerHTML = (c * 0.15).toString();
        }
        if (b == "pound2") {
            input2.innerHTML = (c * 0.11).toString();
        }
        if (b == "euro2") {
            input2.innerHTML = (c * 0.13).toString();
        }
        if (b == "yuan2") {
            input2.innerHTML = c.toString();
        }
    }
}

clear.onclick = () => {
    input1.value = "";
    input2.innerHTML = "";
};