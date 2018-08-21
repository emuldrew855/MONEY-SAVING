import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CalendarModule } from 'angular-calendar';
import { CalenderComponent } from './calender-view/calender-component';
import { DateTimePickerComponent } from './calender-view/date-time-picker/date-time-picker.component';
import { FirebaseService } from './shared/firebase.service';
import { SharedModule } from './shared/shared.module';
import {
  NgbDatepickerModule,
  NgbTimepickerModule
} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    DateTimePickerComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    NgbModalModule.forRoot(),
    NgbDatepickerModule.forRoot(),
    NgbTimepickerModule.forRoot(),
    CalendarModule.forRoot()
  ],
  providers: [FirebaseService],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
