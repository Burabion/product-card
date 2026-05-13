console.log("**************************************")
console.log("HOMEWORK#7")


// Задание 2 - Фильтрация массива чисел начиная с 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.filter(function(num){
  return num >= 5;
});
console.log(result); 
// Задание 3 - Поиск элемента в массиве строк
const fruits = ["apple", "banana", "mango"];
const result1 = fruits.find(function(fruits){
  return fruits === "banana";
});
console.log(result1);
// Задание 4 - Функция переворота массива
function reverseArray(arr){
  return arr.reverse();
}
reverseArray(numbers);
reverseArray(fruits);
console.log(reverseArray(numbers));
console.log(reverseArray(fruits));

//Task 5/6 improt/export
import {comments} from "./comments.js";
console.log(comments);

// Задание 7 - Фильтрация комментариев по почте .com
const comComments = comments.filter(function(comment){
  return comment.email.includes(".com");
});
console.log(comComments);

// Задание 8 - Изменение postId в зависимости от id
const updatedComments = comments.map(function(comment){
  if(comment.id <= 5){
    comment.postId = 2;
  } else {
    comment.postId = 1;
  }
  return comment;
});
console.log(updatedComments);

// Задание 9 - Оставить только id и name
const shortComments = comments.map(function(comment){
  return {
    id: comment.id,
    name: comment.name
  };
});
console.log(shortComments);

// Задание 10 - Добавление свойства isInvalid
const validatedComments = comments.map(function(comment){
  if(comment.body.length > 180){
    comment.isInvalid = true;
  } else {
    comment.isInvalid = false;
  }
  return comment;
});
console.log(validatedComments);

// Задание 11 - Массив почт через reduce
const emailsReduce = comments.reduce(function(acc, comment){
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailsReduce);

// Задание 11 - Массив почт через map
const emailsMap = comments.map(function(comment){
  return comment.email;
});
console.log(emailsMap);

// Задание 12 - Привести массив почт к строке
console.log(emailsMap.toString());
// или
console.log(emailsMap.join(" /o_o/ "));