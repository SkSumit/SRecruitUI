import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  private url = '/Candidate';
  constructor(private http: HttpClient) {}

  public getCandidate(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${environment.apiURL}${this.url}`);
  }
  public updateCandidate(candidate: Candidate): Observable<Candidate> {
    return this.http.put<Candidate>(
      `${environment.apiURL}${this.url}/${candidate.candidateId}`,
      candidate
    );
  }
  public createCandidate(candidate: Candidate): Observable<Candidate[]> {
    return this.http.post<Candidate[]>(
      `${environment.apiURL}${this.url}`,
      candidate
    );
  }
  public deleteCandidate(c: Candidate): Observable<Candidate[]> {
    return this.http.delete<Candidate[]>(
      `${environment.apiURL}${this.url}/${c.candidateId}`
    );
  }
  public addCandidate(candidateId:Candidate):Observable<Candidate>{
    return this.http.post<Candidate>(
      `${environment.apiURL}${this.url}`,
      {
        candidateId:candidateId,
      }
    )
  }
}
