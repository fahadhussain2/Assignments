var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Animal
 */
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.log(this.name + "moved" + meters + "m");
    };
    return Animal;
}());
/**
 * Snake extends Animal
 */
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        console.log("Slithering");
        _super.prototype.move.call(this, meters);
    };
    Snake.prototype.bite = function () {
        console.log("biting");
    };
    return Snake;
}(Animal));
/**
 * Horse
 */
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 7; }
        console.log("Galloping");
        _super.prototype.move.call(this, meters);
    };
    return Horse;
}(Animal));
/**
 * Donkey
 */
var Donkey = (function (_super) {
    __extends(Donkey, _super);
    function Donkey(name, distance) {
        _super.call(this, name);
        this.distance = distance;
    }
    Donkey.prototype.move = function (meters) {
        if (meters === void 0) { meters = 78; }
        console.log("Moving");
        _super.prototype.move.call(this, meters);
    };
    return Donkey;
}(Animal));
/**
 * Cat extends animal
 */
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        _super.call(this, name);
    }
    Cat.prototype.move = function (meters) {
        if (meters === void 0) { meters = 40; }
        console.log("Jumping");
        _super.prototype.move.call(this, meters);
    };
    return Cat;
}(Animal));
var a1 = new Snake("python");
//# sourceMappingURL=main.js.map