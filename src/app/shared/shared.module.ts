import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FirebaseService } from './firebase.service';
import { ChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from '../app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { GuardService } from '../shared/guard.service';
import {MatTableModule} from '@angular/material/table';

@NgModule
    ({
        declarations: [
        ],
        imports: [
            MatTableModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            ChartsModule,
            CommonModule,
            FormsModule,
            HttpModule,
            BrowserModule,
            BrowserAnimationsModule,
            CalendarModule.forRoot(),
            NgbModalModule.forRoot(),
            MatCardModule,
            MatButtonModule,
            AppRoutingModule
        ],
        exports: [
          MatTableModule,
          ReactiveFormsModule,
          MatFormFieldModule,
          MatInputModule,
          ChartsModule,
          CommonModule,
          FormsModule,
          HttpModule,
          BrowserModule,
          BrowserAnimationsModule,
          CalendarModule,
          NgbModalModule,
          MatCardModule,
          MatButtonModule,
          AppRoutingModule
                  ],
        providers: [FirebaseService, GuardService],
        bootstrap: []

    })

export class SharedModule {

}
