import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url = "Company";
  constructor(private http:HttpClient) { }

  public getCompany(): Observable<Company[]>{
    console.log("Hello");
    // console.log(this.http.get<Company[]>('${environment.apiUrl}/${this.url}'));
    return this.http.get<Company[]>('https://localhost:7002/api/Company');
  }
}
