console.log("==========================================");
console.log("Homework#8");
// Задание 2/3 - Импорт продуктов из products.js
import { products } from "./products.js";

// Задание 3 - Шаблон карточки
function createCard(product) {
  return `
    <div class="card">
      <div class="image-box">
        <img class="img" src="${product.image}" alt="${product.name}">
      </div>
      <p class="tag1">ДЛЯ СУХОЙ КОЖИ</p>
      <h3>${product.name}</h3>
      <p class="tag2">${product.description}</p>
      <span class="label">Состав:</span>
      <ul>
        ${product.ingredients.map(i => `<li>${i}</li>`).join("")}
      </ul>
      <div class="price">
        <span class="price-label">Цена</span>
        <span>${product.price}$</span>
      </div>
    </div>
  `;
}

// Рендеринг карточек
const grid = document.querySelector(".grid");
grid.innerHTML = "";

products.forEach(function(product){
  grid.innerHTML += createCard(product);
});

// Задание 4 - reduce: ключ = название, значение = описание
const productDescriptions = products.reduce(function(acc, product){
  acc[product.name] = product.description;
  return acc;
}, {});

console.log(productDescriptions);

// Задание 5 - prompt для количества карточек
function getCount() {
  const count = prompt("Сколько карточек отобразить? От 1 до 5");
  
  if(count >= 1 && count <= 5){
    return count;
  } else {
    alert("Введите число от 1 до 5!");
    return getCount(); // спрашиваем снова
  }
}

function renderCards(arr){
  grid.innerHTML = "";
  arr.forEach(function(product){
    grid.innerHTML += createCard(product);
  });
}

const count = getCount();
renderCards(products.slice(0, count));