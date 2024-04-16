import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateKittenComponent,
    ListKittenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
