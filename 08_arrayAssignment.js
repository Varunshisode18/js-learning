const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Total length of an array is : ${arrayNumbers.length}`);

let firstelement = arrayNumbers[0];
console.log(`First element of the array is : ${firstelement}`);

let lastelement = arrayNumbers[arrayNumbers.length - 1];
console.log(`Last element of the array is : ${lastelement}`);

let lastthirdelement = arrayNumbers[arrayNumbers.length - 3];
console.log(`Last third element of the array is : ${lastthirdelement}`);

console.log(`****************************************************************************************`);
console.log(`All Even Numbers Of An Array Using For Of Loop`);

for (const i of arrayNumbers) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

console.log(`****************************************************************************************`);

console.log(`All Odd Numbers Of An Array Using For Of Loop`);

for (const i of arrayNumbers) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

console.log(`****************************************************************************************`);


console.log(`Even Position Numbers From Array`);
var count = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
  if (i % 2 == 0) {
    console.log(arrayNumbers[i]);
    count += arrayNumbers[i];
  }
}
console.log(`Sum of the Even Position numbers is ${count}`);

console.log(`****************************************************************************************`);


console.log(`Odd Position Numbers From Array`);

var result = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
  if (i % 2 != 0) {
    console.log(arrayNumbers[i]);
    result += arrayNumbers[i];
  }
}
console.log(`Sum of the Odd Position numbers is ${result}`);

console.log(`****************************************************************************************`);


var display = 0;
for (let i of arrayNumbers) {
  display += i;
}
console.log(`Sum Of the Total Array is ${display}`);

console.log(`****************************************************************************************`);


console.log(`Array element Multiply By 5`);
for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] % 5 === 0) {
    console.log(arrayNumbers[i]);
  }
}

console.log(`****************************************************************************************`);

console.log(arrayNumbers.includes(115));

console.log(`****************************************************************************************`);

console.log(arrayNumbers.includes(23));

console.log(`****************************************************************************************`);


console.log(`Before Adding The 55 And 66 Array : ${arrayNumbers}`);
const addnewelement = arrayNumbers.splice(3, 0, 55, 66);
console.log(`After Adding The 55 And 66 Into The Array : ${arrayNumbers}`);

console.log(`****************************************************************************************`);


const removeelement = arrayNumbers.splice(4, 3);
console.log(`Deleted Element From Array is : ${removeelement}`);
console.log(`After The Deleting the Element From Array : ${arrayNumbers}`);
console.log(`****************************************************************************************`);

