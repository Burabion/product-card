console.log("=========================================");
console.log("We are started homework 6!");

/*Task 3 confident info*/
console.log("Task 3 confident info");
const info ={
  firstName: "Bion",
  lastName:  "Bura",
  age: 28,
  country: "Kaz",
  city: "Seoul",
  relationship: "Solo player :(",
  sport: "Box",
  fact: "I write all sorts of heresy",
  port: 5500,
};
console.log(info);//Output to console

/*Task 4 car info*/
console.log("Task 4 car info");
const car ={
  brand: "Hyundai",
  model: "Sonata",
  publicasiondate: 2025,
  color: "wet asphault",
  carbox: "automat",
};
car.owner = info.lastName;
console.log(car);//Display to console
console.log("Car owner " + car.owner);//We tagged the car owner from the last task

/*Task 5 argument*/
console.log("Task 5 argument");
function maxSpeed(carObject){
  if (carObject.maxSpeed===undefined){
    carObject.maxSpeed = 240;
  }
}
maxSpeed(car);
console.log(car)

/*Task 6 Two arguments*/
console.log("Task 6 Two arguments");
function getProperty (obj, property){
  console.log(obj[property]);
}
//Calling parts of code? ну вы поняли
getProperty(car, "brand");
getProperty(info, "city");

/*Task 7 Products*/
console.log("Task 7 Products");
const products = ["Product1", "Product2", "Product3"];
console.log(products);

/*Task 8 Books*/
console.log("Task 8 Books");
const books= [
  {
    title: "One", 
    author: "Nobody",
    year: 2030,
    coverColor: "Color",
    genre: "Boring",
  },
  {
    title: "Two", 
    author: "Bodyno",
    year: 2105,
    coverColor: "Roloc",
    genre: "Interest",
  },
  {
    title: "Three", 
    author: "Bonody",
    year: 1930,
    coverColor: "Lorco",
    genre: "Liric",
  }
];
books.push({
    title: "Four", 
    author: "Dybono",
    year: 1999,
    coverColor: "Roloc",
    genre: "Mythtic",
});
//Вызываем массив
console.log(books);

/*Task 9 Harry Potter */
console.log("Task 9 Harry Potter")
const harryPotterBooks = [
  {
    title: "Harry Poter1",
    author: "WOmen",
    year: 2005,
    coverColor: "Grey",
    genre: "Magician",
  },
  {
    title: "Harry Poter2",
    author: "WOmen",
    year: 1999,
    coverColor: "Grey",
    genre: "Magician",
  },
  {
    title: "Harry Poter3",
    author: "WOmen",
    year: 1999,
    coverColor: "Grey",
    genre: "Magician",
  },
];

// объединяем два массива:
const allBooks = [...books, ...harryPotterBooks];
console.log(allBooks);

/*Task 10 Map*/
console.log("Task 10 Map method");
function checkRare(arr){
  return arr.map(function(book){//using map
    if (book.year > 2000){
      book.isRare = true;
    } else {
      book.isRare = false;
    }
    return book;
  });
}

console.log(checkRare(allBooks));