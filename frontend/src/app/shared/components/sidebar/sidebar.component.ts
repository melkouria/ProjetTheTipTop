import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
emailadmin:any=localStorage.getItem('emailAdmin')
  constructor() { }

  ngOnInit(): void {
  }

}
