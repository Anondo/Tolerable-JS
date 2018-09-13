function greet(name: string):string
{
  return "Hello " + name;
}

//normal parameter , default parameter , optional pararmeter(with a question mark with indentifier, the syntax)
function info(name:string , age:number = 20 , cgpa?:number):string
{
    var message:string = "Hi " + name + " you are " + age + " years old and your cgpa is " + cgpa;
    return message;
}


console.log(greet('Bruce'));
console.log(info('Barry'));
console.log(info('Barry' , 30));
console.log(info('Barry' , 30 , 3.99));
