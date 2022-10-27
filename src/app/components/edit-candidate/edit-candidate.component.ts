import { formatCurrency } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Candidate } from 'src/app/models/candidate';
import { CandidateService } from 'src/app/services/candidate.service';


@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css']
})
export class EditCandidateComponent implements OnInit {
  candidate:any = [];
  candidates: Candidate[] = []; 
  candidateToEdit?:Candidate;
  //@Input() candidate?: Candidate;
  @Output() candidateUpdated = new EventEmitter<Candidate[]>();
  constructor(
    private candidateService:CandidateService,) {}

  ngOnInit():void{
    this.candidateService
      .getCandidate()
      .subscribe((res : any)=>(this.candidate = res));
  }

  // updateCandidate(candidate:Candidate){
  //   this.candidateService
  //     .updateCandidate(candidate)
  //     .subscribe((candidates:Candidate[])=>this.candidateUpdated.emit(candidates))
  //     console.log(this.candidates.length);
  // }
    

  deleteCandidate(candidate:Candidate){
    this.candidateService
      .deleteCandidate(candidate)
      .subscribe((candidates:Candidate[])=>this.candidateUpdated.emit(candidates))
  }

  createCandidate(candidate:any){
    console.log(candidate.value);
    this.candidateService
      .createCandidate(candidate.value)
      .subscribe((candidates:Candidate[])=>this.candidateUpdated.emit(candidates))
      candidate.resetForm();
  }

  addCandidate = (form:any)=>{
    const {value} = form;
    console.log(this.candidateToEdit);
    console.log(form.value);
    if(this.candidateToEdit){
      const res = (value.address == undefined) ? this.candidateToEdit.address:value.address;
      console.log(this.candidateToEdit.address);
      console.log(value.address);
      this.candidateService
      .updateCandidate({
        candidateId:this.candidateToEdit.candidateId,
        fullName:value.fullName == undefined ? this.candidateToEdit.fullName:value.fullName,
        phoneNumber:value.phoneNumber == undefined ? this.candidateToEdit.phoneNumber:value.phoneNumber,
        emailId:value.emailId == undefined ? this.candidateToEdit.emailId:value.emailId,
        address:res,
        preferredLocation:value.preferredLocation == undefined ? this.candidateToEdit.preferredLocation:value.preferredLocation,
        jobSkillTitle:value.jobSkillTitle == undefined ? this.candidateToEdit.jobSkillTitle:value.jobSkillTitle,
        yearOfExperience:value.yearOfExperience == undefined ? this.candidateToEdit.yearOfExperience:value.yearOfExperience
      })
      .subscribe((r)=>{
        this.candidate.find(
          (candidate:Candidate)=>candidate.candidateId === r.candidateId
        )
        this.candidate = this.candidate;
        console.log(this.candidate);
      });
    }else{
      this.createCandidate(form);
    }
  }

 
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
