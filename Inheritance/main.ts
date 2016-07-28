/**
 * Animal
 */
class Animal {
    name: string;
    
    constructor(name:string) {
        this.name=name;
    }
    
    move(meters:number=0)
    {
        console.log(this.name + "moved" + meters + "m");
        
    }
    
    
}

/**
 * Snake extends Animal
 */
class Snake extends Animal {
    constructor(name:string) {
        super(name);
    }
    
    move(meters=5)
    {
        console.log("Slithering");
        super.move(meters);
        
    }
    
    bite()
    {
        console.log("biting"); 
    }
    
}

/**
 * Horse
 */
 class Horse extends Animal {
    constructor(name:string) {
        super(name);
    }
    
    move(meters=7)
    {
        console.log("Galloping");
        super.move(meters);
        
    }
}

/**
 * Donkey
 */
class Donkey extends Animal {
    private distance:number;
    constructor(name, distance) {
        super(name);
        this.distance=distance;
    }
    
    move(meters=78)
    {
        console.log("Moving");
        super.move(meters);
    }
    
}

/**
 * Cat extends animal
 */
class Cat extends Animal {
    constructor(name:string) {
        super(name);
    }
    
    move(meters=40)
    {
        console.log("Jumping");
        super.move(meters);
    }
}

let a1:Animal= new Snake("python");


