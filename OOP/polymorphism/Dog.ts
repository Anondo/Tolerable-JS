import animal = require("./Animal");

export class Dog extends animal.Animal{
  constructor()
  {
    super();
    console.log("This is the dog class");
  }
  sound():void
  {
    console.log("Woof Woooof");
  }
};
