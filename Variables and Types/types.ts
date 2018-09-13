var username:string = "Bruce Wayne";
var cgpa:number = 3.98;
var age:number = 35;
var isHuman:boolean = true;
var superpowers = null;
var wealth;

console.log("Type of username: " , typeof username);
console.log("Type of cgpa: " , typeof cgpa);
console.log("Type of age: " , typeof age);
console.log("Type of isHuman: " , typeof isHuman);
console.log("Type of superpowers: " , typeof superpowers); //null is still an object
console.log("Type of wealth: " , typeof wealth);


//type assertion
var str:string = '1234';
var num:number = <number> <any> str;
console.log(typeof num);
num++;
console.log(typeof num); //the last three lines are weird, its as if you need to operate on the variable to complete the type assertion
