import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './pages/homepages/homepages.component';
import { RoutesPagesComponent } from './pages/routespages/routespages.component';
import { BookingPagesComponent } from './pages/bookingpages/bookingpages.component';
import { SigninPagesComponent } from './pages/signinpages/signinpages.component';
import { SignupPagesComponent } from './pages/signuppages/signuppages.component';
import { ContactPagesComponent } from './pages/contactpages/contactpages.component';

import { TimepagesComponent } from './pages/timepages/timepages.component';
import { SinglePagesComponent } from './pages/single/single.component';
import { PaymentPagesComponent } from './pages/paymentpages/paymentpages.component';

// import { FormPageComponent } from './pages/form-page/form-page.component';
import { AngularFireAuthGuard,redirectUnauthorizedTo,redirectLoggedInTo} from '@angular/fire/compat/auth-guard';
import { QrcodeComponent } from './pages/qrcode/qrcode.component';

const routes: Routes = [
  {
    path:'',component:HomePagesComponent
  },
  {
    path:'contact',component:ContactPagesComponent
  },
  {
    path:'signup',component:SignupPagesComponent
  },
  {
    path:'signin',component:SigninPagesComponent
  },
  {
    path:'booking',component:BookingPagesComponent
  },
  {
    path:'routes',component:RoutesPagesComponent
  },
 
  {
    path:'time',component:TimepagesComponent
  },
  {
    path:'single',component:SinglePagesComponent
  },
 
  {
    path:'payment',component:PaymentPagesComponent
  },
  {
    path:'qrcode',component:QrcodeComponent
  }
  
  // {
  //   path:'form',component:FormPageComponent
  // },
 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
