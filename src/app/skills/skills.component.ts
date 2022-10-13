import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SkillsapiService } from '../services/skillsapi.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: any = [];

  constructor(private skillapiService: SkillsapiService) {}

  ngOnInit(): void {
    this.skillapiService
      .getSkills()
      .subscribe((res: any) => (this.skills = res));
  }
}
