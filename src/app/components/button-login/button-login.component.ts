import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-button-login',
  templateUrl: './button-login.component.html',
  standalone:true,
  imports: [ButtonModule],


})
export class ButtonLoginComponent {}
