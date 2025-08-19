import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemDetailsArraySubject = new BehaviorSubject<any[]>([]);
  itemDetailsArray$ = this.itemDetailsArraySubject.asObservable();

  private selectedItem = new BehaviorSubject<any>({ });
  updateSelectedItem(item: any): void {
    this.selectedItem.next(item);
    
    const current = this.itemDetailsArraySubject.getValue();
    
    this.itemDetailsArraySubject.next([...current, item]);
  }

  selectedItemUP$ = this.selectedItem.asObservable();

  num=new BehaviorSubject<number>(0);

  ChangeNum=this.num.asObservable();

  
  changeNum(newNum:number){
    this.num.next(newNum);
  }
}
