import { Component, effect } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';


interface PickleItem {
  pickleName: string;
  Price: number;
}

@Component({
  selector: 'app-pickles',
  imports: [CommonModule],
  templateUrl: './pickles.component.html',
  styleUrl: './pickles.component.css'
})

export class PicklesComponent {

  pickleType: any = undefined;
   item: PickleItem = {
   pickleName: '',
  Price:0
  };
  value = 0;
  num = 0;
  showAddedAlert = false;

  constructor(private cartService: CartService) {

    effect(() => {
      this.cartService.updatedCount(this.value);

    })
  }
  cartButtonClicked() {
    this.value = this.value + 1;
    console.log("Mango button clicked ")
  }

  cartButton(PickleName: string, Price: number) {
    this.num = this.num + 1;
    this.cartService.changeNum(this.num);
    this.showAddedAlert = true;
    setTimeout(() => {
      this.showAddedAlert = false;
    }, 1500);
    
    this.item = { pickleName: PickleName, Price: Price };
    this.cartService.updateSelectedItem(this.item);
    
    console.log("at this.pickleType",this.item);

  }
  veg() {
    this.pickleType = "Veg";
    console.log("veg clicked")
  }
  nonveg() {
    this.pickleType = "NonVeg";
    console.log("non-veg clicked")
  }


}
