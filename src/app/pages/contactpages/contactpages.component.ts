import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';
@Component({
  selector: 'app-contactpages',
  templateUrl: './contactpages.component.html',
  styleUrls: ['./contactpages.component.css']
})
export class ContactPagesComponent {
  email:string=''
  name:string=''
  message:string=''

  details:any
  
  constructor(private fireS:FireService) {}
  ngOnInit(){
    this.fireS.getContact().subscribe(data =>{
      this.details =data
    })
  }

  contact(){
    let info={
      Name:this.name,
      EmailAddress:this.email,
      Message:this.message
    }
   this.fireS.contact(info)
   this.name=''
   this.email=''
   this.message=''
  }
}


