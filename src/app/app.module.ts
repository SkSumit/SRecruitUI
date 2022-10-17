import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './skills/skills.component';
// import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutComponent } from './layout/layout.component';
// import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
import { FormsModule } from '@angular/forms';
import { EditCandidateComponent } from './components/edit-candidate/edit-candidate.component';
import { RolesComponent } from './roles/roles.component';




@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SidenavComponent,
    LayoutComponent,
    EditCompanyComponent,
    EditCandidateComponent,
    RolesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

