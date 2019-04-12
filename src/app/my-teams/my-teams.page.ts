import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TournamentsPage } from '../tournaments/tournaments.page';


@Component({
    selector: 'app-my-teams',
    templateUrl: 'my-teams.page.html'
})
export class MyTeamsPage {
    constructor( private nav: NavController) {
    }

    goToTournaments() {
        this.nav.navigateForward('tournaments');
    }
}
