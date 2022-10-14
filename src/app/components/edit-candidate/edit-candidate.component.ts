import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidate } from 'src/app/models/candidate';
import { CandidateService } from 'src/app/services/candidate.service';


@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css']
})
export class EditCandidateComponent implements OnInit {

  @Input() candidate?: Candidate;
  @Output() candidateUpdated = new EventEmitter<Candidate[]>();
  constructor(
    private candidateService:CandidateService,
    ) { }

  ngOnInit(): void {
  }

  updateCandidate(candidate:Candidate){
    this.candidateService
      .updateCandidate(candidate)
      .subscribe((candidates:Candidate[])=>this.candidateUpdated.emit(candidates))
  }
  deleteCandidate(candidate:Candidate){
    this.candidateService
      .deleteCandidate(candidate)
      .subscribe((candidates:Candidate[])=>this.candidateUpdated.emit(candidates))
  }
  createCandidate(candidate:Candidate){
    this.candidateService
      .createCandidate(candidate)
      .subscribe((candidates:Candidate[])=>this.candidateUpdated.emit(candidates))
  }


}
