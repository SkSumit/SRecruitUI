import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
import { FormsModule } from '@angular/forms';
import { EditCandidateComponent } from './components/edit-candidate/edit-candidate.component';




@NgModule({
  declarations: [
    AppComponent,
    EditCompanyComponent,
    EditCandidateComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
