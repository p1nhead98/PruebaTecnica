import { HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ILogin } from "../models/login"
import { IToken } from '../models/token';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  private apiBarracks = "https://beta-api.barracks.gg/v2"; // URL to web api

  constructor(private http: HttpClient) {}

  public getToken(cuenta: ILogin): Observable<IToken> {
    return this.http.post<IToken>(this.apiBarracks + '/Auth/Authenticate', cuenta );
    
  }

}