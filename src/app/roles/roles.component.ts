import { Component, OnInit } from '@angular/core';
import { RolesapiService } from '../services/rolesapi.services';
import { Role, Roles, Skill, Skills } from '../types';
import { SkillsapiService } from '../services/skillsapi.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  roles: any = [];
  skills: Skills = [];

  constructor(
    private rolesapiService: RolesapiService,
    private skillapiService: SkillsapiService
  ) {}

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
    const { roleinput, roleselect } = value;
    // const selectedSkill =
    // this.skills.find((skills) => skills.jobSkillsId === +roleselect)

    console.log(roleinput, +roleselect);

    const obj = {
      jobRoleId: 1,
      jobRoleTitle: roleinput,
      jobRoleSkill: +roleselect,
    };
    this.rolesapiService.addRole(obj).subscribe((r: any) => {
      this.roles = [...this.roles, r];
    });
    form.resetForm();
  };

  // updateSkill = ()

  ngOnInit(): void {
    this.rolesapiService.getRoles().subscribe((res: any) => (this.roles = res));
    this.skillapiService
      .getSkills()
      .subscribe((res: any) => (this.skills = res));
  }
}
