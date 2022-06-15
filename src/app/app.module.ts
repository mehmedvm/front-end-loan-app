import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanGetAllComponent } from './loan-get-all/loan-get-all.component';
import { LoanGetByIdComponent } from './loan-get-by-id/loan-get-by-id.component';
import { LoanUpdateComponent } from './loan-update/loan-update.component';
import { LoanDeleteComponent } from './loan-delete/loan-delete.component';
//MM:
import { HttpClientModule } from '@angular/common/http';
import { LoanAddComponent } from './loan-add/loan-add.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanGetAllComponent,
    LoanGetByIdComponent,
    LoanUpdateComponent,
    LoanDeleteComponent,
    LoanAddComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
