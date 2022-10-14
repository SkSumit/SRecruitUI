import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url = "Company";
  constructor(private http:HttpClient) { }

  public getCompany(): Observable<Company[]>{
    console.log(this.http.get<Company[]>('${environment.apiUrl}/${this.url}'));
    return this.http.get<Company[]>(`${environment.apiUrl}${this.url}`);
  }
  public updateCompany(company:Company):Observable<Company[]>{
    return this.http.put<Company[]>(
      `${environment.apiUrl}${this.url}`,
      company
      );
  }
  public createCompany(company:Company):Observable<Company[]>{
    return this.http.post<Company[]>(
      `${environment.apiUrl}${this.url}`,
      company
      );
  }
  public deleteCompany(company:Company): Observable<Company[]>{
    return this.http.delete<Company[]>(
      `${environment.apiUrl}${this.url}/${company.companyId}`
      );
  }
}
