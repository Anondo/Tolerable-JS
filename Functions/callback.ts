function sum(f1, f2 , ...params:number[]):number //the third parameter is a rest parameter..used to take unknown number of arguments
{
   return f1(params[0]) + f2(params[1]);
}

function getArg1(arg1:number):number
{
  return arg1;
}
function getArg2(arg2:number):number
{
  return arg2;
}

console.log(sum(getArg1 , getArg2 , 12 , 14));
