import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills, Skill } from '../types';

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

  public addSkill(jobSkillsTitle: Skill): Observable<Skill> {
    const res = this.http.post<Skill>(
      `${environment.apiURL}${this.urlEndpoint}`,
      {
        jobSkillsTitle: jobSkillsTitle,
      }
    );

    return res;
  }

  public updateSkill(skill: Skill): Observable<Skill> {
    const res = this.http.post<Skill>(
      `${environment.apiURL}${this.urlEndpoint}`,
      skill
    );

    return res;
  }

  public deleteSkill(jobSkillsId: any): Observable<Number> {
    const res = this.http.delete<Number>(
      `${environment.apiURL}${this.urlEndpoint}/${jobSkillsId}`
    );

    return res;
  }
}
