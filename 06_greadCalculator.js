function grade(marks){
    if(marks==0 || marks >100 || marks == "null" || marks <0 || marks == undefined || isNaN(+marks)){
        console.log(`${marks} is Invalid Input`);
    }

   
    else if(marks > 0 && marks <35){
        console.log(`Oppps your marks is ${marks} you are fail`);
    }
    else if(marks >= 90){
        console.log(`Fantastic.....your marks is ${marks} You Got A+ Grade`);
    }
    else if(marks >= 75 && marks <90){
        console.log(`Excellent.....your marks is ${marks} You Got A Grade`);
    }

    else if(marks >=50 && marks <75){
        console.log(`Good.....your marks is  ${marks} you got B grade`);
    }
    else if(marks>=35 && marks<50){
        console.log(`Your marks is ${marks} you got C grade need improvement `);
    }
    else{
        console.log("Invalid marks");
    }







}
grade(98);
console.log("__________________________________________________________________");
grade(80);
console.log("__________________________________________________________________");
grade(90);
console.log("__________________________________________________________________");
grade(0);
console.log("__________________________________________________________________");
grade(150);
console.log("__________________________________________________________________");
grade(-7);
console.log("__________________________________________________________________");
grade(35);
console.log("__________________________________________________________________");
grade(29);
console.log("__________________________________________________________________");
grade(64);
console.log("__________________________________________________________________");
grade(49);
console.log("__________________________________________________________________");
grade("91");
console.log("__________________________________________________________________");
grade("Eighty");
console.log("__________________________________________________________________")
grade();
console.log("__________________________________________________________________");
grade("null");
console.log("__________________________________________________________________");

