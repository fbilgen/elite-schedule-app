import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TeamsPage } from '../teams/teams.page';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.page.html',
  styleUrls: ['./tournaments.page.scss'],
})
export class TournamentsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  itemTapped() {
    this.navCtrl.navigateForward('team-home');
  }

}
