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
  @Output() companyUpdated = new EventEmitter<Company[]>();

  constructor(
    private companyService:CompanyService,
    ) { }

  ngOnInit(): void {
    this.companyService
      .getCompany()
      .subscribe((result:any)=>(this.company = result))
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

  addCompany = (form:any) => {
    const { value } = form;
    if (this.companyToEdit) {
      this.companyService
        .updateCompany({
          companyId:this.companyToEdit.companyId,
          companyName:value.companyName == undefined ? this.companyToEdit.companyName:value.companyName,
          location:value.location == undefined?this.companyToEdit.location:value.location
        })
        .subscribe((r) => {
          this.company.find(
            (company:Company)=>company.companyId===r.companyId
            );
            this.company = this.company;
          });
     }else {
      this.createCompany(form);
    }
    form.resetForm();
  };
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
