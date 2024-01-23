import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  tokenApi='';

  constructor(private router:Router, private apiService:ApiService) { 
  }

  ngOnInit(): void {
    localStorage.removeItem('token');
    this.initForm();
  }

  initForm(){
    this.loginForm= new FormGroup({
      email:new FormControl('', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password:new FormControl('', [Validators.required]),
  
    })
     
  }  

  userLogin(){
    this.apiService.loginUser(this.loginForm.value).subscribe((res:any)=>{
      this.tokenApi = res.token
      localStorage.setItem("token", JSON.stringify(this.tokenApi));
      this.router.navigate(['dashbord']);
      console.log('loginApi', this.tokenApi)
    })
  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }
}
