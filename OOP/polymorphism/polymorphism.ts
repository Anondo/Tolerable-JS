import cat = require("./Cat");
import dog = require("./dog");

var animal = new cat.Cat();
animal.playsound();

animal = new dog.Dog();
animal.playsound();
