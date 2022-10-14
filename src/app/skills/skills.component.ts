import { Component, OnInit } from '@angular/core';
import { SkillsapiService } from '../services/skillsapi.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: any = [];
  deleteSkill = ({ jobSkillsId, jobSkillsTitle }: any) => {
    if (confirm(`Do you want to delete ${jobSkillsTitle} ?`)) {
      this.skillapiService.deleteSkill(jobSkillsId);
    }
  };
  public href: string = '';
  constructor(private skillapiService: SkillsapiService) {}

  ngOnInit(): void {
    this.skillapiService
      .getSkills()
      .subscribe((res: any) => (this.skills = res));
  }
}
