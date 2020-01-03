import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage {

  public team: any;

  constructor(public activatedRoute: ActivatedRoute) {
     this.team = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.team);

   }
}


