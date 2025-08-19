import { Component ,input, OnInit} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.css'
})
export class ViewCartComponent {
   visible:boolean=false;
DetailsArray :any[]=[];
constructor(private cartService:CartService){}
  id=0
  deleteReqItem:any;

  ngOnInit() {
    
    this.cartService.itemDetailsArray$.subscribe(items => {
      this.DetailsArray = items;
     
      for(let i=0; i< this.DetailsArray.length;i++){
        const item=this.DetailsArray[i];
           item.quantity=1;
           item.id=i;
       item.basePrice = item.Price;
      }
      this.DetailsArray.push
      console.log('Items in cart:', this.DetailsArray);
    });
  }
  quantityIncrease(obj: any){
   const item=this.DetailsArray[obj]
    this.DetailsArray[obj].quantity+=1;
  
   this.DetailsArray[obj].Price=item.basePrice*this.DetailsArray[obj].quantity;
  }
  quantityDecrease( obj: any){
    const item=this.DetailsArray[obj]
    if(this.DetailsArray[obj].quantity>1){
    this.DetailsArray[obj].quantity-=1;
  
    this.DetailsArray[obj].Price=item.basePrice*this.DetailsArray[obj].quantity;
  }
  
  }
  trash(obj: any){
   this.visible=true;
   const deleteReqItem=obj
   setTimeout(() => {
    this.visible=false;
    
   },3000);

  }
  itemDelete( ){

    const item=this.DetailsArray[this.deleteReqItem]
    this.DetailsArray.splice(item,1);
    console.log(this.DetailsArray)
  }
  deny(){
    this.visible=false;
  }



}