import { MyTeamsPage } from './my-teams.page';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

// declare routes for my-temas and its sub navigations
const routes: Routes = [{
    path: '',
    component: MyTeamsPage
}];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [MyTeamsPage]
})
export class MyTeamsModule { }
