interface IPrintTasks{
  print(printContent:string):void;
  scan(scanContent:string):void;
}
interface IFaxTasks{
  fax(content:string):void;
}
interface IPrintDuplexTasks{
  printDuplex(content:string):void;
}

class HPLaserPrinter implements IPrintTasks,IFaxTasks,IPrintDuplexTasks{
  print(printContent: string): void {
    console.log("Method not implemented.");
  }
  scan(scanContent: string): void {
    console.log("Method not implemented.");
  }
  fax(content: string): void {
    console.log("Method not implemented.");
  }
  printDuplex(content: string): void {
    console.log("Method not implemented.");
  }

}

class LiquidInkjetPrinter implements IPrintTasks{
  print(printContent: string): void {
    console.log("Method not implemented.");
  }
  scan(scanContent: string): void {
    console.log("Method not implemented.");
  }
  
}
