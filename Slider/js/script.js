const objectsArr = [
  {
    city: ["Rostov-on-Don", "LCD admiral"],
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request",
    img: "img1.png",
  },
  {
    city: ["Sochi", "Thieves"],
    area: "105 m2",
    time: "4 months",
    cost: "Upon request",
    img: "img2.png",
  },
  {
    city: ["Rostov-on-Don", "Patriotic"],
    area: "93 m2",
    time: "3 months",
    cost: "Upon request",
    img: "img3.png",
  },
];

const city = document.querySelector(".slider-left__city");
const area = document.querySelector(".slider-left__area");
const time = document.querySelector(".slider-left__time");
const cost = document.querySelector(".slider-left__cost");
const img = document.querySelector(".slider-right__img");
const namesArr = document.querySelectorAll(".slider-right__title");
const numArr = document.querySelectorAll(".slider-left__num");
const arrowRight = document.querySelector(".slider-left__arrow-right");
const arrowLeft = document.querySelector(".slider-left__arrow-left");
const underLineArr = document.querySelectorAll(".slider-right__title-line");

let count = 0;

//Задаем длину линии подчеркивания равной длине элемента
underLineArr.forEach((item, index) => {
  item.style.width = namesArr[index].clientWidth + "px";
});

// Обработчик на стрелку вправо
arrowRight.addEventListener("click", () => {
  count++;
  if (count > objectsArr.length - 1) count = 0;
  changeSlide();
});

// Обработчик на стрелку влево
arrowLeft.addEventListener("click", () => {
  count--;
  if (count < 0) count = objectsArr.length - 1;
  changeSlide();
});

// Обработчик на кружки между стрелками
numArr.forEach((item, index) => {
  item.addEventListener("click", () => {
    count = index;
    changeSlide();
  });
});

// Обработчик на кружки на названия над фото
namesArr.forEach((item, index) => {
  item.addEventListener("click", () => {
    count = index;
    changeSlide();
  });
});

// Финкция вывода информации
function changeSlide() {
  city.querySelectorAll("p").forEach((item, index) => {
    item.textContent = objectsArr[count].city[index];
  });
  area.querySelector("p").textContent = objectsArr[count].area;
  time.querySelector("p").textContent = objectsArr[count].time;
  cost.querySelector("p").textContent = objectsArr[count].cost;
  img.style.backgroundImage = `url('../images/${objectsArr[count].img}')`;
  addActiveClass(namesArr);
  addActiveClass(numArr);
  addActiveClass(underLineArr);
}

// Функция присвоения активного класса
function addActiveClass(arr) {
  for (elem of arr) {
    elem.classList.remove("active");
  }
  arr[count].classList.add("active");
}
