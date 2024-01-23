import { Injectable } from '@angular/core';
import { ApiService } from './services/api.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  token:any
  constructor(private apiService:ApiService) {
    this.token = JSON.parse(localStorage.getItem('token') || '{}'); 
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders:{
        Authorization:'Bearer ' + this.token 
      }
    })
    return next.handle(request).pipe(
      retry(0),
      catchError(this.errorHandle)
      );
    }
    errorHandle(error:HttpErrorResponse){
      window.alert(error.message)
      return throwError(error.message || "save Error")
    }
    
}
