import { Component, OnInit } from '@angular/core';
import { RolesapiService } from '../services/rolesapi.services';
import { Role, Roles } from '../types';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  roles: any = [];
  constructor(private rolesapiService: RolesapiService) {}

  deleteRole = ({ jobRoleId, jobRoleTitle }: any) => {
    if (confirm(`Do you want to delete ${jobRoleTitle} ?`)) {
      this.rolesapiService.deleteRole(jobRoleId).subscribe((r: any) => {
        if (r === 200) {
          this.roles = this.roles.filter(
            (role: Role) => role.jobRoleId !== jobRoleId
          );
        }
      });
    }
  };

  addRole = (form: any) => {
    const { value } = form;
    this.rolesapiService.addRole(value.roleinput).subscribe((r: any) => {
      this.roles = [...this.roles, r];
    });
    form.resetForm();
  };

  // updateSkill = ()

  ngOnInit(): void {
    this.rolesapiService.getRoles().subscribe((res: any) => (this.roles = res));
  }
}
