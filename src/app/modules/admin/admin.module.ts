import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { SmartAdminComponent } from './components/feature/smart-admin/smart-admin.component';
import { ViewAdminComponent } from './components/ui/view-admin/view-admin.component';


@NgModule({
  declarations: [
    PageAdminComponent,
    SmartAdminComponent,
    ViewAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
