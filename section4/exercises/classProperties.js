/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// // Prompt 1: Dog
// class Dog {
//   constructor() {
//
//   }
// }
// var moglie = new Dog();
// var paguera = new Dog();
// console.log(moglie);
// console.log(paguera);
//
// // Prompt 2: Snack
// class Snack {
//   constructor() {
//
//   }
// }
// var doritos = new Snack();
// var stringCheese = new Snack();
// console.log(doritos);
// console.log(stringCheese);
//
// // Prompt 3: Shirt
// class Shirt {
//   constructor() {
//
//   }
// }
// var whiteT = new Shirt();
// var blackT = new Shirt();
// console.log(whiteT);
// console.log(blackT);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// // Prompt 1: Dog
// class Dog {
//   constructor() {
//     this.breed = "Black Lab"
//     this.size = "Big"
//     this.isFriendly = true
//   }
// }
// var paguera = new Dog();
// console.log(paguera);
//
// // Prompt 2: Snack
//
// class Snack {
//   constructor() {
//     this.name = "Doritos"
//     this.size = "Small"
//     this.isHealthy = false
//   }
// }
// var doritos = new Snack();
// console.log(doritos);
// // Prompt 3: Shirt
// class Shirt {
//   constructor() {
//     this.size = "Large"
//     this.color = "White"
//     this.isGraphic = true
//   }
// }
//
// var supremeT = new Shirt();
// console.log(supremeT);


//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor(name,breed,size) {
    this.name = name
    this.breed = breed
    this.size = size
  }
}
var moglie = new Dog("Moglie","Chihuahua/Poodle","Small")
var paguera = new Dog("Paguera","Black Lab","Big")
console.log(moglie);
console.log(paguera);

// Prompt 2: Snack

class Snack {
  constructor(name,size,isHealthy) {
    this.name = name
    this.size = size
    this.isHealthy = isHealthy
  }
}
var iceCream = new Snack("Half-Baked","Medium",false)
var salad = new Snack("Cesar Salad", "Small", true)
console.log(iceCream);
console.log(salad);

// Prompt 3: Shirt

class Shirt {
  constructor(size,color,isGraphic) {
    this.size = size
    this.color = color
    this.isGraphic = isGraphic
  }
}

var whiteT = new Shirt("Large","White",false)
var blackGraphicT = new Shirt("Large","Black",true)
console.log(whiteT);
console.log(blackGraphicT);
