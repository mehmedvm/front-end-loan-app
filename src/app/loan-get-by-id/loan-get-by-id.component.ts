import { Component, OnInit } from '@angular/core';

import {LoanService} from '../services/loan.service';
import { Loan } from '../model/loan';
import {ActivatedRoute} from "@angular/router";
import {timeout} from "rxjs";

@Component({
  selector: 'app-loan-get-by-id',
  templateUrl: './loan-get-by-id.component.html',
  styleUrls: ['./loan-get-by-id.component.css']
})
export class LoanGetByIdComponent implements OnInit {
  //Creating a field for Loans. Loan is located in the model package.
//   loans: Loan[] | undefined;
//   selectedLoan: Loan | undefined; //MM
  loan : Loan | undefined;

  //Dependency Injection: We are injecting the LoanService. This way we can have
  //access to everything in our LoanService
  constructor(private loanService: LoanService) { }


  ngOnInit(): void {
  }

  search(id: any) {
      this.loanService.searchLoan(id).subscribe(searchLoan => {
        this.loan = searchLoan;
      });
    }


}
