/**
 * you can declare array in singleton and literals
 * if the object is declared by constructor it will be a singleton and for other cases it will be literals 
 * 
 * the typeof of key is string
 * 
 */

// const tinder = new Object(); //singleton
// const tinder1 = {};  //literal

const sym = Symbol("sym key");
// console.log(sym);

const obj1 = {
    name: "karan",
    age: 23,
    male: true,
    [sym]: "using symbol as key", //way to use symbol as a key
}

//way to access the properties
// console.log(obj1.age);
// console.log(obj1["age"]);
// console.log(obj1[sym]);  //only way to access symbols as a key

// console.log(obj1);

Object.freeze(obj1); // to freez an object
obj1.age = 34;
// console.log(obj1);

const obj2 = {1: "a", 2: "b"};
const obj3 = {3: "a", 4: "b"};

const obj4 = {obj2, obj3};  //{ obj2: { '1': 'a', '2': 'b' }, obj3: { '3': 'a', '4': 'b' } }
//here in assign the abj2 and obj3 get added to the empty object which is stored in obj5, if written as Object.assign(obj2, obj3), the new object get added in obj2 and obj2 is modified
const obj5 = Object.assign({}, obj2, obj3);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj5);
const obj6 = {...obj2, ...obj3};


// console.log(Object.keys(obj2));  //[ '1', '2' ]
// console.log(Object.values(obj2));  //[ 'a', 'b' ]
// console.log(Object.entries(obj2));  //[ [ '1', 'a' ], [ '2', 'b' ] ], converted into arrays

const {name: n} = obj1; //destructuring the object
// console.log(n); //karan





