import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import {Router} from "@angular/router";

export interface Cuenta {
  mail: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  title = 'PruebaBarracks';
  cuenta: Cuenta = {
    mail: '',
    password: ''
  };
  constructor(
    private ServiceBack: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    document.body.style.background = "  url('../assets/images/LoginBackground.jpg') no-repeat center center fixed ";
   if(localStorage.getItem('Token') ){
    this.router.navigate(['/account/data']);
   }
  }
  Token(obj: Cuenta) {
    this.ServiceBack.getToken(obj).subscribe(
      res => {
        localStorage.setItem('Token', res.token);
        const lStorage = localStorage.getItem('Token');
        if(lStorage){
          this.router.navigate(['/account/data']);
        }
      },
      error => {
        
      }
    )
  }

}
