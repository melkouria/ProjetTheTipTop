import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ApiAppService } from '../Service/api-app.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgToastService } from 'ng-angular-popup'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserForm : FormGroup;
    email1='admin@gmail.com' 
    password1='Admin1234'
  
  email:any;
   password :any;
  constructor(public apiApp : ApiAppService, public router : Router,private toast:NgToastService) {
    this.loginUserForm = new FormGroup ({
    email : new FormControl('' , [Validators.email , Validators.required]),
    password : new FormControl('' , Validators.required)
    })
    
   }

   
  ngOnInit(): void {
  }

  OnSubmit(){
    if(this.loginUserForm.valid){
      if(this.email==this.email1 && this.password==this.password1){
        localStorage.setItem('emailAdmin',this.email)
        this.router.navigate(['/admin'])
      }
      this.apiApp.login(this.loginUserForm.value).subscribe(res =>{
        if(res && res['status']==='yes' && res['data']['resp'] && res['data']['AuthToken']){
          console.log('dazt')
          localStorage.setItem('token',res['data']['AuthToken'])
          localStorage.setItem('nomEmployer',res['data']['existAdmin']['nom'])
          localStorage.setItem('prenomEmployer',res['data']['existAdmin']['prenom'])
          localStorage.setItem('emailEmployer',res['data']['existAdmin']['email'])
          

          this.router.navigate(['/ReclamationEMP'])
        }
        if(res && res['status']==='ok' && res['data']['resp'] && res['data']['AuthToken']){
          console.log('dazt')
          localStorage.setItem('token',res['data']['AuthToken'])
          localStorage.setItem('idUser',res['data']['existAdmin']['_id'])
          localStorage.setItem('nomUser',res['data']['existAdmin']['nom'])
          localStorage.setItem('prenomUser',res['data']['existAdmin']['prenom'])
          localStorage.setItem('emailUser',res['data']['existAdmin']['email'])
          this.router.navigate(['/user'])
        }else{
          this.toast.warning({detail:"Message Vérification",summary:'Sil vous plaiz verifier votre compte email',duration:5000});
         // Swal.fire('Vérification','Sil vous plaiz verifier votre compte email','info')
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
