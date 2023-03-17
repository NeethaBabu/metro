import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePagesComponent } from './pages/homepages/homepages.component';
import { SigninPagesComponent } from './pages/signinpages/signinpages.component';

import { ContactPagesComponent } from './pages/contactpages/contactpages.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { RoutesPagesComponent } from './pages/routespages/routespages.component';
import { BookingPagesComponent } from './pages/bookingpages/bookingpages.component';
import { SignupPagesComponent } from './pages/signuppages/signuppages.component';
import { TimepagesComponent } from './pages/timepages/timepages.component';
import { SinglePagesComponent } from './pages/single/single.component';
import { PaymentPagesComponent } from './pages/paymentpages/paymentpages.component';

// import { FormPageComponent } from './pages/form-page/form-page.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS} from '@angular/fire/compat';


@NgModule({
  declarations: [
    AppComponent,
    HomePagesComponent,
    SigninPagesComponent,
  
    ContactPagesComponent,
    NavbarComponent,
    FooterComponent,
    RoutesPagesComponent,
    BookingPagesComponent,
    SignupPagesComponent,
   
    // TimePagesComponent,
    SinglePagesComponent,
    PaymentPagesComponent,
 
    // FormPageComponent,
  
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
