class Vehicle {
    constructor (make, model, color, year) {
       this.make = make;
       this.model = model;
       this.color = color;
       this.year = year;
       this.speed;
       this.wheels=4;
    }

    // Methods
    
    Wheels(){
        return this.wheels ;
    }

     rest(){
        if (typeof(this.speed) == 'undefined'){
            this.speed = 0;
        }
        else{
            return 'Motion activated';
        }

    accelerate(){

        if ((typeof(this.speed) == 'number') &&(this.speed <= 200)){
            return ++this.speed + 'm/s square';
        }
        else if (this.speed >200){
              return ("Caution!!! speed limit reached")
        }


    }
    

    decelerate(){
        if (this.speed > 0){
            return --this.speed;
        }
        else{
            return this.speed;
        }
    }

   
}

class Car extends Vehicle(make, model, color, year){
    constructor(super make, model, color, year)
    this.wheels = 4;
    this.speed = 200;

    name(){
        return (this.make +" " +this.model);
    }

    speedlimit(){
        if (this.speed > 150){
            return "Caution! speed limit"
        }
        else if (this.speed > 70 && this.speed <150) {
            return "Motion activated";
        }
        else if (this.speed > 1 && this.speed <70){ 
            return "Slow!";
        }
    }
}


class (make, model, color, year){
    Car(this, make, model, color, year)
    this.wheels = 10;
    this.speed = 80;
}


module.exports.Car = Car;
module.exports.SmartCar = SmartCar;
module.exports.Truck = Truck;