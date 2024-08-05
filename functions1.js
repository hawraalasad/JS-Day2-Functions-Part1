let firstName = "Hawraa";
let lastName = "Alasad";
let fullName = `${firstName} ${lastName}`;

function printName() {
  console.log(fullName);
}

printName();
let currentYear = 2024;
let birthyear = 2000;
let Age = currentYear - birthyear;

function printAge(Age) {
  console.log(`you are ${Age} years old`);
}
printAge(24);

function printAgeAndName(Name, Age) {
  console.log(`Hello ${Name}, you are ${Age} years old`);
}

printAgeAndName(fullName, Age);

let language = "fr";

function printHello(Name, language) {
  if (language == "en") {
    console.log(`Hello, ${Name}`);
  } else if (language == "es") {
    console.log(`Hola, ${Name}`);
  } else if (language == "fr") {
    console.log(`Bonjour, ${Name}`);
  } else if (language == "tr") {
    console.log(`Merhaba, ${Name}`);
  }
}

// function printHello2(Name, language){
// console.log( {if (language == "en"){Hello}, ${Name}})
//}

printHello(fullName, language);

let number1 = 10;
let number2 = 5;
function printMax(number1, number2) {
  if (number1 > number2) {
    console.log(number1);
  } else {
    console.log(number2);
  }
}
printMax(10, 5);
