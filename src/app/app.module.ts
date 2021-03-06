import { HomeViewComponent } from './home-view/home-view.component';
import { SignUpViewComponent } from './sign-up-view/sign-up-view.component';
import { SharedModule } from './shared/shared.module';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { SharedService} from '../app/shared/shared.service';
import { AppComponent } from './app.component';
import { CalenderComponent } from './calender-view/calender-component';
import { EventAdderComponent } from '../app/event-adder/event-adder.component';
import { NavBarComponent } from '../app/nav-bar/nav-bar.component';
import { NewsComponent } from '../app/news-view/new-component';
import { PieChartComponent } from '../app/pie-stats/pie-stats.component';
import { LoginComponent } from '../app/log-in-view/log-in.component';
import { ProfileViewComponent } from '../app/profile-view/profile-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule } from '@angular/material';
import { NavigationBarComponent } from './core/components/navigation-bar/navigation-bar.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { AgmCoreModule } from '@agm/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StatsCardComponent } from '../app/shared/stats-card/stats-card.component';
import { FooterComponent } from '../app/shared/footer/footer.component';


@NgModule({
  declarations: [
    FooterComponent,
    StatsCardComponent,
    AppComponent,
    HomeViewComponent,
    CalenderComponent,
    EventAdderComponent,
    NavBarComponent,
    NewsComponent,
    PieChartComponent,
    LoginComponent,
    SignUpViewComponent,
    ProfileViewComponent,
    NavigationBarComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    MDBBootstrapModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    SharedModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [SharedService],
  exports: [SharedModule],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
