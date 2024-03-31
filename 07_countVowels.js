const word = "Hii My Name Is Varun Shisode";
const vowels = "aeiou";
let count = 0;

for(let i =0; i<word.length; i++){
    let char = word[i];
    let small = char.toLowerCase();

    if(vowels.includes(small)){
        count++
    }

}
console.log(`No Of The Vowels Found In String Are : ${count}`);


let sum = 0;

for(let i=0; i<=5; i++){
    sum = sum + i * i * i;
}
console.log(`Cube is ${sum}`);




function oddpositionchar(string){

    for(let i=0; i<string.length; i++){
        const element =  string.charAt(i);
    if(i %2 !=0 &&  element !=" "){
        console.log(element);
     }
  }

}
oddpositionchar("Hard Word Always pays Back");

console.log(`String 2`);
oddpositionchar("Soon I Will be UI IT Chamo")