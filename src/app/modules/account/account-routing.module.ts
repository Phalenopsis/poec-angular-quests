import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAccountComponent } from './pages/home-account/home-account.component';
import { UserDetailsAccountComponent } from './pages/user-details-account/user-details-account.component';

const routes: Routes = [
  { path: "home", component: HomeAccountComponent },
  { path: "home/user/:id", component: UserDetailsAccountComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
