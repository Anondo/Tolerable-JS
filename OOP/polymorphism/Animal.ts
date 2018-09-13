export class Animal{
  constructor()
  {
    console.log("This is the animal class");
  }
  sound():void
  {
    console.log("Sound of the animal kingdom");
  }
  playsound():void
  {
    this.sound();
  }
};
