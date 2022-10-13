import { Component } from '@angular/core';
import { Candidate } from './models/candidate';
import { Company } from './models/company';
import { CandidateService } from './services/candidate.service';
import { CompanyService } from './services/company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SRecruit.UI';
  companies: Company[] = [];
  candidates: Candidate[] = [];

  constructor(private companyService:CompanyService,private candidateService:CandidateService){}

  ngOnInit():void{
    this.companyService
      .getCompany()
      .subscribe((result:Company[])=>(this.companies = result))
    this.candidateService
      .getCandidate()
      .subscribe((result:Candidate[])=>(this.candidates = result))
  }
  
}
