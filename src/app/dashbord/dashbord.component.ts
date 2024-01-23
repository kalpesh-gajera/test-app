import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit{
  localData:any=''
  constructor(private route:Router, private apiService:ApiService) { 
  }

  ngOnInit(): void {

  }

  addUser(){
    this.route.navigate(['add-user'])

  }

}
