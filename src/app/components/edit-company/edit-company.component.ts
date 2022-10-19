import { formatCurrency } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  company:any = [];
  companies: Company[] = [];
  companyToEdit?:Company;
  //@Input() company?: Company;
  @Output() companyUpdated = new EventEmitter<Company[]>();

  constructor(
    private companyService:CompanyService,
    ) { }

  ngOnInit(): void {
    this.companyService
      .getCompany()
      .subscribe((result:any)=>(this.company = result))
  }

  updateCompany(company:Company){
    this.companyService
      .updateCompany(company)
      .subscribe((companies: Company[]) => this.companyUpdated.emit(companies))
  }
  deleteCompany(company:Company){
    this.companyService
      .deleteCompany(company)
      .subscribe((companies: Company[]) => this.companyUpdated.emit(companies))
  
  }
  createCompany(company:any){
    console.log(company.value)
    this.companyService
      .createCompany(company.value)
      .subscribe((companies: Company[]) => this.companyUpdated.emit(companies));
      company.resetForm();
  
  }

  // addSkill = (company:any) => {
  //   //const { value } = com;

  //   if (this.companyToEdit) {
  //     // this.companyService
  //     //   .updateCompany(company)
  //     //   .subscribe((r) => {
  //     //     this.company.find(
  //     //       (company: Company) => skill.jobSkillsId === r.jobSkillsId
  //     //     ).jobSkillsTitle = r.jobSkillsTitle;

  //     //     this.skills = this.skills;
  //     //   });
  //     this.updateCompany(company)
  //   } else {
  //     // this.skillapiService.addSkill(value.skillinput).subscribe((r) => {
  //     //   this.skills = [...this.skills, r];
  //     // });
  //     this.createCompany(company);
  //   }
  //   company.resetForm();
  //   this.companyToEdit =  ;
  // };

  // createCompany = (form:any) => {
  //   const {value} = form;
  //   this.companyService
  //     .createCompany(value.company)
  //     .subscribe((r)=>{this.company = [...this.company,r];
  //     });
  //     form.resetForm();
  // };

  updateCompanyList(companies:Company[]){
    this.companies = companies;
  }

  initNewCompany(){
    this.companyToEdit = new Company();
  }

  editCompany(company:Company){
    this.companyToEdit = company;
  }
}
