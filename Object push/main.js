/**
 * Car
 */
var Car = (function () {
    function Car(name, modelno, doors, nooftyres) {
        this.tyres = [];
        this.name = name;
        this.modelno = modelno;
        this.doors = doors;
        this.tyres.push(new Tyres("one"));
        this.tyres.push(new Tyres("two"));
        this.tyres.push(new Tyres("three"));
    }
    return Car;
}());
/**
 * Tyres
 */
var Tyres = (function () {
    function Tyres(name) {
        this.company_name = name;
    }
    return Tyres;
}());
var car = new Car("toyota", "xli2000", 4, 4);
car.tyres.push(new Tyres("abc"));
car.tyres.push(new Tyres("def"));
car.tyres.push(new Tyres("ghi"));
car.tyres.push(new Tyres("jkl"));
console.log(car);
