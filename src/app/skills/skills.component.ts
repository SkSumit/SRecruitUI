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
  editingSkill: Skill | null = null;

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

    if (this.editingSkill) {
      this.skillapiService
        .updateSkill({
          jobSkillsId: this.editingSkill.jobSkillsId,
          jobSkillsTitle: value.skillinput,
        })
        .subscribe((r) => {
          this.skills.find(
            (skill: Skill) => skill.jobSkillsId === r.jobSkillsId
          ).jobSkillsTitle = r.jobSkillsTitle;

          this.skills = this.skills;
        });
    } else {
      this.skillapiService.addSkill(value.skillinput).subscribe((r) => {
        this.skills = [...this.skills, r];
      });
    }
    form.resetForm();
    this.editingSkill = null;
  };

  editSkill = (skill: Skill) => {
    this.editingSkill = skill;
  };

  constructor(private skillapiService: SkillsapiService) {}

  ngOnInit(): void {
    this.skillapiService
      .getSkills()
      .subscribe((res: any) => (this.skills = res));
  }
}
