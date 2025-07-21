import { Component ,input, OnInit} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.css'
})
export class ViewCartComponent {
DetailsArray :any[]=[];
constructor(private cartService:CartService){}
  
  ngOnInit() {
    this.cartService.itemDetailsArray$.subscribe(items => {
      this.DetailsArray = items;
      console.log('Items in cart:', this.DetailsArray);
    });
  }

}
