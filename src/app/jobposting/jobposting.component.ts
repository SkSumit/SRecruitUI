import { Component, OnInit } from '@angular/core';
import { Candidate } from '../models/candidate';
import { JobPostingapiService } from '../services/jobposting.service';
import { Post } from '../types';
import { mapSkillsToOnePost } from './helper';

@Component({
  selector: 'app-jobposting',
  templateUrl: './jobposting.component.html',
  styleUrls: ['./jobposting.component.scss'],
})
export class JobpostingComponent implements OnInit {
  posts: Post[] = [];
  shortListedCandidates: Candidate[] | null = null;
  constructor(private jobPostingapiService: JobPostingapiService) {}

  getShorlistedCandidates = (id: number) => {
    this.jobPostingapiService
      .getShortlistedCandidates(id)
      .subscribe((res: any) => {
        this.shortListedCandidates = res;
      });
  };

  ngOnInit(): void {
    this.jobPostingapiService.getPosts().subscribe((res: any) => {
      this.posts = mapSkillsToOnePost(res);
    });
  }
}
