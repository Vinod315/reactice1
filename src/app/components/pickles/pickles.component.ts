import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
RouterLink
@Component({
  selector: 'app-pickles',
  imports: [],
  templateUrl: './pickles.component.html',
  styleUrl: './pickles.component.css'
})
export class PicklesComponent {

  pickleType:any=undefined;

  veg(){
    this.pickleType="Veg";
    console.log("veg clicked")
  }
  nonveg(){
    this.pickleType="NonVeg";
    console.log("non-veg clicked")
  }
}
