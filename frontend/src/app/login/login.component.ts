import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ApiAppService } from '../Service/api-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserForm : FormGroup;
    email1='admin@gmail.com' 
    password1='Admin1234'
  
  email:any;
   password :any;
  constructor(public apiApp : ApiAppService, public router : Router) {
    this.loginUserForm = new FormGroup ({
    email : new FormControl('' , [Validators.email , Validators.required]),
    password : new FormControl('' , Validators.required)
    })
    
   }

   
  ngOnInit(): void {
  }

  OnSubmit(dataForm:any){
    if(this.loginUserForm.valid){
      if(this.email==this.email1 && this.password==this.password1){
        this.router.navigate(['aboutUS'])
      }
      this.apiApp.login(this.loginUserForm.value).subscribe(res =>{
        if(res && res['status']==='yes' && res['data']['resp'] && res['data']['AuthToken']){
          console.log('dazt')
          localStorage.setItem('token',res['data']['AuthToken'])
          localStorage.setItem('info',res['data']['existAdmin']['nom'])
          
          

          this.router.navigate([''])
        }
        if(res && res['status']==='ok' && res['data']['resp'] && res['data']['AuthToken']){
          console.log('dazt')
          localStorage.setItem('token',res['data']['AuthToken'])
          

          this.router.navigate(['/dashb'])
        }
        
      }, (err) =>{
        if(err){
         
          console.log('we got in error')
        }
       } )
      }
  console.log(this.loginUserForm.value)
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
