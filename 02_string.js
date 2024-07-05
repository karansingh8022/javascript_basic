const gameName = new String ("hitest-hc-com");

const str1 = gameName.substring(0, 4); //return a string
console.log(str1); //hite

const str2 = gameName.slice(0, 4); //return a string, accepts negative values
console.log(str2); //hite

const str3 = gameName.split('-'); //returns an array
console.log(str3); //[ 'hitest', 'hc', 'com' ]

const str4 = gameName.replaceAll('-', '_'); //return a string
console.log(str4); //hitest_hc_com

const str5 = gameName.replace('-', '_'); //return a string
console.log(str5); //hitest_hc-com