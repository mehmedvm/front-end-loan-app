import { Component, OnInit } from '@angular/core';

import {LoanService} from '../services/loan.service';
import { Loan } from '../model/loan';

@Component({
  selector: 'app-loan-delete',
  templateUrl: './loan-delete.component.html',
  styleUrls: ['./loan-delete.component.css']
})
export class LoanDeleteComponent implements OnInit {
  //Creating a field for Loans. Loan is located in the model package.
  loans: Loan[] | undefined;

  //Dependency Injection: We are injecting the LoanService. This way we can have
  //access to everything in our LoanService
  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
  //Using Observable and subscribing.
      this.loanService.getLoans().subscribe((data: Loan[]) => {
        console.log(data);
        this.loans = data;
      });
  }

  deleteLoan(id: any) {
      this.loanService.deleteLoan({id} as unknown as Loan).subscribe(deleteLoan => {
        console.log(deleteLoan);
      });
  }


}
