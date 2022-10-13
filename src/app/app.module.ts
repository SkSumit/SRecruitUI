import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';

const routes = [
  {
    path: 'skills',
    component: SkillsComponent,
  },
];

@NgModule({
  declarations: [AppComponent, SkillsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
