// class Car{
//   // Attributes
//   speed: number
//   color: string
//   model: string

//   // Constructor
//   constructor(){}

//   // Actions
//   turnOn():void{
//     console.log("Turning on");
//   }

//   break():void{
//     console.log("Breaking");
//   }

//   turnOff():void{
//     console.log("Turning off");
//   }
// }

// let c1 = new Car();

// c1.color = "black";
// c1.turnOn();

// class Car {
//   private _model:string
//   private _color:string
//   private _doors:number 
//   // Car has a Engine
//   private _myEngine:Engine

//   get model() { return this._model; }
//   set model(value:string) { this._model = value; }
//   get color() { return this._color; }
//   set color(value:string) { this._color = value; }
//   get doors() { return this._doors; }
//   set doors(value:number) { this._doors = value; }
//   get myEngine() { return this._myEngine; }
//   set myEngine(value:Engine) { this._myEngine = value; }

//   constructor(model:string, color:string, doors:number ,myEngine:Engine) {
//     this._model = model;
//     this._color = color;
//     this._doors = doors;
//     this._myEngine = myEngine;
//   }

 
// }


// class Engine{
//   private _type:string;
//   private _power:string

//   get type() { return this._type; }
//   set type(value:string) { this._type = value; }
//   get power() { return this._power; }
//   set power(value:string) { this._power = value; }

//   constructor(type:string, power:string) {
//     this._type = type;
//     this._power = power;
//   }

// }

// let c1 = new Car("BMW", "black", 4, new Engine("electric", "100"));

// console.log(c1.myEngine.type);



interface Animal{
  drink():void;
  walk():void;
}

class Cat implements Animal{
  drink(): void {
    console.log("Cat Is Drinking!");
    
  }
  walk(): void {
    console.log("Cat Is Walking");
    
  }

}

class Dog implements Animal {
  drink():void {
    console.log("Dog Is Drinking");
  }
  walk():void{
    console.log("Dog Is Walking");
    
  }
}


let d1 = new Dog();
let c1 = new Cat();

d1.walk();
c1.walk();