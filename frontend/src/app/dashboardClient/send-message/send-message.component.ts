import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiAppService } from 'src/app/Service/api-app.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

nom:any
prenom : any
email: any;
telephone : any;
message: any

  constructor(public service:ApiAppService,public router: Router) { }

  ngOnInit(): void {
  }
  OnSubmit(){
    this.service.sendMessage(this.nom,this.prenom,this.email,this.telephone,this.message).subscribe(data=>{
      this.router.navigate(['/dashboardClient'])
      console.log(data);
    })
  }

}
