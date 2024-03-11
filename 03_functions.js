//  Functions And it's Types:



// Function With Argument And Does Not Have Return Type:

function add(var1 , var2 , var3) {
    var result = var1 + var2 + var3;
    console.log("Addition Of the Var1 and Var2 and Var3 is : ",result );
}
add(5,5,5);







// Function with No Argument And No Return Type

function show(){
    console.log("Function with No Argument And No Return Type");
}
show();


// Function with Arguments and Return Type;
function sub (n1 , n2){
    var result = n1 - n2;
    return  result; 

}
var display = sub(20,5); 

console.log("Subtraction :" , display);

var display = sub(100 ,50);
console.log("Subtraction :" , display);

