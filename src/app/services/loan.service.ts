import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
//import { HttpClientModule } from '@angular/common/http';
import {Observable} from "rxjs";
import {Loan} from "../model/loan";

// The ULoanService will be used to get the data from the backend by
// calling spring boot API.

//Marking a class with @Injectable ensures that the compiler will
//generate the necessary metadata to create the class's dependencies
//when the class is injected.This service is being injected into the loan.component.ts.

@Injectable({
 //When you provide the service at the root level, Angular creates a single,
  //shared instance of your service and injects it into any class that asks for it.
  providedIn: 'root'
})
export class LoanService {
  private getUrl = "http://localhost:8080/retrieveAllLoans";
  private searchUrl = "http://localhost:8080/retrieveLoan"; //"http://localhost:8080/retrieveLoan/{loanId}"
  private postUrl = "http://localhost:8080/addLoan";
  private putUrl = "http://localhost:8080/updateLoan";
  private deleteUrl = "http://localhost:8080/deleteLoan"; //http://localhost:8080/deleteLoan/{loanId}

  //Dependency Injection for HTTPClient
  //Most front-end applications need to communicate with a server over the
  //HTTP protocol, to download or upload data and access other back-end services.
  //Angular provides a client HTTP API for Angular applications.
  constructor(private http: HttpClient) { }

  //An observable can deliver multiple values of any type —literals, messages,
  //or events, depending on the context. The API for receiving values is the
  //same whether the values are delivered synchronously or asynchronously.
  //Because setup and teardown logic are both handled by the observable,
  //your application code only needs to worry about subscribing to consume values.
  //We subscribe for the Observable in the loan-get-all.component.ts and others.

  //Get All Loans
  getLoans(): Observable<Loan[]>{
    return this.http.get<Loan[]>(this.getUrl);
  }

  //Create Loan
  saveLoan(loan: Loan): Observable<Loan> {
    return this.http.post<Loan>(this.postUrl, loan);
  }

  //Update Loan
  updateLoan(loan: Loan): Observable<Loan> {
    return this.http.put<Loan>(this.putUrl, loan);
  }

  //Delete Loan
  deleteLoan(loan: Loan): Observable<Loan> {
    const url = `${this.deleteUrl}/${loan.id}`;
    return this.http.delete<Loan>(this.deleteUrl + '/' + loan.id);
  }

   //GetOneLoan
   searchLoan(id: number): Observable<Loan> {
     const url = `${this.searchUrl}/${id}`
     return this.http.get<Loan>(url);
   }


//   getOneLoan(id: number): Observable<Loan> {
// //       const url = `${this.getOneUrl}/${loan.id}`;
//       return this.http.get<Loan>(this.getOneUrl + '/' + id);
//       //return loan;
//     }

}
