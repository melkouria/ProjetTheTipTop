import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { RouterModule } from '@angular/router';
import { MatDrawer, MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import {  MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';





@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  declarations: [
    ClientComponent,
    SendMessageComponent,
    //RoueComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDrawer,
    MatDrawerContainer,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatSidenavModule,
    

  ],
  exports:[
    ClientComponent,
    SendMessageComponent,
    
  ],
  
})
export class ClientmoduleModule { }
