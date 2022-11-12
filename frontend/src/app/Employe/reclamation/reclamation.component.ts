import { Component, OnInit } from '@angular/core';
import { ApiAppService } from 'src/app/Service/api-app.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  constructor(public apiService: ApiAppService) { }

  ngOnInit(): void {
    this.getPrix()
  }
  public emails;
  getPrix(){
    
    this.apiService.getReclamation()
    .subscribe((data):any => {
         this.emails =data["result"]
         console.log(this.emails)
      },error=>{
        console.log(error);
      })
    
  }
}
