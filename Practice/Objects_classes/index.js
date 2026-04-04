// classes and Objects
class car {
    constructor(model){
        this.model = model;
    }
    show(){
        console.log(`this is best ${this.model}'s car`);
    }
};


let honda = new car("Honda");
let lamborgini = new car("Lamborgini");
honda.show();
lamborgini.show();

//