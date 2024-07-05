const arr = [1,2,3,4,5];
const arr1 = [1, 2, 3, "karan", null, undefined];


const arr2 = arr.join(); //convert to string
// console.log(arr2); //1,2,3,4,5
// console.log(typeof arr2); //string


// const arr3 = arr.slice(1, 3);
// console.log(arr);  
// console.log(arr3);  //[ 2, 3 ]
// const arr4 = arr.splice(1, 3);
// console.log(arr); //[ 1, 5 ]
// console.log(arr4);  //[ 2, 3, 4 ]
//in slice the last index(3) does not get included and our original array remain intact 
//but in splice the last index get included and our original array in modified


// arr.push(arr1);  
// console.log(arr);  //[ 1, 2, 3, 4, 5, [ 1, 2, 3, 'karan', null, undefined ] ]
// const arr5 = arr.concat(arr1); //returns a new array
// console.log(arr5);  //[ 1, 2, 3, 4, 5, [ 1, 2, 3, 'karan', null, undefined ] ]

// const arr6 = [...arr, ...arr1]; //this spread operator also called as rest operator depends on its use case
// console.log(arr6); //[ 1, 2, 3, 4, 5, 1, 2, 3, 'karan', null, undefined ]

// const arr7 = [1, 2, [1, 2], [3, 4, [5, 6]]];
// const arr8 = arr7.flat(Infinity);
// console.log(arr8); //[1, 2, 1, 2, 3, 4, 5, 6]

// console.log(Array.from("karan singh")); //['k', 'a', 'r', 'a','n', ' ', 's', 'i','n', 'g', 'h']
// console.log(Array.from({name: "karan"})); //[], it cannot directly convert object in array you have to specify whether to convert key or values in array

// let a = 1, b = 2, c = 3;
// console.log(Array.of(a, b, c));  //[ 1, 2, 3 ]


    
    
    
    
    
  

