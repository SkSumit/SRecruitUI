import { Component, OnInit } from '@angular/core';
import { SelectedCandidate } from 'src/app/models/selectedCandidate';
import { SelectedCandidateService } from 'src/app/services/selected-candidate.service';

@Component({
  selector: 'app-selected-candidates',
  templateUrl: './selected-candidates.component.html',
  styleUrls: ['./selected-candidates.component.scss']
})
export class SelectedCandidatesComponent implements OnInit {

  selectedCandidate:any = [];
  constructor(private selectedCandidateService:SelectedCandidateService) { }

  ngOnInit(): void {
  }

  getSelectedCandidate(shortListId:number){
      var result = this.selectedCandidateService
                    .getSelectedCandidate(shortListId)
                    .subscribe((res : any)=>(this.selectedCandidate = res));
      console.log(result);
        
  }

}
