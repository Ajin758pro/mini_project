import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './pages/brands/brands.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { Login1Component } from './pages/login1/login1.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'brands',component:BrandsComponent},
  {path:'signup',component:SignupComponent},
  { path:'single',component:SinglepageComponent},
  {path:'payment',component:PaymentComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'cart',component:CartComponent},
  {path:'register',component:RegisterComponent},
  {path:'login1',component:Login1Component},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
