import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmpoloyeeServiceService {

  constructor(private _http: HttpClient, private _url: HttpClient) { }


  getwebsiteurl(userInput: any): Observable<any> {
    console.log(userInput);
    return this._url.get<any>("/getUrls", {
      params: new HttpParams().set('url', userInput)
    })
      .pipe(catchError(this.errorHandlerUrl));
  }
  errorHandlerUrl(error: HttpErrorResponse) {
    return throwError(error.message || "Server Not Found")
  }

  getImageurl(userInput: any): Observable<any> {
    console.log(userInput);
    return this._url.get<any>("/getImages", {
      params: new HttpParams().set('url', userInput)
    })
      .pipe(catchError(this.errorHandlerImage));
  }
  errorHandlerImage(error: HttpErrorResponse) {
    return throwError(error.message || "Server Not Found")
  }

  getcovid19Data(): Observable<any> {
    return this._url.get<any>("/getCovidData", {
    })
      .pipe(catchError(this.errorHandlerCovid19Data));
  }
  errorHandlerCovid19Data(error: HttpErrorResponse) {
    return throwError(error.message || "Server Not Found")
  }

}
