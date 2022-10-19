import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role, Roles } from '../types';

@Injectable({
  providedIn: 'root',
})
export class RolesapiService {
  private urlEndpoint = '/jobrole';
  constructor(private http: HttpClient) {}

  public getRoles(): Observable<Roles> {
    const res = this.http.get<Roles>(
      `${environment.apiURL}${this.urlEndpoint}`
    );

    return res;
  }

  public addRole(role: Role): Observable<Role> {
    const res = this.http.post<Role>(
      `${environment.apiURL}${this.urlEndpoint}`,
      {
        jobRoleId: role.jobRoleId,
        jobRoleTitle: role.jobRoleTitle,
        jobRoleSkill: role.jobRoleSkill,
      }
    );

    return res;
  }

  public updateRole(role: Role): Observable<Role> {
    const res = this.http.put<Role>(
      `${environment.apiURL}${this.urlEndpoint}/${role.id}`,
      role
    );

    return res;
  }

  public deleteRole(jobSkillsId: any): Observable<Number> {
    const res = this.http.delete<Number>(
      `${environment.apiURL}${this.urlEndpoint}/${jobSkillsId}`
    );

    return res;
  }
}
