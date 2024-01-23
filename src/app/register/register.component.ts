import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:any=''

  constructor(private router:Router, private apiService:ApiService) { }

  registerForm= new FormGroup({
    name:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl('', [Validators.required]),
    confirmPassword:new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    
  }

  

  registeruser(data:any) {
    	this.apiService.registerUser1(data).subscribe((res:any)=>{
			
      console.log("api data>>>>>", res)
		});
    console.log("data", data)
  }

  moveLogin() {
    if(this.password?.value== this.confirmPassword?.value){
      this.router.navigate(['login'])
    }
  }

  get name() {
    return this.registerForm.get('name')
    
  }

  get email() {
    return this.registerForm.get('email')
  }

  get password() {
    return this.registerForm.get('password')
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword')
  }
  
  
}
