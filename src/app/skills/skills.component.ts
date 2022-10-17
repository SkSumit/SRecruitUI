import { Component, OnInit } from '@angular/core';
import { SkillsapiService } from '../services/skillsapi.service';
import { Skill } from '../types';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: any = [];

  deleteSkill = ({ jobSkillsId, jobSkillsTitle }: any) => {
    if (confirm(`Do you want to delete ${jobSkillsTitle} ?`)) {
      this.skillapiService.deleteSkill(jobSkillsId).subscribe((r) => {
        if (r === 200) {
          this.skills = this.skills.filter(
            (skill: Skill) => skill.jobSkillsId !== jobSkillsId
          );
        }
      });
    }
  };

  addSkill = (form: any) => {
    const { value } = form;
    this.skillapiService.addSkill(value.skillinput).subscribe((r) => {
      this.skills = [...this.skills, r];
    });
    form.resetForm();
  };

  // updateSkill = ()

  constructor(private skillapiService: SkillsapiService) {}

  ngOnInit(): void {
    this.skillapiService
      .getSkills()
      .subscribe((res: any) => (this.skills = res));
  }
}
