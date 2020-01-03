import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // initial load
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  // describe every root? navigation page in application
  { path: 'home', loadChildren: './my-teams/my-teams.module#MyTeamsModule' },
  { path: 'tournaments', loadChildren: './tournaments/tournaments.module#TournamentsPageModule' },
  { path: 'teams', loadChildren: './teams/teams.module#TeamsPageModule' },
  { path: 'team-detail/:id', loadChildren: './team-detail/team-detail.module#TeamDetailPageModule' },
  { path: 'game', loadChildren: './game/game.module#GamePageModule' }
];

// This modue is imported in app.module and it's responsible of routing. (No individual Module imports to app.module)
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
