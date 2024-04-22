import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { HomeAccountComponent } from './pages/home-account/home-account.component';
import { DisplayUserComponent } from './components/ui/display-user/display-user.component';
import { SmartUserComponent } from './components/feature/smart-user/smart-user.component';
import { UserDetailsAccountComponent } from './pages/user-details-account/user-details-account.component';


@NgModule({
  declarations: [
    HomeAccountComponent,
    DisplayUserComponent,
    SmartUserComponent,
    UserDetailsAccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
