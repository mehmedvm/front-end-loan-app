import { Component, OnInit } from '@angular/core';

import {LoanService} from '../services/loan.service';
import { Loan } from '../model/loan';

@Component({
  selector: 'app-loan-update',
  templateUrl: './loan-update.component.html',
  styleUrls: ['./loan-update.component.css']
})
export class LoanUpdateComponent implements OnInit {

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

  updateLoan(id: any, applicantName: any, phoneNo: any, address: any, email: any, creditScore: any, loanNumber: any) {
      this.loanService.updateLoan({id, applicantName, phoneNo, address, email, creditScore, loanNumber} as unknown as Loan).subscribe(put => {
        console.log(put);
      });
  }

}
