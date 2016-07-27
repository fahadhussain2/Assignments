/**
 * Human
 */
var Human = (function () {
    function Human(name) {
        this.name = name;
    }
    return Human;
}());
/**
 * Animal
 */
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log(this.name + "is an animal and is eating");
    };
    Animal.prototype.run = function () {
        console.log("animal is running");
    };
    return Animal;
}());
var h = new Human("fahad");
var a = new Animal("Cat");
var o = { name: "fahad", age: 25, gender: "male" };
var h1 = o;
console.log(h instanceof Human);
