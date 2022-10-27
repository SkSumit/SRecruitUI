import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCandidateComponent } from './components/edit-candidate/edit-candidate.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
<<<<<<< HEAD
import { SelectedCandidatesComponent } from './components/selected-candidates/selected-candidates.component';
=======
import { JobpostingComponent } from './jobposting/jobposting.component';
>>>>>>> 20a5d187f37df7ec30adb0910e31ae678ebd40c5
import { RolesComponent } from './roles/roles.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', component: JobpostingComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'candidates', component: EditCandidateComponent },
  { path: 'companies', component: EditCompanyComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'selectedCandidates',component:SelectedCandidatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
