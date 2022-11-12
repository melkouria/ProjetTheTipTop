import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashbordComponent } from './adminn/dashbord/dashbord.component';
import { DefaultComponent } from './adminn/default/default.component';
import { PostsComponent } from './adminn/posts/posts.component';
import { AppComponent } from './app.component';
import { DashbComponent } from './dashb/dashb.component';
import { ClientComponent } from './dashboardClient/client/client.component';

import { SendMessageComponent } from './dashboardClient/send-message/send-message.component';
import { EmployeComponent } from './Employe/employe/employe.component';
import { ReclamationComponent } from './Employe/reclamation/reclamation.component';
//import { SendMessageComponent } from './Employe/send-message/send-message.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path : 'aboutUS', component : AboutUsComponent},
  {path : 'home', component : AppComponent},
  {path : 'login', component : LoginComponent},
  {path : 'sign-up', component: SignUpComponent},
  {path : 'dashb' , component: DashbComponent},
  {path : 'dashboardEmploye' , component: EmployeComponent},
  {path : 'dashboardClient' , component: ClientComponent},
  {path : 'sendMessage' , component: SendMessageComponent},
  {path : 'reclamation' , component:ReclamationComponent},
  //{path : 'roue' , component:RoueComponent},

  //{path : '' , component:DashbComponent },
  {path:'',
    component:DefaultComponent,
  children:[{
    path:'',
    component:DashbordComponent
  },
  {path:'posts',component:PostsComponent}
]},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
