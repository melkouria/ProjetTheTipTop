import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatDividerModule } from '@angular/material/divider';
//import { FlexLayoutModule } from '@angular/flex-layout';
import {  MatCardModule } from '@angular/material/card';
import { DashbordService } from '../dashbord.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator'

import { CdkColumnDef } from '@angular/cdk/table';


@NgModule({
  declarations: [
    DefaultComponent,
    DashbordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
   // FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    
    
    
    
  ],
  providers:[
    DashbordService,
    CdkColumnDef
  ]
})
export class DefaultModule { }
