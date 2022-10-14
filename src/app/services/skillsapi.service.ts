import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../types';

@Injectable({
  providedIn: 'root',
})
export class SkillsapiService {
  private urlEndpoint = '/jobskills';
  constructor(private http: HttpClient) {}

  public getSkills(): Observable<Skills> {
    const res = this.http.get<Skills>(
      `${environment.apiURL}${this.urlEndpoint}`
    );
    return res;
  }

  public deleteSkill(jobSkillsId: any): void {
    console.log('Deleting from api...', jobSkillsId);
  }
}
