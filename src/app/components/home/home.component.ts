import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  UlterVisible = false;

  ngOnInit(){

    setTimeout(() => {
      this.UlterVisible = true;
    }, 200); //
  }

}
