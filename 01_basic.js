/**
 * variables : let, var, const
 * data types : primitives (String, BigInt, Boolean, Symbol, Number, undefined, null) : we get a copy, uses stack
 *              non primitives (array, objects, functions) : we get a reference, uses heap
 * null = standalone value and its type is object
 * type of undefined is undefined
 * 
 * (**) = power
 * 
 * typeof function is function also referred as object function and typeof other non primitive data types is object
 * typeof array is also object
 * 
 * equality check (==) and comparison (<, >, >=, <=) work differently, comparison convert while equality does not
 * 
 * shallow copy: you get copy of the variables
 * deep copy: you get the reference to the variable
 */

// let account; //value stored is undefined
// console.log(account);

//***********************conversions************************
// let score = "33abc";
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //NaN

// let score1 = undefined;
// let valueInNumber1 = Number(score1);
// console.log(typeof valueInNumber1); //number
// console.log(valueInNumber1); //NaN

// let score2 = null;
// let valueInNumber2 = Number(score2);
// console.log(typeof valueInNumber2); //number
// console.log(valueInNumber2); //0

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true


//***********************operations************************
// console.log("1" + 2);  //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 3 + "2"); //42

// const id = Symbol("123");
// const anotherId = Symbol("123");
// console.log(id === anotherId); //false (they get different values)

// const id = ["karan", "singh"];
// console.log(typeof id);



