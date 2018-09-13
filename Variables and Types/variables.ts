//variables are strongly typed(mostly)
//syntax: var [identifier]: type = [value];

var msg:string = "Hello World";
console.log(msg);
//msg = 12; this would envoke an error

var num:number = 12;
var fnum:number;
fnum = 2.5;
console.log(num + fnum);

//dynamic variables
var myVar;
myVar = "Hello World";
console.log(typeof myVar);
myVar = 12;
console.log(typeof myVar);
