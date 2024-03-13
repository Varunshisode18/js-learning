function stringHandsOn(){
var sentence = "   Hey you are doing good, keep it up   ";
console.log(`step1:  Given String is : ${sentence}`);


console.log(`step2: Length of given string is : ${sentence.length}`);

var aftertrim = sentence.trim();
console.log(`step3: String after string is : ${aftertrim}`);
console.log(`step4: No of extra spaces is :  ${sentence.length - aftertrim.length}`);

console.log(`step5: First Character of String is : ${aftertrim.charAt(0)} ,  and last Character of the string is ${aftertrim.charAt(-1)}`);

var abc = aftertrim.split(" ");
console.log(`step6: total no of the word after trim : ${ abc.length}`);


var indexofgood = aftertrim.indexOf("good");
console.log(`step7: Index of word "good" is : ${indexofgood}`);

console.log(`step8: substring starting from index 22 is : ${aftertrim.substring(22)}`);

console.log(`step9: The string ends with word "Up" : ${aftertrim.endsWith("up")}`);
console.log(`step10: The string ends with word "Hey" : ${aftertrim.startsWith("Hey")}`);








}
stringHandsOn()