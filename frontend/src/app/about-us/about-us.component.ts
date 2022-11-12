import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor( public router : Router) { }

  ngOnInit(): void {
  }
  onHome(){
    this.router.navigate(['/home'])

  }
  onLogin(){
    this.router.navigate(['/login'])

  }
  onRegister(){
    this.router.navigate(['/sign-up'])

  }
  onAboutUS(){
    this.router.navigate(['/aboutUS'])

  }

}
