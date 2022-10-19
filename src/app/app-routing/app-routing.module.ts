import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from '../skills/skills.component';
import { RouterModule } from '@angular/router';
import { EditCandidateComponent } from '../components/edit-candidate/edit-candidate.component';
import { EditCompanyComponent } from '../components/edit-company/edit-company.component';

const routes = [
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path:'candidate',
    component: EditCandidateComponent,
  },
  {
    path:'company',
    component:EditCompanyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
