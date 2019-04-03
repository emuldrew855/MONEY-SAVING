import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../../firebase.config';
import { AppComponent } from './app.component';
import { CalendarModule } from 'angular-calendar';

import { CalenderComponent } from './calender-view/calender-component';
import { FirebaseService } from './shared/firebase.service';
import { SharedService} from '../app/shared/shared.service';
import { SharedModule } from './shared/shared.module';
import { EventAdderComponent } from '../app/event-adder/event-adder.component';
import { NavBarComponent } from '../app/nav-bar/nav-bar.component';

import 'flatpickr/dist/flatpickr.css';
import { FlatpickrModule } from 'angularx-flatpickr';
import {
  NgbDatepickerModule,
  NgbTimepickerModule
} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    EventAdderComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    NgbModalModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot()
  ],
  providers: [FirebaseService, SharedService],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
