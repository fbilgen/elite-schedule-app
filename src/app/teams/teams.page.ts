import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  public teams = [
    { id: 1, name: 'HC Elite' },
    { id: 2, name: 'Team Takeover' },
    { id: 3, name: 'DC Thunder' }
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  viewDeatil(team) {
    this.navCtrl.navigateForward(`team-detail/${team.id}`);
  }
}
