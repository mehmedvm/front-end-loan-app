import { Component, OnInit } from '@angular/core';

import {LoanService} from '../services/loan.service';
import { Loan } from '../model/loan';

@Component({
  selector: 'app-loan-add',
  templateUrl: './loan-add.component.html',
  styleUrls: ['./loan-add.component.css']
})
export class LoanAddComponent implements OnInit {

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

  addLoan(applicantName: any, phoneNo: any, address: any, email: any, creditScore: any, loanNumber: any) {
      if(!applicantName || !phoneNo || !address || !email || !creditScore || !loanNumber) {
        alert('Please Add Loan Data!');
      } else {
        this.loanService.saveLoan({applicantName, phoneNo, address, email, creditScore, loanNumber} as unknown as Loan).subscribe(post => {
          console.log(post);
        });
      }
  }



}
