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
  companyToEdit?:Company;
  candidateToEdit?:Candidate;

  constructor(
    private companyService:CompanyService,
    private candidateService:CandidateService
    ){}

  ngOnInit():void{
    this.candidateService
      .getCandidate()
      .subscribe((result:Candidate[])=>(this.candidates = result))
    this.companyService
      .getCompany()
      .subscribe((result:Company[])=>(this.companies = result))
    
      
  }
  
  //For Company
  updateCompanyList(companies:Company[]){
    this.companies = companies;
  }

  initNewCompany(){
    this.companyToEdit = new Company();
  }

  editCompany(company:Company){
    this.companyToEdit = company;
  }

  //For Candidate
  updateCandidateList(candidates:Candidate[]){
    this.candidates = candidates;
  }
  initNewCandidate(){
    this.candidateToEdit = new Candidate();
  }
  editCandidate(candidate:Candidate){
    this.candidateToEdit = candidate
  }

}
