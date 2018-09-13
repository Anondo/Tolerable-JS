
import animal = require("./Animal");

export class Cat extends animal.Animal{
  constructor()
  {
    super();
    console.log("This is the cat class");
  }
  sound():void
  {
    console.log("Meowww");
  }
};
