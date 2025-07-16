import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PicklesComponent } from './components/pickles/pickles.component';
import { NonComponent } from './components/non/non.component';
import { VegComponent } from './components/veg/veg.component';
import { ButtonLoginComponent } from './components/button-login/button-login.component';
export const routes: Routes = [
    {
        path: '', component: HomeComponent, title: "Home"
    },
    {
        path: "login", component: LoginComponent, title: "Login"
    },
    {
        path: "pickles", component: PicklesComponent, title: "Pickles"
    },
    { path: "non", component: NonComponent, title: "non-veg" },
    { path: "veg", component: VegComponent, title: "veg" },
    { path: "button-login", component: ButtonLoginComponent, title: "button-login" }

];
