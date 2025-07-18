import { CommonModule } from '@angular/common';
import { Component, effect, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router :Router) {
    

   }
  pageVisible: boolean = false;
  username = "";
  password = "";
  DefultUserName = "Start"
  DefultPassword = "Start@123"
  login(uname: string, upassword: string) {
    this.username = uname;
    this.password = upassword;
    console.log(this.username);
    console.log(this.password);
    if (this.DefultUserName === this.username && this.DefultPassword === this.DefultPassword) {
      this.pageVisible = true;
      console.log(this.pageVisible);
      this.router.navigate(['/pickles']);

    } else {
      alert("Invalid Deatails");
    }

  }
  
  

    

}
