import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private url = "Company";
  constructor(private http:HttpClient) { }

  public getCandidate(): Observable<Candidate[]>{
    console.log("Hello");
    // console.log(this.http.get<Company[]>('${environment.apiUrl}/${this.url}'));
    return this.http.get<Candidate[]>('https://localhost:7002/api/Candidate');
  }
}
