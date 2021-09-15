// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//function buildABear takes in a name, age, fur, clothes, specialPower.
function buildABear(name, age, fur, clothes, specialPower) {
  // This variable greeting interpolates the bears name
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // demographics is an array of name and age
  var demographics = [name, age];
  //powerSaying interpolates specialPower into it
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //builtBear is an object containing basicInfo,clothes,exterior,cost,sayings[array],isCuddly:booleans
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
//returns the object builtBear
  return builtBear
}

//calls function buildABear
// name = 'Fluffy' age = 4 fur = brown clothes = [pants, jorts,tanktop] specialPower = give you nightmares
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');


buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
function fizzBuzz(num1, num2, range) {
  // function fizzBuzz takes in num1, num2, range
  for (var i = 0; i <= range; i++) {
  // a for loop is made to start at 0 and go until the range
    if (i % num1 === 0 && i % num2 === 0) {
  // If statement if i evenly divisable by num1 and num2 log fizzbuzz
      console.log('fizzbuzz');
    } else if (i % num1 === 0) {
      // else if i is only evenly divisable by num1 log fizz
      console.log('fizz');
    } else if (i % num2 === 0) {
      // else if i is only divisable by num2 log buzz
      console.log('buzz');
    } else {
      // else if none of the above is true log i
      console.log(i);
    }
  }
}

fizzBuzz(3, 5, 100);
fizzBuzz(5, 8, 400);
