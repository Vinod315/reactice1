import { Component, effect, NgModule, viewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from './services/cart.service';
import { CommonModule } from '@angular/common';


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
  cartNum=0;
  SubTotal=0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.ChangeNum.subscribe(num => { this.cartNum = num });
    this.cartService.selectedItemUP$.subscribe(selectedItem => { this.itemDetails = selectedItem ;
        if (selectedItem?.pickleName && selectedItem?.Price !== undefined) {
          this.SubTotal=this.SubTotal+selectedItem.Price;
      this.itemDetailsArray.push(selectedItem);
   }
 console.log(this.itemDetailsArray);
    console.log('Updated item:', selectedItem);
    });
    console.log(this.itemDetailsArray);
    
  }

 
  //  ngOnInt(){
  //   this.SubTotal=this.SubTotal+this.itemDetails.Price;
  //  }
}

