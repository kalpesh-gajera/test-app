import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://9vv86.wiremockapi.cloud';
  userApi = 'https://9vv86.wiremockapi.cloud/users';
  isAuthenticated:any
  localData = ''
  formData=''
  sharedData:any;
  

  constructor(private http:HttpClient, private route:Router) {
    
   }

  loader = new BehaviorSubject<boolean>(false)

  registerUser1(data:string) {
    return this.http.post(this.url + '/register', data);
   }

   loginUser(data:any) {
    return this.http.post(this.url + '/login', data)
   }

   checkAuthentication():any {
    if (localStorage.getItem("token") === null) {
      return this.isAuthenticated = false
    } else {
      return this.isAuthenticated = true

    }
  }

  saveData(data:any){
    return this.http.post(this.userApi, data)
    // return this.http.get(this.userApi)
    
  }


}
