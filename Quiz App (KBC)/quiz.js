const arr = [{
        question: "The country that has the highest in Barley Production?",
        a: "China",
        b: "India",
        c: "Russia",
        d: "France",
        ans: "option3",
    },
    {
        question: "Indus river originates in –",
        a: "Kinnaur",
        b: "Ladakh",
        c: "Nepal",
        d: "Tibet",
        ans: "option4",
    },
    {
        question: "The hottest planet in the solar system?",
        a: "Mercury",
        b: "Venus",
        c: "Mars",
        d: "Jupiter",
        ans: "option2",
    },
    {
        question: "Where was the electricity supply first introduced in India –",
        a: "Mumbai",
        b: "Dehradun",
        c: "Darjeeling",
        d: "Chennai",
        ans: "option3",
    },
    {
        question: "Which one of the following ports is the oldest port in India?",
        a: "Mumbai Port",
        b: "Chennai Port",
        c: "Kolkata Port",
        d: "Vishakhapatnam Port",
        ans: "option2",
    },
    {
        question: "Grand Central Terminal, Park Avenue, New York is the world’s",
        a: "Highest railway station",
        b: "Longest railway station",
        c: "Largest railway station",
        d: "None of the above",
        ans: "option3",
    },
    {
        question: "Friction can be reduced by changing from",
        a: "Rolling to sliding",
        b: "Sliding to rolling",
        c: "Dynamic to static",
        d: "Potential energy to kinetic energy",
        ans: "option2",
    },
    {
        question: "Film and TV institute of India is located at",
        a: "Pune",
        b: "Pimpri",
        c: "Perambur",
        d: "Rajkot",
        ans: "option1",
    },
    {
        question: "For which of the following disciplines is Nobel Prize awarded?",
        a: "Literature, Peace and Economics",
        b: "Physics and Chemistry",
        c: "Physiology or Medicine",
        d: "All of the above",
        ans: "option4",
    },
    {
        question: "The biggest part of the brain is",
        a: "Spinal cord",
        b: "Cerebellum",
        c: "Cerebrum",
        d: "Brain Stem",
        ans: "option3",
    },
];

const question = document.querySelector(".questions-container");
const option1 = document.querySelector("#ans1");
const option2 = document.querySelector("#ans2");
const option3 = document.querySelector("#ans3");
const option4 = document.querySelector("#ans4");
const rb1 = document.querySelector("#option1");
const rb2 = document.querySelector("#option2");
const rb3 = document.querySelector("#option3");
const rb4 = document.querySelector("#option4");

const res = document.querySelector("#result");
const ansContain = document.querySelector(".ans-container");
const quesContain = document.querySelector(".questions-container");
const result = document.querySelector(".result");

const nextBtn = document.querySelector("#next");
const reset = document.querySelector("#reset");
const option = document.querySelectorAll(".answer");

let count = 0;
let correct = 0;

const loadQuestion = () => {
    const questionList = arr[count];

    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

    validity();
};

const validity = () => {
    rb1.checked = false;
    rb2.checked = false;
    rb3.checked = false;
    rb4.checked = false;
};

loadQuestion();

const notify = () => {
    if (
        rb1.checked == false &&
        rb2.checked == false &&
        rb3.checked == false &&
        rb4.checked == false
    ) {
        count--;
        alert("Please select atleast one option");
    }
};

const checkAns = () => {
    option.forEach((element) => {
        if (element.checked) {
            answer = element.id;
        }
    });

    if (answer === arr[count].ans) {
        correct++;
    }
};

// check.addEventListener("click", () => {
//     checkAns();
// });

const lastQues = () => {
    if (count === arr.length - 1) {
        // alert("Your score is " + correct);
        ansContain.style.visibility = "hidden";
        quesContain.style.visibility = "hidden";
        result.style.visibility = "visible";
        result.innerHTML = "Your score is " + correct;
    }
};

const playAgain = () => {
    again();
    loadQuestion();
};

nextBtn.addEventListener("click", () => {
    notify();
    checkAns();
    count++;
    loadQuestion();
    lastQues();
    console.log(correct);
});

const again = () => {
    count = 0;
    correct = 0;
};

reset.addEventListener("click", () => {
    rb1.checked = false;
    rb2.checked = false;
    rb3.checked = false;
    rb4.checked = false;
});