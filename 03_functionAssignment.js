console.log("-------------------- Step1--------------------");

function fname(){
    console.log("My is Varun Shisode" );
}
fname();

function city() {
    console.log("My City is Amalner");
}
city();

console.log("-------------------- Step2--------------------");

function personalDetails(firstName , lastName , collegeName){

console.log("First Name = ",firstName);
console.log("Last Name = ",lastName);
console.log("College Name = ",collegeName);
}

personalDetails("Varun","Shisode","Mit-Wpu Pune");


console.log("-------------------- Step3--------------------");

function swapValues(fname , lname){
    console.log("Value Before Swapping = " , fname , lname);
    var temp = fname;
    fname = lname;
    lname = temp;

console.log("Value After Swapping :",fname , lname );

}
swapValues("Virat" , "Anushka");
console.log("______________________________________________");
swapValues(1000 , 2000)

console.log("-------------------- Step4--------------------");

function addThreeValues(one , two , three){

    console.log("Arguments is :" ,one , two , three);
    var result = one + two + three;
    console.log("Addition  is : ", result);


}

addThreeValues("Hello ", " Hi " , " GoodMorning ");
console.log("______________________________________________");

addThreeValues(10.23 , 600 ,40);
