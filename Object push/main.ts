/**
 * Car
 */
class Car {
    name:string;
    modelno:string;
    doors:number;
    tyres:Tyres[]=[];
    constructor(name:string , modelno:string , doors:number , nooftyres:number)
    {
        this.name=name;
        this.modelno=modelno;
        this.doors=doors;
        for (var index = 0; index < nooftyres; index++) {
            this.tyres.push(new Tyres("company1"));          
        }
    }
}

/**
 * Tyres
 */
class Tyres {
    company_name:string;
    constructor(name) {
        this.company_name=name;
    }
}

let car=new Car("toyota","xli2000",4,4);



car.tyres.push(new Tyres("abc"));
car.tyres.push(new Tyres("def"));
car.tyres.push(new Tyres("abc"));
car.tyres.push(new Tyres("def"));

console.log(car);
