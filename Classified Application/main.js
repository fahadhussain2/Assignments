var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Advertisement
 */
var Advertisement = (function () {
    function Advertisement(name, price, modelno, color, used) {
        this.name = name;
        this.price = price;
        this.modelno = modelno;
        this.color = color;
        this.used = used;
    }
    return Advertisement;
}());
/**
 * Cars extends Advertisement
 */
var Cars = (function (_super) {
    __extends(Cars, _super);
    function Cars(name, price, modelno, color, used) {
        _super.call(this, name, price, modelno, color, used);
        this.caradds = [];
    }
    return Cars;
}(Advertisement));
/**
 * Mobiles extends Advertisement
 */
var Mobiles = (function (_super) {
    __extends(Mobiles, _super);
    function Mobiles(name, price, modelno, color, used) {
        _super.call(this, name, price, modelno, color, used);
        this.mobileadds = [];
    }
    return Mobiles;
}(Advertisement));
/**
 * Laptops extends Advertisement
 */
var Laptops = (function (_super) {
    __extends(Laptops, _super);
    function Laptops(name, price, modelno, color, used) {
        _super.call(this, name, price, modelno, color, used);
        this.lapadds = [];
    }
    return Laptops;
}(Advertisement));
/**
 * add1
 */
var add1 = (function () {
    function add1(name, price, modelno, color, used) {
        this.name = name;
        this.price = price;
        this.modelno = modelno;
        this.color = color;
        this.used = used;
    }
    return add1;
}());
/**
 * add2
 */
var add2 = (function () {
    function add2(name, price, modelno, color, used) {
        this.name = name;
        this.price = price;
        this.modelno = modelno;
        this.color = color;
        this.used = used;
    }
    return add2;
}());
/**
 * add2
 */
