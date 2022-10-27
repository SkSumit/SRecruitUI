import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import {SelectedCandidate} from '../models/selectedCandidate'

@Injectable({
  providedIn: 'root'
})
export class SelectedCandidateService {
  private url = '/Company';
  constructor(private http:HttpClient) { }

  public getSelectedCandidate(companyId:number):Observable<SelectedCandidate[]>{
    return this.http.get<SelectedCandidate[]>(`${environment.apiURL}${this.url}/${companyId}`)
  }
}
