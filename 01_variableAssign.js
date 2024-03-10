console.log("=====Step1=====");

var myFullName;
console.log("Value Before Initialization : ", myFullName);

var myFullName = "Varun Shisode";
console.log("My First And Last name" , myFullName);

myFullName = "Varun Pankaj Shisode";
console.log("My First Middle And last Name :",myFullName);


console.log("=====Step2=====");

var myLove = "i Love Only JS";
console.log("My Love is :" , myLove);

console.log("=====Step3=====");

var firstName = "Varun";
console.log("first Name is : ",firstName);

var lastName = "Shisode";
console.log("last Name is : " ,lastName);

var age = 23;
console.log('age is  :',age);

var address = "Amalner , Jalgaon";
console.log("Address :",address);

var pinCode = 425401;
console.log("Pin Code is :",pinCode);

var gender = "male";
console.log("Gender is :",gender);

var isMarried = "Not Yet";
console.log("Is Married:" , isMarried);

console.log("=======================================");
console.log("====== Swap variable Assignment=====");

var name1 = "Sweety";
var name2 = "Cutie";
console.log("Before Swapping : ",name1 , name2);

var temp = name1;
name1 = name2;
name2 = temp;

console.log("After Swapping : ", name1 , name2);


console.log("Swapping Three Values");

var num1= 100;
var num2 = 200;
var num3 = 300;

console.log("Values Before Swapping :" , num1 , num2 , num3);

var temp = num1;

num1 = num2;
num2 = num3;
num3 = temp

console.log("Values After Swapping :", num1 , num2 , num3);


console.log('==================================');

var age=30;
console.log("Age:", age);

var typeofAge = typeof age;
console.log("Type of age is:", typeofAge);

age = 30;
var typeofAge = typeof age;
console.log("After update age type id:", typeofAge);

var city; // Declare
console.log("City:", city);
var typeOfCity = typeof city;
console.log("Type of city:", typeOfCity);

var pin = null;
console.log("pin: ", pin);
var typeofPin = typeof pin;
console.log("Type Of pin: ", typeofPin);

var isMarried = true;
console.log("isMarried: ", isMarried);
var typeofIsMarried = typeof isMarried;
console.log("Type of isMarried:", typeofIsMarried);