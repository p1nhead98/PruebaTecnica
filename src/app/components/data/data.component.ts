import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import {Router} from "@angular/router";
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor( 
    private router: Router
  ) { }

  ngOnInit() {

    document.body.style.background = 'rgba(242, 242, 242)';
    console.log(localStorage.getItem('Token'));
    if(!localStorage.getItem('Token')){
      this.router.navigate(['/account/login']);
    }
  }

  Salir(){
    localStorage.clear();
    this.router.navigate(['/account/login']);
  }

}
