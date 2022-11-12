import { Component, OnInit } from '@angular/core';
import { DashbordService } from '../dashbord.service';
import {MatTableModule} from '@angular/material/table';
import { ApiAppService } from 'src/app/Service/api-app.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})

export class DashbordComponent implements OnInit {
  bigCharts:[];
  cards:[];
  pieCharts :[];
  
  
  

  
  constructor(private dashbordservice:DashbordService , public apiService : ApiAppService) { }

  ngOnInit(): void {
    this.bigCharts = this.dashbordservice.bigChart();
    this.cards = this.dashbordservice.cards();
    this.pieCharts = this.dashbordservice.pieChart();
    this.getPrix();
  }
  public users;
  getPrix(){
    
    this.apiService.getPrixBy__v()
    .subscribe((data):any => {
         this.users =data["result"]
         console.log(this.users)
      },error=>{
        console.log(error);
      })
    
  }

}
