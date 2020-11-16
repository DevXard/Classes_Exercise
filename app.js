class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beeeeep"
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);

    }

    numWheels(){
        return 4
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
    }

    numWheels(){
        return 2
    }

    revEngine(){
        return "VROOM!!!"
    }
}

class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity
        
    }

    add(vehicle){
        if(!(this.capacity > this.vehicles.length)){
            return 'Sorry we Are Full'
        } 
        
        if(!(vehicle instanceof Vehicle)){
            return "Only Vehicles are alowed"
        }

        this.vehicles.push(vehicle)
        return "New Vehicle was added"
    }

}