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
  editingRole: Role | null = null;

  constructor(
    private rolesapiService: RolesapiService,
    private skillapiService: SkillsapiService
  ) {}

  deleteRole = ({ id, jobRoleTitle }: any) => {
    if (confirm(`Do you want to delete ${jobRoleTitle} ?`)) {
      this.rolesapiService.deleteRole(id).subscribe((r: any) => {
        if (r === 200) {
          this.roles = this.roles.filter((role: Role) => role.id !== id);
        }
      });
    }
  };

  addRole = (form: any) => {
    const { value } = form;
    const { roleidinput, roleselect, roletitleinput } = value;

    const obj = {
      id: this.editingRole?.id,
      jobRoleId: roleidinput ? roleidinput : this.editingRole?.jobRoleId,
      jobRoleTitle: roletitleinput
        ? roletitleinput
        : this.editingRole?.jobRoleTitle,
      jobRoleSkill: +roleselect,
    };
    if (this.editingRole) {
      this.rolesapiService.updateRole(obj).subscribe((r) => {
        const f = this.roles.findIndex((role: Role) => role.id === r.id);

        this.roles[f].jobRoleId = obj.jobRoleId;
        this.roles[f].jobRoleTitle = obj.jobRoleTitle;
        this.roles[f].jobRoleSkill = obj.jobRoleSkill;

        this.roles = this.roles;
      });
    } else {
      this.rolesapiService.addRole(obj).subscribe((r: any) => {
        this.roles = [...this.roles, r];
      });
    }
    form.resetForm();
    this.editingRole = null;
  };

  editRole = (role: Role) => {
    this.editingRole = role;
  };

  ngOnInit(): void {
    this.rolesapiService.getRoles().subscribe((res: any) => (this.roles = res));
    this.skillapiService
      .getSkills()
      .subscribe((res: any) => (this.skills = res));
  }
}
