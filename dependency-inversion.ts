// Dependency Inversion
interface Product{
  name:string
}

interface DeliveryService{
  deliverProduct(product:Product):void;
}


class DeliveryDriver implements DeliveryService {
  public deliverProduct(product:Product):void{
  }
}



// // Old Solution
// class DeliveryCompany{
//   public sendProduct(product:Product):void{
//     let deliverDriver = new DeliveryDriver();
//     deliverDriver.deliverProduct(product)
//   }
// }

// New Solution
class DeliveryCompany{
  private deliveryService: DeliveryService;

  constructor(deliveryService:DeliveryService){
    this.deliveryService = deliveryService;
  }

  public sendProduct(product:Product):void{
    this.deliveryService.deliverProduct(product);
  }
}