var add3 = (function () {
    function add3(name, price, modelno, color, used) {
        this.name = name;
        this.price = price;
        this.modelno = modelno;
        this.color = color;
        this.used = used;
    }
    return add3;
}());
var a = new Cars("Honda Civic", 2500000, "2014", "Black", "10000km");
var b = new Mobiles("Samsung Galaxy", 30000, "Note 3", "Black", "2 months");
var c = new Laptops("Hp Pavilion", 50000, "TX0009", "Silver", "4months");
a.caradds.push(new add1("Toyota Vitz", 800000, "2006", "blue", "18000km"));
a.caradds.push(new add1("Suzuki Mehran", 300000, "2007", "white", "190000km"));
a.caradds.push(new add1("Prado", 3500000, "2012", "cyan", "189000km"));
a.caradds.push(new add1("Land Cruiser", 2500000, "2011", "grey", "200000km"));
a.caradds.push(new add1("Cultus", 450000, "2002", "black", "300000km"));
a.caradds.push(new add1("Toyota Corolla", 2100000, "2010", "blue", "400000km"));
a.caradds.push(new add1("Honda City", 650000, "2004", "white", "100000km"));
a.caradds.push(new add1("Toyota XLI", 750000, "2001", "black", "150000km"));
b.mobileadds.push(new add2("Samsung Galaxy", 20000, "S4", "Black", "8 months"));
b.mobileadds.push(new add2("Nokia Lumia", 20000, "A3", "Blue", "5 months"));
b.mobileadds.push(new add2("Huawei", 18000, "Honor 3c", "white", "2 months"));
b.mobileadds.push(new add2("Qmobile", 14000, "Z4", "Black", "3 months"));
c.lapadds.push(new add3("Dell", 50000, "AB0007", "Black", "7 months"));
c.lapadds.push(new add3("Apple", 70000, "0007", "White", "10 months"));
c.lapadds.push(new add3("Hp Ultra Book", 45000, "Zx117", "Silver", "12 months"));
c.lapadds.push(new add3("Asus Zen Book", 30000, "Rx-667", "Grey", "9 months"));
c.lapadds.push(new add3("Lenovo", 40000, "Ci5", "Black", "11 months"));
document.getElementById("menu1").innerHTML += "<div id='addlist'><h2>" + a.name + "</h2>" + "<p><b> Model no:</b>" + a.modelno + "</p>" + "<p> <b> Color:</b>" + a.color + "</p>" + "<p> <b> Car Running:</b>" + a.used + "</p>" + "<p> <b> Price:</b>" + a.price + "</p></div>";
document.getElementById("home").innerHTML += "<div id='addlist'><h2>" + a.name + "</h2>" + "<p><b> Model no:</b>" + a.modelno + "</p>" + "<p> <b> Color:</b>" + a.color + "</p>" + "<p> <b> Used:</b>" + a.used + "</p>" + "<p> <b> Price:</b>" + a.price + "</p></div>";
for (var i = 0; i < a.caradds.length; i++) {
    document.getElementById("menu1").innerHTML += "<div id='addlist'><h2>" + a.caradds[i].name + "</h2>" + "<p><b> Model no:</b>" + a.caradds[i].modelno + "</p>" + "<p> <b> Color:</b>" + a.caradds[i].color + "</p>" + "<p> <b> Car Running:</b>" + a.caradds[i].used + "</p>" + "<p> <b> Price:</b>" + a.caradds[i].price + "</p></div>";
    document.getElementById("home").innerHTML += "<div id='addlist'><h2>" + a.caradds[i].name + "</h2>" + "<p><b> Model no:</b>" + a.caradds[i].modelno + "</p>" + "<p> <b> Color:</b>" + a.caradds[i].color + "</p>" + "<p> <b> Car Running:</b>" + a.caradds[i].used + "</p>" + "<p> <b> Price:</b>" + a.caradds[i].price + "</p></div>";
}
document.getElementById("menu2").innerHTML += "<div id='addlist'><h2>" + b.name + "</h2>" + "<p><b> Model no:</b>" + b.modelno + "</p>" + "<p> <b> Color:</b>" + b.color + "</p>" + "<p> <b> Used:</b>" + b.used + "</p>" + "<p> <b> Price:</b>" + b.price + "</p></div>";
document.getElementById("home").innerHTML += "<div id='addlist'><h2>" + b.name + "</h2>" + "<p><b> Model no:</b>" + b.modelno + "</p>" + "<p> <b> Color:</b>" + b.color + "</p>" + "<p> <b> Used:</b>" + b.used + "</p>" + "<p> <b> Price:</b>" + b.price + "</p></div>";
for (var j = 0; j < b.mobileadds.length; j++) {
    document.getElementById("menu2").innerHTML += "<div id='addlist'><h2>" + b.mobileadds[j].name + "</h2>" + "<p><b> Model no:</b>" + b.mobileadds[j].modelno + "</p>" + "<p> <b> Color:</b>" + b.mobileadds[j].color + "</p>" + "<p> <b> Used:</b>" + b.mobileadds[j].used + "</p>" + "<p> <b> Price:</b>" + b.mobileadds[j].price + "</p></div>";
    document.getElementById("home").innerHTML += "<div id='addlist'><h2>" + b.mobileadds[j].name + "</h2>" + "<p><b> Model no:</b>" + b.mobileadds[j].modelno + "</p>" + "<p> <b> Color:</b>" + b.mobileadds[j].color + "</p>" + "<p> <b> Used:</b>" + b.mobileadds[j].used + "</p>" + "<p> <b> Price:</b>" + b.mobileadds[j].price + "</p></div>";
}
document.getElementById("menu3").innerHTML += "<div id='addlist'><h2>" + c.name + "</h2>" + "<p><b> Model no:</b>" + c.modelno + "</p>" + "<p> <b> Color:</b>" + c.color + "</p>" + "<p> <b> Used:</b>" + c.used + "</p>" + "<p> <b> Price:</b>" + c.price + "</p></div>";
document.getElementById("home").innerHTML += "<div id='addlist'><h2>" + c.name + "</h2>" + "<p><b> Model no:</b>" + c.modelno + "</p>" + "<p> <b> Color:</b>" + c.color + "</p>" + "<p> <b> Used:</b>" + c.used + "</p>" + "<p> <b> Price:</b>" + c.price + "</p></div>";
for (var k = 0; k < c.lapadds.length; k++) {
    document.getElementById("menu3").innerHTML += "<div id='addlist'><h2>" + c.lapadds[k].name + "</h2>" + "<p><b> Model no:</b>" + c.lapadds[k].modelno + "</p>" + "<p> <b> Color:</b>" + c.lapadds[k].color + "</p>" + "<p> <b> Used:</b>" + c.lapadds[k].used + "</p>" + "<p> <b> Price:</b>" + c.lapadds[k].price + "</p></div>";
    document.getElementById("home").innerHTML += "<div id='addlist'><h2>" + c.lapadds[k].name + "</h2>" + "<p><b> Model no:</b>" + c.lapadds[k].modelno + "</p>" + "<p> <b> Color:</b>" + c.lapadds[k].color + "</p>" + "<p> <b> Used:</b>" + c.lapadds[k].used + "</p>" + "<p> <b> Price:</b>" + c.lapadds[k].price + "</p></div>";
}
//var total_adds=a.caradds.length+b.mobileadds.length+c.lapadds.length;
//# sourceMappingURL=main.js.map