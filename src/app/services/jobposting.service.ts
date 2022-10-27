import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidate } from '../models/candidate';
import { Post } from '../types';

@Injectable({
  providedIn: 'root',
})
export class JobPostingapiService {
  private urlEndpoint = '/jobposting';
  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Post> {
    const res = this.http.get<Post>(`${environment.apiURL}${this.urlEndpoint}`);

    return res;
  }

  public getShortlistedCandidates(id: Number): Observable<Candidate> {
    const res = this.http.get<Candidate>(
      `${environment.apiURL}${this.urlEndpoint}/${id}`
    );

    return res;
  }
}
