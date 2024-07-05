/**
 * in arrow function: implicit return
 * iife : immediately invoked function expressions ()(), this is used to prevent pollution from the global scope variables
 * 
 * 
 * 
 */

function price(...num1){
    return num1;
}
// console.log(price(1, 2, 3));  //[ 1, 2, 3 ]

function price1(val1, val2, ...num1){
    return num1;
}
// console.log(price1(1, 2, 3, 4, 5)); //[ 3, 4, 5 ]


//this format does not give error 
addone(5);
function addone(num){
    return num + 1;
}
//but this one give error this is due to web hoisitng and execution concepts
// addtwo(5);
// const addtwo = function(num){
//     return num + 2; 
// }


// function chai (){
//     let username = "karan";
//     console.log(this.username);  //undefined
//     console.log(this); //return you some values
// }
// chai();

// const chai1 = ()=>{
//     let username = "karan";
//     console.log(this); //undefined
//     console.log(this); //{}
// }

chai1();

// (function chai2(params) {
// })(); //iife does not know where to stop so remember to put ;//this is named iife
// (()=>{})(); //simple iife



