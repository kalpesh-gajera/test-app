import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ApiService } from './services/api.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private apiService:ApiService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        this.apiService.loader.next(true);
        console.log("loader true")
        if (event.type == HttpEventType.Response){
          if(event.status == 200){
           this.apiService.loader.next(false)
           console.log("loader") 
          }
        }
      })
    )
  }
}
