var clickBtn = document.getElementById("click");
var closeBtn = document.getElementById("close");
var modal = document.getElementsByClassName("modal")[0];

clickBtn.onclick = function() {
    modal.style.display = "flex";
}

closeBtn.onclick = function() {

    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}