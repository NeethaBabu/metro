import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepagesComponent } from './pages/homepages/homepages.component';
import { RoutespagesComponent } from './pages/routespages/routespages.component';
import { BookingpagesComponent } from './pages/bookingpages/bookingpages.component';
import { SigninpagesComponent } from './pages/signinpages/signinpages.component';
import { SignuppagesComponent } from './pages/signuppages/signuppages.component';
import { ContactpagesComponent } from './pages/contactpages/contactpages.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';

import { TimepagesComponent } from './pages/timepages/timepages.component';
import { PaymentpagesComponent } from './pages/paymentpages/paymentpages.component';
import { SingleComponent } from './pages/single/single.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepagesComponent,
    RoutespagesComponent,
    BookingpagesComponent,
    SigninpagesComponent,
    SignuppagesComponent,
    ContactpagesComponent,
    NavbarComponent,
    FooterComponent,

    TimepagesComponent,
    PaymentpagesComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent
    
  ]
})
export class AppModule { }
