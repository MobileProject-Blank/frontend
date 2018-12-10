import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventListComponent } from './event-list/event-list.component';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { WarnModalComponent } from './warn-modal/warn-modal.component';
<<<<<<< HEAD
import { EventsComponent } from './events/events.component';
import { NewComponent } from './new/new.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
=======
>>>>>>> 71f3b86cdd819bdf11f39a522cdf59db541c47ba

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    CalendarComponent,
    EventListComponent,
    CreateModalComponent,
<<<<<<< HEAD
    WarnModalComponent,
    EventsComponent,
    NewComponent,
    GuidelinesComponent
=======
    WarnModalComponent
>>>>>>> 71f3b86cdd819bdf11f39a522cdf59db541c47ba
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
