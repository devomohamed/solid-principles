// //Open Closed Principal
// abstract class Chape{
//   public abstract area():number
// }


// class Circle extends Chape{
//   private _radius

//   constructor(radius:number){
//     super()
//     this._radius = radius
//   }
//   get radius(){
//     return this._radius
//   }
//   set radius(radius:number){
//     this._radius = radius
//   }
//   public area() {
//       let area = this.radius * this.radius * Math.PI;
//       return area;
//   }
// }

// class Rectangle extends Chape{
//   public _width: number
//   public _height: number


//   constructor(width:number, height:number){
//     super()
//     this._width = width
//     this._height = height
//   }

//   get width() { return this._width}
//   set width(width: number) { this._width = width}

//   get height() { return this._height}
//   set height(height: number) { this._height = height}



//   public area() {
//       return this._width * this._height;
//   }
// }

// class Triangle{

// }

// class AreaCalculator{
//   public area(shape:Chape){
//     let area = shape.area()
//     return area;
//   }
// }

// let circle = new Circle(50);
// let areaCalculator = new AreaCalculator();
// console.log(areaCalculator.area(circle));