import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  loader:any=''
  constructor(private apiService:ApiService) {
    this.apiService.loader.subscribe(res => {
      this.loader = res;
      console.log("loader work", res)
    })
  }

  ngOnInit(): void {
  }
  

}
