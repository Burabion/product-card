console.log("==========================================");
console.log("Homework#5");

/*Задания 3 Город и температура */
console.log("Задания 3 Город и температура");
function weatherInfo (city, temperature){
  console.log ("Сейчас в " + city + " температура — " + temperature + " градусов по Цельсию")
}
//Вывод
weatherInfo("Almaty", 16);
weatherInfo("Kabul", 19);

/*Задания 4 Скорость света*/
console.log("Задания 4 Скорость света")
const LIGHT_SPEED = 299972;
function checkSpeed (speed){
  if (speed > LIGHT_SPEED){
    console.log("Superliminal speed");
  }else if (speed < LIGHT_SPEED){
    console.log("Sublight speed");
  } else {
    console.log("Light speed");
  }
}
//Пример вызова
checkSpeed(200000); //Sublight speed
checkSpeed(299972); //Light speed
checkSpeed(300000); //Superliminal speed

/*Задания 5 Покупка товара*/
console.log("Задания 5 Покупка товара")
let product = "Mac neo";
let price = 599;

function buyProduct(budget){
  if (budget >= price){
    console.log(`${product} приобретен. Спасибо за покупку!`);
  } else {
    const different = price-budget;
    console.log(`Вам не хватает ${different}$, пополните баланс.`);
  }
}
buyProduct(499); //Не хватает
buyProduct(999); //Приобретен

/*Задания 6 Приветсвие*/
console.log("Задания 6 Приветсвие")
function sayHello(name) {
  return "Hi " + name + "!"; 
}
console.log(sayHello("Teamlead"));

/*Задания 7 3 переменных*/
console.log("Задания 7 3 переменных")
const firstFun = "Java";
const secondFun = "Script";
let version = 5;
function saidVlad(){
  if (version >= 5){
    console.log(firstFun+secondFun+" "+version);
  } else {
    console.log("Error fix it!")
  }
}
saidVlad();