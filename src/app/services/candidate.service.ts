import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private url = "Candidate";
  constructor(private http:HttpClient) { }

  public getCandidate(): Observable<Candidate[]>{
    console.log("Hello");
    // console.log(this.http.get<Company[]>('${environment.apiUrl}/${this.url}'));
    return this.http.get<Candidate[]>(`${environment.apiUrl}${this.url}`);
  }
  public updateCandidate(candidate:Candidate): Observable<Candidate[]>{
    return this.http.put<Candidate[]>(
      `${environment.apiUrl}${this.url}`,
      candidate
      );
  }
  public createCandidate(candidate:Candidate): Observable<Candidate[]>{
    return this.http.post<Candidate[]>(
      `${environment.apiUrl}${this.url}`,
      candidate
      );
  }
  public deleteCandidate(candidate:Candidate): Observable<Candidate[]>{
    return this.http.delete<Candidate[]>(
      `${environment.apiUrl}${this.url}/${candidate.candidateId}`
      );
  }
}
