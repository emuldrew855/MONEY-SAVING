import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routes';

import { SharedService} from '../app/shared/shared.service';
import { AppComponent } from './app.component';
import { CalenderComponent } from './calender-view/calender-component';
import { EventAdderComponent } from '../app/event-adder/event-adder.component';
import { NavBarComponent } from '../app/nav-bar/nav-bar.component';
import { NewsComponent } from '../app/news-view/new-component';
import { AboutViewComponent } from '../app/about-view/about-view.component';

import 'flatpickr/dist/flatpickr.css';
import { FlatpickrModule } from 'angularx-flatpickr';
import {
  NgbDatepickerModule,
  NgbTimepickerModule
} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    AboutViewComponent,
    CalenderComponent,
    EventAdderComponent,
    NavBarComponent,
    NewsComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    NgbModalModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot()
  ],
  providers: [SharedService],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
