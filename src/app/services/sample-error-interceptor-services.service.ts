import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import "rxjs/add/operator/catch"
@Injectable()
export class SamplesErrorInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(catchError((errorResponse: HttpErrorResponse) => {
        if (errorResponse.status === 404) {
          alert("la page n'a pas été trouvé");
        }
        return Observable.throw(errorResponse);
      }));
  }
}