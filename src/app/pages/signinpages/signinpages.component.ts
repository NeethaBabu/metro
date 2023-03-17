import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service'; 
@Component({
  selector: 'app-signinpages',
  templateUrl: './signinpages.component.html',
  styleUrls: ['./signinpages.component.css']
})
export class SigninPagesComponent {
  email:any=''
   pass:any=''
  constructor(private fireS:FireService){}
    Signin(){
      this.fireS.Signin(this.email,this.pass)
      this.email=''
  this.pass=''
    }
  
}
