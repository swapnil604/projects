// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ques = document.querySelector(".color-code");
const option1 = document.querySelector(".option-1");
const option2 = document.querySelector(".option-2");
const option3 = document.querySelector(".option-3");
const option4 = document.querySelector(".option-4");
const option5 = document.querySelector(".option-5");
const option6 = document.querySelector(".option-6");

const array = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
];

let count = 1;
let string1 = "#";
let string2 = "#";
let string3 = "#";
let string4 = "#";
let string5 = "#";
let string6 = "#";

while (count != 7) {
    string1 += array[Math.floor(Math.random() * 16)];
    string2 += array[Math.floor(Math.random() * 16)];
    string3 += array[Math.floor(Math.random() * 16)];
    string4 += array[Math.floor(Math.random() * 16)];
    string5 += array[Math.floor(Math.random() * 16)];
    string6 += array[Math.floor(Math.random() * 16)];
    count++;
}

ques.innerHTML = string3;

const arr = [string1, string2, string3, string4, string5, string6];
// alert(arr)

for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const k = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
}

option1.style.background = arr[0];
option2.style.background = arr[1];
option3.style.background = arr[2];
option4.style.background = arr[3];
option5.style.background = arr[4];
option6.style.background = arr[5];

option1.addEventListener("click", () => {
    if (arr[0] == string3) {
        alert("Bingo! Correct guess");
    }
});
option2.addEventListener("click", () => {
    if (arr[1] == string3) {
        alert("Bingo! Correct guess");
    }
});
option3.addEventListener("click", () => {
    if (arr[2] == string3) {
        alert("Bingo! Correct guess");
    }
});
option4.addEventListener("click", () => {
    if (arr[3] == string3) {
        alert("Bingo! Correct guess");
    }
});
option5.addEventListener("click", () => {
    if (arr[4] == string3) {
        alert("Bingo! Correct guess");
    }
});
option6.addEventListener("click", () => {
    if (arr[5] == string3) {
        alert("Bingo! Correct guess");
    }
});