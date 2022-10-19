import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private url = 'api/Company';
  constructor(private http: HttpClient) {}

  public getCompany(): Observable<Company[]> {
    return this.http.get<Company[]>(`${environment.apiURL}${this.url}`);
  }
  public updateCompany(company: Company): Observable<Company[]> {
    return this.http.put<Company[]>(
      `${environment.apiURL}${this.url}`,
      company
    );
  }
  public createCompany(company: Company): Observable<Company[]> {
    return this.http.post<Company[]>(
      `${environment.apiURL}${this.url}`,
      company
    );
  }
  public deleteCompany(company: Company): Observable<Company[]> {
    return this.http.delete<Company[]>(
      `${environment.apiURL}${this.url}/${company.companyId}`
    );
  }
}
