import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarclient',
  templateUrl: './sidebarclient.component.html',
  styleUrls: ['./sidebarclient.component.less']
})
export class SidebarclientComponent implements OnInit {

  constructor() { }
  emailUser:any=localStorage.getItem('emailUser')
  nomUser:any=localStorage.getItem('nomUser')
  prenomUser:any=localStorage.getItem('prenomUser')
  ngOnInit(): void {
  }

}
