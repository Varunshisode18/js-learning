let professor = {
    name : "Varun",
    age : 25,
    city : "Amalner",
    subject : "JavaScript",
    college : "Mit-Wpu",

degrees : {
        engineering : 'CSC',
        phd : "Adv Programming"
    },
    certificates :["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv Programming"],

}
console.log("1. Create Object Professor");
console.log("2. Adding Nested Degrees");
console.log("3. Adding Array Certificates inside Object");

console.log(professor);

console.log("4. Add The Total Experience Property");
professor.totalExperience = "14 Years"
console.log(professor);

console.log("5. Modifying Subject Of The Professor Object");
professor.subject = "Python";
console.log(professor);

console.log("6. Add New Oracale Certificate in Certificate Array");
professor.certificates.splice(2,0,"Oracale Certified");
console.log(professor);

console.log("7. Log the last element in the Array Certification");
let result = professor.certificates[professor.certificates.length-1];
console.log(result);

console.log("8. Log The Complete Object Professor");
console.log(professor);

console.log("9.Traverse The Array ");
for (const i of professor.certificates) {
    console.log(i);
    
}
