const inputQues = document.querySelector(".enter-ques input");
const inputAns = document.querySelector(".enter-ans input");
const saveBtn = document.querySelector(".save");
const clearBtn = document.querySelector(".clear");
const flashcards = document.querySelector(".flashcards");
var arr = localStorage.getItem("items") ?
    JSON.parse(localStorage.getItem("items")) : [];

arr.forEach(makeDiv);

saveBtn.onclick = () => {
    if (inputQues.value == "") {
        alert("Please enter question!");
        return;
    }

    if (inputAns.value == "") {
        alert("Please enter answer!");
        return;
    }

    mainFun();

    inputQues.value = "";
    inputAns.value = "";
};

clearBtn.onclick = () => {
    arr = [];
    flashcards.innerHTML = "";
    localStorage.clear();
};

function mainFun() {
    let flashcard_info = {
        my_question: inputQues.value,
        my_answer: inputAns.value,
    };

    arr.push(flashcard_info);
    localStorage.setItem("items", JSON.stringify(arr));
    makeDiv(arr[arr.length - 1]);
}

function makeDiv(text) {
    let div = document.createElement("div");
    let quesPara = document.createElement("p");
    let ansPara = document.createElement("p");

    flashcards.appendChild(div);
    div.appendChild(quesPara);
    div.appendChild(ansPara);

    quesPara.innerHTML = text.my_question;
    ansPara.innerHTML = text.my_answer;

    div.classList.add("pseudo-card");
    quesPara.classList.add("pseudo-ques");
    ansPara.classList.add("pseudo-ans");

    div.addEventListener("click", () => {
        if (ansPara.style.display == "none") {
            ansPara.style.display = "block";
        } else ansPara.style.display = "none";
    });
}