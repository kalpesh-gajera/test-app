import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user:any='';
  tabeTata:any
  sharedData:any 
  
  constructor(private route:Router, public apiService:ApiService) {
    // this.addUserForm(this.user)
   }

  userForm1= new FormGroup({
    firstname:new FormControl('', [Validators.required]),
    lastname:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phonenumber:new FormControl('', [Validators.required]),
    birthdate:new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    this.addUserForm(null)

  }

  addUserForm(data:any){
    this.apiService.saveData(data).subscribe((res:any) => {
      console.log("apiiiiiii", res)
    })
  }

  addDataTable(){
    // this.route.navigate(['dashbord'])
    

  }

  
      

}
