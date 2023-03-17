import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';
@Component({
  selector: 'app-signuppages',
  templateUrl: './signuppages.component.html',
  styleUrls: ['./signuppages.component.css']
})
export class SignupPagesComponent {
  fname:any=''
 
  email:any=''
  pass:any=''

  constructor(private fireS:FireService){}
  signup(){
    this.fireS.signup(this.email,this.pass,this.fname)
    this.email=''
  this.pass=''
  this.fname=''
  }

}
