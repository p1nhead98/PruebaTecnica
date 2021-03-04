import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { ApodService } from '../../services/nasaApod-service'
import {Router} from "@angular/router";
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
token: any = '';
  constructor( 
    private router: Router,
    private ServiceBack: ApodService
  ) { }
    
  ngOnInit() {
    this.token = localStorage.getItem('Token');
    document.body.style.background = 'rgba(242, 242, 242)';
    console.log(localStorage.getItem('Token'));
    if(!localStorage.getItem('Token')){
      this.router.navigate(['/account/login']);
    }
    this.getNasaApod();
  }

  getNasaApod(){

    var day = new Date();
    var dd = String(day.getDate()).padStart(2, '0' );
    var dd2 = String(day.getDate() - 2).padStart(2, '0' );
    var mm = String(day.getMonth() + 1).padStart(2, '0'); 
    var yyyy = day.getFullYear();

    const today = yyyy + '-' + mm + '-' + dd ;
    const today2 = yyyy + '-' + mm +'-'+ (dd2);
   
    this.ServiceBack.getApod(today2, today).subscribe(
      res => {
        console.log(res);
      },
      error => {
        
      }
    )
  }

  Salir(){
    localStorage.clear();
    this.router.navigate(['/account/login']);
  }

}
