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
DetailsArray :any[]=[];
constructor(private cartService:CartService){}
  id=0

  ngOnInit() {
    this.cartService.itemDetailsArray$.subscribe(items => {
      this.DetailsArray = items;
      for(let i=0; i< this.DetailsArray.length;i++){
        const item=this.DetailsArray[i];
           item.quantity=1;
           item.id=i;
       
      }
      this.DetailsArray.push
      console.log('Items in cart:', this.DetailsArray);
    });
  }
  quantityIncrease(obj: any){
    
    this.DetailsArray[obj].quantity+=1;
  
   this.DetailsArray[obj].Price=this.DetailsArray[obj].Price*this.DetailsArray[obj].quantity;
  }
  quantityDecrease( obj: any){
    if(this.DetailsArray[obj].quantity>0){
    this.DetailsArray[obj].quantity-=1;}
  }


}