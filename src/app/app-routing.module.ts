import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepagesComponent } from './pages/homepages/homepages.component';
import { RoutespagesComponent } from './pages/routespages/routespages.component';
import { BookingpagesComponent } from './pages/bookingpages/bookingpages.component';
import { SigninpagesComponent } from './pages/signinpages/signinpages.component';
import { SignuppagesComponent } from './pages/signuppages/signuppages.component';
import { ContactpagesComponent } from './pages/contactpages/contactpages.component';
import { PaymentpagesComponent } from './pages/paymentpages/paymentpages.component';

import { TimepagesComponent } from './pages/timepages/timepages.component';
import { SingleComponent } from './pages/single/single.component';





const routes: Routes = [
  {
    path:'',component:HomepagesComponent
  },
  {
    path:'contact',component:ContactpagesComponent
  },
  {
    path:'signup',component:SignuppagesComponent
  },
  {
    path:'signin',component:SigninpagesComponent
  },
  {
    path:'booking',component:BookingpagesComponent
  },
  {
    path:'routes',component:RoutespagesComponent
  },
  {
    path:'paymentpages',component:PaymentpagesComponent
  },
 
  {
    path:'time',component:TimepagesComponent
  },
  {
    path:'single',component:SingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
