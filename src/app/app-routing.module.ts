import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { EventsComponent } from './events/events.component';
import { NewComponent } from './new/new.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'new', component: NewComponent },
  { path: 'guidelines', component: GuidelinesComponent },
];
=======

const routes: Routes = [];
>>>>>>> 71f3b86cdd819bdf11f39a522cdf59db541c47ba

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
