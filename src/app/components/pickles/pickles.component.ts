import { Component, effect } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';


interface PickleItem {
  pickleName: string;
  Price: number;
 urlLink:string;
}

interface Pickles {
  id: number;
  name: string;
  content: string;
  image: string;
  type:string;
  price: number;
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
    Price: 0,
    urlLink:''
  };
  value = 0;
  num = 0;
  showAddedAlert = false;
  pickles :Pickles[]=[];
  itemArray=[]

  constructor(private cartService: CartService) {


  }
  ngOnInit(){
  this.pickles=[
    {id:1, name:"Mango Pickle", content:"These pickles may cause sudden snack attacks and unsolicited “mmm” sounds",image:"Mango.webp",type:"veg", price:600},
    {id:2, name:"Allam Pickle", content:"These pickles may cause sudden snack attacks and unsolicited “mmm” sounds",image:"Allam.webp",type:"veg", price:500},
    {id:3, name:"Amla Pickle", content:"These pickles may cause sudden snack attacks and unsolicited “mmm” sounds",image:"Amla.webp", type:"veg",price:600},
    {id:4, name:"Leamon Pickle", content:"These pickles may cause sudden snack attacks and unsolicited “mmm” sounds",image:"Lemon.webp",type:"veg", price:500},
    {id:5, name:"Tomato Pickle", content:"These pickles may cause sudden snack attacks and unsolicited “mmm” sounds",image:"Tomato.webp",type:"veg", price:600},
    {id:6, name:"Red-Chilli Pickle", content:"These pickles may cause sudden snack attacks and unsolicited “mmm” sounds",image:"Gongura.webp",type:"veg", price:400},
    {id:7, name:"Chicken Pickle", content:"These pickles may cause sudden snack attacks and unsolicited “mmm” sounds",image:"non-veg/Chicken.webp", type:"non-veg",price:1000},
    {id:8, name:"Prawns Pickle", content:"These pickles may cause sudden snack attacks and unsolicited “mmm” sounds",image:"non-veg/Prawns.webp",type:"non-veg", price:1800},
    {id:9, name:"Chicken Boneless Pickle", content:"These pickles may cause sudden snack attacks and unsolicited “mmm” sounds",image:"non-veg/Chicken.webp",type:"non-veg", price:1400},
    {id:10, name:"Mutton Pickle", content:"These pickles may cause sudden snack attacks and unsolicited “mmm” sounds",image:"non-veg/Mutton.webp",type:"non-veg", price:1800},
    {id:11, name:"Mutton Boneless Pickle", content:"These pickles may cause sudden snack attacks and unsolicited “mmm” sounds",image:"non-veg/Mutton.webp", type:"non-veg",price:2000},
    {id:12, name:"Mutton-keema Pickle", content:"These pickles may cause sudden snack attacks and unsolicited “mmm” sounds",image:"non-veg/MuttonCheema.webp",type:"non-veg", price:2200},

  ];}

  cartButtonClicked() {
    this.value = this.value + 1;
    console.log("Mango button clicked ");
  }

  cartButton(PickleName: string, Price: number, pickleImage:string) {
    this.num = this.num + 1;
    this.cartService.changeNum(this.num);
    this.showAddedAlert = true;
    setTimeout(() => {
      this.showAddedAlert = false;
    }, 1500);

    this.item = { pickleName: PickleName, Price: Price, urlLink:pickleImage};
 
    this.cartService.updateSelectedItem(this.item);
  };

  veg() {
    this.pickleType = "Veg";
    console.log("veg clicked")
  }
  
  nonveg() {
    this.pickleType = "NonVeg";
    console.log("non-veg clicked")
  }


}
