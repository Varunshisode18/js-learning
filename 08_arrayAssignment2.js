const fruits = ["Banana" , "Orange" , "Apple" , "Mango","Water Melon"];
console.log(fruits);

console.log("First element of the array is : ",fruits[0],);
console.log("Last  element of the array is : ",fruits[fruits.length-1],);

const fadd = fruits.unshift("Papaya");
console.log("Add Papaya before the Banana", fruits);

const remove = fruits.splice(4,1);
console.log("Remove Mango from array",fruits);

const addlast = fruits.push("Pineapple");
console.log("Add pineapple in array",fruits);

const adddragon = fruits.splice(4,0,"Dragon fruit");
console.log("Add Dragon fruit before Water Melon ",fruits);

const display = fruits.splice(2,1,"Kiwi");
console.log("Replace Orange With Kiwi",fruits);

const result = fruits.slice(1 , 5);
console.log("Element starting from index 1 to 4 ",result);

const count = fruits.splice(-3)
console.log("Last 3 element of an array is ",count);