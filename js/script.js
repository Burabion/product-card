
console.log("**************************************");
console.log("Homework#4");

// Задание 2 - задачa из лекции
const cards = document.querySelectorAll(".card")
for (let i = 0; i<cards.length; i++){
cards[i].addEventListener("mouseover", function(){
  cards[i].style.boxShadow = "0px 38px 50px rgba(0, 0, 0, 0.18)"
});
cards[i].addEventListener("mouseout", function(){
  cards[i].style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.18)";
});
}

// Задание 3 - При наведении на заголовок выводить контент в консоль
const title = document.querySelector(".title");
title.addEventListener("mouseover", function(){
  title.classList.add("active");
  console.log(title.textContent)
})
title.addEventListener("mouseout", function(){
  title.classList.remove("active");
})

// Задание 4 - Кнопка меняет тему (dark/light mode) при нажатии
const btn = document.getElementById("theme-btn");
const body = document.querySelector("body");

btn.addEventListener("click",function(){
  body.classList.toggle("dark");
  if (body.classList.contains("dark")){
    btn.innerText = "Light mode";
  } else {
    btn.innerText = "Dark mode";
  }
});

// Дополнительно - getElementsByClassName
const cardsByClass = document.getElementsByClassName("card");
console.log(cardsByClass);


/*const product = [
  {name: "Увлажняющий мусс", price: 11.9 },
  {name: "Увлажняющая маска", price: 19.9 },
  {name: "Гель для умывания", price: 9.9 },
  {name: "Подарочный набор №1", price: 39.9 },
  {name: "Подарочный набор №5", price: 59.9 },
];

const grid = document.querySelector(".grid")

for (let i =0; i<product.length; i++){
  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const name = document.createElement("h3");
  name.innerText = product[i].name;
  
  const price = document.createElement("p");
  price.innerText = product[i].price;
  
  newCard.append(name);
  newCard.append(price);
  grid.append(newCard);
}*/
