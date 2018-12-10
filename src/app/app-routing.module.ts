import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { NewComponent } from './new/new.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'new', component: NewComponent },
  { path: 'guidelines', component: GuidelinesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
