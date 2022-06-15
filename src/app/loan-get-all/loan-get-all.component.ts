import { Component, OnInit } from '@angular/core';

import {LoanService} from '../services/loan.service';
import { Loan } from '../model/loan';

@Component({
  selector: 'app-loan-get-all',
  templateUrl: './loan-get-all.component.html',
  styleUrls: ['./loan-get-all.component.css']
})
export class LoanGetAllComponent implements OnInit {

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

//   addLoan(applicantName: any, phoneNo: any, address: any, email: any, creditScore: any, loanNumber: any) {
//       if(!applicantName || !phoneNo || !address || !email || !creditScore || !loanNumber) {
//         alert('Please Add Loan Data!');
//       } else {
//         this.loanService.saveLoan({applicantName, phoneNo, address, email, creditScore, loanNumber} as unknown as Loan).subscribe(post => {
//           console.log(post);
//         });
//       }
//   }
//
//   updateLoan(applicantName: any, phoneNo: any, address: any, email: any, creditScore: any, loanNumber: any) {
//       this.loanService.updateLoan({id, applicantName, phoneNo, address, email, creditScore, loanNumber} as unknown as Loan).subscribe(put => {
//         console.log(put);
//       });
//   }
//
//   deleteLoan(id: any) {
//       this.loanService.deleteLoan({id} as unknown as Loan).subscribe(deleteLoan => {
//         console.log(deleteLoan);
//       });
//   }

}
