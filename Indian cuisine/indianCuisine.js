const arr = [{
        img: "/img/mygov16065373439429073.jpg",
        dish: "Masala Dosa",
        state: "Kerala",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non. Ullamcorper sit amet risus nullam eget felis. Scelerisque viverra mauris in aliquam sem fringilla ut.",
    },
    {
        img: "/img/fullsizeoutput_b6b2-e1536508128253.jpeg",
        dish: "Puran Poli",
        state: "Maharashtra",
        about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptates, error veniam aliquam vero debitis fuga iste perferendis delectus, voluptatum ex! Consequatur, officia harum illum aliquid magnam ipsa dignissimos! Veniam, dolorum.",
    },
    {
        img: "/img/Best-Pav-Bhaji-Recipe.jpg",
        dish: "Pav Bhaji",
        state: "Mumbai",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt id aliquet risus feugiat in ante. Urna nec tincidunt praesent semper. Semper risus in hendrerit gravida rutrum. Praesent semper feugiat nibh sed pulvinar.",
    },
    {
        img: "/img/134392467-pindi-chole-kulche-or-roadside-choley-kulcha-is-a-popular-streetfood-in-india-and-pakistan-it-s-a-sp.jpg",
        dish: "Chole Kulche",
        state: "Punjab",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies. Bibendum enim facilisis gravida neque convallis a cras semper. Est lorem ipsum dolor sit amet consectetur.",
    },
    {
        img: "/img/images.jpg",
        dish: "Fish Curry",
        state: "Kolkata",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Aliquam ut porttitor leo a. Risus nec feugiat in fermentum posuere urna. Eget gravida cum sociis natoque penatibus et magnis dis.",
    },
    {
        img: "/img/o9vc9nc2huhyhdsa3lq6.jpg",
        dish: "Biryani",
        state: "Hydrabad",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor pretium viverra suspendisse potenti. Proin sagittis nisl rhoncus mattis rhoncus urna. Pretium vulputate sapien nec sagittis aliquam. Arcu dui vivamus arcu felis bibendum.",
    },
];

const image = document.getElementById("food_img");
const food = document.getElementById("food_name");
const origin = document.getElementById("food_origin");
const abt = document.getElementById("about");

const next = document.querySelector(".right");
const previous = document.querySelector(".left");

let currItem = 0;

// window.addEventListener("DOMContentLoaded", function() {
//     const item = arr[currItem];

//     image.src = item.img;
//     food.textContent = item.dish;
//     origin.textContent = item.state;
//     abt.textContent = item.about;
// });

function showArr(travel) {
    const item = arr[travel];

    image.src = item.img;
    food.textContent = item.dish;
    origin.textContent = item.state;
    abt.textContent = item.about;
}

next.addEventListener("click", function() {
    currItem++;
    if (currItem > arr.length - 1) {
        currItem = 0;
    }
    showArr(currItem);
});

previous.addEventListener("click", function() {
    currItem--;
    if (currItem < 0) {
        currItem = arr.length - 1;
    }
    showArr(currItem);
});