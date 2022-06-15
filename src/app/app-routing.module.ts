import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {LoanGetAllComponent} from "./loan-get-all/loan-get-all.component";
import {LoanUpdateComponent} from "./loan-update/loan-update.component";
import {LoanDeleteComponent} from "./loan-delete/loan-delete.component";
import {LoanGetByIdComponent} from "./loan-get-by-id/loan-get-by-id.component";
import {LoanAddComponent} from "./loan-add/loan-add.component";

const routes: Routes = [
    //Home
    {path: '', component: HomeComponent},
    //All Loans
    {path: 'loans', component: LoanGetAllComponent},
    //Create Loan
    {path: 'create', component: LoanAddComponent},
    //Update Loan
    {path: 'update', component: LoanUpdateComponent},
    //Delete Loan
    {path: 'delete', component: LoanDeleteComponent},
    //Search User
    {path: 'search', component: LoanGetByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
