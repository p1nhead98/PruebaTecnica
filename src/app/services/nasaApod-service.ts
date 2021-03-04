import { HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApodService {

  private apiNada = "https://api.nasa.gov/planetary/apod?api_key=HhZnYUTEHqdSnZrFwGRae55nwD3achkZGIzUmKfd"; // URL to web api

  constructor(private http: HttpClient) {}

  public getApod(startDate: string, endDate: string): Observable<any> {
    return this.http.get<any>(this.apiNada + '&start_date='+startDate+'&end_date='+endDate );
    
  }

}