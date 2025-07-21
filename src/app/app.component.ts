import { Component, effect, NgModule, viewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from './services/cart.service';
import { CommonModule } from '@angular/common';
import { ViewCartComponent } from './components/view-cart/view-cart.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactice1';
  itemDetailsArray: any = [];
  itemDetails = {};
  cartNum = 0;
  SubTotal: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.ChangeNum.subscribe(num => { this.cartNum = num });
    this.cartService.selectedItemUP$.subscribe(selectedItem => {
      this.itemDetails = selectedItem;
      const price = Number(selectedItem?.Price);
      
      this.SubTotal += isNaN(price) ? 0 : price;

      console.log('Item Price:', selectedItem?.Price);
      console.log('Subtotal:', this.SubTotal);
    })

  }
}




