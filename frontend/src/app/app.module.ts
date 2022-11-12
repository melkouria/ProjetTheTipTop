import { NgModule, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashbComponent } from './dashb/dashb.component';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharkDirective } from './shark.directive';
import { AboutUsComponent } from './about-us/about-us.component';

import { DefaultModule } from './adminn/default/default.module';
import { EmployeComponent } from './Employe/employe/employe.component';
import { ClientComponent } from './dashboardClient/client/client.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
//import { fl } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SendMessageComponent } from './dashboardClient/send-message/send-message.component';
import { ReclamationComponent } from './Employe/reclamation/reclamation.component';
//import { SendMessageComponent } from './Employe/send-message/send-message.component'
//import { NgxWheelModule } from 'ngx-wheel';
//import { NgxSpinnerModule } from 'ngx-spinner';
//import { ClientmoduleModule } from './dashboardClient/clientmodule.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashbComponent,
    SharkDirective,
    AboutUsComponent,
    EmployeComponent,
    ClientComponent,
    SendMessageComponent,
    ReclamationComponent
    
   
    
    
    
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
    NgbModule,
    DefaultModule,
    FormsModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    //FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatSidenavModule,
    //NgxWheelModule,
    //NgxSpinnerModule,
   BrowserAnimationsModule,
    

    
    
  ],
  exports:[
    EmployeComponent,
    SendMessageComponent,
    ClientComponent,
    //NgxWheelModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
