import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCandidateComponent } from './components/edit-candidate/edit-candidate.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
import { SkillsComponent } from './skills/skills.component';

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
  exports: [RouterModule]
})
export class AppRoutingModule { }
