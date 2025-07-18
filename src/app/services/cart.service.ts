import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private selectedItem = new BehaviorSubject<any>({
    
  });
  updateSelectedItem(item: any): void {
    this.selectedItem.next(item);
  }

  selectedItemUP$ = this.selectedItem.asObservable();

  num=new BehaviorSubject<number>(0);
  ChangeNum=this.num.asObservable();
  Count=signal(0);
  constructor() { }
  updatedCount(itemQuantity:number){
    this.Count.update(value=>value+itemQuantity);


  }
  changeNum(newNum:number){
    this.num.next(newNum);
  


  }
}
