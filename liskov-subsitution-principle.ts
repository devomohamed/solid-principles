// Liskov Subsitution

class Bird{
  public eat():void{
    console.log("I Can Eat");
  }
}

class FlyingBird extends Bird{
  public fly():void{
    console.log("I Can Fly");
  }
}

class Swan extends FlyingBird{
  public eat():void{
    console.log("OMG! I Can Eat Pizza!");
  }

  public fly():void{
    console.log("I believe I Can Fly!");
  }
}

class Penguin extends Bird{
  public eat():void{
    console.log("Can I Eat Taco?");
  }
}




let swan = new Swan();
let penguin = new Penguin();
swan.eat(); 
penguin.eat(); 



// Example 2
abstract class Shape{
  public abstract getArea():number;
}

class Rectangle extends Shape{
  public _width: number
  public _height: number


  constructor(width:number, height:number){
    super()
    this._width = width
    this._height = height
  }

  get width() { return this._width}
  set width(width: number) { this._width = width}

  get height() { return this._height}
  set height(height: number) { this._height = height}

  public getArea() {
      return this._width * this._height;
  }
}


class Square extends Shape{
  private _length: number;
  constructor(length:number){
    super()
    this._length = length
  }
  get length() { return this._length}
  set length(length: number) { this._length = length}
  public getArea() {
    return this._length * this._length;
}
}

let rect = new Rectangle(10, 20)
console.log(`Area Of Rectangle: ${rect.getArea()}`);
let square = new Square(10)
console.log(`Area Of Rectangle: ${square.getArea()}`);